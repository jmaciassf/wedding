function musicOff(){
    console.log("musicOff");
    
    var link = document.getElementById('musicOn'); link.style.display = 'none';
    var link2 = document.getElementById('musicOff'); link2.style.display = 'block';
    
    var audio = document.getElementById("musica");
    audio.pause(); // without this line it's not working although I have "muted" in HTML
}

function musicOn(){
    console.log("musicOn");
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