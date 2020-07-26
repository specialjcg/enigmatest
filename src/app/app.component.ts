import {Component, OnInit} from '@angular/core';
import {Enigma} from './Domain/enigma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'EncryptionDecryptionofEnigmaMachine';
  enigma: Enigma;
  message = 'AAA';
  startingShift = 4;
  messageCode: string;
  model = 'ENCODE';

  ngOnInit(): void {
    this.enigma = Enigma.builder().setModel(this.model)
      .setMessage(this.message)
      .setShift(this.startingShift)
      .setRotor1('BDFHJLCPRTXVZNYEIWGAKMUSQO')
      .setRotor2('AJDKSIRUXBLHWTMCQGZNPYFVOE')
      .setRotor3('EKMFLGDQVZNTOWYHXUSPAIBRCJ').build();
    this.model = this.enigma.model;
    this.message = this.enigma.message;
    this.startingShift = this.enigma.startingShift;
    this.messageCode = this.enigma.messageCode;
  }

  encode(): void {
    this.model = 'ENCODE';
    this.enigma.model = this.model;
    this.enigma.message = this.message;
    this.enigma.startingShift = this.startingShift;
    this.messageCode = this.enigma.messageCode;
  }

  decode(): void {
    this.model = 'DECODE';

    this.enigma.model = this.model;
    this.enigma.message = this.message;
    this.enigma.startingShift = this.startingShift;
    this.messageCode = this.enigma.messageCode;

  }

  changeMessage(event: any): void {

    this.message = event.target.value.toString().toUpperCase();

  }

  changeStartingShift(event: any): void {
    this.startingShift = parseInt(event.target.value, 0);
  }
}
