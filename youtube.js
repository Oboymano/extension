document.getElementById("play").addEventListener('click', () => {
    
    function modifyDOM() {
        var playButton = document.querySelector('button.ytp-play-button.ytp-button')

        function clickPlay() {
            playButton.click()
        }

        clickPlay()

    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    });

});

document.getElementById("next").addEventListener('click', () => {
    
    function modifyDOM() {
        var nextButton = document.querySelector('.ytp-next-button.ytp-button')

        function clickNext() {
            nextButton.click()
        }

        clickNext()
    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    });

});

document.getElementById("check").addEventListener('click', () => {

    fuck=(string)=>{
        console.log(string)
    }

    modifyDOM=(id)=>{
        fuck('asd')
        var playButton = document.querySelector('button.ytp-play-button.ytp-button')
        if(playButton.length !== null) {
            localStorage.setItem("youtubeid",id)
            console.log(id)
        }
        console.log('fack')
        
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')('+activeTab.id+');'
        });
    });
    

    

    
});