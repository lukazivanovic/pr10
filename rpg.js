class Figura {
  constructor(ime, oruzje, hp) {
    this.ime = ime;
    this.oruzje = oruzje;
    this.hp = hp;
  }

  napadaj(protivnik, oruzje) {
    let kocka = Math.random() * 6 + 1;
    let dmg = kocka * this.oruzje.atk;
    let ca = Math.random() * 6 + 1;
    if (protivnik.hp <= 0) {
      console.log("Igrac je vec mrtav.");
    } else {
      console.log("Igrac " + this.ime + " (HP " + this.hp + ") sa oruzjem " + this.oruzje + " napada igraca " + protivnik.ime + " (HP " + protivnik.hp + ")");
      console.log("Bacanje kocke...... " + kocka);
      console.log("napad: " + dmg + " DMG");
      protivnik.hp -= dmg;
      if (protivnik.hp <= 0) {
        console.log("Protivnik je porazen.");
      } else {
        console.log("protiv napad: " + ca + " DMG");
        this.hp -= ca;
        if (this.hp <= 0) console.log("Protivnik je pobedio.");
      }
    }
  }
}

class Oruzje {
  constructor(ime, atk) {
    this.ime = ime;
    this.atk = atk;
  }
}

const noz = new Oruzje("noz", 2);
const stap = new Oruzje("stap", 5);
const mac = new Oruzje("mac", 4);

const priest = new Figura("MMNK", stap, 200);
const thief = new Figura("NINJ", noz, 300);
const knight = new Figura("PLDN", mac, 500);
