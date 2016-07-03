window.onload = () => {
    chrome.runtime.sendMessage({loaded: true});
}

chrome.runtime.onMessage.addListener((req) => {
    if (req.number || req.number === 0) {
        document.getElementById('status').textContent = req.number;
    }
});
