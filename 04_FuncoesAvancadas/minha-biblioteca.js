var MinhaBiblioteca = function (){
    
    this.gid = function(id) {
        return document.getElementById(id);
    }
    
    this.ajax = function(options){
        var params = new Object();
        params.url = options.url;
        params.method = options.method || "GET";
        params.success = options.success;
        params.fail = options.fail;
        
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = onReadyStateChange;
        request.open(params.method, params.url , true);
        request.send();
        
        
        function onReadyStateChange(e){
            if (request.readyState == 4){
                if(request.status == 200){
                    var json = JSON.parse(e.target.responseText);
                    params.success(json);
                    
                }else{
                    params.fail("Error.")
                    
                }
                
            }
            
        }
        
        
    }
}

var iw = new MinhaBiblioteca();