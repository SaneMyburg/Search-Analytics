document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    console.log(searchBox);
    if (searchBox) {
      searchBox.addEventListener('input', (event) => {
        const query = searchBox.value.trim();
  
        // Check if the query ends with a question mark
        if (query.endsWith('?') && query.length >= 5) {
          console.log('Submit on input:', query);
          submitSearch(query);
        }
      });
  
      searchBox.addEventListener('keydown', (event) => {
        const query = searchBox.value.trim();
  
        // Check if the Enter key is pressed
        if (event.key === 'Enter' && query.length >= 5) {
          console.log('Submit on Enter:', query);
          submitSearch(query);
        }
      });
    }
  
    const submitSearch = (query) => {
      console.log('Submitting search:', query);
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
        },
        body: JSON.stringify({ query }),
      })
      .then(response => response.json())
      .then(data => {
      
        console.log('Search results:', data.results);
      })
      .catch(error => console.error('Error:', error));
    };
  });
  