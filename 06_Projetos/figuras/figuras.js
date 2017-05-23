document.addEventListener( "DOMContentLoaded", init );

function init(e) {
    
    var selFiguras = document.getElementById("selFiguras");
    var btnCriar = document.getElementById("btnCriar");
    
    btnCriar.addEventListener("click", btnCriar_click);
    
    function btnCriar_click(e){
        var fig;
        switch ( selFiguras.value){
            case "figura" : 
                fig = new Figura();
                fig.criar();
                break;
            case "triangulo" : 
                fig = new Triangulo();
                fig.criar();
                break;
            case "trianguloIsoceles" : 
                fig = new TrianguloIsoceles();
                fig.criar();
                break;
            case "trianguloEscaleno" : 
                fig = new TrianguloEscaleno();
                fig.criar();
                break;    
            case "circulo" : 
                fig = new Circulo();
                fig.criar();
                break;    
        }
        
        
    }

}

var Figura = function(){
    this.elemento = document.createElement("div");
    this.elemento.className = "figura";
    
    this.criar = function(){
        document.body.appendChild(this.elemento);
    }
}

var Triangulo = function(){
    this.elemento = document.createElement("div");
    this.elemento.className = "trianguloEquilatero";
}
Triangulo.prototype = new Figura();

var TrianguloIsoceles = function(){
    this.elemento = document.createElement("div");
    this.elemento.className = "trianguloIsoceles";
}
TrianguloIsoceles.prototype = new Figura();

var TrianguloEscaleno = function(){
    this.elemento = document.createElement("div");
    this.elemento.className = "trianguloEscaleno";
}
TrianguloEscaleno.prototype = new Figura();

var Circulo = function(){
    this.elemento = document.createElement("div");
    this.elemento.className = "circulo";
}
Circulo.prototype = new Figura();