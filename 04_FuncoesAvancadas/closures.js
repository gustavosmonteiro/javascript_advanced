document.addEventListener("DOMContentLoaded", function (e) {
    
    // Exemplo 1
    console.log("Exemplo 1");
    
    var x = 9;
    
    var resultado = function() {
        return x;
    }
    
    console.log( resultado() );
    x = 10;
    console.log( resultado() );
    
    // Exemplo 2
    console.log("Exemplo 2");
    
    var a = 10;
    
    var info = function(local) {
        return local;    
    }(a);
    
    console.log( info );
    a = 20;
    console.log( info );
    
    
    // Exemplo 3
    console.log("Exemplo 3");
    
    var b = 2;
    
    var dados = function(p) {
        return function(){
            return console.log("O valor de p é: " + p);
        }
    } (b);
    
    dados();
    b = 18;
    dados();
    
} );

