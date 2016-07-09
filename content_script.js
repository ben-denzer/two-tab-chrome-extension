chrome.runtime.sendMessage({loaded: true});

chrome.runtime.onMessage.addListener((req) => {
    if (req.warning) {
        Array.prototype.forEach.call(
            document.querySelectorAll('div'),
            (a) => {
                a.style.backgroundImage = 'none';
                a.style.backgroundColor = 'red';
            }
        );
        alert('You already have this page open in Chrome. Close this tab!');
    }
})
