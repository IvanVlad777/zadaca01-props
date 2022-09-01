import { Component } from 'react';
import ImeGodineFunkcija from './ImeGodineFunkcija';
import ImeGodineFunkcijaChildrenPr from './ImeGodineFunkcijaChildrenPr';
import ImeGodineKlasa from './ImeGodineKlasa';

export default class App extends Component {
  constructor(korisnici) {
    super(korisnici);
    this.korisnici = [
      {
        ime: 'Branko',
        prezime: 'Branković',
        dob: 32,
      },
      {
        ime: 'Janko',
        prezime: 'Janković',
        dob: 42,
      },
      {
        ime: 'Stanko',
        prezime: 'Stanković',
        dob: 52,
      },
    ];
  }

  render() {
    return (
      <div>
        <ImeGodineFunkcija
          ime={this.korisnici[0].ime}
          dob={this.korisnici[0].dob}
        />
        <ImeGodineKlasa
          ime={this.korisnici[1].ime}
          dob={this.korisnici[1].dob}
        />
        <ImeGodineFunkcijaChildrenPr>
          <p>Ime: {this.korisnici[2].ime}</p>
          <p>Godine: {this.korisnici[2].dob}</p>
        </ImeGodineFunkcijaChildrenPr>
      </div>
    );
  }
}
