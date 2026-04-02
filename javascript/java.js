function validateEmail(email) {
    var re = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
}
function Verification(event) {
    event.preventDefault(); 
    var Nom = document.getElementById('idNom').value.trim();
    var Email = document.getElementById('idEmail').value.trim();
    var prenom = document.getElementById('idPrenom').value.trim(); 
    var reponseElement = document.getElementById('reponse');
    reponseElement.textContent = "Bienvenue jeune apprenti, tu répondras maintenant au nom de Dark " + prenom + ". Découvre l'histoire des Sith et les Sith de l'univers des films Star Wars !";

    
    if (Nom === '') {
        alert('Ton nom est obligatoire');
        document.getElementById('idNom').style.backgroundColor = "Black";
        document.getElementById('idNom').style.color = "#FFF";

        
        return false;
    } else {
        document.getElementById('idNom').style.backgroundColor = "#9C6";
    }

    
    if (Email === '') {
        alert('Ton mail est recquis mon jeune apprentis');
        document.getElementById('idEmail').style.backgroundColor = "black";
        document.getElementById('idEmail').style.color = "#FFF";
        return false;
    } else if (!validateEmail(Email)) { 
        alert('Ce mail est invalide mon apprentis, recommence');
        document.getElementById('idEmail').style.backgroundColor = "black";
        document.getElementById('idEmail').style.color = "#FFF";
        return false;
    } else {
        document.getElementById('idEmail').style.backgroundColor = "#9C6";
    }

    return true;
}

function jouerSon() {
    var audio = new Audio('son/hello there.mp3');
    audio.play();
}

function jouerSon2() {
    var audio = new Audio('son/vador qui respire.mp3');
    audio.play();
}

function arreterTousLesSons() {
    var allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(function(audio) {
        audio.pause(); 
    });
}


