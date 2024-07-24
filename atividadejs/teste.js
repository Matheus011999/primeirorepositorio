// Definindo a classe Pessoa
class Pessoa {
    // Construtor
    constructor(nome, idade, profissao) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
  
    // Método para cumprimentar
    cumprimentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
  }
  
  // Criando uma nova instância da classe Pessoa
  const pessoa1 = new Pessoa('Ana', 22, 'Engenheira');
  
  // Chamando o método cumprimentar
  pessoa1.cumprimentar();
  