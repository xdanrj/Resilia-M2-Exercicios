function Queue(){
    this.lista = new Array();
 
    this.Inserir = function(obj){
        this.lista[this.lista.length] = obj;
    }
 
    this.RemoverPrimeiro = function(){
        if(this.lista.length > 0){
            var obj = this.lista[0];
            this.lista.splice(0,1);
            return obj;    
        }else{
            alert("Não há objetos na fila.")
        }
    }
 
    this.LerPrimeiro = function(){
        if(this.lista.length > 0){
            return this.lista[0];
        }else{
            alert("Não há objetos na fila.")
        }
    }
}


