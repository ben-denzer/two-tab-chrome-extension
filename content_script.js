chrome.runtime.sendMessage({loaded: true});

chrome.runtime.onMessage.addListener((req) => {
    if (req.warning) {
        document.getElementById('pjax_content').style.backgroundColor = 'red';
        alert('You already have the CMS open in Chrome. Close this tab!');
    }
})
