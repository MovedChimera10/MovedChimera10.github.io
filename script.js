
// modo escuro--------------------------------------------------------------------------------

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}




// aumentar fonte----------------------------------------------------------------------------

function increaseFontSize() {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize); 
    body.style.fontSize = (currentSize * 1.1) + "px"; 
}




// diminuir fonte----------------------------------------------------------------------------

function diminuirFonte() {
   
    let currentFontSize = window.getComputedStyle(document.body).fontSize;
   
    currentFontSize = parseFloat(currentFontSize);

    
    if (currentFontSize > 10) {
        document.body.style.fontSize = (currentFontSize - 2) + "px";
    }
}



// HTML Sobre: função de mostrar os cards-------------------------------------------------------

function mostraDetalhes(valor){
    document.getElementsByClassName('detalhes')[valor].style.height="195px"
}
function escondeDetalhes(valor){
    document.getElementsByClassName('detalhes')[valor].style.height="0px"
}




// HTML Contato: menu de cadastro-----------------------------------------------------------------------------------------------



document.getElementById('primeiro').style.color='red'


document.getElementsByTagName('p')[0].style.background='pink'


document.querySelector('.texto').style.fontSize = '1.5rem'


document.querySelectorAll('.texto')[2].style.textShadow = '3px 3px 3px black'

function mostraAviso(ordem){
    if(ordem === 'primeiro'){
        let nome = document.getElementById('nome').value
        if(nome.length>2){
            document.getElementsByClassName('aviso')[0].innerHTML=''
        }else{
            document.getElementsByClassName('aviso')[0].innerHTML='O nome precisa de no mínimo 3 caracteres'
        }
    }else{
        let senha = document.getElementById('senha').value
        if(senha.length>2){
            document.getElementsByClassName('aviso')[1].innerHTML=''
        }else{
            document.getElementsByClassName('aviso')[1].innerHTML='A senha precisa de no mínimo 3 caracteres'
        }
    }
}
function mostra(){
   
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    let email = document.getElementById('email').value
    if(nome.length>2 && senha.length>2 && email.length>2){
        showAlert('Meus parabéns, você foi cadastrado com sucesso!')
        
    }

}


