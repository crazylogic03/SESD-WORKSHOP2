# TypeScript CLI Tool

A custom Command Line Interface (CLI) built using:

- TypeScript
- Commander.js
- Axios
- Node.js

This CLI provides:
- Calculator commands
- Text utilities
- Random generator
- Date & time
- Multiple API integrations (GitHub, Weather, Quote, Country, Bitcoin, Joke, Advice)

---

# Setup Instructions (TypeScript)

## 1️⃣ Clone the Project

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

If needed:

```bash
npm install commander axios
npm install -D typescript @types/node
```

---

## 3️⃣ Compile TypeScript

```bash
npx tsc
```

This will generate JavaScript files inside your `dist/` (or configured) folder.

---

## 4️⃣ Link Globally (So You Can Use It Like a Real CLI)

```bash
npm link
```

Now your CLI command can be used globally.

---

# Running the CLI

If linked globally:

```bash
your-cli-name <command>
```

If not linked:

```bash
node dist/index.js <command>
```

---

# Available Commands

## Calculator

| Command | Description |
|----------|-------------|
| `greet <name>` | Greet user |
| `add <n1> <n2>` | Add numbers |
| `subtract <n1> <n2>` | Subtract numbers |
| `multiply <n1> <n2>` | Multiply numbers |
| `divi <n1> <n2>` | Divide numbers |

---

## 🔤 Text & Utility

| Command | Description |
|----------|-------------|
| `random <min> <max>` | Random number |
| `time` | Current date & time |
| `uppercase <text>` | Convert to uppercase |
| `lowercase <text>` | Convert to lowercase |

---

## 🌍 API Commands

| Command | Description |
|----------|-------------|
| `joke` | Random joke |
| `github <username>` | GitHub user info |
| `weather <city>` | Current weather |
| `quote` | Random quote |
| `advice` | Random advice |
| `country <name>` | Country information |
| `bitcoin` | Bitcoin price |

---

# 💻 Example Usage

### After `npm link`

```bash
your-cli-name greet Sai
your-cli-name add 10 20
your-cli-name github torvalds
your-cli-name weather Pune
your-cli-name quote
```

---

# 🛠 Project Structure (Typical)

```
project/
│
├
│--- cli.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙ Important Notes

- Always run `npx tsc` after making changes.
- Make sure `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
    "module": "CommonJS",
    "target": "ES2019",
    "esModuleInterop": true
  }
}
```

- Node.js v16+ recommended.
- Internet connection required for API commands.

---
