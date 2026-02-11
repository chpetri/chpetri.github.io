import re
import json
import os
from collections import Counter

def parse_objectives(obj_text_path):
    """Parses objectives file to map sub-objectives (e.g., 1.1) to keywords."""
    objectives = {}
    current_objective = None
    
    with open(obj_text_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for line in lines:
        line = line.strip()
        # Stop parsing if we hit the Acronym List or end of objectives
        if "ACRONYM LIST" in line.upper() or "ACRONYM DEFINITION" in line.upper():
            break
            
        # Match lines like "1.1 Explain collaboration..." or "1.2 Compare and contrast..."
        match = re.match(r'^(\d\.\d)\s+(.*)', line)
        if match:
            current_objective = match.group(1)
            objectives[current_objective] = match.group(2)
        elif current_objective and line:
            # Add content lines to the current objective's text
            objectives[current_objective] += " " + line
            
    # Process text to create keyword lists
    objective_keywords = {}
    # Expanded stopwords list to reduce noise
    stopwords = {
        'the', 'and', 'or', 'a', 'an', 'to', 'of', 'in', 'for', 'with', 'on', 'is', 'are', 
        'explain', 'compare', 'contrast', 'given', 'scenario', 'analyze', 'summarize',
        'following', 'which', 'best', 'describe', 'tester', 'penetration', 'security',
        'perform', 'using', 'appropriate', 'tools', 'techniques', 'identifies', 'target',
        'output', 'report', 'results', 'data', 'system', 'network', 'comptia', 'exam',
        'copyright', 'reserved', 'inc', 'rights', 'version', 'objectives'
    }
    
    for code, text in objectives.items():
        words = re.findall(r'\w+', text.lower())
        keywords = [w for w in words if w not in stopwords and len(w) > 2 and not w.isdigit()]
        objective_keywords[code] = Counter(keywords)
        
    return objective_keywords

def categorize_question(question_text, objective_keywords):
    """Categorizes a question based on keyword overlap with objectives."""
    q_words = re.findall(r'\w+', question_text.lower())
    # Filter question words too
    stopwords = {'the', 'and', 'a', 'to', 'of', 'in', 'is', 'for', 'on', 'with', 'which', 'following', 'best', 'tester'}
    q_words = [w for w in q_words if w not in stopwords]
    q_counter = Counter(q_words)
    
    best_score = 0
    best_category = "General"
    
    for code, keywords in objective_keywords.items():
        score = 0
        for word, count in q_counter.items():
            if word in keywords:
                # TF-IDF style: if word is very common in this objective, it adds to score
                # We could also use Inverse Category Frequency, but let's stick to simple overlap for now
                score += count * 1 
        
        if score > best_score:
            best_score = score
            best_category = code
            
    return best_category

def extract_questions_from_text(file_path, list_name):
    """Parses questions from the extracted text file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by "NEW QUESTION:"
    raw_questions = re.split(r'NEW QUESTION:\s*\d+', content)
    questions = []
    
    # Skip preamble (index 0)
    for idx, split_text in enumerate(raw_questions[1:], 1):
        q_data = {
            "id": f"{list_name}-{idx}",
            "number": idx,
            "question": "",
            "options": {}, # Changed to dict for easier lookup "A": "..."
            "answer": "",
            "explanation": "",
            "category": ""
        }
        
        lines = split_text.strip().split('\n')
        
        state = "QUESTION" 
        question_lines = []
        options_list = [] # Temporary list
        explanation_lines = []
        current_option = ""
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Detect Answer Start
            if line.startswith("Answer:") or "SHOW ANSWER" in line:
                if current_option:
                    options_list.append(current_option)
                    current_option = ""
                state = "ANSWER"
                
                # Check for explicit answer letter
                match = re.search(r'Answer:\s*([A-E])', line)
                if match:
                    q_data['answer'] = match.group(1)
                
                if "See explanation" in line or "SHOW ANSWER" in line:
                    state = "EXPLANATION"
                continue
                
            if line.startswith("Explanation:") or line.startswith("Determine:"):
                 if current_option:
                    options_list.append(current_option)
                    current_option = ""
                 state = "EXPLANATION"
                 continue

            if state == "QUESTION":
                # Option detection start
                if re.match(r'^[A-E]\.\s', line):
                    state = "OPTIONS"
                    current_option = line
                else:
                    question_lines.append(line)
            
            elif state == "OPTIONS":
                if re.match(r'^[A-E]\.\s', line):
                    if current_option:
                        options_list.append(current_option)
                    current_option = line
                elif line.startswith("Answer:") or "SHOW ANSWER" in line:
                     if current_option:
                        options_list.append(current_option)
                        current_option = ""
                     state = "ANSWER"
                     if "See explanation" in line or "SHOW ANSWER" in line:
                        state = "EXPLANATION"
                else:
                    current_option += " " + line
            
            elif state == "ANSWER" or state == "EXPLANATION":
                explanation_lines.append(line)

        # Final cleanup
        if current_option:
            options_list.append(current_option)

        q_data['question'] = " ".join(question_lines).strip()
        if not q_data['question']:
             q_data['question'] = "[Question text missing from source PDF extract]"

        # Format options as dict
        q_data['options'] = {}
        for opt in options_list:
            match = re.match(r'^([A-E])\.\s*(.*)', opt)
            if match:
                q_data['options'][match.group(1)] = match.group(2)
            else:
                 # fallback for badly formatted options
                 pass

        q_data['explanation'] = "\n".join(explanation_lines).strip()
        
        # Enhanced Answer Extraction from Explanation
        if not q_data['answer']:
            expl_text = q_data['explanation']
            # Pattern 1: "Option A", "Option A:", "(Option A)"
            match = re.search(r'(?:Option|Matches option|Correct Answer)\s*[:\-]?\s*\(?([A-E])\)?', expl_text, re.IGNORECASE)
            if match:
                q_data['answer'] = match.group(1).upper()
            
            # Pattern 2: "A. " at start of explanation line
            if not q_data['answer']:
                 match = re.search(r'^\s*([A-E])\.\s', expl_text, re.MULTILINE)
                 if match:
                      q_data['answer'] = match.group(1).upper()

        questions.append(q_data)
        
    return questions

def main():
    base_dir = "c:/Users/Admin/Desktop/quizapp"
    obj_path = os.path.join(base_dir, "objectives.txt")
    q103_path = os.path.join(base_dir, "q103.txt")
    q113_path = os.path.join(base_dir, "q113.txt")
    output_path = os.path.join(base_dir, "questions.json")
    
    print("Parsing objectives...")
    objectives_map = parse_objectives(obj_path)
    # Debug print
    for k, v in objectives_map.items():
        print(f"Objective {k}: {len(v)} keyword occurrences")

    all_questions = []
    
    print("Extracting Q103...")
    all_questions.extend(extract_questions_from_text(q103_path, "q103"))
    
    print("Extracting Q113...")
    all_questions.extend(extract_questions_from_text(q113_path, "q113"))
    
    print("Categorizing questions...")
    for q in all_questions:
        # Include question text, options, and explanation in categorization context
        # Explanation often contains key terms about the technology
        full_text = f"{q['question']} {' '.join(q['options'].values())} {q['explanation']}"
        category = categorize_question(full_text, objectives_map)
        q['category'] = category
        
    print(f"Saving {len(all_questions)} questions to {output_path}...")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, indent=2)
    print("Done.")

if __name__ == "__main__":
    main()
