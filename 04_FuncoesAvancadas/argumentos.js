document.addEventListener("DOMContentLoaded", init);

function init(e) {
    
    // Argumentos indefinidos
    function jogar(nome,data,local) {

        var jogo = new Object();
        /*
        jogo.nome = nome;
        jogo.data = data;
        jogo.local = local;
        
        if ( nome == undefined ) jogo.nome = "Can Can";
        if ( data == undefined ) jogo.data = "Hoje";
        if ( local == undefined ) jogo.local = "Praia dos Crush";
        */
        
        jogo.nome = nome || "Can Can";
        jogo.data = data || "Hoje";
        jogo.local = local || "Praia dos Crush";
        
        return jogo;
    }
    
    console.log( jogar("Pega Varetas", "10/02/2017", "Casa") );
    console.log( jogar("Pega Varetas", "10/02/2017" ) );
    console.log( jogar("Pega Varetas" ) );
    console.log( jogar() );
    
    // Argumentos Variáveis
    function estudar() {
        
        var estudo = new Object();
        estudo.materia = arguments[0] || "História";
        estudo.data = arguments[1] || "Todo dia";
        
        return estudo;
    }
    
    console.log( estudar() );
    console.log( estudar( "Matemática" ) );
    console.log( estudar( "Matemática", "Hoje" ) );
    
    // Passando um Objeto Literal
    function dirigir( modal, opcoes ) {
        
        var locomover = new Object();
        
        locomover.modal = modal || "Carro";
        locomover.opcoes = opcoes || { marca: "Nissan", modelo : "Kicks" };
        
        return locomover;
    }
    
    console.log( dirigir() );
    console.log( dirigir( "Moto" ) );
    console.log( dirigir( "Carro", { marca : "Fiat", modelo : "Uno"  } ) );
}