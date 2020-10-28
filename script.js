(function animating(){
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && isValidUser(input)){
                nextSlide(parent, nextForm);
            }

            else if(input.type === 'email' && isValidEmail(input)){
                nextSlide(parent, nextForm);
            }

            else if(input.type === 'password'){
                nextSlide(parent, nextForm);
            }
            else{
                parent.style.animation = 'shake 0.5s ease';
            }
            parent.addEventListener('animationend', ()=>{
                parent.style.animation = '';
            })
        })
    })
})();

function isValidUser(user){
    if(user.value.length < 6){
        document.body.style.backgroundColor = "rgb(189, 87, 48)";
    }else {
        document.body.style.backgroundColor = "rgb(87, 189, 130)";
        return true;
    }
}

function isValidEmail(email){
    const valid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(valid.test(email.value)){
        document.body.style.backgroundColor = "rgb(87, 189, 130)";
        return true;
    }else{
        document.body.style.backgroundColor = "rgb(189, 87, 48)";
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}