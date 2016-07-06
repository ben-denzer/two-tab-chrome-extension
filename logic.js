let getAllUrls = (callback) => {
    chrome.tabs.query({}, (tabs) => {
        callback(tabs);
    });
};

let checkForTwoOpen = (arrayOfTabs, callback) => {
    let cms = /^https:\/\/cms\.apts247/;
    let openTabs = arrayOfTabs.filter(a => cms.test(a.url));
    callback(openTabs.length);
};

let sendError = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {warning: true});
    });
};

chrome.runtime.onMessage.addListener((req) => {
    if (req.loaded) {
        getAllUrls((allTabs) => {
            checkForTwoOpen(allTabs, (numberOfTabs) => {
                chrome.runtime.sendMessage({number: numberOfTabs});
                if (numberOfTabs > 1) {
                    sendError();
                }
            });
        });
    }
});
