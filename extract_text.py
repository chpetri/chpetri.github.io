import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import pypdf
except ImportError:
    print("pypdf not found, installing...")
    install("pypdf")
    import pypdf

def extract_text(pdf_path, output_path):
    print(f"Extracting text from {pdf_path}...")
    try:
        reader = pypdf.PdfReader(pdf_path)
        with open(output_path, "w", encoding="utf-8") as f:
            for page in reader.pages:
                f.write(page.extract_text() + "\n\n")
        print(f"Text extracted to {output_path}")
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")

if __name__ == "__main__":
    files = [
        ("c:/Users/Admin/Desktop/quizapp/CompTIA PenTest+ PT0-003 Exam Objectives.pdf", "objectives.txt"),
        ("c:/Users/Admin/Desktop/quizapp/CompTIA.PT0-003.v2025-06-23.q103 (1).pdf", "q103.txt"),
        ("c:/Users/Admin/Desktop/quizapp/CompTIA.PT0-003.v2025-12-26.q113.pdf", "q113.txt")
    ]
    for pdf, txt in files:
        extract_text(pdf, txt)
