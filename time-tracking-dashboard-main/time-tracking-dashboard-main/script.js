fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each object in the JSON array
    data.forEach((item, index) => {
      // Get the .data div inside the .selfcare div
      const selfcareDiv = document.querySelector('.selfcare');
      const dataDiv = selfcareDiv.querySelector('.selfcaredata');

      // Construct the HTML content for the div using the data from the JSON
      const htmlContent = `
        <h2>${item.title}</h2>
        <p>Daily: Current: ${item.timeframes.daily.current}, Previous: ${item.timeframes.daily.previous}</p>
        <p>Weekly: Current: ${item.timeframes.weekly.current}, Previous: ${item.timeframes.weekly.previous}</p>
        <p>Monthly: Current: ${item.timeframes.monthly.current}, Previous: ${item.timeframes.monthly.previous}</p>
      `;
      
      // Set the inner HTML of the .data div
      dataDiv.innerHTML = htmlContent;
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
