document.addEventListener("DOMContentLoaded", function (e) {
    
    var selEstados = iw.gid("selEstados");
    var selCidades = iw.gid("selCidades");
    var resposta = iw.gid("resposta");

    console.log(selEstados);
    
    //modo 1
    iw.ajax( {
        url : "../03_AJAX/form-estados.json",
        success : acaoSucesso,
        fail : acaoFalha
    });
    
    function acaoSucesso(json){
        console.log(json);
    }
    
    function acaoFalha(erro){
        console.log(erro);
    }
    
    //modo 2
    iw.ajax( {
        url : "../03_AJAX/form-estados.json",
        success : function (json){
            console.log(json);
        },
        fail : function (erro){
            console.log(erro);
        }
    });
    
    
});

