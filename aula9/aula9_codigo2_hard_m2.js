function mae() {
    this.nome = "Função mãe";
    function filha() {
        console.log("Rodando função filha");
        console.log(`Nome do escopo da mãe: ${this.nome}`);
    }
    filha();
}

mae();
try {
    filha();
} catch (error) {
    console.log("Essa função não existe no escopo global!")
}