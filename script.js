// Get the form and input elements
const form = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Get the country name from the input field
  const country = searchBox.value.trim();

  // Check if the country name is not empty
  if (country) {
    // Fix the URL string
    const url = `https://restcountries.com/v3.1/name/${country}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        const countryData = data[0];
        console.log(countryData);

        // Display the country details
        displayCountryDetails(countryData);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      })
  } else {
    console.log('Please enter a country name');
  }
});

// Function to display country details
function displayCountryDetails(countryData) {
  // Create a container element to display the country details
  const countryDetailsContainer = document.createElement('div');
  countryDetailsContainer.innerHTML = `
    <h2>${countryData.name.common}</h2>
    <p>Capital: ${countryData.capital[0]}</p>
    <p>Population: ${countryData.population}</p>
    <p>Region: ${countryData.region}</p>
    <p>Sub-Region: ${countryData.subregion}</p>
  `;

  // Add CSS styles to center the container
  countryDetailsContainer.style.width = '50%';
  countryDetailsContainer.style.margin = '40px auto';
  countryDetailsContainer.style.padding = '20px';
  countryDetailsContainer.style.border = '1px solid #ddd';
  countryDetailsContainer.style.borderRadius = '10px';
  countryDetailsContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

  // Append the container element to the page
  document.body.appendChild(countryDetailsContainer);
}