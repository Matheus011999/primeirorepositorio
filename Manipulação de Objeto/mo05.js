let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

for (let propriedade in pessoa) {
    if (pessoa.hasOwnProperty(propriedade)) {
        console.log(propriedade + ': ' + pessoa[propriedade]);
    }
}
