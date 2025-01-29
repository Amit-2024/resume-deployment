document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

fetch('https://24u4tpkrs9.execute-api.us-east-1.amazonaws.com/dev/incrementVisitorCount', {
   method: 'POST',
})
.then(response => response.json())
.then(data => {
   console.log('Visitor count updated:', data.count);
   document.getElementById('visitorCount').innerText =  data.count;
})
.catch((error) => {
   console.error('Error:', error);
});
