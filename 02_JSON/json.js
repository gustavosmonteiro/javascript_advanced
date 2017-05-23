document.addEventListener("DOMContentLoaded", init);

function init(e) {
    var json = ' {"nome" : "Xuxa" , "idade" : 33 }';
    
//    De JSON para objeto
    var pessoa = JSON.parse(json);
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    
//    De objeto para JSON
    var txt = JSON.stringify(pessoa);
    console.log(txt);
    
//    Array de objetos para JSON
    
    var professor = {
        nome : "Prof1",
        idade : 30,
        apelidos : ["ap1", "ap2"]
        
    }
    var professor2 = {
        nome : "Prof2",
        idade : 40,
        apelidos : ["ap3", "ap4"]
        
    }
    
    var professores = [ professor , professor2];
    var profsJSON = JSON.stringify(professores);
    console.log(profsJSON);
    
    
    
}