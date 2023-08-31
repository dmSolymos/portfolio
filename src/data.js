export const data = [
  {
    id: 1,
    title: 'Idézet generátor',
    paragraph:
      'Ez a react applikáció egy githubon lévő objectumból kéri le az adatokat és azokat jeleníti meg, majd amikor a végére érkezik előröl kezdi.',
    tech: 'useEffect lekéri az objectumból az adatokat és attól függően, hogy elérte, tölti-e még vagy nem érte el visszajezést ad',
    link: 'https://admirable-lolly-51d743.netlify.app/',
    git: 'https://github.com/dmSolymos/quotegen',
  },
  {
    id:2,
    title:'Text analízis:',
    paragraph:'Reactot használva elemzi a textareaba lévő beírt szöveget és a hozzá tartozó statisztikát mutatja.',
    tech:'useState-be menti el a szöveget és useEffect minden alkalommal amikor a szövegdoboz változik lefuttatja a függvényeket amik kiszámolják, majd megjeleníti őket.',
    link:"https://64e5c607d7d317375bba7f93--reliable-hamster-2857c3.netlify.app/",
    git:"https://github.com/dmSolymos/textanalyzer",
  },
  {
    id:3,
    title:'Jelszó generátor',
    paragraph:'Az alkalmazás létrehoz egy jelszót az oldal megnyitásakor, majd ki lehet választani, hogy milyen egyéb karakterek tartalmazzon, ez alapján ad majd egy visszajezést mennyire nehéz az adott jelszó.',
    tech:'4 komponensből áll az alkalmazás mely createContexttel köti össze őket. A checkboxokból kapott statek alapján egy függvény stringbe köti össze össze a választottakat majd véletlenszerűen ebből a hosszú stringből adja vissza a jelszót. Hasonlóan a nehézségi szintet ez alapján színesen jeleníti meg.',
    link:"https://amazing-malasada-0d4218.netlify.app/",
    git:"https://github.com/dmSolymos/passgen",
  },
  {
    id:4,
    title:'Tennivaló lista',
    paragraph:'Az oldalon egy meglévő tennivalókat jeleníti meg. Tartozik hozzá név, fontosság, hol tart az adott teendő. Lehet új teendőt hozzáadni és meglévőket szerkeszteni, törölni.',
    tech:'Redux storeral lett megvalósítva ez az oldal. Különböző slice-okban vannak elmentve a reducerek amik felelnek a feladatok ellátásához a statek változtatásához szükséges adatok. Hasonlóan mint a jelszó generátornál külön komponensek felelnek az adott részekre.',
    link:"https://effervescent-hummingbird-e2be82.netlify.app/",
    git:"https://github.com/dmSolymos/todolist",
  },
  {
    id:5,
    title:'Portfolio',
    paragraph:'React portfolio kattintható linkekkel.',
    tech:'A portfolio egy react alkalmazás komponensekből áll össze, a projektlistát egy data.js tömb tartalmazza, külön objektumokban.',
    link:'#projects',
    git:'',
  },
]