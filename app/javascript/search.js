document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
  
    if (searchBox) {
      searchBox.addEventListener('keyup', (event) => {
        const query = searchBox.value.trim();
  
        // Check if the Enter key is pressed or if the query ends with a question mark
        if ((event.key === 'Enter' || query.endsWith('?')) && query.length >= 5) {
          console.log('Before fetch:', query);
          fetch('/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
            },
            body: JSON.stringify({ query: query }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Search results:', data.results);
          })
          .catch(error => console.error('Error:', error));
        }
      });
    }
  });
  