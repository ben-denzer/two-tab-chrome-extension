window.onload = () => {
    chrome.runtime.sendMessage({loaded: true});
}

chrome.runtime.onMessage.addListener((req) => {
    chrome.storage.sync.get({targetPage: null}, (res) => {
        if (res.targetPage) {
            if (req.number || req.number === 0) {
                let status = document.getElementById('status');
                req.number <= 1 ?
                    req.number === 1 ?
                        status.textContent = '1 tab open to ' + res.targetPage :
                        status.textContent = 'No tabs open to ' + res.targetPage :
                    status.textContent = 'STOP - 2 OR MORE TABS OPEN TO ' + res.targetPage;
            }
        }
        else {
            status.textContent = 'No Page Selected, Go to "More Tools" -> "Extensions", then click on the "options" link of the Two Tabs Open extension'
        }
    });
});
