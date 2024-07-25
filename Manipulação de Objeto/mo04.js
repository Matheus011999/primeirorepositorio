let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

console.log('Antes de remover:', pessoa);

delete pessoa.idade;

console.log('Depois de remover:', pessoa);
