import json
import re
import os

def audit_questions(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    issues = []
    fixed_count = 0
    
    for q in questions:
        qid = q['id']
        ans = q['answer'].strip().upper()
        expl = q['explanation']
        options = q['options']
        
        # Issue 1: Empty Answer
        if not ans:
            found_ans = find_answer_enhanced(expl, options)
            if found_ans:
                q['answer'] = found_ans
                fixed_count += 1
                # print(f"Fixed missing answer for {qid}: Found {found_ans}")
            else:
                issues.append(f"[{qid}] Missing Answer. Expl start: {expl[:50]}...")
                continue
        
        # Issue 2: Answer not in Options
        if ans and ans not in options:
             issues.append(f"[{qid}] Answer '{ans}' not in options {list(options.keys())}")

        # Issue 3: Mismatch with Explanation
        found_in_expl = find_explicit_answer_char(expl)
        if found_in_expl and found_in_expl != ans:
             issues.append(f"[{qid}] Mismatch? Answer={ans}, but Expl says '{found_in_expl}' is correct.")

    print(f"Total Questions: {len(questions)}")
    print(f"Auto-fixed empty answers: {fixed_count}")
    print(f"Issues found: {len(issues)}")
    for i in issues:
        print(i)
    
    unresolved_data = []
    for q in questions:
        qid = q['id']
        ans = q['answer'].strip().upper()
        if not ans or (ans and ans not in q['options']):
             unresolved_data.append(q)
        # Check mismatches too?
        # For now focus on missing/invalid
        
    if unresolved_data:
        with open('unresolved.json', 'w', encoding='utf-8') as f:
            json.dump(unresolved_data, f, indent=2)
        print(f"Dumped {len(unresolved_data)} unresolved questions to unresolved.json")

    if fixed_count > 0:
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(questions, f, indent=2)
        print("Updated questions.json with fixes.")

def find_answer_enhanced(expl, options):
    if not expl: return None
    
    # 1. Explicit Character Match (strongest)
    char_match = find_explicit_answer_char(expl)
    if char_match and char_match in options:
        return char_match

    # 2. Text Matching: content of option appears in explanation explanation?
    # Heuristic: If explanation starts with describing one of the options.
    # We clean text to compare (lowercase, punctuation removed).
    clean_expl = re.sub(r'\W+', ' ', expl).lower()
    
    best_match = None
    best_match_len = 0
    
    for opt_char, opt_text in options.items():
        clean_opt = re.sub(r'\W+', ' ', opt_text).lower()
        if len(clean_opt) < 5: continue # Skip short options to avoid false positives
        
        # Check if option text is prevalent in explanation
        if clean_opt in clean_expl:
            # We prioritize explicit "Option X (Text) #: Correct" patterns which are handled by char match above.
            # This is a fallback. To be safe, look for "Text... is correct" or "Text... is the best"
            # actually, often the expl just starts with the answer text.
            # let's look for the option text at the VERY BEGINNING of the explanation
            if clean_expl.startswith(clean_opt):
                return opt_char
                
    return None

def find_explicit_answer_char(text):
    # Pattern: "Option A (Text) #: Correct" or "Option A is correct"
    match = re.search(r'Option\s*([A-E])\s*(?:\(.*\))?\s*[:#\-]?\s*(?:Correct|is correct)', text, re.IGNORECASE)
    if match:
        return match.group(1).upper()

    # Pattern: "Answer: A"
    match = re.search(r'(?:Answer|Ans)\s*[:\-]\s*([A-E])', text, re.IGNORECASE)
    if match:
        return match.group(1).upper()
        
    # Pattern: "(Option A)" - often used when discussing the correct one
    # But sometimes discusses wrong ones.
    # match = re.search(r'\(Option\s*([A-E])\)\s*#:\s*Correct', text, re.IGNORECASE)
    
    return None

if __name__ == "__main__":
    audit_questions('c:/Users/Admin/Desktop/quizapp/quiz/questions.json')
