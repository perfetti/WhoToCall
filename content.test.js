/**
 * @jest-environment jsdom
 */

describe("Content Script", () => {
  let originalContent;

  beforeEach(() => {
    // Setup a fresh DOM for each test
    document.body.innerHTML = `
            <div id="content">
                <p>This is a text about John Doe and his policies.</p>
                <p>Another paragraph about Jane Smith and her work.</p>
                <div>Some text without politicians.</div>
            </div>
        `;

    // Load the content script
    originalContent = require("./content.js");
  });

  afterEach(() => {
    // Clean up the DOM
    document.body.innerHTML = "";
    jest.resetModules();
  });

  test("highlights politician names in text content", () => {
    // Get all highlighted elements
    const highlights = document.querySelectorAll(".politician-highlight");

    // Check if correct number of politicians were highlighted
    expect(highlights.length).toBe(2);

    // Check if correct politicians were highlighted
    const highlightedText = Array.from(highlights).map((el) => el.textContent);
    expect(highlightedText).toContain("John Doe");
    expect(highlightedText).toContain("Jane Smith");
  });

  test("adds correct styling to highlighted politicians", () => {
    const highlight = document.querySelector(".politician-highlight");
    const computedStyle = window.getComputedStyle(highlight);

    // Check if styling was applied
    expect(computedStyle.backgroundColor).toBeTruthy();
    expect(computedStyle.cursor).toBe("pointer");
  });

  test("preserves original text content while highlighting", () => {
    const content = document.getElementById("content");

    // Check if original text is preserved
    expect(content.textContent).toContain(
      "This is a text about John Doe and his policies."
    );
    expect(content.textContent).toContain(
      "Another paragraph about Jane Smith and her work."
    );
  });

  test("does not highlight non-politician names", () => {
    const content = document.getElementById("content");
    const text = "Some text without politicians";

    // Check if non-politician text remains unhighlighted
    expect(content.textContent).toContain(text);
    expect(document.querySelectorAll(".politician-highlight")).not.toContain(
      text
    );
  });

  test("handles dynamic content through MutationObserver", (done) => {
    // Add new content dynamically
    const newElement = document.createElement("p");
    newElement.textContent = "New content about John Doe";
    document.body.appendChild(newElement);

    // Wait for MutationObserver to process
    setTimeout(() => {
      const highlights = document.querySelectorAll(".politician-highlight");
      const newHighlight = Array.from(highlights).find(
        (el) => el.closest("p") === newElement
      );

      expect(newHighlight).toBeTruthy();
      expect(newHighlight.textContent).toBe("John Doe");
      done();
    }, 0);
  });
});
