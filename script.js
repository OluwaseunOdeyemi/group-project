window.addEventListener('DOMContentLoaded',() => {
    const popup = 
    document.getElementById('welcomePopup');
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);

});