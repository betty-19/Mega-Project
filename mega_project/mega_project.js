var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 0,
    centeredSlides: true,
   initialSlide:2,
     speed:500,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 270,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: -100,
  });


  const play = document.querySelector(".play"),
    previous = document.querySelector(".backward"),
    next= document.querySelector(".forward"),

    trackImage= document.querySelector(".track-image"),
    title = document.querySelector(".title"),
      artist = document.querySelector(".artist"),

      slider=document.querySelector(".duration-slider"),
      circle = document.querySelector(".music");
      let track = document.createElement("audio");
      let indexTrack=0;
      let songIsPlaying = false;

      play.addEventListener("click", justPlay);
      next.addEventListener("click", nextSong);
      previous.addEventListener("click" , previousSong)
     


      function loadTrack(indexTrack){
        track.src= trackList[indexTrack].path;
        trackImage.src= trackList[indexTrack].img;
        title.innerHTML= trackList[indexTrack].name;
        artist.innerHTML = trackList[indexTrack].singer;
        track.load();
      }

      loadTrack(indexTrack);




      function justPlay(){
        if (songIsPlaying == false){
          playSong();

        }
        else{
          pauseSong();
        }
      }
function playSong() {
    track.play();
    trackImage.classList.add("spin-animation");
    songIsPlaying = true;
    play.innerHTML = '<li style="padding:10px;margin-left:3px;font-size: 20px; position: absolute;color: #ffffff;border-radius: 50%;border: none;top: 0;left: 0;width: 30px;height: 30px;" class="fas fa-pause"></li>';
}

function pauseSong() {
    track.pause();
    trackImage.classList.remove("spin-animation");
    songIsPlaying = false;
    play.innerHTML = '<li style="padding:10px;margin-left:3px;font-size: 20px; position: absolute;color: #ffffff;border-radius: 50%;border: none;top: 0;left: 0;width: 30px;height: 30px;" class="fas fa-play"></li>';
}

      function nextSong(){
        if(indexTrack==trackList.length-1){
          indexTrack=0;
        }
        else{
          indexTrack+=1;
        }
        songIsPlaying=false;
        loadTrack(indexTrack);
        justPlay();

      }
      function previousSong(){
        songIsPlaying=false;
        if(indexTrack==0){
            indexTrack=trackList.length-1;
        }
        else{
          indexTrack-=1;
        }
        loadTrack(indexTrack);
        justPlay();
      }
   
  