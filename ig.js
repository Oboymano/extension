var likePhoto = document.querySelectorAll('.zV_Nj')
var likeVideo = document.querySelectorAll('.vc0H2')
var sum = 0

function checkSum() {
    for (i = 0; i < likePhoto.length; i++) {
        sum += parseInt(likePhoto[i].text.substring(6).replace(',',''))
    }
    for (i = 0; i < likeVideo.length; i++) {
        sum += parseInt(likeVideo[i].text.substring(6).replace(',',''))
    }
    console.log('Liked : '+sum)

}

checkSum()
