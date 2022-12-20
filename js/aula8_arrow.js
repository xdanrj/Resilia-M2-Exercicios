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

//Exemplo com possível tratador de evento + seta
function eventHandler(func, text) {
    console.log(text, ' ', func());
}


//solução 3 (arrow funcion - envelopamento)
eventHandler(()=> {
  return User.getName();
}, "Chamada de callback com arrow function");
