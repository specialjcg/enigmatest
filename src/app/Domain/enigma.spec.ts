import {Enigma} from './enigma';


describe('Encryption/Decryption of Enigma Machine', () => {
  it('should ENCODE AAA to KQF', () => {
    const enigma = Enigma.builder().setModel('ENCODE').
    setMessage('AAA').
    setShift(4).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('KQF');
  });
  it('should ENCODE WEATHERREPORTWINDYTODAY to ALWAURKQEQQWLRAWZHUYKVN', () => {
    const enigma = Enigma.builder().setModel('ENCODE').
    setMessage('WEATHERREPORTWINDYTODAY').
    setShift(7).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('ALWAURKQEQQWLRAWZHUYKVN');
  });
  it('should DECODE PQSACVVTOISXFXCIAMQEM to EVERYONEISWELCOMEHERE', () => {
    const enigma = Enigma.builder().setModel('DECODE').
    setMessage('PQSACVVTOISXFXCIAMQEM').
    setShift(9).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('EVERYONEISWELCOMEHERE');
  });
  it('should ENCODE EVERYONEISWELCOMEHERE to PQSACVVTOISXFXCIAMQEM', () => {
    const enigma = Enigma.builder().setModel('ENCODE').
    setMessage('EVERYONEISWELCOMEHERE').
    setShift(9).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('PQSACVVTOISXFXCIAMQEM');
  });
  it('should ENCODE EVERYONEISWELCOMEHEREEVERYONEISWELCOMEHERE to PQSACVVTOISXFXCIAMQEMDZIXFJJSTQIENEFQXVZYV', () => {
    const enigma = Enigma.builder().setModel('ENCODE').
    setMessage('EVERYONEISWELCOMEHEREEVERYONEISWELCOMEHERE').
    setShift(9).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('PQSACVVTOISXFXCIAMQEMDZIXFJJSTQIENEFQXVZYV');
  });
  it('should DECODE XPCXAUPHYQALKJMGKRWPGYHFTKRFFFNOUTZCABUAEHQLGXREZ to THEQUICKBROWNFOXJUMPSOVERALAZYSPHINXOFBLACKQUARTZ', () => {
    const enigma = Enigma.builder().setModel('DECODE').
    setMessage('XPCXAUPHYQALKJMGKRWPGYHFTKRFFFNOUTZCABUAEHQLGXREZ').
    setShift(5).
    setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO').
    setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE').
    setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();

    expect(enigma.messageCode).toBe('THEQUICKBROWNFOXJUMPSOVERALAZYSPHINXOFBLACKQUARTZ');
  });
});

