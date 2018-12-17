class Klijent {
  constructor(ime, brojRacuna, stanje) {
    this.ime = ime;
    this.brojRacuna = brojRacuna;
    this.stanje = stanje;
  }
  prenetiSredstva(primalac, iznos) {
    if (this.stanje >= iznos) {
      this.stanje -= iznos;
      primalac.stanje += iznos;
    } else console.log("Nemate dovoljno sredstava na racunu.");
  }
}

const petar = new Klijent("Petar Petrovic", 1600033331, 2000);
const ana = new Klijent("Ana Pavlovic", 1600033332, 15000);
const jovana = new Klijent("Jovana",1600033333, 6000);
