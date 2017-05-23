document.addEventListener("DOMContentLoaded",init);

function init(e) {

    var imagem = "foto.png";
    var endereco = {
        link : "xuxa"
    }
    
    function minhaFuncao(parametro1, parametro2) {
        console.log( this.link + " / " + parametro1 + " / " + parametro2 );
    }
    
    minhaFuncao("Estudando", "JavaScript");
    
    minhaFuncao.call( endereco , "Estudando", "JavaScript" );
    minhaFuncao.apply( endereco , ["Estudando", "JavaScript"] );
}