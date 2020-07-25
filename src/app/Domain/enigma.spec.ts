import {Enigma} from './enigma';


const enigmabuilder = () => Enigma.builder().setModel('ENCODE').
                                      setMessage('AAA').
                                      setShift(4).
                                      setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
                                      setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
                                      setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ');

describe('Encryption/Decryption of Enigma Machine', () => {
  it('should ENCODE AAA to KQF', () => {
    const enigma = enigmabuilder().build();

    expect(enigma.messageEncode).toBe('KQF');
  });
});
