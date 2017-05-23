document.addEventListener("DOMContentLoaded", init);

function init(e) {
    var xml = "";
    
    xml += "<alunos>";
    xml += "   <aluno>";
    xml += "        <nome>Jaime Palilo</nome>";
    xml += "        <email>jp@carrossel.com.br</email>";
    xml += "        <idade>10</idade>";
    xml += "        <telefone>3333.2211</telefone>";
    xml += "   </aluno>";
    xml += "   <aluno>";
    xml += "        <nome>Marcelina Guerra</nome>";
    xml += "        <email>mguerra@carrossel.com.br</email>";
    xml += "        <idade>11</idade>";
    xml += "        <telefone>3333.2212</telefone>";
    xml += "   </aluno>";
    xml += "   <aluno>";
    xml += "        <nome>Jorge Del Salto</nome>";
    xml += "        <email>jorgeds@carrossel.com.br</email>";
    xml += "        <idade>12</idade>";
    xml += "        <telefone>3333.2213</telefone>";
    xml += "   </aluno>";
    xml += "   <aluno>";
    xml += "        <nome>Maria Joaquina</nome>";
    xml += "        <email>mj@carrossel.com.br</email>";
    xml += "        <idade>9</idade>";
    xml += "        <telefone>3333.2211</telefone>";
    xml += "   </aluno>";
    xml += "</alunos>";
    
//    Parse
    var parse = new DOMParser();
    var objXML = parse.parseFromString(xml, "text/xml");
    
    var alunos = objXML.getElementsByTagName("aluno");
    console.log( alunos[0]);
    console.log( alunos[0].childNodes[1].textContent);
    
    var nomes = objXML.getElementsByTagName("nome");
    for (var i = 0; i <nomes.length; i++){
        console.log(nomes[i].textContent);
    }
    
    
    
}