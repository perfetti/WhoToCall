# Who To Call - Browser Extension

This browser extension highlights politicians' names on web pages and displays their contact information on hover.

## Development Setup

1. **Chrome/Edge Installation:**

   - Open Chrome/Edge and navigate to `chrome://extensions` or `edge://extensions`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select this directory
   - Note: You can temporarily proceed without icons during development

2. **Firefox Installation:**
   - Open Firefox and navigate to `about:debugging`
   - Click "This Firefox" on the left sidebar
   - Click "Load Temporary Add-on"
   - Select any file in this directory (e.g., manifest.json)

## Testing

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode (development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Coverage

The project maintains a minimum of 80% code coverage across:

- Branches
- Functions
- Lines
- Statements

### Test Suite

Tests cover the following functionality:

- Text scanning and highlighting
- Politician name detection
- DOM manipulation
- Style application
- Dynamic content handling
- MutationObserver functionality

## Current Features

- Scans web pages for politician names
- Highlights matched names
- Observes DOM changes for dynamic content
- Cross-browser support (Chrome, Firefox, Edge)
- Comprehensive test suite

## Next Steps

- Add actual politician names database
- Implement contact information display
- Add proper extension icons
- Enhance matching algorithm
- Add configuration options

## Note

Currently using placeholder data for testing. The politician names "John Doe" and "Jane Smith" are used as test cases.
