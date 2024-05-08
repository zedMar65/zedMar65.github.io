document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetElement').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButton1').addEventListener('click', function() {
    document.getElementById('targetElement1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButton2').addEventListener('click', function() {
    document.getElementById('targetElement2').scrollIntoView({ behavior: 'smooth' });
});
function copyToClipboard(element) {
    var textToCopy = element.innerText.trim();
    
    navigator.clipboard.writeText(textToCopy).then(function() {
        var tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.textContent = "Copied!";
        element.appendChild(tooltip);
        
        setTimeout(function() {
            tooltip.remove();
        }, 1000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
