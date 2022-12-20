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

//Exemplo com possível tratador de evento + bird
function eventHandler(func, text) {
    console.log(text, ' ', func());
}

eventHandler(User.getName.bind(User), "Chamada de callback com bind");