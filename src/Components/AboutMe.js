import profPic from './profpic.jpg'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <div className="words">
          <h2 id="about">About Me</h2>
          <div className="school">
            <h1>Iskola:</h1>
            <ul>
              <li>
                2002-2014: Megszerzett képesítés Középiskolai oklevél angol
                nyelvtudással általános érettségi Iskola neve: Padányi Bíró
                Márton Római Katolikus Iskola és Gimnázium
              </li>
              <li>
                2014-2015: A Széchenyi Egyetem kereskedelem és marketinget
                tanultam másfél évig
              </li>
              <li>
                2016-2018: A ‘SÉF’ Vendéglátói Szakiskolában turisztikai
                szervező és értékesítői szakot végeztem.
              </li>
              <li>
                2018-2020: Pannon Egyetem nappali tagozatos programtervező
                informatikus hallgatója voltam.
              </li>
            </ul>
          </div>
          <div className="work">
            <h1>Munkatapasztalat:</h1>
            <ul>
              <li>
                2010-2016: Foglalkozás: Back office, adatkezelés, recepciós
                munkakör, vendégekkel foglalkozás (nyári munka) Munkahely neve:
                Hotel Jade
              </li>
              <li>
                2016-2018: Recepciós diákmunkásként a recepciós feladatokat
                láttam el. Munkahely neve: Ezüsthíd Hotel
              </li>
              <li>
                2019: Pannon Egyetem szakmai gyakorlaton képi és videó
                szegmentálást és mély neurális hálózatok tesztelését végeztem.
              </li>
              <li>
                2021-2023: Projektvezetői feladatok ellátása: Feladataim:
                Veszprém megyei illetve országos partnerekkel és
                munkavállalókkal való kapcsolattartás, beosztás készítés, online
                és offline hirdetések készítése, toborzás és kiválasztás,
                bejelentés, bérszámfejtés és adminisztráció. Munkahely neve:
                Szomszédok Nyugdíjas Szövetkezet, Workstart Szövetkezet
              </li>
            </ul>
          </div>
          <p className="etc">
            Személyes készségek és kompetenciák: menedzser update training:
            ügyfélközpontú szemlélet, személyre szabott kommunikáció,
            panaszkezelés, vezetési stílusok, vezetői célkitűzés, kapcsolatok a
            kollégák között, motiválás, konfliktuskezelés, asszertív
            kommunikáció Beszélt idegen nyelvek: angol C1 német A2 Jogosítvány:
            “B” kategóriás jogosítvány 2012 óta
          </p>
        </div>
        <img src={profPic} className="me" alt="Its a me mario"></img>
      </section>
    </>
  )
}
export default AboutMe
