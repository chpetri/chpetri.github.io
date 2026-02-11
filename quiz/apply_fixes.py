import json
import os

def apply_fixes():
    json_path = 'c:/Users/Admin/Desktop/quizapp/quiz/questions.json'
    fixes_path = 'c:/Users/Admin/Desktop/quizapp/quiz/fixes.json'
    
    if not os.path.exists(fixes_path):
        print("fixes.json not found.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    with open(fixes_path, 'r', encoding='utf-8') as f:
        fixes = json.load(f)
        
    updated_count = 0
    
    # Create a map for faster lookup if needed, but iterating is fine
    q_map = {q['id']: q for q in questions}
    
    for qid, correct_answer in fixes.items():
        if qid in q_map:
            if q_map[qid]['answer'] != correct_answer:
                q_map[qid]['answer'] = correct_answer
                updated_count += 1
                # print(f"Updated {qid} with answer {correct_answer}")
        else:
            print(f"Warning: Question ID {qid} from fixes.json not found in questions.json")
            
    if updated_count > 0:
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(list(q_map.values()), f, indent=2)
        print(f"Successfully updated {updated_count} questions based on fixes.json")
    else:
        print("No updates were necessary (fixes might already be applied).")

if __name__ == "__main__":
    apply_fixes()
