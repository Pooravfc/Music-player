console.log("Welcome to Music Heaven");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

//giving the songName and the file directory of the song
let songs = [
    {songName: "Another Love - Tom Odell", filePath: "songs/1.mp3"},
    {songName: "Animals - Marron 5", filePath: "songs/2.mp3"},
    {songName: "Novacaine - Genrix", filePath: "songs/3.mp3"},
    {songName: "House of Memories - Panic! At The Disco", filePath: "songs/4.mp3"},
    {songName: "Blinding Lights - The Weekend", filePath: "songs/5.mp3"},
    {songName: "Eyes Blue Like The Atlantic - Sista Pool", filePath: "songs/6.mp3"},
    {songName: "Demons In My Soul - SCRX SOUL", filePath: "songs/7.mp3"},
    {songName: "Wake Up! - Moon Deity", filePath: "songs/8.mp3"},
    {songName: "Shoutout - Izzamusic", filePath: "songs/9.mp3"},
    {songName: "Death Bed - Powfu", filePath: "songs/10.mp3"},
    {songName: "Understand - BoyWithUke", filePath: "songs/11.mp3"},
    {songName: "Hope - XxxTentacion ", filePath: "songs/12.mp3"},
    {songName: "Your Love Is My Drug - 8 bit", filePath: "songs/13.mp3"},
    {songName: "Losing Interest  - XxxTentacion", filePath: "songs/14.mp3"},
    {songName: "Numb - XxxTentacion ", filePath: "songs/15.mp3"},
    {songName: "Dancing With Your Ghost - Sasha Alex Sloan", filePath: "songs/16.mp3"},
    {songName: "Love Is Gone - SLANDER ", filePath: "songs/17.mp3"},
    {songName: "Water Fountain - Alec Benjamin", filePath: "songs/18.mp3"},
    {songName: "This one Is for You - Yung City", filePath: "songs/19.mp3"},
    {songName: "Riptide - Vance joy ", filePath: "songs/20.mp3"},
    {songName: "Love Nwantiti - Clay Remix ft Joeboy", filePath: "songs/21.mp3"},
    {songName: "Arcade - Duncan Laurence", filePath: "songs/22.mp3"},
    {songName: "Future life is Good - Drake", filePath: "songs/23.mp3"},
    {songName: "Heat Waves - Glass Animals", filePath: "songs/24.mp3"},
    {songName: "Call me by Your Name - Lil Nas x-MONTERO", filePath: "songs/26.mp3"},
    {songName: "Astronaut in the Ocean - Masked Wolf", filePath: "songs/27.mp3"},
    {songName: "Say Jumbo - Mohombi", filePath: "songs/28.mp3"},
    {songName: "Rich Boy - Payton", filePath: "songs/29.mp3"},
    {songName: "Moonlight - Kali Uchis", filePath: "songs/25.mp3"},
    {songName: "No Lie - Dua Lipa", filePath: "songs/30.mp3"},
    {songName: "Tip Tip Bharsa Paani", filePath: "songs/31.mp3"},
    {songName: "Achha To Hum Chalte Hai - Kishor Kumar,Lata Mangeshkar", filePath: "songs/32.mp3"},
    {songName: "Ajib Dastan Hai Yeh", filePath: "songs/33.mp3"},
    {songName: "Dil Jhoom - Arjit Singh", filePath: "songs/34.mp3"},
    {songName: "Heeriye - Arjit Singh ", filePath: "songs/35.mp3"},
    {songName: "JALSA 2.0", filePath: "songs/36.mp3"},
    {songName: "Mere Sapno Ki Rani ", filePath: "songs/37.mp3"},
    {songName: "Tere Vaste", filePath: "songs/38.mp3"},
    {songName: "Vande Mataram - A.R. Rahman ", filePath: "songs/39.mp3"},
    {songName: "Zihaal-E-Miskin - Javed Moshin", filePath: "songs/40.mp3"},
    {songName: "Ram Siya Ram", filePath: "songs/41.mp3"},
    {songName: "Babam Bam Bhole", filePath: "songs/42.mp3"},
    {songName: "Aasman ko Chukkar Dheakha", filePath: "songs/43.mp3"},
    {songName: "Bharat ka Baccha Baccha Jai Shree Ram Bolega", filePath: "songs/44.mp3"},
    {songName: "Aathma Raama", filePath: "songs/45.mp3"},
    {songName: "Itni Sakti Hume Dena Data", filePath: "songs/46.mp3"},
    {songName: "Shri Krishna Govind Hare Murari", filePath: "songs/47.mp3"},
    {songName: "Mere Ghar Ram Aaye Hai", filePath: "songs/48.mp3"},
    {songName: "O My Friend Ganesha", filePath: "songs/49.mp3"},
    {songName: "Har Har Shambhu", filePath: "songs/50.mp3"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})



myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

/*js for next song via the seekbar*/
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=49){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');          //it will remove the play symbol in the seekbar
    masterPlay.classList.add('fa-pause-circle');            //it will add the pause symbol in the seekbar

})

/*js for previous song via the seekbar*/
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');              //it will remove the play symbol in the seekbar
    masterPlay.classList.add('fa-pause-circle');                //it will add the pause symbol in the seekbar
})



/*js for Slideshow*/
let sliderImages = document.querySelectorAll(".slide"),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right"),
	current = 0;

// Clear all images
function reset() {
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
}

// Initial slide
function startSlide() {
	reset();
	sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = "block";
	current--;
}

// Show next
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = "block";
	current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});

startSlide();
