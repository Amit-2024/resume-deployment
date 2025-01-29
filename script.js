document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});



async function fetchVisitorCount() {
    try {
        // Replace with your actual API Gateway endpoint
        const response = await fetch('https://24u4tpkrs9.execute-api.us-east-1.amazonaws.com');
        const data = await response.json();

        // Update the visitor count in the div
        document.getElementById('visitorCount').innerText = `Visitor Count: ${data.visitorCount}`;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').innerText = 'Error fetching visitor count';
    }
}

// Call the function when the page loads
fetchVisitorCount();

