# Contributing to VWEB.DEV

First off, thank you for considering contributing to VWEB.DEV! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - Why is this enhancement useful?
- **Possible implementation** (if you have ideas)

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
4. **Add tests** if applicable
5. **Run the test suite**: `npm run test`
6. **Format your code**: `npm run format`
7. **Lint your code**: `npm run lint:fix`
8. **Type check**: `npm run typecheck`
9. **Commit your changes** with clear commit messages
10. **Push to your fork** and submit a pull request

## Development Process

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/VWEB.DEV.git
cd VWEB.DEV

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your Firebase credentials

# Start development server
npm run dev
```

### Code Style

- We use **Prettier** for code formatting
- We use **ESLint** for code linting
- Follow **TypeScript** best practices
- Write **clear, descriptive variable names**
- Add **comments** for complex logic
- Keep functions **small and focused**

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new feature
fix: fix bug in component
docs: update documentation
style: format code
refactor: refactor code structure
test: add tests
chore: update dependencies
```

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage
- Test both happy paths and edge cases

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Pull Request Process

1. **Update documentation** if needed
2. **Update the README.md** with details of changes (if applicable)
3. **Ensure all checks pass** (tests, linting, type checking)
4. **Request review** from maintainers
5. **Address feedback** if any changes are requested

## Project Structure

```
src/
├── app/              # Next.js pages and layouts
├── components/       # React components
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── context/         # React context providers
```

## Questions?

Feel free to open an issue with the `question` label or reach out to the maintainers.

Thank you for contributing! 🚀
