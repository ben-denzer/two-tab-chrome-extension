window.onload = () => {
    chrome.runtime.sendMessage({loaded: true});
}

chrome.runtime.onMessage.addListener((req) => {
    if (req.warning) {
        document.body.style.backgroundColor = 'red';
        alert('You already have the CMS open in Chrome. Close this tab!');
    }
})
