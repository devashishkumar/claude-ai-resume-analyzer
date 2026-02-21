# Claude AI Resume Analyzer

An interactive Node.js console application that leverages **Claude 3.5 Sonnet** to provide career coaching insights.  
It analyzes your resume and a job description, then answers your questions with actionable suggestions for improvement.

---

## 🚀 Features
- **Resume + Job Description Context**: Loads both files from the `docs` folder.
- **Interactive CLI Loop**: Ask multiple questions in one session until you type `exit`.
- **AI-Powered Suggestions**: Uses Claude AI (`claude-3-5-sonnet-20241022`) for tailored career coaching.
- **Environment Config**: Secure API key management with `.env`.
- **Extensible Scripts**: Includes `start`, `build-index`, and `ask` modes for different workflows.

---

## 📂 Project Structure
```
├── docs/
│   ├── resume.docx
│   └── job_description.txt
├── resume-analyzer.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cloude-ai-resume-analyzer.git
   cd cloude-ai-resume-analyzer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the project root:

    ```bash
    ANTHROPIC_API_KEY=your_api_key_here
    ```
4. Start Application

    ```bash
    npm start
    ```

### === AI Resume + Career Coach ===
Files loaded from docs folder: resume.docx, job_description.txt
Type your questions (e.g., 'How can I improve for a software engineer role?').
Type 'exit' to quit.

> How can I improve for a software engineer role?

### === Claude's Suggestions ===
- Add AWS and Kubernetes experience
- Tailor bullet points to highlight cloud projects
- Emphasize CI/CD pipeline contributions

### 🛠️ Technical Notes
File Formats:

Resume can be .docx or .pdf. Currently, the script reads raw text.

For .docx parsing, consider using docx-parser

For .pdf parsing, use pdf-parse.

### Model Selection:
```bash
Default: claude-3-5-sonnet-20241022 (balanced speed + quality).
```

Alternative: `claude-3-5-haiku-20241022` (faster, cheaper).

You can switch models by editing the model field in resume-analyzer.js.

## 🔧 Troubleshooting
### API Key Errors:
**Solution**: Ensure .env contains a valid ANTHROPIC_API_KEY.

### File Not Found:
**Solution**: Verify docs/resume.docx and docs/job_description.txt exist.
Paths are relative to the project root.

### Encoding Issues:
**Solution**: If resume text looks garbled, use a parser library instead of fs.readFileSync.


## Note

The documents provided in the docs folder (resume.docx and job_description.txt) contain placeholder content. They are intended for educational purpose only.