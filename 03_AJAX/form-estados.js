document.addEventListener("DOMContentLoaded", init);

function init(e) {
    
    var url = "form-estados.json";
    var selEstados = document.getElementById("selEstados");
    var selCidades = document.getElementById("selCidades");
    selEstados.addEventListener("change", carregaCidades(1));
    var resposta = document.getElementById("resposta");
    
    var estados;
    
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = processaRetorno;
    request.open("GET", url , true);
    request.send();
    
    
    function processaRetorno(e){
        if (request.readyState == 4 && request.status == 200){
//            console.log(request.responseText);
            response = request.responseText;
            
            var dados = JSON.parse(response);
            estados = dados.estados;
            console.log(estados);
//            console.log(estados.estados);
            carregaEstados(dados);
            carregaCidades(0);
            
            
        } else {
            
        }
    }
    
    
    function carregaEstados(dados){
        var frag = document.createDocumentFragment();
            
            for (var i = 0 ; i < dados.estados.length ; i++){
                
//                console.log(estados.estados[i].sigla);
                var option = document.createElement("option");
                option.text = dados.estados[i].nome;
                frag.appendChild(option);
                
            }
            
            selEstados.appendChild(frag);
        
    }
    function carregaCidades(pos){
//        var cidades = dados.estados[pos].cidades;
//        for (var i = 0 ; i < cidades.length ; i++){
//
//            var option = document.createElement("option");
//            option.text = cidades[i].nome;
//            frag.appendChild(option);
//
//        }
//            
//        selCidades.appendChild(frag);
        
    }
}
