let spelers = [
  { name: "Virginie",
   scoreAnke: 3,
   scoreBert: 0,
   scoreEmanuelle: 5,
   scoreSven: 0,
   scoreUma: 2,
   scoreYens: 0,
   scorePhilippe: 0,
   scoreGretel: 3,
   scoreJens: 0,
   scoreToon: 0,
   scoreNele: 5,
  },
  { name: "Michiel D",
   scoreAnke: 0,
   scoreBert: 5,
   scoreEmanuelle: 0,
   scoreSven: 2,
   scoreUma: 9,
   scoreYens: 0,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 0,
   scoreToon: 1,
   scoreNele: 0,
  },
  { name: "Maya",
   scoreAnke: 0,
   scoreBert: 0,
   scoreEmanuelle: 2,
   scoreSven: 3,
   scoreUma: 5,
   scoreYens: 6,
   scorePhilippe: 0,
   scoreGretel: 2,
   scoreJens: 0,
   scoreToon: 0,
   scoreNele: 0,
  },
  { name: "Arwen",
   scoreAnke: 2,
   scoreBert: 0,
   scoreEmanuelle: 5,
   scoreSven: 4,
   scoreUma: 2,
   scoreYens: 0,
   scorePhilippe: 1,
   scoreGretel: 3,
   scoreJens: 0,
   scoreToon: 0,
   scoreNele: 0,
  },
  { name: "Jari",
   scoreAnke: 2,
   scoreBert: 0,
   scoreEmanuelle: 1,
   scoreSven: 6,
   scoreUma: 7,
   scoreYens: 0,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 2,
   scoreToon: 0,
   scoreNele: 0,
  },
  { name: "Thomas",
   scoreAnke: 0,
   scoreBert: 5,
   scoreEmanuelle: 0,
   scoreSven: 1,
   scoreUma: 1,
   scoreYens: 2,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 0,
   scoreToon: 3,
   scoreNele: 0,
  },
  { name: "Brecht",
   scoreAnke: 0,
   scoreBert: 2,
   scoreEmanuelle: 6,
   scoreSven: 3,
   scoreUma: 0,
   scoreYens: 2,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 3,
   scoreToon: 2,
   scoreNele: 0,
  },
  { name: "Michiel M",
   scoreAnke: 3,
   scoreBert: 4,
   scoreEmanuelle: 3,
   scoreSven: 0,
   scoreUma: 4,
   scoreYens: 0,
   scorePhilippe: 0,
   scoreGretel: 3,
   scoreJens: 1,
   scoreToon: 0,
   scoreNele: 0,
  },
  { name: "Mare",
   scoreAnke: 0,
   scoreBert: 1,
   scoreEmanuelle: 4,
   scoreSven: 4,
   scoreUma: 0,
   scoreYens: 9,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 0,
   scoreToon: 0,
   scoreNele: 0,
  },
];

let kandidaten = [
  { name: "Anke" },
  { name: "Bert" },
  { name: "Emanuelle" },
  { name: "Sven" },
  { name: "Uma" },
  { name: "Yens" },
  { name: "Philippe", status:"mol" },
  { name: "Nele", status:"afgevallen" },
  { name: "Jens", status:"afgevallen" },
  { name: "Toon", status:"afgevallen" },
  { name: "Gretel", status:"afgevallen" },
];


let ankeScore = [];
let bertScore = [];
let emanuelleScore = [];
let svenScore = [];
let umaScore = [];
let yensScore = [];
let philippeScore = [];
let gretelScore = [];
let jensScore = [];
let toonScore = [];
let neleScore = [];

// Anke
spelers.sort((a, b) => {
  return b.scoreAnke - a.scoreAnke;
});

ankeScore.push(spelers[0], spelers[1], spelers[2])

// Bert
spelers.sort((a, b) => {
  return b.scoreBert - a.scoreBert;
});

bertScore.push(spelers[0], spelers[1], spelers[2])

// Emanuelle
spelers.sort((a, b) => {
  return b.scoreEmanuelle - a.scoreEmanuelle;
});

emanuelleScore.push(spelers[0], spelers[1], spelers[2])

// Sven
spelers.sort((a, b) => {
  return b.scoreSven - a.scoreSven;
});

svenScore.push(spelers[0], spelers[1], spelers[2])

// Uma
spelers.sort((a, b) => {
  return b.scoreUma - a.scoreUma;
});

umaScore.push(spelers[0], spelers[1], spelers[2])

// Yens
spelers.sort((a, b) => {
  return b.scoreYens - a.scoreYens;
});

yensScore.push(spelers[0], spelers[1], spelers[2])

// Philippe
spelers.sort((a, b) => {
  return b.scorePhilippe - a.scorePhilippe;
});

philippeScore.push(spelers[0], spelers[1], spelers[2])

// Gretel
spelers.sort((a, b) => {
  return b.scoreGretel - a.scoreGretel;
});

gretelScore.push(spelers[0], spelers[1], spelers[2])

// Jens
spelers.sort((a, b) => {
  return b.scoreJens - a.scoreJens;
});

jensScore.push(spelers[0], spelers[1], spelers[2])

// Toon
spelers.sort((a, b) => {
  return b.scoreToon - a.scoreToon;
});

toonScore.push(spelers[0], spelers[1], spelers[2])

// Nele
spelers.sort((a, b) => {
  return b.scoreNele - a.scoreNele;
});

neleScore.push(spelers[0], spelers[1], spelers[2])



let main = document.querySelector("main");


// kandidaten
kandidaten.forEach((item, i) => {

  // section kandidaat
  let box = document.createElement("section");

  // h1 kandidaat
  let naam = document.createElement("h2");
  naam.classList.add(item.name + "naam");
  naam.textContent = item.name;
  box.appendChild(naam);

  box.classList.add(item.name + "box");
  box.classList.add(item.status);
  // Anke
  if (item.name === "Anke"){
    ankeScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreAnke;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Bert
  if (item.name === "Bert"){
    bertScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreBert;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Emanuelle
  if (item.name === "Emanuelle"){
    emanuelleScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreEmanuelle;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Sven
  if (item.name === "Sven"){
    svenScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreSven;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Uma
  if (item.name === "Uma"){
    umaScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreUma;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Yens
  if (item.name === "Yens"){
    yensScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreYens;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Philippe
  if (item.name === "Philippe"){
    philippeScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scorePhilippe;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Nele
  if (item.name === "Nele"){
    neleScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreNele;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Jens
  if (item.name === "Jens"){
    jensScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreJens
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Toon
  if (item.name === "Toon"){
    toonScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreToon;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Gretel
  if (item.name === "Gretel"){
    gretelScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreGretel;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }

  main.appendChild(box);
});
