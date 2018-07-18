chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')('+activeTab.id+');'
        });
    });
    
    function modifyDOM(id) {
        var playButton = document.querySelector('button.ytp-play-button.ytp-button')
        if(playButton.length !== 0) {
            localStorage.setItem("youtubeid",id)
            console.log(id)
        }
        console.log('fck')
    }
});