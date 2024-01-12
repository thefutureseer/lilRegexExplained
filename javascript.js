// Fetch the content of the Markdown file
fetch('README.md')
    .then(response => response.text())
    .then(markdown => {
        // Convert Markdown to HTML using marked
        document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
    });
