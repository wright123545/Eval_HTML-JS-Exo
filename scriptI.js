
let title = document.getElementById("sigma"); 
let body = document.body;
let divs = document.querySelectorAll("div");
title.addEventListener("click", function() {
    body.classList.toggle("lightmode")
    divs.classList.toggle("lightmode")
    console.log("élément cliqué");
});




let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('envoi du formulaire')
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email')

    if(email.value == ''){
        console.log("invalide")
        email.classList.remove('success')
        email.classList.add('invalide')
    } else {
        console.log('valide')
        email.classList.remove('invalide')
        email.classList.add('success')
    }

})

form.addEventListener('submit', function(event) { 
    event.preventDefault();
    let pseudo = document.querySelector("#pseudo");

    if (pseudo.value.length < 6) { 
        console.log("pseudo invalide");
        pseudo.classList.remove("success");
        pseudo.classList.add("invalide");
    } else { 
        console.log("Pseudo valide");
        pseudo.classList.remove("invalide");
        pseudo.classList.add("success");
    }
});
form.addEventListener('submit', function(event) { 
    event.preventDefault();
    let mdp1 = document.querySelector("#password");

    if (mdp1.value.length < 8) { 
        console.log("mdp invalide");
        password.classList.remove("success");
        password.classList.add("invalide");
    } else { 
        console.log("mdp valide");
        password.classList.remove("invalide");
        password.classList.add("success");
    }
});

form.addEventListener('submit', function(event) { 
    event.preventDefault();
    let mdp2 = document.querySelector("#password2");
    let mdp1 = document.querySelector("#password");
    if (mdp1.value == mdp2) { 
        console.log("mdp valide");
        password2.classList.remove("invalide");
        password2.classList.add("success");
    } else { 
        console.log("la verification du mdp n'est pas valide");
        password2.classList.remove("success");
        password2.classList.add("invalide");
    }
});

form.addEventListener('submit', function(event) { 
    event.preventDefault();
    let check1 = document.querySelector("#checkbox");
    let check2 = document.querySelector("#checkbox2");
    let radiodiv = document.getElementById("radio")
    if (check1.checked || check2.checked) { 
        console.log("okay");
        radiodiv.classList.add("success")
        radiodiv.classList.remove("invalide")
    } else { 
        console.log("wrong");
        radiodiv.classList.add("invalide")
        radiodiv.classList.remove("success")
    }
});


