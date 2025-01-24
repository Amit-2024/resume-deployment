document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

const ws = new WebSocket('wss://7hv68471za.execute-api.ap-south-1.amazonaws.com/production/');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    document.getElementById('visitorCount').innerText = data.VisitorCount;
};

ws.onopen = () => console.log('WebSocket connection established.');
ws.onerror = (err) => console.error('WebSocket error:', err);
ws.onclose = () => console.log('WebSocket connection closed.');
