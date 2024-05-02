console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/9.mp3');
let play = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "All Falls Down", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Sing me to Sleep", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
    {songName: "Alone pt.2", filePath: "songs/3.mp3", coverPath: "covers/3.png"},
    {songName: "Heading Home", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
    {songName: "On My Way", filePath: "songs/5.mp3", coverPath: "covers/5.png"},
    {songName: "Thank U,Next", filePath: "songs/6.mp3", coverPath: "covers/6.png"},
    {songName: "Banana", filePath: "songs/7.mp3", coverPath: "covers/7.png"},
    {songName: "Sin Pijama", filePath: "songs/8.mp3", coverPath: "covers/8.png"},
    {songName: "Attention", filePath: "songs/9.mp3", coverPath: "covers/9.png"},
    {songName: "Faded", filePath: "songs/10.mp3", coverPath: "covers/10.png"},
    {songName: "Girls Like You", filePath: "songs/11.mp3", coverPath: "covers/11.png"},
    {songName: "Yummy", filePath: "songs/12.mp3", coverPath: "covers/12.png"},
    {songName: "Harleys In Hawaii", filePath: "songs/13.mp3", coverPath: "covers/13.png"},
    {songName: "Happier", filePath: "songs/14.mp3", coverPath: "covers/14.png"},
    {songName: "Drivers License", filePath: "songs/15.mp3", coverPath: "covers/15.png"},
    {songName: "Good For U", filePath: "songs/16.mp3", coverPath: "covers/16.png"},
    {songName: "Night Changes", filePath: "songs/17.mp3", coverPath: "covers/17.png"},
    {songName: "Lost In Japan", filePath: "songs/18.mp3", coverPath: "covers/18.png"},
    {songName: "Senorita", filePath: "songs/19.mp3", coverPath: "covers/19.png"},
    {songName: "Cheap Trills", filePath: "songs/20.mp3", coverPath: "covers/20.png"},
    {songName: "Blinding Lights", filePath: "songs/21.mp3", coverPath: "covers/21.png"},
    {songName: "Dusk Till Dawn", filePath: "songs/22.mp3", coverPath: "covers/22.png"}
]
//audioElement.play();

//handle play/pause click
play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//listen to events 
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    })
})

// const makeAllPause = ()=>{
//     Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }

// Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPause();
//         audioElement.pause();
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         gif.style.opacity = 0;
//         play.classList.remove('fa-pause');
//         play.classList.add('fa-play');
//     })
// })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=22){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
})