export class Enigma {


  model: string;
  startingShift: number;
  rotor1: string;
  rotor2: string;
  rotor3: string;
  message: string;


  constructor(enigmaBuilder: EnigmaBuilder) {
    this.model = enigmaBuilder.model;
    this.message = enigmaBuilder.message;
    this.startingShift = enigmaBuilder.shift;
    this.rotor1 = enigmaBuilder.rotor1;
    this.rotor2 = enigmaBuilder.rotor2;
    this.rotor3 = enigmaBuilder.rotor3;

  }

  get messageCode(): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codeMessage = '';
    if (this.model === 'ENCODE') {
      for (let inccaesar = 0; inccaesar < this.message.length; inccaesar++) {
        const codeindexrotor1 = (alphabet.indexOf(this.message.charAt(inccaesar)) + this.startingShift + inccaesar) % alphabet.length;


        const codeindexrotor2 = alphabet.indexOf(this.rotor1.charAt(codeindexrotor1));

        const codeindexrotor3 = alphabet.indexOf(this.rotor2.charAt(codeindexrotor2));

        codeMessage = codeMessage.concat(this.rotor3.charAt(codeindexrotor3));

      }

      return codeMessage;
    } else {
      for (let inccaesar = 0; inccaesar < this.message.length; inccaesar++) {
        const codeindexrotor1 = this.rotor3.indexOf(this.message.charAt(inccaesar));


        const codeindexrotor2 = this.rotor2.indexOf(alphabet.charAt(codeindexrotor1));

        const codeindexrotor3 = this.rotor1.indexOf(alphabet.charAt(codeindexrotor2));
        let codeindexalphabet = (alphabet.indexOf(alphabet.charAt(codeindexrotor3)) - this.startingShift - inccaesar) % alphabet.length;
        if (codeindexalphabet < 0) {
          codeindexalphabet += alphabet.length;
        }


        codeMessage = codeMessage.concat(alphabet.charAt(codeindexalphabet));

      }

      return codeMessage;
    }

  }

  static builder(): EnigmaBuilder {

    return new EnigmaBuilder();
  }
}

export class EnigmaBuilder {
  private bmodel: string;
  private bshift: number;
  private bRotor1: string;
  private bRotor2: string;
  private bRotor3: string;
  private bmessage: string;


  build(): Enigma {
    return new Enigma(this);
  }

  get model(): string {
    return this.bmodel;
  }


  get shift(): number {
    return this.bshift;
  }

  get rotor1(): string {
    return this.bRotor1;
  }

  get rotor2(): string {
    return this.bRotor2;
  }

  get rotor3(): string {
    return this.bRotor3;
  }

  setModel(model: string): this {
    this.bmodel = model;
    return this;
  }

  get message(): string {
    return this.bmessage;
  }

  setMessage(message: string): this {
    this.bmessage = message;
    return this;
  }

  setShift(shift: number): this {
    this.bshift = shift;
    return this;
  }

  setRotor1(rotor1: string): this {
    this.bRotor1 = rotor1;
    return this;
  }

  setRotor2(rotor2: string): this {
    this.bRotor2 = rotor2;
    return this;
  }

  setRotor3(rotor3: string): this {
    this.bRotor3 = rotor3;
    return this;
  }


}
