# Načrt sistema

|                             |                                                                          |
| :-------------------------- | :----------------------------------------------------------------------- |
| **Naziv projekta**          | Občinski obveščevalnik                                                   |
| **Člani projektne skupine** | Luka Markićević, Haris Kupinić, Luka Brodnik, Elena Najdova, Luka Pantar |
| **Kraj in datum**           | Ljubljana, 21.4.2022                                                     |

## Povzetek

V dokumentu je opisan podroben načrt našega sistema. Na začetku je predstavljen načrt arhitekture, ki je prikazan s pomočjo treh pogledov: logičnega, razvojnega ter fizičnega, za katere je uporabljeno ogrodje PlantUML. Po arhitekturnem načrtu, sledi predstavitev uporabljenih načrtovalskih vzorcev. Zatem sledi načrt strukture, ki je predstavljen s pomočjo razrednega diagrama, kjer so prisotni vsi razredi ter povezave med njimi. Načrtu strukture sledi podrobna predstavitev razredov ter njihovih metod in atributov. Na koncu dokumenta je še predstavljen načrt obnašanja, kjer so, v obliki diagramov zaporedja, predstavljene vse funkcionalnosti sistema oz. njihovi osnovni in alternativni tokovi. 

## 1. Načrt arhitekture

### Razvojni pogled
![Razvojni pogled](../gradivo/img/razvojnipogled.png)

### Fizični pogled
![Fizični pogled](../gradivo/img/fizicnipogled.png)

### Logični pogled


## 2. Načrt strukture

### 2.1 Razredni diagram

:dart: **TO-DO**

- Izdelajte razredni diagram.
- Za izdelavo uporabite ogrodje PlantUML, in sicer [Class Diagram](https://plantuml.com/class-diagram).
- V poročilo vključite **izvorno kodo diagrama v jeziku PlantUML**, ki naj bo prisotna v repozitoriju, sliko diagrama pa vključite s povezavo (in ne preko neposredne vključitve binarne datoteke) preko storitve [`https://teaching.lavbic.net/plantuml`](https://teaching.lavbic.net/plantuml), kot prikazuje spodnji primer.
- Diagram naj bo **jasno berljiv**, sicer ga razdelite v več delov.

![RD](https://teaching.lavbic.net/plantuml/svg/TPDDRi8m48NtFiN8tK2heEOFQ1O8bRO7oBeR4xlWujYLROf4sxjtY0KaG3RHwFbblZVnPEuyitvRAoXVYDj8_SKigw5Ip3du8G1BLcrMrcmrNnXbBEpMqek3RYmNDcXt-Tlpz7M1AhFMx8AuLFWc-MirFRUg6eUtJ3iy4jgJjUG2Acah9GXPD7HQihqL768Ap44PDt4YvgrSRdrSm8Sop2FWmfu4UzAn9mKuhFIgfQLjBSB7GosyuImUD76H8BKV5ZYfKOBfQr8QI6c7b1N0cHTUrgAbvZsi9B1EyOR7iKwET33i7JKB0R9EWF6vnL6QzD2pmJKl3udIynZz_3pmymv_Uir_wk6FR_0dDxHfo9JTk17y-ZG62YQAi1YDxh4kqKZ12LpjR_KfzBkMUvXHWZj17uEbSH-iES75YgBV6TxZmN0ioLneZh_5Fm00)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/RD.puml))

### 2.2 Opis razredov

:dart: **TO-DO**

- Vsak razred podrobno opišite. Opis posameznega razreda naj ima sledečo strukturo:

#### Ime razreda :dart: **TO-DO**

- Koncept iz problemske domene, ki ga razred predstavlja.

#### Atributi

:dart: **TO-DO**

- Za vsak atribut navedite:
  - ime atributa,
  - podatkovni tip, če ta ni očiten,
  - pomen, če ta ni samoumeven,
  - zalogo vrednosti, če ta ni neomejena ali očitna.

#### Nesamoumevne metode

:dart: **TO-DO**

- Za vsako metodo navedite:
  - ime metode,
  - imena in tipe parametrov,
  - tip rezultata,
  - pomen (če ta ni dovolj očiten iz naziva metode in njenih parametrov).

**1.Uporabnik (Entity)**

U tem razredu shranimo podatke o uporabniki.

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |           **Pomen(če ni očiten)**            |   **Zaloga vrednosti (če ni očiten)**    |
| :--------------: | :----------------: | :------------------------------------------: | :--------------------------------------: |
|   uporabnikId    |        int         |           Identifikator uporabnika           |                    -                     |
|       ime        |       string       |                Ime uporabnika                |             /^[a-zA-Z\s]\*$/             |
|     priimek      |       string       |              Priimek uporabnika              |             /^[a-zA-Z\s]\*$/             |
| uporabnisko ime  |       string       |               Uporabnisko ime                |       /^[a-zA-Z0-9]([._-](?![._-])       | [a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/ |
|     obcinaId     |        int         | Identifikator obcine v kateri zivi uporabnik |                    -                     |
|      email       |       string       |               Email uporabnika               |             /^\S+@\S+\.\S+$/             |
|      geslo       |       string       |               Geslo uporabnika               | /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ |
|      slika       |       Image        |               Slika uporabnika               |                    -                     |
|    sporocila     |  List<Sporocilo>   |             Sporocila uporabnika             |                    -                     |

**Nesamoumevne metode:**

|     **Ime metode**      |             **Imena in tipi parametrov**             | **Tip rezultata** |                         **Pomen**                         |
| :---------------------: | :--------------------------------------------------: | :---------------: | :-------------------------------------------------------: |
|     dodajUporabnika     |                 uporabnik: Uporabnik                 |    StatusCode     |   Dodajanje uporabnika v bazi registriranih uporabnikov   |
|   posodobiUporabnika    |                 uporabnik: Uporabnik                 |     Uporabnik     | Posodabljanje uporabnika v bazi registriranih uporabnikov |
|    izbrisiUporabnika    |                   uporabnikId: int                   |    StatusCode     |   Brizanje uporabnika iz bazi registriranih uporabnikov   |
|     posljiSporocilo     | posljateljId: int, prejemnikId: int, vsebina: string |     Sporocilo     |                    Pošiljanje sporčila                    |
|     vrniUporabnika      |                   uporabnikId: int                   |     Uporabnik     |                 Vrne podatke o uporabniku                 |
|    vrniVseUporabnike    |                          -                           |  List<Uporabnik>  |               Vrne seznam vseh uporabnikov                |
|     preveriPodatke      |                  podatki: Uporabnik                  |    StatusCode     |      Preverja ustreznost podatkov preden jih shrani       |
| preveriPodatkeZaPrijavo |             email: string, geslo: string             |    StatusCode     |          Preveri ustreznost podatkov za prijavo           |
|    prijaviUporabnika    |             email: string, geslo: string             |    StatusCode     |           Doda uporabnik v seznamu prijavljenih           |
|    odjaviUporabnika     |                   uporabnikId: int                   |    StatusCode     |        Odstrani uporabnik iz seznama prijavljenih         |

**2.Sporočilo (Entity)**

Sporočilo shranjuje komunikacijo med uporabniki

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |  **Pomen(če ni očiten)**  | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-----------------------: | :---------------------------------: |
|   sporociloId    |        int         |  Identifikator sporocila  |                  -                  |
|  posiljateljId   |        int         | Identifikator posljatelja |                  -                  |
|   prejemnikId    |        int         | Identifikator prejemnika  |                  -                  |
|     vsebina      |       String       |     Vsebina sporocila     |                  -                  |

**Nesamoumevne metode:**

|   **Ime metode**   | **Imena in tipi parametrov** | **Tip rezultata** |                     **Pomen**                      |
| :----------------: | :--------------------------: | :---------------: | :------------------------------------------------: |
|   dodajSporocilo   |     sporocilo: Sporocilo     |    StatusCode     |        Dodajanje sporočilo v bazi sporočila        |
|   vrniSporocilo    |       sporociloId: int       |     Sporocilo     |              Vrne podatke o sporočilu              |
|  vrniVsaSporocila  |              -               |  List<Sporocilo>  |             Vrni seznam vseh sporočil              |
| vrniVsePosiljatelj |     posliljateljId: int      |  List<Sporocilo>  |       Vrni seznam vseh sporočil pošiljatelja       |
|  vrniVsePrejemnik  |       prejemnikId: int       |  List<Sporocilo>  |        Vrni seznam vseh sporočil prejemnika        |
|   preveriPodatke   |      podatki: Sporocilo      |    StatusCode     | Preveri ustreznost podatke preden pošlje sporočilo |

**3.Komentar (Entity)**

Komentar je razred v katerem shranjujemo komentarje ki jih uporabnik dodaja pod objavo

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |            **Pomen(če ni očiten)**            | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-------------------------------------------: | :---------------------------------: |
|    komentarId    |        int         |           Identifikator komentarja            |                  -                  |
|   uporabnikId    |        int         | Identifikator uporabnika ki je dodal komentar |                  -                  |
|     objavaId     |        int         | Identifikator objave na katero je komentiral  |                  -                  |
|     komentar     |       string       |              Vsebina komentarja               |                  -                  |

**Nesamoumevne metode:**

|      **Ime metode**      | **Imena in tipi parametrov** | **Tip rezultata** |                       **Pomen**                       |
| :----------------------: | :--------------------------: | :---------------: | :---------------------------------------------------: |
|      dodajKomentar       |      podatki: Komentar       |    StatusCode     |                  Dodajanje komentar                   |
|     izbrisiKomentar      |       komentarId: int        |    StatusCode     |                   Brisanje komentar                   |
|       vrniKomentar       |       komentarId: int        |     Komentar      |               Vrne podatki o komentarja               |
|    vrniVseKomentarje     |              -               |  List<Komentar>   |         Vrni seznam vseh komentarjev predloga         |
| vrniKomentarjeUporabnika |       uporabnikId: int       |  List<Komentar>   | Vrni seznam vseh komentarjev od dolocenega uporabnika |
|      preveriPodatke      |      podatki: Komentar       |    StatusCode     |              Preveri ustreznost podatki               |

**4.Novica (Entity)**

Novica je razred v katerem shranjujemo novice ki jih uporabnik dodaja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |             **Pomen(če ni očiten)**             | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------------------------------: | :---------------------------------: |
|     novicaId     |        int         |              Identifikator novice               |                  -                  |
|      naslov      |       string       |                  Naslov novice                  |                  -                  |
|     avtorId      |        int         |          Identifikator avtorja novice           |                  -                  |
|     vsebina      |       string       |                 Vsebina novice                  |                  -                  |
|     obcinaId     |        int         | Identifikator obcine na katera se nanaša novico |                  -                  |
|      datum       |        date        |               Datum objave novice               |                  -                  |
|     lokacija     |       string       |           Podrobna lokacija za novici           |                  -                  |


**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |                       **Pomen**                       |
| :------------: | :--------------------------: | :---------------: | :---------------------------------------------------: |
|  dodajNovico   |       podatki: Novica        |    StatusCode     |                 Dodaja novico v bazi                  |
| posodobiNovico |       podatki: Novica        |    StatusCode     |              Posodabljanje novico v bazi              |
| izbrisiNovico  |        novicaId: int         |    StatusCode     |                Brisanje novico iz bazi                |
|   vrniNovico   |        novicaId: int         |      Novica       |                 Vrne podatki o novico                 |
| vrniVseNovice  |              -               |   List<Novica>    |                Vrne seznam vseh novice                |
| vrniVseAvtorja |         avtorId: int         |   List<Novica>    |         Vrne seznam novice od določeni avtor          |
| vrniVseObcina  |        obcinaId: int         |   List<Novica>    |          Vrne seznam novic v določeni občini          |
| preveriPodatke |       podatki: Novica        |    StatusCode     | Preveri ustreznosti podatki preden doda novico v bazi |
| izvediIskanje  |    iskalnaBeseda: string     |   List<Novica>    |     Izvede selekcijo novice glede iskalno besedo      |


**5.Predlog (Entity)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |              **Pomen(če ni očiten)**              | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-----------------------------------------------: | :---------------------------------: |
|    predlogId     |        int         |              Identifikator predloga               |                  -                  |
|      naslov      |       string       |                  Naslov predloga                  |                  -                  |
|     avtorId      |        int         |          Identifikator avtorja predloga           |                  -                  |
|     vsebina      |       string       |                 Vsebina predloga                  |                  -                  |
|     obcinaId     |        int         | Identifikator obcine na katera se nanaša predloga |                  -                  |
|  steviloVseckov  |        int         |    Število uporabniki ki so všečkali predlogo     |                  -                  |
| steviloNevseckov |        int         |   Število uporabniki ki so nevšečkali predlogo    |                  -                  |
|      datum?      |        date        |               Datum objavo predloga               |                  -                  |
|     lokacija     |       string       |           Podrobna lokacija za predloga           |                  -                  |

**Nesamoumevne metode:**

| **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |                     **Pomen**                     |
| :-------------: | :--------------------------: | :---------------: | :-----------------------------------------------: |
|  dodajPredlog   |       podatki: Predlog       |    StatusCode     |             Dodajanje predloga v bazi             |
| posodobiPredlog |       podatki: Predlog       |    StatusCode     |           Posodabljanje predloga v bazi           |
| izbrisiPredlog  |        predlogId: int        |    StatusCode     |                 Brisanje predloga                 |
|   vrniPredlog   |        predlogId: int        |      Predlog      |              Vrne podatke o predlogu              |
| vrniVsePredloge |              -               |   List<Predlog>   |            Vrne seznam vseh predlogov             |
| vrniVseAvtorja  |         avtorId: int         |   List<Predlog>   |    Vrne seznam predlogov od določenega avtorja    |
|  vrniVseObcina  |        obcinaId: int         |   List<Predlog>   |      Vrne seznam predlogov v določeni občini      |
| preveriPodatke  |       podatki: Predlog       |    StatusCode     | Vreveri ustreznost podatke preden shrani predloga |
|  izvediIskanje  |    iskalnaBeseda: string     |   List<Predlog>   | Vrne selektiranih predlogov glede iskalno besedo  |

**6.Sprejeti Predlog (Entity)**

Razred v katerem shranimo sprejete predloge

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |      **Pomen(če ni očiten)**      | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-------------------------------: | :---------------------------------: |
|    predlogId     |        int         | Identifikator sprejetega predloga |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |               **Pomen**                |
| :------------: | :--------------------------: | :---------------: | :------------------------------------: |
| sprejmiPredlog |        predlogId: int        |       void        | Doda predloga v bazi sprejeti predlogi |

**7.Uporabniki Kontroler (Control)**

Krmilnik za entitetni razred Uporabnik

**Nesamoumevne metode:**

| **Ime metode**  |              **Imena in tipi parametrov**              | **Tip rezultata** |               **Pomen**               |
| :-------------: | :----------------------------------------------------: | :---------------: | :-----------------------------------: |
|  registracija   |                   podatki: Uporabnik                   |    StatusCode     |     Registrira novega uporabnika      |
|     prijava     |              email: string, geslo: string              |    StatusCode     |       Izvede prijavo uporabnika       |
|     odjava      |                    uporabnikId: int                    |    StatusCode     |       Izvede odjavo uporabnika        |
| urejanjeProfila |                   podatki: Uporabnik                   |     Uporabnik     |      Posodobi profila uporabnika      |
| brisanjeProfila |                    uporabnikId: int                    |    StatusCode     |      Izbriše profila uporabnika       |
| posljiSporocilo | posljatelj: string, prejemnik: string, vsebina: string |    StatusCode     |     Skrbi za pošiljanje sporočila     |
|  pridobiProfil  |                    uporabnikId: int                    |     Uporabnik     | Pridobi podrobne podatke o uporabniku |

**8.Komentar Kontroler (Control)**

Krmilnik za entitetni razred Komentar

**Nesamoumevne metode:**

| **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |             **Pomen**              |
| :-------------: | :--------------------------: | :---------------: | :--------------------------------: |
|  dodajKomentar  |      podatki: Komentar       |    StatusCode     |           Doda komentar            |
| izbrisiKomentar |       komentarId: int        |    StatusCode     |           Briše komentar           |
| pridobiKomentar |       komentarId: int        |     Komentar      | Dobi podrobne podatke o komentarju |

**9.Novica Kontroler (Control)**

Krmilnik za entitetni razred Novica

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |                  **Pomen**                   |
| :------------: | :--------------------------: | :---------------: | :------------------------------------------: |
|  dodajNovico   |       podatki: Novica        |    StatusCode     |                 Doda novico                  |
| posodobiNovico |       podatki: Novica        |    StatusCode     |               Posodobi novico                |
| izbrisiNovico  |        novicaId: int         |    StatusCode     |                 Briše novico                 |
| izvediIskanje  |    iskalnaBeseda: string     |   List<Novica>    | Izvede selekcijo novice glede iskalno besedo |
| pridobiNovico  |        novicaId: int         |      Novica       |      Pridobi podrobne podatke o novici       |

**10.Predlog Kontroler (Control)**

Krmilnik za entitetni razred Predlog

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |                   **Pomen**                    |
| :------------: | :--------------------------: | :---------------: | :--------------------------------------------: |
|  dodajPredlog  |       podatki: Predlog       |    StatusCode     |                 Doda predloga                  |
|  urediPredlog  |       podatki: Predlog       |    StatusCode     |               Posodobi predloga                |
| izbrisiPredlog |        predlogId: int        |    StatusCode     |                 Briše predloga                 |
| izvediIskanje  |    iskalnaBeseda: string     |   List<Predlog>   | Izvede selekcijo predloge glede iskalno besedo |
|   glasovanje   |  predlogId: int, glas: bool  |    StatusCode     |    Poveča/Zmanjša število všečkov predloga     |
| pridobiPredlog |        predlogId: int        |      Predlog      |      Pridobi podrobne podatke o predloga       |

**11.Zemljevid Kontroler (Control)**

Krmilnik za entitetni razred Zemljevid

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |     **Pomen**     |
| :------------: | :--------------------------: | :---------------: | :---------------: |
| vrniZemljevid  |        objavaId: int         |      iframe       | Pridobi zemljevid |
crud?

**12.Registracijski Obrazec (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------: | :---------------------------------: |
|       ime        |       string       |            -            |                  -                  |
|     priimek      |       string       |            -            |                  -                  |
|  uporabniskoIme  |       string       |            -            |                  -                  |
|     obcinaId     |        int         |            -            |                  -                  |
|      email       |       string       |            -            |                  -                  |
|      geslo       |       string       |            -            |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|  registracija  |              -               |       void        |     Registracija uporabnika      |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |

**13.Prijavni obrazec (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------: | :---------------------------------: |
|      email       |       string       |            -            |                  -                  |
|      geslo       |       string       |            -            |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|    prijava     |              -               |       void        |        Prijava uporabnika        |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |

**14.Odjava (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|     odjava     |              -               |       void        |        Odjava uporabnika         |
|  potrdiOdjavo  |              -               |       void        |     Potrdi odjavo uporabnika     |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |

**15.Pregled profila (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Nesamoumevne metode:**

|      **Ime metode**       | **Imena in tipi parametrov** |  **Tip rezultata**   |          **Pomen**          |
| :-----------------------: | :--------------------------: | :------------------: | :-------------------------: |
|       prikaziProfil       |              -               |      Uporabnik       |  Prikaz profila uporabnika  |
|  preusmeritevUrediProfil  |              -               |         void         |  Preusmeritev uredi profil  |
| preusmeritevIzbrisiProfil |              -               |         void         | Preusmeritev izbriši profil |
|       prikaziObjave       |              -               | List<Novica/Predlog> |  Prikaz objave uporabnika   |
|      prikaziPogovore      |              -               |   List<Sporocilo>    | Prikaz pogovorov uporabnika |

**16.Pregled tujega profila (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Nesamoumevne metode:**

|  **Ime metode**   | **Imena in tipi parametrov** |  **Tip rezultata**   |            **Pomen**             |
| :---------------: | :--------------------------: | :------------------: | :------------------------------: |
| prikaziTujProfil  |              -               |      Uporabnik       | Prikaz profila tujega uporabnika |
| prikaziTujeObjave |              -               | List<Novica/Predlog> | Prikaz objave tujega uporabnika  |
|  prikaziPogovore  |              -               |   List<Sporocilo>    |   Prikaz pogovore uporabnikov    |

**17.Urejanje profila (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |  **Pomen(če ni očiten)**  | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-----------------------: | :---------------------------------: |
|       ime        |       string       |             -             |                  -                  |
|     priimek      |       string       |             -             |                  -                  |
|  uporabniskoIme  |       string       |             -             |                  -                  |
|     obcinaId     |        int         |   Identifikator obcine    |                  -                  |
|      email       |       string       |             -             |                  -                  |
|      geslo       |       string       |             -             |                  -                  |
|      slika       |       Image        | Profilna slika uporabnika |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
| posodobiProfil |              -               |       void        |    Posodobi profil uporabnika    |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |

**18.Brisanje profila (Boundary)**

Predlog je razred v katerem shranjujemo predlog ki jih uporabnik dodaja

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|    izbrisi     |              -               |       void        |    Izbriši profil uporabnika     |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |
## 3. Načrt obnašanja

1. Registracija
  - Osnovni tok
  ![image](https://teaching.lavbic.net/plantuml/png/bP5DJlD038RtEOLLDh10gAML4EAh11Mi4A123-1Ct68IPeBZb9_RS1ZkXPFmaQa02HR98lCyhrzdRZaZM8QWQNXAaYfdNwBWFQJeyfM4scSk54501NrbH-GreZ9QObte3JtfSS4hVs_7uEn54b7eDCX9a8nareQbXQL_0JudTj3ZBIl5a4XuZ7o0wB2YXvgyetDUskCfdhOrEJivE9rzGr-XA3ikqUlVXM_h9kqgCBWWeHLNAcp_3Ueo2AQUym4SNyDY24T7BJUT9adPHy9Wtade-Cw6GqW5NyWD02kOJynActaepoPkU8l_0nZou5L2GT9P8xDSz-b7gIF7HjhDiJRfpHwyHYLhcrZXtQaLE8Ho28V_GFgMkBtJe_D9OYqRT6Jew0jQXWmrvzWO9TQmCSPcx3T6ARGcuQkMfTwnVhiVqNjxSAseTJKB6SK1uoOWC-FkSpVyPSB7Wfi76MqqdRJOOjXYb-cQAkN-RX42r5L9Rw-Uuxtv7G00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjDG44Nt_efHsC2YYX8Q2LKbKXl12a6LaXsRyVCacTfzynYFqvA_uMFuByPsmOvQ5YpiXUUSkVVPtdD1i1MnN1wph2uv9bIyXnn3kLDfOX6a4WLJZBMFADg8AcYBJMLVwT6kAjx5Unz3y1lfYC9WejUY1UcgMvPNllqPy3UnXnxsR3I6LELXv0ECXZLzRoW6-iHRloADqrujFbw_-x1wWRv1DGwSCDh_2o_MpRgZmEGpAUsuDcL_Rz0aKSmZbnEukeND32ulEswvpB8qh8J9kfSmy9s7W-IAHmeJm1hM2xVoDW_rXuidtkPF04CfqLGgqjwQknNwH_-KUlBSIVzoREtszXnyG2DlctdXiwKNk80qWulte4DBVFrcGDUBp5kswDpH-JCqIO5MyjYOPzwmDSxTUDiQIUb0oZSTIuFZ_SwULa-dS6jeJRsIWhe5J_LE1mMTv2mwR3Fhi2_vWMhZuSiW24HgwaI_VaR-5gVJKNM6e_y61NU4AHsZ01-JLF6E8k-XBoc7tm00)
  - Alternativni tok 2
  ![img](https://teaching.lavbic.net/plantuml/png/bP6nRjj038PtFGNXBkqG67Pje0WI0uxHJaKIEFMMXJhHDYFvJgKe9ytRv4MwvRrAIMbrXfsXWsuGlu_yxxZbZ60TWgRXAKcgd7s9WZj8qUKR2RNFN2Y2W0hwoahaDQ8oMcDTw0zwqdd16x-pCZWxI28AdGQv2fAHBDfcQM7TZu1_4pleSSjACIGI7YCV82fMzBCcx-Wxh-tp54_xCFrszUNhuWHzYwBik4Il_o-SZ9kqLu71DGbjk59XUpUeoo2OUiu7CB-3rGWkBbfkDakIicy9WsKdeUC76muX5NmcDm2iO3arAstceVmoyS1R_Ht0a0Ul4WgIpXgRvRfVxqeTEJ7IDiVQT6_kmNjKihI91JwRMO1pA4TmVWdIfyIFdtfqEKqiPOEE3HqVeMN8K7EEZN5Y2HjZOiRdnYY5zYHysxBKEvRlxAtrS0XtYbfNYv1Hs-0jtc4XeuCvqnPRZLhi9jrJfTnl1Y60fxegwVN5yxqV3gFezgeay43m-fiWMkmV)

2. Prijava
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71RjD048RlVefHUW69gaf895IraTe8JaX4ARbm6zkJTB2pOsR7QU5jU1ZUYx4TcWsKGm_smVFz_tphlUUIO2DYkJncMQmuDAYuWnoBQglIXhAGMXHCCKGVKR24Acc3RMsVwT5kQjw6dO-Xy1TfGc5XehUY9UcYByjhR_y7UDeuG0_tR9H2glAGv06IOQHlBOM2FlB6dq3fjhFPXzjtxnVFq4jKuu8R3FRomBEwMNyK6Areoz6K_Qz1suXY7hWQmSqThCTmTTLJytcMDST262sLl-8-C4Yk-8EA4M24rSpvlDk3-jqZ9udrdsg6IeAfrAH3QkAfOlZqtz10Jftq6sFhsZj_tgEHUsQkUZvtWKjend1v3KtlXwzU7wdLB7F1ZfeuDKafsY7NRs1BiPOqCSbShajCFV5sID2Ub9TIebNq1OV_87yrkEZvOT751TmPMXiNKb9QDpqAyDCnyIL5XmEV3aewqP_rs7hSOv_oFKNZuoqZ2BIneLy__IOFBhy1)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPBDRjD04CVlVefHk8145IKq4gfAf3Q24n9HIYuLb_5waapix2pZjLloDZmCxyLuNOW3vS31FdX-_u_TyOuBWer8pEKno-gIVK350-JeogrAumidbIX4HL_RY7mSK0LjiAdYPtgCDnLl_S76uEn5Eg3GHT5RqO9qaSpoojp_0dudzj33ZYCD8LLv6EW11iEQlZRa7NtaZJsUXcalPXzktxvVF4ClKICx3kZZ_mkUhPkbey1eHLkkexBT6ZH157FFvGXkxc0zWUlhHCtdMHPEXZ1QAk-nzGoIAnx9ZG1hMCsCpxiSr6ycELEiVrapbEAZIaNQgwQcSlsdVufwyj98snZ7phthpor6ifwPLRsOMu4h21EuUWSXzSENhqxKQfPPmOwQ6ZKTKdH0hbx3bkfAXeffPkKwnQKftlGAQabvAGN6akwnlmVvmy6ANZm5ZSTm5p4szK8AIdPFFSy71PsbpXAsdYJiKzvI7Vcq70G1JqqTwCTtpr_yUApz3j7ndk5e_q71YOXAHo_0no2LtvFd7OHKNTgV)

3. Odjava
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048Rl-nIJUj438LIQ68CaG3GnCO60FC2qEy3IibktMy2tTzfYMHGF7hg7plV_ysrseoJ1oXWNcwCGHQfqZXPt46EIhgqfjKnCPYmuYxhW4MddKP9MM6RkdOvkbAcrtl4O4Zx8UXGcpjYniPBif2wBCsx_1RGR6-YmKOvyo5fpyF80th2WZv9qGczgnPycVzjDz39-U9vSeMTedKfKZjhzFt1LLzHNWM1crHRtsPOqbBcn66kL1Z1QmB87Wq4D3OT2vES-2AQI8nW05Z2Fc8ghShIV35vmo-z21QdHpfgCR9CAEPKql_uCDMIVINucvQhsIbhjqH7R2HRi35dW4V8UF3w1gQrkxyxGF1BiLq4XGw47jLTzbJuV2ZQh-3xpzoslMgSVIRRhdEgxNLWuT6KnCPBgcfFSvK3InRQenfQz6fl6UogSEhy3WZa9V040)

4. Pregled uporabniškega profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7FJi9048VlVOe9NlH024WJGv04Y2Oc7XgK1vYsKnXQTkkm_D67y-PxEIrGsgW73-rXz_j-yzlT9SS4YRKkj0VFswHiSXHSGuXHkX2xDN5aColW1Cr6jyYu6XLJWjlClTB1ZJDUcBLkGwG_aXg5aRCoiHAJJCkmCDFq7q0ryGZjb-oe3edOVSq7g6rkw6rB9g9dJlGpL9zsvJzExXwclz01YkE8SpJk_yAlTRtoAD0AX5UuorPaO9jRmT1mseBn2yoxC1oMq6ZaUVabht1eaL4CkTY4Csm1Rc3cAnuMKr3UrMW8ytCoGsgD4vkH7AsUMj5nwK_fIFQLrFTYLwGNxNc7ZhIcfqtR8oqmWBmBWtkjnIb-S52skxwvi3FVqve5srEsTs9Z6vxPwWQUuhhMyxHdeVLLkosqdHYk-c7JqwRjqunE1oggp3ZrRAp7r9ZabzIyMr91SPIlJpvTzUM9y1i0)

5. Ureditev profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Rjf048Rl-nGZUaaFA8BYga89KeAQKmvMKXvWx1t8OhFZZjSapSFrrlVgU4t0A10f1_lW_Vv__d-yJyuIB9b3nY_6r8Np5Gfk8CEyM0attkPSia0GzBKUaGyzoj8IcpByefTmKxgLt-WnvFeYwL6O1vPR5aioZsPPgUxlWFt43df-Se7wa0W_dzRNzBiXdzEzM-hZgJ_hIt9t--Fd_0ITeWINkmfz-BpWP5WJYy0W5RV6RRac3qt5WfbtnG1k7c4nWgkh2CrcnbG7lrP3gv8iLC9BL-80i8Q7xufdxHIKFweu4Yo4rkZNTAn8FbAyPN5Gi0_29Kcd6gigxpwT5NNaH4dzlowqxcrVjyL0Minej-5C8q-X6i7qMcDHKsz8T35RpMfT6dDUV3LQQwZeOZI5oqlGPHNu2fm9lkOO3zKcKPjnjE6QBMS7zNxcGsAqRWkF5VxMmirk9nsC5nLR38NhYyP6sxQYYOeckw1RZPb6bWuQxJhSkMlCnu2XgUTigM-Gz2FkLuNdJDAEZ3TZJqU_NUUpZAMZ2icx3Vxxwzw2H6btAmxt3_y3)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Rjf048Rl-nGZUaaFA8BYga8f4a7jgGShAGymzWvaiTbnnskIvk5wwtjrlAR6A52f1rkov_l__V-ndvmbs327Z5-CgGldAnJSGuPviHLklCsvP84Ww6iTaGy3oj86cp9yfvUmBDtMxtKCkTv81XJcWUMUnPAiebbMgliRe3-nWvwVNA0X9CBFb_Kr_MZ8v_JDRVJoD3phNVBr_jENrGKwHGakTnNwyF-2Ys5DB0AZfTqxxshTcJwEOFa8wmdStSNfOc5CTJA2KIgqBSb29Rnn9Ou0QtZug7ZMsgFyLCMPO2sqGx-ZSqNoBqN5WfbtXOE2VH0kIJhLL5Lvz-ggg2DdIkg7TQ5rRukw0mRIOaQxZHSQUGxL1EQVDHOrzPv4DtBGhDQbCUVDUwErnegk9tEulOLKN86lm9dWQuvng3Q9saoZ3TTiEJkf-pCV4gDrMtYgy8SMReuxwM2ygTXYADnGD3NQjXNDL3Gx1Zrep3IoTD9er_7HNMC-1WnDlM9BGuDa6B5V5LupIJkot967dev-nyvN6Kjd5P8t6_pzo_qD4gNTNm5Dd-aF)
  - Alternativni tok 2
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjfG44Nt_eeHtQGBXA1GLIX5Ib2xgbIKb5qsOxy11fitxlZPIVqt_PZ-LySs0QFIIbtO2y-vT-vzppjs11kH4CjB51Kf-nmL3n1ZacvLIkyIoKGXAFh2HkH3ZtAqmJ8Bt-Wbt6MyzGSRGs8lqXw5IH2z5tMaozOipipz3-2qiOEUTnoe3wdAytLzGTzByWbzuOqzdlgxtim-tt_ujBn2hr039voZ3_ylk1esQel0OAMynohRauSo5yNOSpg0kqTOZ-7sjeKMYoZAptwDXhOPESXLDfpX0B20X_U6nyqMr1-ck12ibVReztIfcFrByPg58HKVL3BIJZKnLT9z-gke8wT6slroQDoRlbnX82iMMRVXmYBF8H_3_AF5eh8uaDh1L9RLyQhDUVCsibf3GzVZEOn6O8ULOWqIAzO9jaEpcPdDfBMHGfp4P_LfvyCiiheDF37uNGENnpFfOBp9nM58kI-QHDQs4KrDD3q6hIpcgcNfhB6kmwExnNmC6CfYAOvQWsF6ou6ZYpspVislSKL5uFCFWI3WxOXo-lNJyvCVZGfBSg13pD1baEhrRg6s7z5nomUbsWjmdKjcLJtlJlXl)

6. Brisanje profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP51RjfW48NtFiM8Rf85Ya1nLQ4KAQ16YjG5Iie1nlP01fj_dFb_avJRz2BTvLuTsq1iXLRgmbvutlVclV4JPmGhaP38QnJvd5s9Ybj8CCtNAfNBKYb48IWwRoDoeQFAQ8LL4NxGQxWjUEssDeRKNgGT5QP1T2QQaSuRiwGmzm-2qyPMzFB4WReYLNavptjwhiYbz9rNzZZgxleKtys-V9kVKIzG0wTSeWl_3vmD6pL5OB1Gtk2ks923gXJ5n74-WDj7M8xWvgOHJQTHLBxxrGoj2ygWL5bnWGD03m-VJPxKMr1_6j43PieUtORwHFmFOddCmf2B2oe5QKkDZKhRJt-5MkMrAUt_SgZTwxwymq1MBB9kmwb5da0vWibNYqMLtvBQONRt-yJIyg99Ud4PMR6XYPUZ2LnTWPqhnpr8ehXFyTtq8Mw4PXgRwRWsvTQejeYRoVWuIGxdQ7VWnUdmzzbbnt8SMTaQl3OmxbYUUlP9ApmyxB6aZm53vUUIKMDpYDOVPDJR5dze-lQRhUkEVE12GA3o9RtzSdAgSFoZVm00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71RjfG44Nt_eeHsIGB587Yga894g1MYjG5Iie7ZEs1J6tUkFEUIShVz4UwotzrR0En5Lef2rkovzupzxxtn1d1MYGayX95FcTNek8M4appZKhbibGAKGYApjk8NEYeCbfZLOJlz19c1M_SriQGsekqey8qYCv5Cz950qiAexyJd3QsekSd3jGLgShpUR-ddnMvbBxnsXv7tLqNyTVvvo-BC-ebQk2KItJXuuQpOQEc20ncsPOTUpip-np0x15M8xYzRQRJQHILRo0OB9Ks1MLGggovm06WXuTF9azgFEelS_GCSsMFxWVr7V5_7AjI51F7EKCkBgWKfArhRAwq_VLFKwkyCQLTB8UQNXVb7GQoOf5r6qujyWJA4KpkB1PLVajg9xAxtoUMbfTDqikho8eDJRmQJU3w6fRAEUv14iLzYc_GXxWH6ZGswBY6SWkg4N4p6HydoU4usXruMHrptsTN7UGuihArySQCSGTvwjbtMk7XOOybVGmOAh-GZ1hC8Lf_a55lM_okwUiVjguxye4B0O7Ab_Jwsycfml56_m80)

7. Dodajanje novic o dogodkih, spremembah v občini, aktualnih dogajanj...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DJiD034RtEOLLDh10LIiY8GILe88D22f-3k0aBhW9u-1C0Xo7Yx3ZNdYIYgOYGcAHA1g_PtyJFt56i1JnYRn5KPMpAr7n6H9CyqULscMf5ABW5Lrb9NA-HsMqnBhmz_JcJmj-TCzMXjHUf3qAKozw9fgHpjjcIM7TVm4_4plezOazzI5LUHtsAtgfoQLqnKjx7FLdxSGNPuVdym5wWUevvHAT_xym63PgBmAZXV8Acs95Zg4kHJ5nd8_Wz0uU9d1yt5ApMHILcuOmkadCGN3IS4eZm0fkOuEJC0JrtVWj_3fmU2dEgnIadJ0r8UsEXlaEEp3CbiG-T0sXkK5F5YwoVFip6tm4vGIEJa12A6vTsTtReBTnPEa2EZLq6j1CCbojoTA-VSvzOHfPkY0Sc107eLHgI7dHihHnBDx-klDu37SUVLtD9QDV3GOd_cclxxPTo6WhPTnY3vCMiqtc-FN9zYCQgZmN0W9rLTBNXvCk0BeLTLkJRm00)
  - Alternativni tok 1
  - ![img](https://teaching.lavbic.net/plantuml/png/bP71JeD048RlFCMaNlHWJ1j9ZD4cskX5eutL1nXWsax17HmMrCVnHRprlPo5njBOYmS8sVs-V_vbbvmHp4Ly8XzHLENiIbHyXGJJVA5IkooLGXIyegjiYvplKHdDiIxyCttugu8NxjMs8RKNQO_2r8jUYsQaapOiAIpz3_0xiOFUb-of3wdA-tw_ehUQN4htFBV7KN_MGNnxVNOpsKDFKJsdNABp_nVsbetQWy1Wghp2fbYHOwXBKKmSvmEuci7B42ukMceyZg9o6mY3nyGS12SDfpG0hE0fDZW9Gr0_ZT_17mA7T-AyIa7Q2ICJqcvfFzzXfuRP9R4FgQ4qD-Z9oaNMxtXiWy-X7CBv9KWenQqhXqTRz2cEh5r0HuQE0ff9XgiDMTgtpxalZ29h5uHJ4-8Wb4eDAKzRbhQErJlU99-SmCoZhwk9PDG6RDhjRcIqCoTkiPTXYzbTvBZ-PZjAGvNdGa30KLsLjFvoqjL6jwBkpyiF)

8. Urejanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Jjj048Rl-nIZS2c722MDgog2I12rbrOb0l80uzr9sDZPSSThGtcRlaXll5V7JW1RH94un8VCz__p_sFVUqUmOeufFnfJPZuKABY556ss5gw2ivopG1GCfOuen0xbQ8LL7k_eCLxcVXssEWQh3v8EXJQoNB4uadbhbkRg_WvutRY37kvzf2uamW-7zINzhYXO-kbN-WlKtNMIVB_w-cr-W5wWH6zzWI5-N70mh6cBm60XVeDrlg7WeIfOC0q-6y3bBIn7S7xUKhEPCSMR8Gokrpav25nxImF04cw-A9isEr3-ADwZbq8R31lg2P8ZWbyDXpyuHE6SP2SOgy3k_ZhCxx29OlfIVMnScvA-naXQncYVuKoJJg4OmVG22g6gt9BeDMgDw7nhmvzEZROPAheSJU7i3FH26Ju1fu9F5jkXsYHgCsvigfxqTU5DOhHZGuwL_Dmkv98TfozmmGvZvhkQiT6QZMQYcia-PAqH5orBRnhjEToRQyJRYB4gv-oeQv0SMthKO5-mFt3K2vgykz7pFwzNggcCFcTWgCg2dly6RaxK-G3uFm00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjD048Rl-nIZS853L2N424KbKXl11GHHIsvSnhkJT6DdnupNRidRy2BS-buTsw6rrQXI3_R1y_t__F-kRxmZs337bE-CAJCV2XJSGuessmfNmLdEMI0AXb9756AFShJ1Aey_wIvUv7uRzZe6go-I7eKsibooE99bQvRcwluCUDpOGRStFb8V4k7Rq_gIVbSKB7tp6tq2zNUzIRvSVloyF46lKAAtli0GNoyu6TQqHM2q4h_3EjzHy50LB9W6dutWuXhM4pW_Rwd5mfZYoH16FxOvEGXSUqiZm1AkFYYRDZjG_YW-eDT2Emmx6WYI5mJV6mw_SeZ2EKadcAh0TfzEynqsKqmlrSV6jIdfQuoaPOps6IyqwHoA2Sm_GI5KbNiIFOrQ8phVsl3RTqRRZ1LTJ-PmTWPwGXaUW5F1WyLsg3Q9samRcseWVLnubHZjs91J9T-t2xban-b_k627CVDzpTHepKOpKyti6BBMYAkMfIUDzXmVpJNYTSHObKjsr1eSymq7ZWPxacSLx_zvBLbJ6NtEm13qU0gw_nkuwTZTuA_GNIB3GNytvrie2XtqxpbcUm00)

9. Brisanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPFHRjDG38RlprDOvGOkggbbGQWQbROAf0a4qqOVm3bnExVfSV0voKRVXXVXRk-5arOZfTKaBfAB-Fj_-xULUou85Y8fbqVduff3XOeRoD6lbofrABoKef0KGxGIXTIZ2bfWNQRlz9WkIrw6ZPN1sukqHw5FebUY1UciCyjBSpy2dZlke8TxJjI7LENXj3xIZvg2fo-yi2TGlzUhxDFL-u-p4_GDQcBF5ORq_uAJmxek20nkb5VOb2iA37KbYddWzG0kxs0-WekBZffEdQl-6iBWsxAa0e8qx6a06E7sdR5vsmFrf-47z5nfXM551uBi1S7NbiFF4f9AIReJZ4tWTvzEyplit30xAgVMjGt93IQoCCxo3ASswGIg4Km-GALKnmsfRQEvtkRAaJiZUVt6MPwXmVFH1CxEm7QqnYr8hhZrs1NDA3EZSMl4_uYVczvcpdAsxDZOjyTijn2yBlgQiREehURSDDbB6iiwt9lRa7S9KnrdKb1di9_mi53GGP_iAEJJRxQO3SN4fO107Ijw-XN4VZ8RmOvOxu_u1m00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPF1Qjj048Rl-nI3UsaE9jYDIZ6fmJ4DX9Oq9FK3Z5PZPs9vHvbTEQdVfY_IMzwh8zcaScq2FKYWdU__P_uTTCy5mLmavVBiN5nog51n1JdwvKAb3eMNKXIIOeXMef0wL45phClqWvxJfEH5M5aPlBr8EnJw97eXMf1EMxEyDFS3uBNZ5dgwvqHTI5MUZkiZFTOKF7tZkJs1khtUPPSNdxvCZz0tg8azLnZI_mkE3klQ8D2R52iE7EtExBC7apkO3U3ylAsEnyvLVusWztrHKW51rkof1nZXzgEnUUED-jFmFNgcz83XWVO4sHk2wuR3hnAIIacw5GnDuBT7n_ajTcQOBPDJuzg4upKciZ3EylJ7Dka8gW6CFaEbLCSLgTt2-cgJAqTkZUJzYRCyVODdWn6SdiADyX8t8BdYncDRDAFCZ8QD4VyZVcrwcpdBsR13OpySiks5u5NHrGoTHMqqPwR9tj9OrlxEt8QyIvZgE9M2MeFTXFk5WlRwP0SXNtwpnLnJJ5mA2DInefTVGUpdiX5iYVLkYNy0)

10. Pregled novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7HJi8m58Rl-nGdUACNXB2mn10a0QA9qI11UO2kEuncevrd7Q0FvvtlvUc6Ci9kl5Wlsk_xpzzkesE4jRKkiWSXYbIRN9BSGYHLcf0jJQniPWaSILFm4HhNe69Sop9pRtXmaqmdPil7e7X1Qb1IEKjJIp7Ih0gBCaw_0Fucrj1-enqs8IAxR_SBV2_HA7pMQ_uCDcTTXG_Js_jP2xsGvBJIkJJk_q9hML5T13fp94nquKZpgq6PMvAHqMa79g-mwiDeL77ZiH3vAH8wBqc6CHYxqmex80jOXin6Vega3yRFwBddv9CrZco6L0i12whUQkThRC0O_oNjVAflhNVI8NSJNAyxvi53oFiml8EST2e_TINRwviJkmm5r_Dim6nmP6CR_RBLFUHZt7G2mGszCs0dzCwEpAN0_Rh7v5uFwkALUQnssepnB3oia5M_GXQ--lUNhb_K_W00)
  

11. Dodajanje predlogov o odpravljanju poškodb, novih idej, težavah...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DRjj034RtEWNXRDf54DYmWC983IH6ksc16lav0AMX7LhoKAL6jdkSN2GxtoiSoQbbn2sGXGHe-1xvKVF4Zc0X4ZBP9KbTiAzGSGqPviLIfV4kbr8KWgAlhKG-z2X72spAy42xS5Foqg-j3BczI7iKva7qLjIHpjfcMMdTtm5_9tRGzea3zI5LsPxtQ_hTaC_f9o_iyTIVTP5-l_toRNQ6dgC6phb27pukd0sRj8l0OAwymasv8i_GLAAOUIu6S7CFZqEulcwfwJH9gcD36FpAp46OAxbIbZW0hE4kDJoBOr3_c74Y7CWVueDAITeP8pFoxkWVGiUDZREBuX3xnk2ymK0MCB6CbrCRFO5g29El834O7-HFdu_iNPfOmCYEZ1r5red3rHjQsKSek6-C4WiOZR4PQJGgfGqfprkMZeu5l3oqlhg2-u2XgMVYw5s3yoF_gn_MEoquEecPjjZZiCNiGWlSlx3zYmtLWKi1WQQkQF_ifKk0VaLn6Kln2W00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71RjD048RlVefHkC2XgXBL4gfAf3Q22qX4BRrn6NidwSJkZXcFqzAtuKMuzRsOjGDnH7hemPRi-Rv__jNUSI1OYLWXZrdMLXmRLBo70ijghTB5K4ej2gOOMnzHj14LQ8LTRT_eqIvhNiTx7qFfBz8HXQM9Nea6qaKVLjIU_X_mR-C0FTonqHXIbOVZVai_EeebVU6LFv76kzxadwxUVrmSePUenYKt6Etrmj6oMNyGc2oLDxYjDnGPkaOKYyZL12vlu7OA5nSzDPzdMRCFXCdNmXs4fLAePOqJm1QkSyUBj0Rrfni7mexyBD5KQjB1cBbH3hzU40Rkp3c_ABQKcuhp5esyOEOTJ-Q--XoQAPn_04d5U2U_VRTdh_FC2oPsvkmiiK42RlwYZNzOnMDZbdd1P9ovaIUZKTgIyh9dQUzumPDTzEaft1XQrouaK1-mwtSu27Im9--nsscF-OrK-FoR_J1RQerh0O58NTlGywyeGs-C6_eUKoDl3qz-zu5xo9IU8i7GZVu0)


12. Glasovanje med predlogi
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DRjj038NtSmh2tRIBm8WH0qKG66YCDYYGXP4s1w0qj3FMUAXmHae2v0ezH2xILNslKZ-jnqYww482HBxlyL6ySvPWpPmAVZGcLYxKABY30ijg8zm4Mx9dWIGOehOef4nbQOsDJz_fCNtoRXDssePINoIP2il4SibYIPQzMU7L_PNWxyH1z73d4kKY4Nx8U82i6Uc-eL3IjLlh4oYVzcx-vVBZv-KRwXLASgMhCQJ_1zwCQ_fLOB8IjyNMRob0KxDW4Lmr0OnmUmeN5xreiJ2cFlZ1vCfZv1R3bc175ceXwtdZUknchbZHJKDvKl88N0rAg3WaOKyo83D5og7q3sBGdQbEJ-PIPzmju5fCf4cDXZrPwEnpQ2ELLHVj_GTuVeP0MU60tCoD1ksGMOwCctorhzX39pEP6OtUcPoTmtHgsUAs_odj_eL-_QXmD1c_ZEO_6KTEfzyIfYOksL9lCgO_gbiw6ZNlLRUddKglLk7-fmCkMeh9UGQ69jQqVmcqWysV0pM_0G00)

13. Urejanje predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlHWY4GIGmY943rv82eFCEqEi6tPgTCjukFu8jvuBsTRa29uyD0zTBzl_dypIsi8vim-vaqKbPbr1Ggk8COaMmXNpYISiu0NTALUaVCjoj0Sgzo_qiRVvtRXLdeDYHuaBGeJpp9cCIIJUbYSw_GJu2UnWTwNrbCR4k7tbW_GkYpfhIANq9ETw-UedNRHVnpVFKpEq5CKRnDReFF_5yxMZUgdG6SgDiLrdfA3gc31sDci0rZ2x0Q6mneQZQAeECo3pameHPSI548cvmNMmdDVXJZae7oeSwHC6n8oTbuu9scKdYf9y-iFe-5kbTDbMHy6X-fsZPwqOwGrhqUQFO1A1RkpBgyEq7C_qce1wls2TlNRR2_IJe6z7OJNhKdib0twZ0wqjhdUZUjsNppwgfomeRR99HkEJuC2igjxf1ewgj2lgTbDe7H16Mw_B72yfjBRd86XAWlQVZhU9uNzqMg_Z-eR)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH028GcXXWI8NhoG50UODeEiBJirEcsuEFu8jvuBsTR0aNnuA5xsFc-cN-dQvCGB9bTnFiWA59ZSnJSGeHnkX8kRH9pnW9Eq1PQ8kjQL49BB3FtHdltc9cLtMePOZr8MXJ6ZcN2af1CwsPHfjr_0QU93RHR6qTjI8HtBH-WLIpelIGRqujPwcUfFUqcV9xSFqslq3CKPsAJetN_5wx63UgdG6ScPeDLjY4BPSw2aJLf1x20HHyU7cfeF0w2_DmFEWkX3TeDGIwKPBp2MfY7AaH-3ig7EXVAh24XPUk4Cv966QWIDrT_60qtL4v_bd6-iOzkAdIa6GEDsHthx16KAfYZTNjtXkPXeD4yDFW17UEtsK6WcJmx7FdNLIHcnWcwbCwqfkaUs_LwhmvTMKmveTeyPhcuJ-YYVrXJYxwdTFif7huCS5HHuKp6m62fB78wV5hQ-hn-rULfrTy0)

14. Pregled predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7FJW8n4CRlVOe9NlH020GIGmo944rC318Y3z3T3ijaIxlETWLzE6--bxD_a2MYYOVsqFbzttmptP11M7iV8hzNAa_9PPhr5Y8TfmdxmfdOMyyGMBjSIkX2YpAureKDpxWFjvOIjvKon78XjoWT1yzJpmPvLfb5Ljn_0DyTQsYteO1jYDdlMdg0LZ77bm9TZ8-qbkEmtUrYT3-zlfkTeHUQ0yMKQHV-BpWRLrMZG6UEZ0dbWKds1aNcMKUEqWxe75PzkBcfkCb4gUne2PsdnAA1ZD5Od-YANew4Zie-cjz4SC8lQX9Ixm9xYrnB1YA9wwTV53Kt54u-Yq9fN4QdLnrG0Yh9s9r8xp6abb97Szq8Bw-Et7Aa95t93SOIcbBzJWUicU71jFc1acWbF_oBbrZTnhJNQ-gLi4bqV3HuuZsga5M_HiJ-yuCEo_m2)

15. Brisanje predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPBBIiDG48RtUOgXRdHHn691H0gsg0WYHUt6tIIPrcbEpyJ9IRsyZI_YplToSb5Jl82BdCMPxxyC9tUS4in5GYoFKLHax7DKN46CIRPGANsQY1E5eEWB6v4F7IgbEPOktD1ZE7Qyy2iRGs87QOV298YEHLFIIMqMEtF_1dmcDj337GVgGghoqD43T8O5tPVa4xhWkNsUkcbRmzFnmSda1tgA6ZZX77tul-37kb6z2lIcoajSkoLvA7DHZ3rdFS02PdjmT5H3er4KvLz-q1ih5-YN1BbIwcI1jU1gQ8Auoa5zCis6PDgGa8aFAewqaGnCaZHNloWQRjyuUomEbN5LdTSOo3f6LhC_ikn3o1ndbtXMhk9R_6YulVC5NmqZgrZ1WqFWvzWGRaEssqNEqou_YAnVnU__nLktVckwktiTC9J5H5AgjMspZVkKDXA6DJNRgoXxYmpVNXaaNbCHs0a8b4LERo-Ux4zlbYhV0G00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPBBIiDG48RtUOgXRdHHn691H0gsg0WYHUt6tIIPrcbEpyJ9IRsyZI_YplToSb5Jl82BdCMPxxyC9tUS4in5GYoFKLHax7DKN46CIRPGANsQY1E5eEWB6v4F7IgbEPOktD1ZE7Qyy2iRGs87QOV298YEHLFIIMqMEtF_1dmcDj337GVgGghoqD43T8O5tPVa4xhWkNsUkcbRmzFnmSda1tgA6ZZX77tul-37kb6z2lIcoajSkoLvA7DHZ3rdFS02PdjmT5H3er4KvLz-q1ih5-YN1BbIwcI1jU1gQ8Auoa5zCis6PDgGa8aFAewqaGnCaZHNloWQRjyuUomEbN5LdTSOo3f6LhC_ikn3o1ndbtXMhk9R_6YulVC5NmqZgrZ1WqFWvzWGRaEssqNEqou_YAnVnU__nLktVckwktiTC9J5H5AgjMspZVkKDXA6DJNRgoXxYmpVNXaaNbCHs0a8U2gBdDvUFDc_tgnLlWC0)

16. Pošiljanje sporočil
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5HJjj048RVznGZ-W8I217Xg48eKedA4r8ZQ0umzax2s9iTixiEb3jmYDwblLV7TaWSG4Xzi1zsll__vz-zPqkm44cvF1aJA_Or1bn1ZaMr3D9uMuYJ02cWZpeYdmQKfGKsBlsaf_JDyTAlT0o5_YWCA2oIX2i9biAqCykTkhy3jeazz7ZFYOPG2F8uq0CCXf4U6l85tV12Fq_3j2_PzTNNxzCFw1c6n0NNwDF_2pvSrtHLu60MkCIrAyb3Kql0t7Dr01XXVWQNbnqqcHXJx_nQ3IqTMQY3BDXXXz-E5S_R50o_LB4laCYkH5yIH0sHOglAFb7DN_TXgCId88v2hngfgkYFtehkDlxIa-TAwYjpQjtRphp6H5hEQB-JYQvzeJMumcUUTMqEZtRKxTXehPRAb9BeIjxQxt6PqI8jDthFrNttHAuyrYWgQQMLZc4TAMUFGvkHqMQjpVa5MB5OxbnUhqsEZ7OwsMITdjubJ4sSYgLEkzbrxzpINaBMK-DFgAohhTJyhAL-v6kAIRD1e8ar_VtjfQk9dbRzW_vvOTVy0m00)

17. Iskanje novice/predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7VIkj048Vlzoc6UgCN8gQjY4Z0oX44aIBw09jaMiV4dPp99lvvEEzyBoUxLLCjz9oB9B3pVJFxcznJWR1WzXa_6zEKv6ehzX4ocvTBuTOLELSiuCMwHale_80gS67Roj_Yip-hQEaUjGovlb06bCqzouobG3aFpR9Ak_y2lYP6wEcUF0uX4NuQ-023OeD_MtGvNj527uV3QJlJYzdnd_CDzDoAfvngw_p_2nklQq8K65sZu98QBwHxWxPciPcZSWIsWRj3E3qDN9eQKt-tXD5bKrhtW06xEL8iwmTOUL5o3RpcZd8B9JilNA54Own67e_I5DQDkM1HyVAdaWoLJJCYDbLCVolvNpTPzOtOP8Zrkw3EUjJ4HaFlfvhf12XctEs_bRCpRB2mUz_mpP7Hw3qyLlYrmu8kjodZJoNvPoKnkgvUcMvHDFl-wZQTE0fRmLqzJu8-sQPFefv4VRMkq60SAxgJWuEQ6wsq3-12VrFWMhfa4rglUgt1ILY5mdU7FJmNAktx6q7DuPePnmb0xjFdxWC0)

18. Pregled profilov ostalih uporabnikov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1IiD048Rl-nH3lTY3I8i5ALAmHK4GASK-m2IPffEikt6ogTMdTxAjRSIAU4WEkz__xvVPh3aZM7aV4hyrfYxPLIZu0WccPIw-SLdghHS8WgxMBNAXGsMqmiQ6Pzg6MykvUz5jIFL5qg4m3LwcNZAIMInBhBR_00udxg2tDGVgGYB-hPC7w6pMzDgGI-cHL_euwfvsDhgVNj_DJj1pbC0fL-Z2_mCdTKty5EZDXGlSs88SD9KNJ1oNFS0QbWEukOdGP69CTUnhCvHRog0IlsAB4L-C54_QKr3UDV4jiFngXjAx8DwIx4933QMxfLypE_9AIRqk3crvjESD1b9DewON4nKOGscvTFo4yoXstZzYYv5HmnORZjMRI_pW4zJGg59BNOrX8uuF4dX-cCv3rZUgSx4lkxoiV2sKDGKT9-Wt--74lhtT7sH6tpn6CRSSjBbv5Ew6ACUlyGCxS0NbkgY_kLwcytNWJm00)

19. Dodajanje komentarja
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048Rl-nGJlEY140WaXX0IGRteWQWymBGTPDkoKwTRGD_6X_6zd1QGLiN4Gvjqv_jc_kakRKImOFO1Rut94-io55n1W67oB5ouAEIK1RoWoxL4pjUeY1POfFw9jlugjSzkfMK8zKLIep3qB1EMY6HQDGjIxVu3-9guWpPBwwaEYV2cvWFKYZcz5EH2khSBVHpLfvqDRYUNDzDVw1cAjw7DqFd_2x_6DTKgq9g9ZN6TnkIWo5WmS3Pf0UOmxy9eL47ZiJ7PiH-qhZd265rCa73v8r5Yh9o7WJf1EGhbLRM6TRTdLN9UE2NPEJrrmjtHAMK7zXNKJ-lBrjK2TesUDAdHiEsnZXz2L6OxUESNH-fXO3HUIVM-KuSjwdJFQB2IxW-Xqyc4rYJsQr-ZOThxNftEeqTVv5EEg26T6lANkz-YSHvH8zQWekRTajBRI_3D0WThohrD6HYAFAEFTyVLaevMnqigFW40)

20. Brisanje komentarja
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH028GcnX0I8PeOFH2K1vYs0snRTkfq2yZR-32-bzCMf0GqyR1DTkVxPlxTBar4C6Ts0MyzBq-CpL1m1G66oKAui578AGiuGPjhYQnhK17DiKZT6stTVMeMTgLb2FL3qg0mT2mZbeXaN3KBKkr-1lnChA7DqZXgGYAyQVW0ZM9ExmNPa5xCN9UbvhGh_t5q-p2-G4zGd0bDXjRzNxWOrwkk0gs9c1ZNQKmMYem50skI5c0EiouC1XKq77fUTkm7hK1CZZOcIBXyHvGOAsNggnAKar0-r3gHdlUiIjO9foIrqrCdh8z-Ksgmhw1kZIjRL_dD6XrfK4-pjeSw_WxChWnd3kRrpP6R-fu6BBdUENUuoLFKD7gUnYkD_j-6Pcll6tSwhmvTaOyveihU1pivZ-XaXbzHisv9wVz8S6U0WpNbpgGC34MUqTUdvNq6jBGwFdtn3G00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH028GcnX0I8PeOFH2K1vYs0snRTkfq2yZR-32-bzCMf0GqyR1DTkVxPlxTBar4C6Ts0MyzBq-CpL1m1G66oKAui578AGiuGPjhYQnhK17DiKZT6stTVMeMTgLb2FL3qg0mT2mZbeXaN3KBKkr-1lnChA7DqZXgGYAyQVW0ZM9ExmNPa5xCN9UbvhGh_t5q-p2-G4zGd0bDXjRzNxWOrwkk0gs9c1ZNQKmMYem50skI5c0EiouC1XKq77fUTkm7hK1CZZOcIBXyHvGOAsNggnAKar0-r3gHdlUiIjO9foIrqrCdh8z-Ksgmhw1kZIjRL_dD6XrfK4-pjeSw_WxChWnd3kRrpP6R-fu6BBdUENUuoLFKD7gUnYkD_j-6Pcll6tSwhmvTaOyveihU1pivZ-XaXbzHisv9wVz8S6U0WpNbpgGC39QAFAElJylx56XfTNpyuXi0)

21. Izbira lokacije
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPD1Jzj048Nl_XMZS2a7514H4I4K2H2ja6WLqNBfRMnFaeqtE-vuRMX-VMTjnsn8BZt4XxpllPddaTSc9rWo-vJVawGgZ2jHS0ifPiLAk7PvnfO5lA2hL2Bd8ogd9TRM_w9tVsVDocrLXamV9165cMUvPyb97jgmr6hw4J1CxA2tjV4KGoBy5la18h6YFpMvZ9xDKd-Eucbdqw_tiyU74_G2nPlCbEZy_njEhfkqLM2q4BF1ncx8GLsoOEfCCGAiuFKIRczRQ3vFal8Z3qPFkrIjbWlCp8PQ-cMgT1g6eFnLmm7_cxOwe34v5Eoyi2NfJ1CrPTrVdptVc5UMu3kMLSTUAQlN8t5euMxnzDdmWnkJOSTU1zPvuuzMMGZbbbSTDeknzesO1ZrfzKJRNyorrGsKOWhS3HNmo_a7-39Dj7W09pVGY3C3Ta1D4cqQgAisBkSq0llNYEU9LhpeiyRZa0O3rGRq2nrhqrPxlGnQjsuaGwMV1BdQEzwVZADwux5UqmWEvmI7iDkRwwYV2LT_xYdj5wqK5keLLYMdW-vTmdMOzNEjNwSPze06N3WRxw7PQQZihlOF)
  

22. Ogled lokacije
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPBDJjj04CVl-nIZS4aEA4gKI1L2aG115QaV23KNRcFl96oysN77QuVcuNhhUtLiXx2qN3ZO1-_l_p4xVdAMOCqSCtusfYfSA55m1ndcnKQu3ZPdpm9HC5HwH24cbAKrrZx-eETuvTqcxFGOSdsH91JcaUMQnPBST6QPL_V_W5DY3-sVNAGK4k5zeWT83YlwMLF8wOjRwnCeJJkRtrr_khrvXxv7YIvt9ORuSS6xTKqt2Wo-aT36LL6StXlK9GjcmHK3m0fM4xYyxBZ5mfZorH86tpUUB7WkC7TRwkY7kT9PcuFoImLl-4VQ-IqrpaB18GfxabuqLL7UV_fNyvbPK-0hbbNFpfJL1P84z71rlsnRjNEu1YDfMwE5pnTQv09ASGKUJgau7Bs23tEZNLjmUW6D17V2XfnjiS6bJUcfqP8jFUjiBMU9u7W3E3BQxlpeEHwhAy7XXUeCZiN6uv8h8LjlKy3IcxnvXwycBRvwMKcjo-td-lCxqK931zrSGFtpATGnC7HJy5y0)
