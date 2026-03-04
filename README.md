# PART-1: TypeScript CLI Tool

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

# PART-2: Modular CLI Engine Architecture

The project has been refactored to use a modular `CLI_Engine` pattern. Each command is now encapsulated into its own class, making the CLI highly scalable and easy to maintain.

## 📁 Updated Project Structure

```
project/
│
├── cli.ts (Main entry point)
├── cliEngine/
│   └── cli_engine.ts (Core engine that registers commands)
├── commands/ (All modular commands)
│   ├── addCommand.ts
│   ├── greetCommand.ts
│   ├── jokeCommand.ts
│   ├── subtractCommand.ts
│   ├── multiplyCommand.ts
│   ├── divideCommand.ts
│   ├── randomCommand.ts
│   ├── timeCommand.ts
│   ├── uppercaseCommand.ts
│   ├── quoteCommand.ts
│   ├── adviceCommand.ts
│   ├── catFactCommand.ts
│   └── ipCommand.ts
├── package.json
└── tsconfig.json
```

## 🚀 Engine Features
- **Object-Oriented Design**: Each command is an isolated class that encapsulates its arguments, logic, and Commander actions.
- **Easy to Extend**: To add new commands, simply create a new class in `commands/` and pass it to `engine.registerCommands([])` in `cli.ts`.
- **New Included APIs**:
  - `quote`: Fetches a random quote using the Quotable API.
  - `advice`: Fetches a random piece of advice.
  - `catfact`: Fetches a random cat fact using Catfact Ninja.
  - `ip`: Fetches your current public IP address via IPify.
