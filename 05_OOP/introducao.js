document.addEventListener("DOMContentLoaded", init);

function init(e) {
    
    function Pessoa (nome){
        this.nome = nome;
        
        console.log("Pessoa " + this.nome + " foi instanciada.");
    }
    
    Pessoa.prototype.estudar = function(){
        console.log(this.nome + " começou a estudar.");
    }
    Pessoa.prototype.dizOi = function(){
        console.log("Olaaaa");
    }
    
    
    var eu = new Pessoa("Gustavo");
    eu.estudar();
    eu.dizOi();
    
    var ze = new Pessoa ("Jose");
    ze.estudar();
    
    
    //Nova
    function Aluno ( nome){
        Pessoa.call(this, nome);
    }
    Aluno.prototype = new Pessoa();
    
    var aluno1 = new Aluno("Fulano");
    aluno1.estudar();
}