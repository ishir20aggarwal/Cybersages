// JavaScript to trigger the typewriter effect
const quoteSpan = document.querySelector('.quote');
const quoteLines = quoteSpan.innerHTML.split('<br>'); // Split text into lines using line breaks

let currentLineIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (currentLineIndex < quoteLines.length) {
    const currentLine = quoteLines[currentLineIndex];
    if (charIndex < currentLine.length) {
      quoteSpan.innerHTML = quoteLines
        .map((line, index) => (index < currentLineIndex ? line : index === currentLineIndex ? line.substring(0, charIndex + 1) : ''))
        .join('<br>');
      charIndex++;
      setTimeout(typeWriter, 45); // Adjust the typing speed here (milliseconds)
    } else {
      currentLineIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 100); // Add a small delay before moving to the next line
    }
  }
}

typeWriter();