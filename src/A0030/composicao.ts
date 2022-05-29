export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('motor esta ligado...');
  }

  acelerar(): void {
    console.log('motor esta acelerando...');
  }

  parar(): void {
    console.log('motor esta parado...');
  }

  desligar(): void {
    console.log('motor esta desligado...');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
