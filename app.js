// Abstração: Classe abstrata Veiculo
class Veiculo {
    constructor(cor, ano) {
      this.cor = cor;
      this.ano = ano;
    }
  
    acelerar() {
      // Método abstrato
    }
  
    frear() {
      // Método abstrato
    }
  }
  
  // Relacionamento entre classes: Herança (Carro e Moto herdam de Veiculo)
  class Carro extends Veiculo {
    constructor(cor, ano, modelo) {
      super(cor, ano);
      this.modelo = modelo;
    }
  
    acelerar() {
      console.log("Carro acelerando");
    }
  
    frear() {
      console.log("Carro freando");
    }
  }
  
  class Moto extends Veiculo {
    constructor(cor, ano, estilo) {
      super(cor, ano);
      this.estilo = estilo;
    }
  
    acelerar() {
      console.log("Moto acelerando");
    }
  
    frear() {
      console.log("Moto freando");
    }
  }
  
  // Relacionamento entre classes: Agregação (Cliente possui um Veiculo)
  class Cliente {
    constructor(nome, veiculo) {
      this.nome = nome;
      this.veiculo = veiculo;
    }
  }
  
  // Relacionamento entre classes: Composição (Motor faz parte de Carro)
  class Motor {
    constructor(tipo) {
      this.tipo = tipo;
    }
  }
  
  class CarroComMotor extends Veiculo {
    constructor(cor, ano, modelo, tipoMotor) {
      super(cor, ano);
      this.modelo = modelo;
      this.motor = new Motor(tipoMotor);
    }
  
    acelerar() {
      console.log("Carro com motor acelerando");
    }
  
    frear() {
      console.log("Carro com motor freando");
    }
  }
  
  // Polimorfismo: usando herança (função teste recebe objetos de diferentes tipos)
  function teste(veiculo) {
    veiculo.acelerar();
    veiculo.frear();
  }
  
  // Polimorfismo: usando interfaces (implementando método comum em classes diferentes)
  class Animal {
    falar() {
      // Método abstrato
    }
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log("Au au");
    }
  }
  
  class Gato extends Animal {
    falar() {
      console.log("Miau");
    }
  }
  
  // Encapsulamento: usando visibilidade de atributos e interfaces
  class ContaBancaria {
    constructor() {
      this._saldo = 0;
    }
  
    depositar(valor) {
      this._saldo += valor;
    }
  
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return true;
      } else {
        return false;
      }
    }
  
    get saldo() {
      return this._saldo;
    }
  }
  
  // Exemplo de uso
  const carro = new Carro("Vermelho", 2023, "Sedan");
  const moto = new Moto("Preto", 2022, "Esportiva");
  const cliente = new Cliente("João", carro);
  
  teste(carro);
  teste(moto);
  
  const animal1 = new Cachorro();
  const animal2 = new Gato();
  animal1.falar();
  animal2.falar();
  
  const conta = new ContaBancaria();
  conta.depositar(1000);
  console.log("Saldo:", conta.saldo);
  conta.sacar(500);
  console.log("Saldo:", conta.saldo);
  