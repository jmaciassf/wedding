function musicOff(){
    //console.log("musicOff");
    
    var link = document.getElementById('musicOn'); link.style.display = 'none';
    var link2 = document.getElementById('musicOff'); link2.style.display = 'block';
    
    var audio = document.getElementById("musica");
    audio.pause(); // without this line it's not working although I have "muted" in HTML
}

function musicOn(){
    //console.log("musicOn");
    var link = document.getElementById('musicOff'); link.style.display = 'none';
    var link2 = document.getElementById('musicOn'); link2.style.display = 'block';
  
    var audio = document.getElementById("musica");    
    audio.play(); // without this line it's not working although I have "muted" in HTML
}


function closePopup(){
    var link = document.getElementById('modalBackground'); link.style.display = 'none';
    var link2 = document.getElementById('modalAlert'); link2.style.display = 'none';
    musicOn();
}




// Function to calculate time remaining
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

// Function to initialize and run the clock
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const endMessage = document.getElementById('countdown-end');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    // Add leading zeros for a consistent display
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      endMessage.innerHTML = "¡La boda ha comenzado!";
      jQuery("#clockdiv").hide();
    }
  }

  const timeinterval = setInterval(updateClock, 1000);
  updateClock(); // Run function once at first to avoid delay
}

// Set the target date and start the countdown
const deadline = 'February 15 2026 12:00:00 GMT-0600'; // Example deadline
initializeClock('clockdiv', deadline);
