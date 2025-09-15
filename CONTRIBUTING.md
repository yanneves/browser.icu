# Browser.icu Contribution Guide

## Introduction

Welcome to the [Browser.icu](https://browser.icu/) contribution guide. This monorepo contains front-end apps using [Svelte/SvelteKit](https://svelte.dev/) and [TailwindCSS](https://tailwindcss.com/).

---

## Getting started

Prerequisite knowledge:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [npm](https://docs.npmjs.com/)
- [Svelte/SvelteKit](https://svelte.dev/), HTML, CSS, [TailwindCSS](https://tailwindcss.com/)
- Basic LLM knowledge

## How to contribute

- Bug reports - Please consider opening a pull request. This enables us to act quickly if a feature requires fixing.
- Feature suggestions - Browser is constantly evolving. Feature suggestions, along with many others, are what keeps this projnect moving in the right direction. Contributions must be made with the intention of improving this product for everyone.
- Documentation - Typos, clarifications or missing/new documentation for certain steps or parts of Browser.icu which you find necessary for this product. This helps Browser.icu and its many users to get up and running much quicker in the future.

# Branching & Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to maintain consistency and clarity in our git history.

---

## Branch Naming

Branches should use a prefix matching the type of work:

- **`feat/<name>`** — For developing a new feature or enhancement.
- **`fix/<name>`** — For bug fixes or addressing broken functionality.
- **`chore/<name>`** — For routine tasks that don’t add features or fix bugs (e.g., dependency updates, build configs).
- **`docs/<name>`** — For updating or creating documentation.
- **`refactor/<name>`** — For code refactoring that neither fixes a bug nor adds a feature.
- **`style/<name>`** — For stylistic changes (e.g., formatting, whitespace, missing semicolons).
- **`test/<name>`** — For adding or updating tests.
- **`perf/<name>`** — For performance improvements.

**Examples:**

- `feat/user-authentication`
- `fix/navbar-alignment`
- `chore/update-eslint-config`
- `docs/improve-readme`
- `refactor/session-manager`
- `style/code-formatting`
- `test/add-login-tests`
- `perf/query-optimization`

---

## Commit Messages

Commit messages must follow the **Conventional Commits** format:

```
<type>(<scope>): <message>
```

- **type** — One of:

  - `feat` → New feature
  - `fix` → Bug fix
  - `chore` → Maintenance tasks, tooling, configs
  - `docs` → Documentation updates
  - `refactor` → Code restructuring without feature/bug changes
  - `style` → Non-functional style/code format changes
  - `test` → Adding or updating tests
  - `perf` → Performance improvements

- **scope** — The app, package, or general area the change affects (e.g., `apps/<app_name>`).
- **message** — A short, imperative description of the change.

---

### Examples

#### Scoped commits (specific app in `browser.icu/apps/`):

- `feat(apps/chat): add typing indicator`
- `fix(apps/browser): resolve crash on startup`
- `chore(apps/persona): remove unused resources section`
- `refactor(apps/agent): simplify request handler`
- `style(apps/www): apply consistent heading sizes`
- `test(apps/chat): add unit tests for message parsing`
- `perf(apps/browser): improve tab rendering speed`

#### Unscoped commits (whole repository):

- `docs: improve contribution guidelines`
- `chore: update CI config`
- `style: apply prettier formatting to all files`

---

Merging to `main` is the goal. Contributions of any size and significance are highly appreciated! Please join our [official Discord community server](https://discord.gg/9R6TF23UNR) if you need further help before contributing.
