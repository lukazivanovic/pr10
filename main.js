let brojac = 1608002000;

class Klijent {
  constructor(ime, stanje) {
    this.ime = ime;
    this.brojRacuna = ++brojac;
    this.stanje = stanje;
  }

  prenetiSredstva(primalac, iznos) {
    if (this.stanje >= iznos) {
      this.stanje -= iznos;
      primalac.stanje += iznos;
    } else console.log("Nemate dovoljno sredstava na racunu.");
  }
}

const petar = new Klijent("Petar Petrovic", 2000);
const ana = new Klijent("Ana Pavlovic", 15000);
const jovana = new Klijent("Jovana", 6000);
const a1 = new Klijent("a1", 8000);
