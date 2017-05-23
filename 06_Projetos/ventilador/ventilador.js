document.addEventListener("DOMContentLoaded", init);

function init(){

    new Ventilador();
    
    
    
    
    

}

function Ventilador(){
    var velocidade1 = "1000ms";
    var velocidade2 = "500ms";
    var velocidade3 = "200ms";
    
    this.helice = document.getElementById("helice");
    this.ligado = false;
    
    this.inicializar = function(){
        var vel_0 = document.getElementById("vel_0");
        var vel_1 = document.getElementById("vel_1");
        var vel_2 = document.getElementById("vel_2");
        var vel_3 = document.getElementById("vel_3");
        
        var tog = function(escopo){
            return function(){
                escopo.toggle();
            }
        }(this);
        
        var vel1 = function(escopo){
            return function(){
                escopo.setVel1();
            }
        }(this);
        
        var vel2 = function(escopo){
            return function(){
                escopo.setVel2();
            }
        }(this);
        
        var vel3 = function(escopo){
            return function(){
                escopo.setVel3();
            }
        }(this);
        
        vel_0.addEventListener("click", tog);
        vel_1.addEventListener("click", vel1);
        vel_2.addEventListener("click", vel2);
        vel_3.addEventListener("click", vel3);
        
    }
    
    this.toggle = function(){
        if(this.ligado){
            this.desligar();
        } else {
            this.ligar();
        }
    }
    
    this.ligar = function(){
        this.helice.style.animationPlayState = "running";
        this.ligado = true;
        
    }
    this.desligar = function(){
        this.helice.style.animationPlayState = "paused";
        this.ligado = false;
    }
    
    this.setVel1 = function(){
        this.helice.style.animationDuration = velocidade1;
    }
    this.setVel2 = function(){
        this.helice.style.animationDuration = velocidade2;
    }
    this.setVel3 = function(){
        this.helice.style.animationDuration = velocidade3;
    }
    
    this.inicializar();
    
}