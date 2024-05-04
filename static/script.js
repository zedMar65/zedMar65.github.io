document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetElement').scrollIntoView({ behavior: 'smooth' });
});