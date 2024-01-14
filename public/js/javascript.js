// Fetch the content of the Markdown file
function fetchReadme() {    
 fetch('README.md')
  .then(response => response.text())
   .then(markdown => {
        // Convert Markdown to HTML using marked
        document.getElementById('markdown-content').innerHTML = marked.parse(markdown);})
    .catch(error => console.error('Error fetching README.md:', error));
};

fetchReadme();

// Add content to README.md
function addText() {
    const userInput = prompt('Enter text to add to README.md:');
    if (userInput) {
        // Send the user input to the server
        fetch('https://lilregexexplained.onrender.com/addText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: userInput }),
        })
            .then(response => response.text())
            .then(result => {
                console.log(result)
             //after adding then show it on the page:
             fetchReadme();
            })
            .catch(error => console.error('Error:', error));
    }
}
