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

## TODO List

### Data Management

- [ ] Create a database/JSON file of politicians and their contact information
- [ ] Implement data versioning system for updates
- [ ] Add data validation and sanitization
- [ ] Create an automated system to keep politician data up-to-date

### Core Functionality

- [ ] Implement fuzzy matching for politician names (handle variations/misspellings)
- [ ] Add support for politicians' nicknames and alternate names
- [ ] Create hover card component for displaying contact information
- [ ] Implement caching system for better performance
- [ ] Add rate limiting for text scanning on large pages

### User Interface

- [ ] Design and implement hover card UI
- [ ] Create proper extension icons (16px, 48px, 128px)
- [ ] Add settings popup for user configuration
- [ ] Implement dark mode support
- [ ] Add loading indicators for data updates

### Contact Information Display

- [ ] Design contact information card layout
- [ ] Add social media links
- [ ] Include office locations and hours
- [ ] Implement click-to-copy functionality for contact details
- [ ] Add direct links to official websites

### Configuration & Settings

- [ ] Add user preferences storage
- [ ] Create options page for customization
- [ ] Implement blacklist/whitelist for websites
- [ ] Add ability to toggle specific politicians
- [ ] Create scanning frequency controls

### Performance & Optimization

- [ ] Optimize text scanning algorithm
- [ ] Implement background worker for heavy processing
- [ ] Add request batching for API calls
- [ ] Optimize memory usage for large pages
- [ ] Implement progressive scanning for long documents

### Browser Compatibility

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Edge
- [ ] Handle browser-specific API differences
- [ ] Create browser-specific documentation

### Security

- [ ] Implement CSP headers
- [ ] Add data encryption for stored information
- [ ] Implement secure update mechanism
- [ ] Add privacy policy
- [ ] Create security documentation

### Documentation

- [ ] Create API documentation
- [ ] Add JSDoc comments
- [ ] Create contribution guidelines
- [ ] Add development setup guide
- [ ] Create troubleshooting guide

### Testing

- [ ] Add end-to-end tests
- [ ] Create performance benchmarks
- [ ] Add browser-specific test suites
- [ ] Implement visual regression testing
- [ ] Add load testing for large pages

### Deployment

- [ ] Create build pipeline
- [ ] Set up continuous integration
- [ ] Prepare Chrome Web Store listing
- [ ] Prepare Firefox Add-ons listing
- [ ] Create update mechanism

## Next Steps

- Add actual politician names database
- Implement contact information display
- Add proper extension icons
- Enhance matching algorithm
- Add configuration options

## Note

Currently using placeholder data for testing. The politician names "John Doe" and "Jane Smith" are used as test cases.
