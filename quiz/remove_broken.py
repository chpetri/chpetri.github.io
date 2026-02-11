import json
import os

def remove_broken():
    json_path = 'c:/Users/Admin/Desktop/quizapp/quiz/questions.json'
    unresolved_path = 'c:/Users/Admin/Desktop/quizapp/quiz/unresolved.json'
    
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    ids_to_remove = set()
    if os.path.exists(unresolved_path):
        with open(unresolved_path, 'r', encoding='utf-8') as f:
            unresolved = json.load(f)
            ids_to_remove = {q['id'] for q in unresolved}
            
    # Also verify empty options in general
    valid_questions = []
    removed_count = 0
    
    for q in questions:
        if q['id'] in ids_to_remove:
            removed_count += 1
            continue
            
        # Double check for empty options
        if not q['options']:
            print(f"Removing {q['id']} due to empty options (not in unresolved list?)")
            removed_count += 1
            continue
            
        valid_questions.append(q)
            
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(valid_questions, f, indent=2)
        
    print(f"Removed {removed_count} broken/unresolvable questions.")
    print(f"Remaining questions: {len(valid_questions)}")

if __name__ == "__main__":
    remove_broken()
