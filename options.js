let getId = (ID) => document.getElementById(ID);

// SHOW SELECTED PAGE OR DEFAULTS TO 'NONE'
chrome.storage.sync.get({targetPage: 'none'}, (res) => {
    getId('status').textContent = res.targetPage;
});

getId('submitURL').addEventListener('click', () => {
    let targetPage = getId('targetPageInput').value || null;
    chrome.storage.sync.set({targetPage: targetPage}, () => {
        getId('targetPageInput').value = '';
        getId('status').textContent = targetPage;
        getId('status').style.backgroundColor = 'lightGreen';
        setTimeout(() => {
            getId('status').style.backgroundColor = 'inherit';
        }, 2000);
    });
});
