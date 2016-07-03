window.onload = () => {
    chrome.runtime.sendMessage({loaded: true});
}

chrome.runtime.onMessage.addListener((req) => {
    if (req.warning) {
        document.body.style.backgroundColor = "blue";
        //console.log('req warning');
        //window.alert('You already have the CMS open in Chrome. Close this tab!');
    }
})
