const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  let html = markdownInput.value;

  // Headings
  html = html.replace(/^\s*(#{1,3}) (.+)$/gm, (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text}</h${level}>`;
  });

  // Images
  html = html.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links
  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold
  html = html.replace(
    /\*\*(.+?)\*\*|__(.+?)__/g,
    (match, asteriskText, underscoreText) => {
      return `<strong>${asteriskText || underscoreText}</strong>`;
    }
  );

  // Italic
  html = html.replace(
    /\*(.+?)\*|_(.+?)_/g,
    (match, asteriskText, underscoreText) => {
      return `<em>${asteriskText || underscoreText}</em>`;
    }
  );

  // Blockquotes
  html = html.replace(
    /^\s*> (.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  return html;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});