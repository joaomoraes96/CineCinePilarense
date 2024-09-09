let navBar = document.querySelector('#header')

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY
    
    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

})

// botao menu mobile estilizando

let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')

let btnMobFechar = document.querySelector('#fechar-menu')
let botaoClick = document.querySelector('.js-link')

let body = document.querySelector('body')

btnMenuMob.addEventListener('click', ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
       
    // body.classList.toggle('no-overflow')

   
})

//fechando ao clicar no botao menu mobile

btnMobFechar.addEventListener('click', ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')    
    menuMobile.classList.toggle('abrir')    

   
})


// formulario

class FormSubmit{
    constructor(configuracoes) {
        this.configuracoes = configuracoes;
        this.form = document.querySelector(configuracoes.form);
        this.formButton = document.querySelector(configuracoes.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.configuracoes.success;
    }

    displayError() {
        this.form.innerHTML = this.configuracoes.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
       await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",

            },
            body: JSON.stringify(this.getFormObject()),
            });

            this.displaySuccess();
            
         } catch (error) {
            this.displayError();
            throw new Error(error);
         }
    }

  
    init(){
        if (this.form) this.formButton.addEventListener("click", () => this.sendForm); 
        return this;

    }
}
 
const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class= 'error'>Não foi possível enviar sua mensagem.</h1>",

});
formSubmit.init();

// menu rolagem

let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id')
        
        // if(top >= offset && top < offset + heightSection) {
        //     links.forEach(link => {
        //         link.classList.remove('actived');

        //         document.querySelector(`header a[href*='${idSection}']`).classList.add
        //         ('actived');

        //     })
        // }

    // function scrollSection(event) {
    //     event.preventDefault();

    //     const href = event.currentTarget.getAttribute('href');

    //     const section = document.querySelector(href)

    //     let topSection = section.offsetTop - 112;

    //     window.scrollTop ({
    //         top: topSection,
    //         behavior: 'smooth'
    //     })
    // }

    // links.forEach(link => {
    //     link.addEventListener('click, scrollSection')
    // })
 

    })
})

