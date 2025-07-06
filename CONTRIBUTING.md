# Browser.icu Contribution Guide

## Introduction

Welcome to the Browser.icu contribution guide. This monorepo contains front-end apps using Svelte and Tailwind.

## Getting started

Prerequisite knowledge:

- JavaScript
- NodeJS (npm)
- Svelte/HTML/CSS/TailWindCSS
- Basic LLM knowledge

## How to contribute

- Bug reports - Please consider opening an issue pull request. This enables us to act quickly if a feature requires fixing.
- Feature suggestions - Browser is constantly evolving. Feature suggestions, along with many others, are what keeps this projnect moving in the right direction. Contributions must be made with the intention of improving this product for everyone.
- Documentation - Typos, clarifications or missing/new documentation for certain steps or parts of Browser.icu which you find necessary for this product. This helps Browser.icu and it's many users to get up and running much quicker in the future.

## Branching & Commits

We follow a consistent git branch prefix convention.

- `feature/<name>` - Used for developing a new feature or enhancement.
- `fix/<name>` - For bug fixes — addressing issues or broken functionality.
- `chore/<name>`- For routine tasks that don’t add features or fix bugs.
- `docs/<name>` - For updating or creating documentation.

> Example:
> <br>`fix/improved-comparison-section`

Similarly, we suggest following a naming convention for commits.

- `feature(apps/<app_name>):<message>`
- `fix(apps/<app_name>):<message>`
- `chore(apps/<app_name>):<message>`
- `docs(apps/<app_name>):<message>`

Where `<app_name>` can be any of the apps inside `browser.icu/apps/`.

or

- `<prefix>:<message>` - if it applies to the entire repository.

> Example:
> <br> > `chore(apps/persona): remove unused (Resources) section`
> <br> > `docs: improved documentation for contributions`

Merging to `main` is the goal. Contributions of any size and significance are highly appreciated! Please join our [official Discord community server](https://discord.gg/9R6TF23UNR) if you need further help before contributing.
