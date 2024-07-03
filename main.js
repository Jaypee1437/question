// script.js

document.addEventListener('DOMContentLoaded', function() {
    const customConfirm = document.getElementById('customConfirm');
    const message = document.getElementById('message');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Function to show the custom confirm dialog
    function showCustomConfirm() {
        customConfirm.style.display = 'flex';
    }

    // Event listeners for the buttons
    yesBtn.addEventListener('click', function() {
        message.textContent = 'I love you too';
        message.className = 'message love-message';
        message.style.display = 'block';
        customConfirm.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        message.textContent = 'Edi wow';
        message.className = 'message no-love-message';
        message.style.display = 'block';
        customConfirm.style.display = 'none';
    });

    // Show the custom confirm dialog when the page loads
    showCustomConfirm();
});