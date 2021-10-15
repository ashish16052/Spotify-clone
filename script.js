console.log("welcome to spotify");

let songIndex = 1;
let audioElement = new Audio("music/Havana.mp3");
let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar')
let timer = document.getElementById('timer');
let songName = Array.from(document.getElementsByClassName('song-item'));
let current = document.getElementById('current-song');
let time_song = document.getElementById('song-dur');
current.innerText = "Havana";

function pause() {
    var Image_Id = document.getElementById('play');
    if (Image_Id.src.match("https://img.icons8.com/ios/50/ffffff/circled-play--v1.png")) {
        Image_Id.src = "https://img.icons8.com/ios/50/ffffff/circled-pause.png";
        audioElement.play();
    }
    else {
        Image_Id.src = "https://img.icons8.com/ios/50/ffffff/circled-play--v1.png";
        audioElement.pause();
    }
}

function change_song(n) {
    if (n == 1) {
        audioElement.src = "music/Havana.mp3";
    }
    else if (n == 2) {
        audioElement.src = "music/Closer.mp3";
    }
    else if (n == 3) {
        audioElement.src = "music/Girls like you.mp3";
    }
    else if (n == 4) {
        audioElement.src = "music/See you again.mp3";
    }
    else if (n == 5) {
        audioElement.src = "music/Shape of you.mp3";
    }
    else if (n == 6) {
        audioElement.src = "music/Sunflower.mp3";
    }
    audioElement.currentTime = 0;
    audioElement.play();
}

function change_album(n) {
    album_Id = document.getElementById('album');
    if (n == 1) {
        album_Id.src = "images/Havana.png";
    }
    else if (n == 2) {
        album_Id.src = "images/Closer.png";
    }
    else if (n == 3) {
        album_Id.src = "images/Girls like you.png";
    }
    else if (n == 4) {
        album_Id.src = "images/See you again.png";
    }
    else if (n == 5) {
        album_Id.src = "images/Shape of you.png";
    }
    else if (n == 6) {
        album_Id.src = "images/Sunflower.png";
    }
}

function change_name(n) {
    current = document.getElementById('current-song');

    if (n == 1) {
        current.innerText = "Havana";
    }
    else if (n == 2) {
        current.innerText = "Closer";
    }
    else if (n == 3) {
        current.innerText = "Girls like you";
    }
    else if (n == 4) {
        current.innerText = "See you again";
    }
    else if (n == 5) {
        current.innerText = "Shape of you";
    }
    else if (n == 6) {
        current.innerText = "Sunflower";
    }
    Image_Id = document.getElementById('play');
    Image_Id.src = "https://img.icons8.com/ios/50/ffffff/circled-pause.png";
}

function change_time(n) {
    time_song = document.getElementById('song-dur');
    if (n == 1) {
        time_song.innerText = "03:38";
    }
    else if (n == 2) {
        time_song.innerText = "04:05";
    }
    else if (n == 3) {
        time_song.innerText = "04:30";
    }
    else if (n == 4) {
        time_song.innerText = "03:57";
    }
    else if (n == 5) {
        time_song.innerText = "04:35";
    }
    else if (n == 6) {
        time_song.innerText = "02:41";
    }
}


audioElement.addEventListener('timeupdate', () => {
    progress = parseFloat((audioElement.currentTime / audioElement.duration) * 10000);
    progressBar.value = progress;
    if ((audioElement.currentTime % 60).toFixed(0) >= 10)
        timer.innerText = "0" + (audioElement.currentTime / 60).toFixed(0) + ":" + (audioElement.currentTime % 60).toFixed(0);
    else
        timer.innerText = "0" + (audioElement.currentTime / 60).toFixed(0) + ":0" + (audioElement.currentTime % 60).toFixed(0);
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = ((progressBar.value * audioElement.duration) / 10000);
})

Array.from(document.getElementsByClassName("song-item")).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        console.log(Element.src);
        change_song(e.target.id);
        change_album(e.target.id);
        change_name(e.target.id);
        change_time(e.target.id);
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6)
        songIndex = 1;
    else
        songIndex++;
    change_song(songIndex);
    change_album(songIndex);
    change_name(songIndex);
    change_time(songIndex);
})

document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 1)
        songIndex = 6;
    else
        songIndex--;
    change_song(songIndex);
    change_album(songIndex);
    change_name(songIndex);
    change_time(songIndex);
})

function search() {
    searchSong = document.getElementById('search').value;
    if (searchSong == "Havana" || searchSong == "havana")
        songIndex = 1;
    else if (searchSong == "Closer" || searchSong == "closer")
        songIndex = 2;
    else if (searchSong == "Girls like you" || searchSong == "girls like you")
        songIndex = 3;
    else if (searchSong == "see you again" || searchSong == "See you again")
        songIndex = 4;
    else if (searchSong == "Shape of you" || searchSong == "shape of you")
        songIndex = 5;
    else if (searchSong == "Sunfower" || searchSong == "Sunflower")
        songIndex = 6;
    else
        alert("nor found");
    change_song(songIndex);
    change_album(songIndex);
    change_name(songIndex);
    change_time(songIndex);
}