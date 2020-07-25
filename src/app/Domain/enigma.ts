export class Enigma {
  model: string;
  shift: number;
  rotor1: string;
  rotor2: string;
  rotor3: string;
  message: string;
  messageEncode: string;

  constructor(enigmaBuilder: EnigmaBuilder) {
    this.model = enigmaBuilder.model;
    this.message = enigmaBuilder.message;
    this.shift = enigmaBuilder.shift;
    this.rotor1 = enigmaBuilder.rotor1;
    this.rotor2 = enigmaBuilder.rotor2;
    this.rotor3 = enigmaBuilder.rotor3;
    this.messageEncode = enigmaBuilder.messagEncode;
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
  private bmessageEncode: string;

  build(): Enigma {
    return new Enigma(this);
  }

  get model(): string {
    return this.bmodel;
  }

  get messagEncode(): string {

    return this.bmessageEncode;
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
