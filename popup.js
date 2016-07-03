window.onload = () => {
    chrome.runtime.sendMessage({loaded: true});
}

chrome.runtime.onMessage.addListener((req) => {
    if (req.number || req.number === 0) {
        let status = document.getElementById('status');
        req.number <= 1 ?
            req.number === 1 ?
                status.textContent = '1 CMS tab open' :
                status.textContent = 'No CMS tabs open' :
            status.textContent = 'STOP - 2 OR MORE CMS TABS OPEN';
    }
});
