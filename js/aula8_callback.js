//declaração do objeto
const User = {
    _name: "Kassandra",
    setName: function (newName) {
        this._name = newName;
    },
    getName: function () {
        return this._name;
    }
}

console.log(User.getName());
User.setName('Ygor');
console.log(User.getName());

//Exemplo com possível tratador de evento + callback
function eventHandler(func, text) {
    console.log(text, ' ', func());
}

//chamada com "perda de contexto"
eventHandler(User.getName, "Chamada de callback com perda de contexto");