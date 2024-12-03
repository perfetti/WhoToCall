// Function to scan text nodes and wrap matched text
function scanAndHighlight(node, politicians) {
  if (node.nodeType === Node.TEXT_NODE) {
    let text = node.textContent;
    let modified = false;

    politicians.forEach((politician) => {
      // Case insensitive search
      const regex = new RegExp(`\\b${politician}\\b`, "gi");
      if (regex.test(text)) {
        const span = document.createElement("span");
        span.innerHTML = text.replace(
          regex,
          (match) =>
            `<span class="politician-highlight" data-politician="${match}">${match}</span>`
        );
        span.className = "politician-container";
        node.parentNode.replaceChild(span, node);
        modified = true;
      }
    });

    return modified;
  }

  // Skip certain elements
  if (node.nodeType === Node.ELEMENT_NODE) {
    if (
      node.classList.contains("politician-container") ||
      node.tagName === "SCRIPT" ||
      node.tagName === "STYLE"
    ) {
      return false;
    }

    // Recursively scan child nodes
    Array.from(node.childNodes).forEach((child) =>
      scanAndHighlight(child, politicians)
    );
  }

  return false;
}

// Add styles for highlighting
const style = document.createElement("style");
style.textContent = `
    .politician-highlight {
        background-color: #ffeb3b;
        cursor: pointer;
        padding: 2px;
        border-radius: 2px;
    }

    .politician-highlight:hover {
        background-color: #fdd835;
    }
`;
document.head.appendChild(style);

// Test array of politicians (to be replaced with actual data later)
const testPoliticians = ["John Doe", "Jane Smith"];

// Initial scan of the page
scanAndHighlight(document.body, testPoliticians);

// Observe DOM changes to handle dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      scanAndHighlight(node, testPoliticians);
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
