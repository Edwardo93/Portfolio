window.onload = function(){
    song.pause()
}

let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlIcon")
let progressLabel = document.getElementById("progress-label")

song.onloadedmetadata = function(){
    progress.max = song.duration
    progress.value = song.currentTime
    progressLabel.innerHTML = song.duration
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")

    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}
console.log(song.duration)
// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500);
// }

song.addEventListener('play', function() {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
});
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")

}
console.log(song.value)