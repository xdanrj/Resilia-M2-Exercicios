//declaração do objeto
const user = {
    _name: "Kassandra",
    setName: function (newName) {
        this._name = newName;
    },
    getName: function () {
        return this._name;
    }
}

console.log(user.getName());
user.setName('Ygor');
console.log(user.getName());

//Exemplo com possível tratador de evento + callback
function eventHandler(func, text) {
    console.log(text, ' ', func());
}

//chamada com "perda de contexto"
eventHandler(user.getName, "Chamada de callback com perda de contexto");

/*
//solução 1 (bind)
eventHandler(user.getName.bind(user), "Chamada de callback com bind");
//solução 2 (arrow funcion - envelopamento)
eventHandler(()=> {
  return user.getName();
}, "Chamada de callback com arrow function")
*/