document.addEventListener("DOMContentLoaded", init);

function init(e) {
    
    var url = "../02_JSON/alunos.json";
    var lista = document.getElementById("result");
    var ul = document.createElement("UL");
    lista.appendChild(ul);
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = processaRetorno;
    request.open("GET", url , true);
    request.send();
    
    
    function processaRetorno(e){
        if (request.readyState == 4 && request.status == 200){
            console.log(request.responseText);
            response = request.responseText;
            
            var pessoas = JSON.parse(response);
            console.log(pessoas);
            
            for (var i = 0 ; i < pessoas.length ; i++){
            
                var nome = document.createTextNode(pessoas[i].nome);
                var li = document.createElement("LI");
                ul.appendChild(li);
                li.appendChild(nome);
            
            }
            
            
        } else {
            
        }
    }
    
}