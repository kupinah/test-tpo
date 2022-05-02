# Načrt sistema

|                             |                                                                          |
| :-------------------------- | :----------------------------------------------------------------------- |
| **Naziv projekta**          | Občinski obveščevalnik                                                   |
| **Člani projektne skupine** | Luka Markićević, Haris Kupinić, Luka Brodnik, Elena Najdova, Luka Pantar |
| **Kraj in datum**           | Ljubljana, 21.4.2022                                                     |

## Povzetek

:dart: **TO-DO**

V dokumentu je opisan podroben načrt našega sistema. Na začetku je predstavljen načrt arhitekture, ki je prikazan s pomočjo treh pogledov: logičnega, razvojnega ter fizičnega, za katere je uporabljeno ogrodje PlantUML. Po arhitekturnem načrtu, sledi predstavitev uporabljenih načrtovalskih vzorcev. Zatem sledi načrt strukture, ki je predstavljen s pomočjo razrednega diagrama, kjer so prisotni vsi razredi ter povezave med njimi. Načrtu strukture sledi podrobna predstavitev razredov ter njihovih metod in atributov. Na koncu dokumenta je še predstavljen načrt obnašanja, kjer so, v obliki diagramov zaporedja, predstavljene vse funkcionalnosti sistema oz. njihovi osnovni in alternativni tokovi. 

## 1. Načrt arhitekture

:dart: **TO-DO**

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

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :-: | :-: | :-: | :-: |
| uporabnikId | int | Identifikator uporabnika | - |
| ime | string | Ime uporabnika | /^[a-zA-Z\s]\*$/ |
|priimek|string|Priimek uporabnika|/^[a-zA-Z\s]\*$/|
|uporabnisko ime|string|Uporabnisko ime|/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/|
|obcinaId|int|Identifikator obcine v kateri zivi uporabnik|-|
|email|string|Email uporabnika|/^\S+@\S+\.\S+$/|
|geslo|string|Geslo uporabnika|/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/|
|slika|Image|Slika uporabnika|-|
|sporocila| List<Sporocilo> |Sporocila uporabnika|-|

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajUporabnika|uporabnik: Uporabnik|StatusCode|Dodajanje uporabnika v bazi registriranih uporabnikov|
|posodobiUporabnika|uporabnik: Uporabnik|Uporabnik|Posodabljanje uporabnika v bazi registriranih uporabnikov|
|izbrisiUporabnika|uporabnikId: int|StatusCode|Brizanje uporabnika iz bazi registriranih uporabnikov|
|posljiSporocilo|posljateljId: int, prejemnikId: int, vsebina: string|Sporocilo|Pošiljanje sporčila|
|vrniUporabnika|uporabnikId: int|Uporabnik|Vrne podatke o uporabniku|
|vrniVseUporabnike|-| List<Uporabnik>| Vrne seznam vseh uporabnikov|
|preveriPodatke|podatki: Uporabnik| StatusCode| Preverja ustreznost podatkov preden jih shrani|
|preveriPodatkeZaPrijavo|email: string, geslo: string| StatusCode| Preveri ustreznost podatkov za prijavo|
|prijaviUporabnika|email: string, geslo: string| StatusCode| Doda uporabnik v seznamu prijavljenih|
|odjaviUporabnika|uporabnikId: int| StatusCode| Odstrani uporabnik iz seznama prijavljenih|

**2.Sporočilo (Entity)**

-opis?

**Atributi:**

|**Ime atributa**|**Podatkovni tip**|**Pomen(če ni očiten)**|**Zaloga vrednosti (če ni očiten)**|
| :-: | :-: | :-: | :-: |
|sporociloId| int| Identifikator sporocila|-|
|posiljateljId| int| Identifikator posljatelja|-|
|prejemnikId| int| Identifikator prejemnika| - |
|vsebina| String| Vsebina sporocila|-|

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajSporocilo|sporocilo: Sporocilo| StatusCode| Dodajanje sporočilo v bazi sporočila| 
|vrniSporocilo|sporociloId: int| Sporocilo| Vrne podatke o sporočilu |
|vrniVsaSporocila|-| List<Sporocilo>| Vrni seznam vseh sporočila uporabnika? |
|vrniVsePosiljatelj|posliljateljId: int| List<Sporocilo>| ?|
|vrniVsePrejemnik|prejemnikId: int| List<Sporocilo>| ?|
|preveriPodatke|podatki: Sporocilo| StatusCode| Preveri ustreznost podatke preden pošlje sporočilo|

**3.Komentar (Entity)**

-opis?

**Atributi:**

|**Ime atributa**|**Podatkovni tip**|**Pomen(če ni očiten)**|**Zaloga vrednosti (če ni očiten)**|
| :-: | :-: | :-: | :-: |
|komentarId| int| Identifikator komentarja| -|
|uporabnikId| int| Identifikator uporabnika ki je dodal komentar| -|
|predlogId| int| Identifikator predloga? na katero je komentiral|-|
|komentar| string| Vsebina komentarja| -|

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajKomentar|podatki: Komentar| StatusCode| Dodajanje komentar|
|izbrisiKomentar|komentarId: int| StatusCode| Brisanje komentar|
|vrniKomentar|komentarId: int| Komentar| Vrne podatki o komentarja |
|vrniVseKomentarje|-| List<Komentar>| Vrni seznam vseh komentarjev predloga|
|vrniKomentarjeUporabnika|uporabnikId: int| List<Komentar>| Vrni seznam vseh komentarjev od dolocenega uporabnika|
|preveriPodatke|podatki: Komentar| StatusCode| Preveri ustreznost podatki|

**4.Novica (Entity)**

-opis?

**Atributi:**

|**Ime atributa**|**Podatkovni tip**|**Pomen(če ni očiten)**|**Zaloga vrednosti (če ni očiten)**|
| :-: | :-: | :-: | :-: |
|novicaId| int| Identifikator novice| -|
|naslov| string| Naslov novice| - |
|avtorId| int| Identifikator avtorja novice| -|
|vsebina| string| Vsebina novice| -|
|obcinaId| int| Identifikator obcine na katera se nanaša novico| -|
|datum| date| Datum objave novice| -|
|lokacija| string| Podrobna lokacija za novici? | - |


**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajNovico|podatki: Novica| StatusCode| Dodaja novico v bazi|
|posodobiNovico|podatki: Novica| StatusCode| Posodabljanje novico v bazi|
|izbrisiNovico|novicaId: int| StatusCode| Brisanje novico iz bazi|
|vrniNovico|novicaId: int| Novica| Vrne podatki o novico|
|vrniVseNovice|-| List<Novica>| Vrne seznam vseh novice|
|vrniVseAvtorja|avtorId: int| List<Novica>| Vrne seznam novice od določeni avtor|
|vrniVseObcina|obcinaId: int| List<Novica>| Vrne seznam novic v določeni občini|
|preveriPodatke|podatki: Novica| StatusCode| Preveri ustreznosti podatki preden doda novico v bazi|
|izvediIskanje|iskalnaBeseda: string| List<Novica>| Izvede selekcijo novice glede iskalno besedo|


**5.Predlog (Entity)**

-opis?

**Atributi:**

|**Ime atributa**|**Podatkovni tip**|**Pomen(če ni očiten)**|**Zaloga vrednosti (če ni očiten)**|
| :-: | :-: | :-: | :-: |
|predlogId| int| Identifikator predloga| -|
|naslov| string| Naslov predloga| -|
|avtorId| int| Identifikator avtorja predloga| -|
|vsebina| string| Vsebina predloga| -|
|obcinaId| int| Identifikator obcine na katera se nanaša predloga| -|
|steviloVseckov| int| Število uporabniki ki so všečkali predlogo| - |
|steviloNevseckov| int|Število uporabniki ki so nevšečkali? predlogo| -|
|datum?| date| Datum objavo predloga| - |
|lokacija| string| Podrobna lokacija za predloga| - |

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajPredlog|podatki: Predlog| StatusCode| Dodajanje predloga v bazi|
|posodobiPredlog|podatki: Predlog| StatusCode| Posodabljanje predloga v bazi|
|izbrisiPredlog|predlogId: int| StatusCode| Brisanje predloga|
|vrniPredlog|predlogId: int| Predlog| Vrne podatke o predlogu|
|vrniVsePredloge|-| List<Predlog>| Vrne seznam vseh predlogov|
|vrniVseAvtorja|avtorId: int| List<Predlog>| Vrne seznam predlogov od določenega avtorja|
|vrniVseObcina|obcinaId: int| List<Predlog>| Vrne seznam predlogov v določeni občini|
|preveriPodatke|podatki: Predlog| StatusCode| Vreveri ustreznost podatke preden shrani predloga|
|izvediIskanje|iskalnaBeseda: string| List<Predlog>| Vrne selektiranih predlogov glede iskalno besedo|

**6.Sprejeti Predlog (Entity)**

Razred v katerem shranimo sprejeti predlogi od ?

**Atributi:**

|**Ime atributa**|**Podatkovni tip**|**Pomen(če ni očiten)**|**Zaloga vrednosti (če ni očiten)**|
| :-: | :-: | :-: | :-: |
|predlogId| int| Identifikator sprejetega predloga| -|

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|sprejmiPredlog|predlogId: int| void| Doda predloga v bazi sprejeti predlogi|

**7.Uporabniki Kontroler (Control)**

-opis?

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|registracija|podatki: Uporabnik| StatusCode| Registrira novega uporabnika |
|prijava|email: string, geslo: string| StatusCode| Izvede prijavo uporabnika|
|odjava|uporabnikId: int| StatusCode| Izvede odjavo uporabnika|
|urejanjeProfila|podatki: Uporabnik| Uporabnik| Posodobi profila uporabnika|
|brisanjeProfila|uporabnikId: int| StatusCode| Izbriše profila uporabnika|
|posljiSporocilo|posljatelj: string, prejemnik: string, vsebina: string| StatusCode| Skrbi za pošiljanje sporočila|
|pridobiProfil|uporabnikId: int| Uporabnik| Pridobi podrobne podatke o uporabniku|

**8.Komentar Kontroler (Control)**

-opis?

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajKomentar|podatki: Komentar| StatusCode| Doda komentar|
|izbrisiKomentar|komentarId: int| StatusCode| Briše komentar|
|pridobiKomentar|komentarId: int| Komentar| Dobi podrobne podatke o komentarju|

**9.Novica Kontroler (Control)**

-opis?

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajNovico|podatki: Novica| StatusCode| Doda novico|
|posodobiNovico|podatki: Novica| StatusCode| Posodobi novico|
|izbrisiNovico|novicaId: int| StatusCode| Briše novico|
|izvediIskanje|iskalnaBeseda: string| List<Novica>| Izvede selekcijo novice glede iskalno besedo|
|pridobiNovico|novicaId: int| Novica| Pridobi podrobne podatke o novici|

**10.Predlog Kontroler (Control)**
-opis?

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|dodajPredlog|podatki: Predlog| StatusCode| Doda predloga|
|urediPredlog|podatki: Predlog| StatusCode| Posodobi predloga|
|izbrisiPredlog|predlogId: int| StatusCode| Briše predloga|
|izvediIskanje|iskalnaBeseda: string| List<Predlog>| Izvede selekcijo predloge glede iskalno besedo|
|glasovanje|predlogId: int, glas: bool|StatusCode| Poveča/Zmanjša število všečkov predloga|
|pridobiPredlog|predlogId: int| Predlog| Pridobi podrobne podatke o predloga|

**11.Zemljevid Kontroler (Control)**

-opis?

**Nesamoumevne metode:**

|**Ime metode**|**Imena in tipi parametrov**|**Tip rezultata**|**Pomen**|
| :-: | :-: | :-: | :-: |
|vrniZemljevid|objavaId: int| iframe| Pridobi zemljevid|

crud?

## 3. Načrt obnašanja

1. Registracija
  - Osnovni tok
  ![image](https://teaching.lavbic.net/plantuml/png/bP71Jjj048RlVefHkD03GaaJgK8G2I9wgbeKcWSOhoTXiDbnn-D0-pPzcBvNnpR56nMazc0VlD_tpp_UEou8jYAMorEMDIN76XKV8CTGxbJQM0IfHC4KO-D752sX2jfYMzbNUhBBYdVnmOyX-8iqeJ2Ow9LeGRhgm_BAq_y2NYOEqECT6wMGgZmcFa1osD2tbcAWJxpr9r8wxMZnyUh3zUeL-WRLE72DqVvVUBLkrgy2ay-ajEF6bFs_GLkBOXwvdC3bBMocS7xUSyjbbjLZ94pMWuI1xtquIAxuWy84i87rmgsycuVwtSK3R_Dd04CfqLGgqi6QkHM6JszA0pbtqc-EhKllzk0z6ddRp0kVBBt06THJEBk0MamBJhhAyRjHM2yoxze9CnTcdQ0ZYiUr56WbfyOiyvwTCNVZVJz2QK_ADprBe-CjJvwZJq_Xrj3QPYK5fG7pBg1mu_vbG_p7XESr3myAEcYwwB7DjCU-v7jgZCSRHX1ecvf-_OoSxis_0G00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjD048RlVefHk9H35IKq4gfAf3Q24u8g9JSkwzr9ChMxiup7QSdRy32y5sExu8qe1mxsmVDzy_zhUqy1OSki9JyLHLDHJ4xS0vJELplXDWRFDGkekDZO2ADcLC2jQslzWazwNTCkFjWOlDrGCifvPRbX2IYhVbbPs_Q_W3-90_Iu9yKS4k77p0V8XWr-Qp5w_4XRkoBcQQyM7sxUlb-zGDywKVAKNDJ_5rwiM_H7WSad5DnHeqBstg1DBAwCL4tW-WusCxYwwhdbiYZIk18cwq5odkuj7BWKTqG_0TV0Uc5MsUKv-MxYYRVv7K1GSLJX6cMmvcRvuT4_fO6yCDA-76ctlJi77PoYjIsiyFdI2bn2ci7bEqYi4YZhocUlHs6zAAnh9ynDc7U2ZAWxInoSLfGRyy9wTiQ56M_w2C432jtsB8wEjJn_NZsTmfqwRPiL1-mNF9Sy7GGyoLdqs6RMOv_B0pPAu_Tnm12nRHB-_17fQvnEi-e4H_iP0lM42XuZ0nqJr_4U8-rXACc7Nm00)
  - Alternativni tok 2
  ![img](https://teaching.lavbic.net/plantuml/png/bP6nRjj038PtFGNXBkaG67PZe0WI0udHJaKREFMMXJhH3YFbg5AKa_Pj-YBTybwbfBGw8-dGGHh4x-F_d-wM2uAjYENoc6LDoR56nNl8CPGxbJOMGIfHCCNO-8YY9LH1Msmh-qgFTb7nBjxx68A_I1CAWubUYXQagtvPNlds5y3Vn05wk6MZ55ALXyG7I8ODVMif1lh4MtyYfMbl5XylttzOlK9VeHe7hZ7Q_mklritwey3aCodjk35b_s_GrgAOHoudS74DcncSdVNSSfbbzRWI9kj1mi1t7WwIA_wWC05iOBrmA-_oKB-xUE1j_WGmb19DfI8ThBbROVZqJsaWJvpqcsFhjdVdu3qQUTlC2nyllS0fr3CuFOTQJ0jEkihHsr5OBpBlsWbp5-QTe2EAHxKKQ2MdnZppdfrnuiQxFa9fJyfNFKkZuosFdrTFft1jQ6spaeBw1Syb3mS57UGiUcmpwx4l-PuQu_5-40GYjKrDJpyZtyJfDAdk_vOKxWYUVX4ar_iR)

2. Prijava
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7TJjj048Nlzob6wGrS89IGI0ZHI83QtbGb2kG1nkj9cDhPDUDnWBvD7uRtOlnJihHKQYziIvxpdJbdzuvpWdMCciL7v-g2GuM2MyZG5nk9JSXzBAE02eRQHXGqKUMqngRKMthKYv8tOMjZyFOYILJeDSfbb9pagZFBIdF_G_2wiHSztB5IAXA93maFa0nhkcyeUFhAQti2fTi-p3vVddwwUaUzG57sN67G_mVUZUkwAZ1QqePh5RPJWwQAWbdWOWGNDx0Qm_bvfvhFdQlsXZ1Q27_7NM28cU0FyYF06fOpqsVj7fGdGzuGgr_M34KCAh4awQc9KRx_zLUeLqvDQJV6shgt-Nc7IfRJMTIZkGKuWseCPn-XABduXb-QRJRKGs-13mxtq7BcB6yBJGoQj92aqg5OIaoSPMs9gH4dBL49xKXu4NFKWWwgxik7pf8U3TR7nt2Zg4rjjNDC7QQzGtkG_5eK_zLagFlR9AStSMUTRZNkTDVPZchb_IKZH6ZgYfv_saKEGLu0)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjD048Rl-nIZS6aFLPJGIAWgaTeAk228KdBhPRoU91Cxkyjux9Qy3G_3Up6s0t6X73ZObZpV_yy_Exlbd60TesRnoRcgu91GS0yP-c8ZiGwvZsKKKC5GMOc23gYSrbYN-eMUzARaJTXR6RozI0OKUero6oKdkUlCijBS_m9-T-oXnoqh3I6H-3ZG0moA5NsjANZwo6jx0WsxlPgzlttpxku5Ue6Yx3bXqFyNl1ZNTQF0Q4aRhbJOJWtg50MpmCK8RkvXDO7hwuwQpvrB9qCOBOHts0I6c0aUo8y0ArZEZC_QFYZVJF9CiVfbpL34e19BaburDPNlV_rJr9ENHjh6M5ltDZytg6GvdKMzc5k0AqWJk7eBHSd59_nGxxC-APwTd_Zbp5dKbfyQFstvTAIEumpXgRE4BNnfyEiUfeQ45p57BUWiTLy-TvRlukWw7iEzejQL3PjZvt3CzqSbfsUTPXstcdJSvwoXIlcq5OG8WUegqO_lWH_2U2pzyj3pZk5W5o3dZb2XGuZ0XnJBiAF0M-XZnkOd)

3. Odjava
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DJy9048Rl-oicU8638I0aXY096lLYn83yW6btmB5bjqwteFnwforA_Jfuw1uwp_lEizadjWGhxqFaNut94tOP2cuWmZXPYo-SZNtg1OAWotL4BZGeIoiiql18hs6QyjfjT0on7YGD2kFWvTAB9Rcgog9Ksty0dnjhQFV4WPgGYDyryW2DOKul1RcOxdYbdwFcjfFXpUNvzTKlz0DAu9WpTE7_WLzrJNKLQ3q8F-CsVIO7HUO58yT92wOBMFPWFAwWoSIOxDW7hPdL2BO0SvWFbOhASfGt1Rzmouz2XiIx83ubgLDzJSNrhpz3DJbGKf-9GzbUIlCM0wcTKS7JYGgC8El1w0AIb9Dxl2qsKUtNxXpn-T2eQOdt5U-NkAyX7mdkAMwoVQD-9JjGzgnaURyborLjqSwynP1mnwZRwQ6osuL5m53aUb6BLVxWzcrYwSkUOSKjUnKtYxQK1pw-0uAlDVaT)

4. Pregled uporabniškega profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7FJi9048VlVOe9NlH032Y9CKW2HhqO9IeFCEqECEooMuSjwkFu8jvuBwS5eVZduA5DklDzCx_jJDaGZ4E8QNXDaeLbdwFW75BCx4H2uKqMN128WdwX9VAnHXaQO-7Y4xt6lkE9dsiPCdsHr2ZCOf1144DoMJLBdNR_0Mmdhg6NAKUgGoBXfUO3r8eBUYx8PtJBOtqyrQSTTAu7PrUNlz13bCWPv-ZZ_uLVuoRLLQ0n59xXqit8Gv47mTIpRK3_4KOjw7OhgDTBadpN3nht4qTcYw_UBKqGSWbZTjW0NC13Hzsq78doflgUFVeQms23Zn8SoTfggvMjZ_wKrkIfaheyZcNtyYgyn4YQET7OpPu6E8Uy1USNO1tRExmfvkcm2dXujCCVEeacBV6sukqIpuLDI7ax3W_Px3xgRZlHlALxgkv9wIx5yp0OZ9Q-MPgtkHbpV0pRIjLXatRltD3Ud4v5ZLeLfGkpkFhWpG_VRGq_0G00)

5. Ureditev profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Rjim38RlVWeXlQI7e4YM04FG1MYBRPTXCvhbqXjbCmrhMzHeEUtoDdkHtVfUe-KiyT0KGm_IGVg_dpyfRIX7isOEbf-If2x8UH2eZ8Mik1TkN9vnoMA2WAlr2btegN9SGrE6x_WKhagwTvLUcqmtb9uAii1opPAZt4GpMwhx2y6XOYTwt530laY47q_pDVveq6NuXTQw7FPhdSq-NR__U7D2dO84oiY32sy7JePDOYDca0ezmBPyG6SQpmBMKJ4mLqkp6flBooXQB9B47_tCOBKNFlygo7ZXDPK30xMvdIbYsqeWFvKw2IbIi0l29Kf7JPJAkgDNeKuvLQM-68NMlUs0jX1GeoQQThJG07FZnsR-mHGb5L_XSrFPDEORdYUQRgIQrNXkBYwCzbt0RfyU-loavMddkNJqpGhiCBk3fHUiiB8yvExe_5Z-TXQz5Pye_gx5FTUSiwL3VXXwpY4KrEScYVRUSbFbff4JtA9G6hLuPBJpqRw0Pby624sjOyoXxp1h7UgD_lx_6QHTlFZgXuZHQZ-4LpKv_XF_vKYVVzFVxYFQ3VZuj-0F)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Rjf048RlVeeHlP03Yg0WLIX58b5xgbGKogMtMNi8Kzixs_4wINcRlaXlUQ-ERGgk8Afwy4hU-Rz__Xbxnnd1LYGwUKwIAcSVKB44Xsd-e5BxB9L25AAYhwn4FlPK6MsnBk8NUexBWXzyQML8xI3jgJ2DehUY6UbTQ-OASpyJ73jsegSTH-gBLENfCb_HzvfyIfzuQu-dVgytiu-txpxSNL2lK2Ed7D37_mSkXatQGM2mp4hsNDdEx7K0opLind1pqrONYoG99oCOR88eEiylFtE6eBBbOW1OmVtC4DUqGFrXr4N8a5nyL2b8EsfYLDfTlGfrogafxLDnRDoRwFo8aIngOcb72mimXp26-NlWlIFbLPjjU9LOif7LD-CvN5_3IZd7_I4vzjb9nmOfF7zsYdjAl-8wA9LKEXbATtLrQdq_QxqDdnZ-ji63L9A9usDs70R9CERSvoQ9pTrmK-EcBQVqs6HkjNHYREhHeO5bNqUCTMKhpF3CeThPB_ylWrKNh_X67euHMwl34bxLPFHN_FELllpYFzEtQBTWg8-B-0q0)
  - Alternativni tok 2
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Rjf048RlVeeHlP03Gb2GAfGY9L7RIzMWK2vLBsDx21ERdUruxQH-cpnCtgjZuuBJqaCFzc7t-sR-sTqTfmHRaH3BKnGL6JkFYdk8CSdkLKgN9fABGb1qXMsH2pqgfIsMUVXAJ-4gvtktjsr8x4VQep09ejUYAUbDMopEhVfVmB7Z0NhSSQ0-f2gFv_s2VfJa4lhCM_iSzNkzcN-yVlVXvWozGWsSi4SN_byu6pPg1u71Ila1g_o179HU56F7sG2krh2PmELb2osNKUHFzM2mwS2Nvup1gsmv7m0MS3St9MuweVuqwwnaIYOkgEIa1sjgLd9O-gTq86T6sernQAet4t25WIngP6b7Imkm03-1nNl8Siw-uATo7w_QVCEBoDADZDbC5Z0UWysTOTsbnxu_RNoklUIERsF5cf9lkFPAUzh7CfJ3qiMf_TsyhMtwrFItZUwba5HYFkR7ePSKGyPzRnhPx8qtCs_MUaeLAQzQbawEJJxg6bZsTS1G5dQCAROLkkH_xAJqgjEhwM_ZYeh0foj7471K5fvUdXr_T-DnqKriDzocaEhtOK5jJotbbWzAjPFkkEmHyUw8_m80)

6. Brisanje profila
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DJi9G4CVtFSK4Dxem1c8JGvH4Y2OcBeZA0QRj04FBcpfznO_RU15ttCjfAzX6NBZeMtH-_u_9B3aXc8luI5w3e4ZPvQYuXWZZTA5IkYIMJ1IyeYjiHCwtg8JcM6R-YLxzTSOBjxOnnFQGjYYClUXOD26Tr6PHPkw_W7rY0xqisLCRKfMNm_g2dajoCTtpt3v7xQoZy7PySJCvG4zHFSUSe_F_5nmi6zIBG6-glC9DjY87PIwAaUEq1zUFCEl3vMKDZKP1aF_uGM-cb9Z71dALEMVO0opW8JG-gc9GtqpILUoi6L9nNYKZRLG3KyNDhpz53Nbkf9sBVULUrUSDUhAUWLKz7Lc18UHz65u1lqVA1H-V_50FOM05AsfWrA2YAWRTYgRD4iVxzU-Ijd0GMCTAU6x2i6M_hzTLMi_JxvopCtZqwCjY8WdLDjyrkuE4EcbXZStwDMRdIN7xoI3HXWhFcO10MUIq_N2oNs5tY2y0)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH038GcnYW944rCF12G1zXs1nrRTkhi5j6tyKMy-LvEMu4IyU2XJThvld_-RP_88YoPGyARAF8PkSA8MK5YqknHk7GsvPm5WXZdTOGkj2YBIrFcuG4tOPJJerlf65AzeRGeamQMCOj5cTHXIQxflu3TnWPwVQA0RKY4Nu_x7bzAT2dUqr8lX-rT9_7j-E9cSeIU6WcKKc5S-Bzmj6nK7mGw8xiYHrw_cJvsO3I7HG-khkhfS1X5nJu8EWj1g_8Q2k4bvQO3niCiLZwfyesygN9e52mcSPGHPEo2S8xIM7srqkRLdr933fJK_qIXIgzwqze4r9wHLkqEjS0b53sul0PwJuGydPxjgLaSQS6AwYlLhwYACUuPfyqXJiljkZlR5lkHTgp4WOfnAtvNxz3KdjsVFUVdC0ycb7x25kkOdvg70ui7s-8QM_HgR2gKcQzF0axMw0Fb30obB_3hm_7k2DiVyGq0)

7. Dodajanje novic o dogodkih, spremembah v občini, aktualnih dogajanj...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP5DIiDG4CVtESLGDxeGQJ4WeWLRTADeyUC0asHgfublukGbwd6yY3llvRoas5IBu28XlFdzFrvcmHd1NCGdyXf5LSwkHCKdI33D7rLgbwLIY89NT9MDoFaUbT4SwyBVqwi_A_ZHFTaOKdkHzYXClUX4D2ETjcP9OUw_WE_43dfPiAS-f2els_KLFTVaKhhYkJsE-baxySNaw7owXPwXUawvHEV_BzXQDcel0eEPyXAROacEeIv5CN6S3-3i3Xw6S7BIKkDn59LhGnZS9AP1SD9mIWF02cvZWvCGWlfc_0P-ASwh5AJNGT3n8-FJxlmdtbBOOOU6sOxO1zFGcHlqPDqYgxS_jjnZA8TmV0eIEd6hbTszDNeRHrOke2D3Hm7D9CFbYYpjs-VS5umYQnS4XoQ8Ww1KQaXvrhAqrbYz_PNpmG7SUVHrDPMCVXbiJVnJlRhRvY2ZZPPnYpqCMymMcUFd1zkFQAZoN0W8r5L9d-zEkWBebjGjJRu0)
  - Alternativni tok 1
  - ![img](https://teaching.lavbic.net/plantuml/png/bT51JjjG40RWlKyn2XkwG2XHB5K88eK8DbHj1EK0OtiI9dRUcF6peSVfHRhZNftt7147ic4HA_Bx_fdVzXCN12iHdybhaZGbkneLjv1XNgvLMbVaKec2LtID7P7p0rNG2jlA_wPNFwzuxRPs3BbTI0SASozwBLgGBkAmhBBfdy3xnXwzFB6d8LALb-FvXfvRSZdzu9Nz70rtdQItrzzl5aVq4jLppZKw__N0qR99V10OBPKts5KRSWnjBOgPut84ymTu7CFbPLIpMPBK-u4m-fLP1i59npcD01kuJmrdOGdg7_C7_4wSLwb8VuP0xoVcy_x-HnuLzcngpBuH-p0qTEOEFLctnEgTpMpl1THZkBW22PquPkNqsvxUfucL2tHYT19e8GLkThAs_xxaOM2IMBiGc5eW3O5QgIFbPRIqprYziztaytDuyEZRPY45nG6xTeS71HtiIIDx74TcdwB4jtziZz9HuxaI473KDZMz_NNIrqQteVx5oty0)

8. Urejanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7DJkD03CVlynHMkS01eLP4MY6s4bIx5n2gW3w0at71JHW7PnBOnzaNsHllXJFb8rqA4eVa4F_-7uvlsHCiHM8kZyur9OSQ5UyWnwAyKMc3BwGIXQWO6XjHY0FAqnBRAbxJOpof-2RSsHWAUv4EA2oYwAce9vqbixmozm_0M-8QUhZbI4D8LHwswnkwRoaKTCvBUm8DitQotwS_Vissq7FKo0NN6EBt1LlBkhG8ZERAA-og5GM6jXR5F70vWfChM8pX-3XHqwbpzRiXZ1PAAmmhWY0T5pG2RE0oCpplOr3_c693S2OXgbIa5xrWpK-CBzRV_ySJXMliq32x4iVUj6_D7KQoTiuAxayjzmZgCHpzX5R9SvBAxjuxUPavwzQJ4oCdFLbB8rxoLxWMZx7aeMRYh5-lEJHDbZHA7IdF4qkxQNFSSzPl_yNxu02k8iQscOcdZ_fFChyqUDblS-1fesUMiCKuONRE4f_-CKZUKHEv4X1ecvgU_WRf_z3WRl8C)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Jjj048Rl-nIZS843GecmL24Q2I9wAQeYQ6wzZBqJcDZicF7QKDwcBz8RxzNnEYrEoOM3z-3zlfb_TkxP4wn5OYxFpZKbXneL7o37ehnJQOClf1A5g1WQkw8GHvIdDRPL_4xFyQBYk_1Wrr3OGJgYi8YYbwAUT96AvPLLVmVywpX0J_SSQGofojD-lw77ba91rxosBz2urq7svVBJrM8FlKIDN72D8NvSs1lMfK5WibJUO5TjA32qjIZcWSi9NDp2QWhdvucQpvshtmh2PAMqmR0X2D9nGHF01cuom_E-3UfFCtQ4hnAYIaNwhHS6VcPyCVp_7qyK3jYfORObZdtHFZLt6CdIEGjuFBU-Pr1FuUmpj4gUaog7Hs_aJUOiMq_EZ9prP2sDUCd_mhLuZ2MFdPcpVBrpQawM7AMEb9U9fSCqEHuvotUyhNro0hSHOziin5Foj_5sBppjjCaIjfecpBPHukjl1iaxQY9N0WA1sgQcrrz1-X67X_yHXhSNUB6zUqvGL7gnDMx7-GC0)

9. Brisanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7DJi904CVlVOe9NlH038GcnYW944sCnXYL1vYs0moKdJhTuiVR-2BUV2-d2z4YnCJ3xc7dz__OtHbd11CHdyXB59KBTWKgBY71T35LgLoMIYuANj6LDYBd6rH64wno_qWlVf3pr2rj3Abjf0qAKoyw5Cr8Hy4ioSrz1_XEN4FFC_RKX5JbUR--fAUAN4etFB7bg9br45yEJov6U-WxLCyf5-Zy_mLxoqRX8j2wKvxZAf-JOwWAKKmSBremU81n1yxE0jNlHr7nOmYjeNA9RavmAojEgGLOmdriU5B7eBwQOajmBSwhvAH1iEQxngVhyzzue72DzGopNs9VczQjUOMUh5ra1Tjzops5eWEdvy1lYVNY89R3en_sFewiNSrsZUtkiYxaNMLDJJUoXhMcPvhuBurLR6_CZu_XmQElof5a50ms3RS76Mtbn04RTm9c7xB0pmy6ILPKUiu51AgoeCzt9v1iNluB)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH020rD344I89eOZI6W3x1j1nWfEtLt2-ZR-2BUU2-dMo95Y8c7Dcdd-_xvkrrGYZ1ZTZ5lWy0kIUVAg1N4AbdE3HSwJJXZ0yueRMM4sjMe56UgoDmpRjqWexbUoHWIkQ6fKIfnR8PiKZGZ7nPdadu2_6oieCs27DOXOtXpthVuLg1Ey95cSccixxg8xeRNjwCpz5WPHmdbIhl_2sVB1lv3e358LwJ9ofd9OmC6KtXfGw_df_r-4EI786WC3LcbNn6UU4q9Da1Pc4I2nsMyCkzY70aFh9tX38qNAZuKFgdU_yOzfIgi8vZy7N9bQDcMrigXj0kaOBClUxkGjw5x0_GHIo_oCbzU7TX954YxaWs53KzPxVVTftKd3AHXwNJ4YVvof69p7zvgmTGfLzWHf-W3zWsF1oaUxOayzjBssDZGKks-23XUetMKCJ0KDiVTfsQ8zoV_3G00)

10. Pregled novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048Rl-nGJlEZ141gQ688aGFIYGOBo0DjsA9EMtJhT0lfmtdmlfriYHRXuQ0-pt_VFt-sQ4eILjIwoUwNAZ4oXMMyWqd6MigrC4jlSCZZMffGZDAv59RZILUxUSE_6EQLc8ySGomkvHUdOMPvOJf2dFYpA9VqC-DtOGBirEMn3p7PtsI_nlK8JupEjv37OtdKLFaxk7gONwBbcHp4LshZ_2nVBAlyXq9aXOqgbOv9RWwgmh2D3MGV6hx3imN3ekT58gU8O2PsNDCS4ZDrIZ1tG9In2OQDwY-OFmK_e9siSsnnvLWiD7mWVD_E_kATqW_K5avz4hWwjIzDMEvHgIjhTZcJl08eU3EwXOChq9tdPNjySsKMef5tD1i86vombpSQs4oXfM3jzSSBQsR8v5wJVxI6vsuLcwir3jUCmmPFmq2FBdaVcTPtlBsekrFu0)
  

11. Dodajanje predlogov o odpravljanju poškodb, novih idej, težavah...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Jjj048RlVefHk9G3GecmX12D155xeH8Hb0SOUoTXOhDZnci3ZzCNwOttwgnj6gU9Ad6m9Mk-xvz_lO_i25OY8PFN9AaBzXKgFa66UR5MQRpBfHI5eEXh6v4F8yhH2fio_AJNS5NosZ_P679xaOuep8FejQWZNNHXMMdfUy3VZJtqyiY1nf2gl1psQtfkoEVqWrVsU1hlEag_Nvz_MnoWbwY1SwxGXyyB1yictK5WibJUO5jko3CqbIXcdei9NDt3mnGkBpjgFa-IQXi8azlC78IbaYjbZHF06kvImxEu1lNDZ1tXHdnGAKa7HThUcPcJzxD_bO7ikJFZxAeunEHOdLiCP1KJQtaoj-KNK4tXuYj8hCQ3_ELuozwbYLMCxCpOMMITEDnye9LzX8B7nYonWj4uCoEDHgNKalAoOsdhMC6J8Vhq5Eu3XgPUYAEzWCCh_wiFnziTEDgfcNROmxJ3x4eBVF_DzYzQgWEN0W9DNT7xBozz0_GRYeUn5dy0)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Jjj048RlVefHkBG7X19XgK8q4aHm0Oa8oetBs3i94viTTxmsbBVfY_J6Up5hkurJSk7WbQpvld_-rJwo8rY9X4nUagGks5Ue-0GPviLQfV4kbr8KWgAlRKG-Z2X7AspAy8DUmbd9Q_zaOyZj81rHc0VHSr57kkZ2ijBIFm3_DlRGyoC76aEgyhpVh-bdGpwdQrxPvscywo2zFFzsiTX3Br43vroX3vyNzfPDkel0PAcymRRSa6TeAb7CF1SJEBk3-ocSddRKV9uarJOG9ZUPEGXB9LVA6YU0DTocXcTn3UelCtQ4A_51fIGT56bxPsPEti_-LmQovuwDiwVY49DZTMuna5LChENXt9QVG3M5a-yWiHeFyfUlM_OsJQnYP6V6pYBhnE7cBrhPJoXuRCmIAnYDOpFIQ5HABIalEvQsZXKy7AAFZk0kO6ZgXJZg0eP-kmD7EtlI3hkVTfYzIO5lVzWkqr8Tk1GGyDJK5RtzzjBtHh-X1nyRMNjujTTtt451wTKJzDte7G00)

12. Glasovanje med predlogi
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7HQjj044NVzHM3--90WucnIZ71a9Ysb1PYqkO3HjgnijPwHzrTAKd9p_H7-fR_wcXbx3L90tcG7kRUCtElTAiLmPev57oVPRxMja67MoYmh2l7hLKb6tOG75el4jcGk1IjiJNX9zs72wChknKPIdcHIrnO1dQNx1IvPLnM6Dd-pB2_E9ZkRdMWrEGStoKyG29w-jMIBUcxNijZARtsBlzy-V7JyWNt2btGfMxGXhS3ByRDOXKOhPpUO6SsPA5js65XTJq2z71p1kVdqRHOP5bps0UZgygGWiQHCbnXT5z_47VH7q7t8C2H_uj1pntQ3S7s0Ee1p5y1LuFp6zlWs90RYAaGvJ3w3p3uPkAJFwn3lxVlgpiC9CKowNQwaCnpoQ9h_ArttFWaaoAdejsSpM4oWLMKzrMZAc0-XyvJMVULnYVm-0YMai7XrdMUIS4UcSwXsd-6yMxXL_K-JbDYcad1dfX9ElQikDZ7QrXXgBMadCMK_TR9v4V0qFebAuheBk3HND7HWJpf62i-_TN0HKS-QCF0qFg6dlvOsXv2j_y0)

13. Urejanje predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1Jjj048RlVefHUYc7A2B2g8fGf1B1XKgDQFC0O-yaREpicDbTGtcRlaXll5V7Te0DKAGUl8UTxv_v_rdVM4EmPWu5tsUPhwnhK7071PRLHZWwKtBD0a7GUIsH2mbbQ8sn3Z_fFdojxSRjj0ob7YG9XMLWEMSn98k-ML5hzpV0yyG1khknWL98XEyIFK1Iz7GRoPNqpQxrSvHE-vHVdd-vMBn3Br62BMs3Blo_u5sxMHy5HaknMsphBJc83GiMpbOZG0-hOpWxww7vFCkQbtum-hwfoK0ZP6hUO4zVdofTT4DGVgdWW5y9RT5jwPKa_q2o7CWhTa6u9XaKKrMKmzK_10Dtefo-hGrTtowfRJ6GHieqrNYkRcUTb-Xt9BgCLWqQk-_m-IZJC6EbLiSpc4n0DrJX0t0X-51YNzGE-GpYeUfvp7MUQROEchw26ZOOAfkoqqnJTUn9RwbLGykUeXTQyuptxIQJ7m53z0isb2hPi-7YxQ2FfFiO1_U63gpboIBwFJp-iRg9bdomDGD3z0qz_dRyvA3xaNZtzD3nBm00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP9DRjim48NtFCN0tJGBmuWH1O4H66YCTjC2DTBw02DnxD2YEUg8KdvkaujqbtjbH3cEdAO5kf0Mck-zUO_KZRC4Q-QOyvqnTUb2XO8xoB4eDy9Di0Lx5eY2eTOHXJYWBAsnyV4dtSLFtct2JiTGw8jaG64HMQvOBCaYcULUtVy03XjxwFR6HHf28dmxq0CCXZNzQYWKzCsjzGaqtFOX-t9ryNdn3hr4YQvm5ORu_u9tuvfK1KPBSLji_PO2D1KBvi6L8y0QLgTmUPcW-ToOwjKFHjytdYnKGjRp1XDzVQvqtYr1kLV14RyIscBOqXj9zW_9iYU_SeZ2dgHNJ5LHz9_-8kYvC-NqRbtiVBkchiL8Mibeg_5SqywwB4sz8z73Q3MWTNk7ZoT6ouoLMftEO381FQ4I7u1pmOS2qr0TiXaqnwh3cklCQBSEchw1AhOOIpTafqPRTUnPYjHge6MYw9NMFkEztMJo8s9iwWLRIifzbgFlbexyiq6RLERfjzCwBTNHUGQ6e2THqTDZOAYuPijvzp_GxkM-ccS0)

14. Pregled predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7FJi9048Vl-nGJlEY140XD324aGZGncaY8FC2sEvIboswTRW5zE6--bzC_mXBnuA4zx7o_ttpRhhL2M3ddOtSGeiYqpIN9BSGooL9ofLM9Cux0axG5Zz3wW5AuagNnhtZmTqQdTijZIFY5550oyOwcZXJIh2wB3RV_0euR6sY_rXv3YCZjWpn0C2pmhKIRuBDUyMCnt7OLFKnlxsSNwBaahnETI-l_7xYeA-ghG6TEUYDtPeCMojoHZAtEEY0BMFPXFAwXoKI8_DG7dPVKe8ASK1cNoffUH4p7rH99xnmuu-SD-UIi9sUGciI04qbpz4UWuORCyO_IlkgjjFLEUcG_mOhT2QyUiOlEv8TkSzSt9smH2NQhi46DAHSViVO6Zoha1uBDAduuWXtPIp0hTTl6NWzQe8wrEi6fmhFgg6QM_PPXwwzF_VCflm40)

15. Brisanje predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPF1JkD038RlynHMzx8SAjGkGQiAAfLgaP1MsWgs3-1at6AQpWJFf43VXXVXndlX95L98KBYa4WPV_zl_sFbbYt1mlkO-aTZmefTWO9hI35RBSMNpcO-zm9Hq0KjaOijoj82opp-fySuoNdfrbg6J5yaBGgpwEN2YoMPrcPfhkwVW7t71dguvKXjICG_TEi3tPVaClhB2tqSjNlzI2ulVl-PTj0pbCWP5-ZYzmMTmvew2FGcTisEWzwPVlPWSWFp0PoTrTNns9ZYtGXw_vOvMIY4REwNs0CCS7sgT5gvepofu82V2zsXkwCFakGBoQmXOULT59-JD9AXIhBcg4EXWWOxKKnNoh7ohIBo1YDf9AEf-cETTWJ504RdrKHbM9FeNMokjgbmu5thdqT6G_MLdWz6S7mCC-4LRi6dWjiCww8w9Ueqh9puethVzZenchM2Xmh_we1tzt9bswgXqRYLwaHLoTSgJTpVDT19RoB6CaozfTfYD-PXmT91f-HJqjSNrgmR2f5p3nxAKD3hioFzqNG8NMS9HRFDDm00)
  
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPF1Qjj048Rl-nI3UsaF9jYDIZ6f8J4j10erIVq08-tO6MkzgywkdDHlqnVfBU_LaMGIEH617gI3vll_V_vTTCUMO1r2oiE3CR5aNw7W3d8ioes4sjiYk22G17tK4VdKeoojiNRf9psaIySRlzCn5FeYwL5Of21NGIp9eZNBdRg_0fuIE-Z-ZXFr8P5mFwoFzAicNz1tNklZgP_rBljszVdhOe1UeYGkk4AV_bymkAnfYy1eARp5lTkIPwYh89XxBaTmUGkh2LnSjDHyRaprR0YZ7nj75YeXwy86Hu0HRZufdJSfABzLSCAlXBRej_H2ahqXMNOabC4d2OwaaqnLKdIV1XGgwB1pnVHgEJM-JLNUOoAjPBJLUAxRpg2QmEnBir4TToHw9llhGouS-HZz_eFHKcEbLvCPd9s17bM91mYvuA70TgXEcJfD6oT-gNwAlScCTctWgS8V1-3ZkLpRlcfgj6wZEbTLzhPA6u-F0RhfRS9KnqMmr5eSrpmTM3f9oburVVpBsdLFCR4B4A2E5Jt-yQG_d2wXrrb3rTtcFm00)

16. Pošiljanje sporočil
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP51Rjim44NtEiKWsRH00YE6PHH6OA0nqbM16abyW94qTeQYEIf9EMdlq4FqBkszEg8IMqw205r82yxx_yydxxaYM8l4GXwpBDJi6lIuXGBBUkEbTLKfLZn4ZoxeY5mSK1MjiRNnZXxZPyiRjzKnbFeZFw2mZEAln5Va5yciiEh-2jWdzj33FKSQGjxBmq0FC1W6-jwIA-ahh_LpD4mxpRzSVRfUl44lqKSkkK4N_r_mvhfPgW8dIyy6TzQGWxOHZuNZ-WGmmEe2BYyJD9zdMNFmwpIqiLH1R0rj41elQxQOL3TJLHLT6FeVAZpMIM1hq1c2e5bIxbNvEwhLyreCjRZenPBlLMDLbVtHIz7jax_qv4H9VMoEdNjNdNSOIJjcMlDyhclFj0RN-9FlMhDCXJvypBJDkKvN5pCOZM2PW1Uj3sOtqyIhMQvc4gpX_HRgTU3oJFjstFWrr_HN5CcQCuqWGrjjVWQxG0Kx7DgCCxs0pcOoWqegD0UNvziLhJ195RgiqUWsOcp3GYfAsgTTZyuhEah8Ushw3fKVNzEtOaSXQZO8jA6Xlx-Tf9heQDk_-vzVRDj_)

17. Iskanje novice/predlogov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71JjjG44Ntxoj6wOOk4C99K8MG9O9QgLA58bG-O6nFmc3pnXq_1zgFwwx_rR5VW9Sc4cLXBppdtfbxVSSLmKea5FBaN5UpRr7n0GeiwxLAxwjI6b48Yhwp4VcGK1Mji6_2TteAbmsl_OEDeRGNQK9X6KGNeXNfrMXMDEQ-1xniZD3Z7GTA8LLvJFG0oR2Z7ptvahxnoXvFwROFyo-BJv-l3j1BrC0bj-Z3-mK7ptLZ59XSazAQkw1ilK7VYcBXkPu0Td1x2XSN8vVdphMlbZ3vsjNexsd4RiuCAuO5g3-Dt06lPSCbGYq-g3IaKJ4rHHa_vJdiAfPALIFhVoLPAZcq8s9pm-otSjYxPEiRiLcA3Ltm1WDPOcUXZtFBT0uSCnvzV9tVd3bBEyodDl-reOgtJHmDTEDnGHrLc4gcpvBiloMPiuO6oVmDYSKztbvpSj9APn7xU_137-Iiic4sUyjZ5Zso7OysjaNZ9Tj2zbTKj9CpEuI-EALmDfPYyEtf02-LQ_ppcw6LyTP2uWPW_woNpLy0)

18. Pregled profilov ostalih uporabnikov
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH020Y98KW2H1CJ3mJX0QRj04FBRXssW3wSDz_BQIcbZNZmq3tiVj_y_sxN718ihNM-FNhUBcAJeE0MV0oYbTZKX86DhO0JD3iz8kCgL4XBJ6CtfwCRnRmoMps6G1UI2eM1ipAs4f9Cyc5-hDD_0MNY2JgisL4L4h67YWzGETpHUqece5TUwcUecdRJUnu_F4skq5CKnm4dQDp_XQjrlVmgq9WARt0VRyX0cbX1tt3KWD4RBDem6EJGSEXvoMLUvj0gfX1Skg4LGY9soJ4s07SmwwdbPs4e7ohMlCKvW26onecDIKvMHwtWjFMdT2AxIkflOvTDpox1UtIaRJqjt1ngWJuaRUW_QYsEy9FdwMQQ5xozk-2pdgTDCxoZUAV0G-jpmPPlyH9MjOwdLJEjgzfzfkt5S5aHwvwMRHOPhHQKL3wZg5hR3wcMrCkfHJkdfjbjlh-uUEtpsvTv-0C0)

19. Dodajanje komentarja
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Ji9048RlVOe9NlH028GcXX0IGRteWQ0ymBGTODkoKwVRWhwD3-DxEIqeHS74GpVPtU-R-QUxCX71Wja5lFMyF34sGy4r11WcI-72HY6dBE04RQvNP5s3YcY1HUgUQUjkKhEqQxs6K1UI1eMXOncpH2IJkbYGQlLVm7V77RHP6KTDI8Gt3H-WSPdJIq4sf4UpqCzIizk5Vp--lfkSeASepeGcG-l-BvoCwzMZG6ig9iOoZSb2aR5WO4tI0inXteNXi8P68y_B3lMWTSiHncXZWeIh7uaIO-tCV7M2gXNAgsf7riEULSawuPHav_JK2NT7vvGTs5TGjyPLfUi1J8cEDAcdOTiZRJ-0gChsvLrU7QYPxscyYkhzf3BTkSGquPwdkIguFu1Cg2GnqvgY0ws1sljwdSwJGrVa4uweOPvfyvUu7-FeFAAZO7vDpRiLfS-Nu9i13ahAdKaP68eyeuztotLxI-l3AnMV)

20. Brisanje komentarja
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPF1Ji9048Rl-nGJlEY16D0QGvH4Y2P64mdg0qpR0PQMtJgx1UHjV15llfVJ5h44r7Xea-vy_p_ppwOJ7HEChFMXNIhb4cqoP9n1Y54oPfkREBAfPV2Cnac9ZAzHCOqmJ_qJBVrLgiTc9cM8v4LSep3obdkMO-9-QHQcuhu3R3fMq6AYFTKXPhkewG5gHKSlEPc8xlL87aFrRWV1JU_ykh-77Y1x7UaCZV-_OE-ugem2ZG7hASxJAHd8CyiO6fqq01qyj-3YeeIwNQMoRpzeF8nJYY6nnHAHfrZompFXmw8Dygj8jXGzrWxDb7P4mI-YkpKh8kFPfiILfYsQg3hwILA1fmBAf_Q5TPbOpz6JH5EIhjcLcJkGjQ1p2HbJxcR4ifhvxIgKSVMNr-6HacnDmPzR7JW-1bbPWYkm8UCgmh8eLe5OjGihlIFVD1u6IX8NT5leattqru9kuxgkhIHreJiLNV2NJe8trqrat4UFFdTz6rDfifvrkn3JLgzW9-x7kvR0St9UfnOiv2wZZpT3ylzLLvlNhlOJ)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bPF1Rjf048Rl-nGZScaFA8BYA48fKa2fX5gf4MaUOEmTo0IpwywkWV8sUP7UybuTsoGrWZRAmPRMy_t_p3yhFx0bc7iVKxyr9YpP5IYuWXIpvK9ywMpcSoyG1LtG4hdOeYpDiSpZ3zh6wvmNRgLboFH5qg8mYrx6NYp9f3PBStK_0buxDj3cWIEr8H6_QUa1MiL0Fqjo6NtZkJwEsjtEaY_Zovl92VeM9NB61RhuVi79SKqT1JhNTiMEWsvDZnt00FSzkBgggwEHCSLV8-XyN-HaOUchxQ4yOitFBfHFAt-KNoevK8o50xf7EX8b_n5ztRCgSb5yJirWixvgikRJloGDE51GZnmhwpeghp6IHZEQhZlIcOTGz63u6GgXCgn8T2VhwIxLSVd5wyD7ezcwYj_tXd1-3hV2Izo1JmLt6TP5jKhKgbzPyP7yjV4iCPgueljAVpf5loneQjkwlj7KbMwWkkGjdGRlxflek7SHOnactb9jif_ri63fe5To5FVvDslWDON8kGSFPIZe-ScH_dZDrPQjg_q3)
  
21. Izbira lokacije
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPH1Rzf048Nl_XKZUaaEo0g21A48AI5jXPHMA6qklOsz0omsE-vwxQJvzPsrZRC4LAa7V62-zsRcxTfRhGZMp2xXroWgCsqAjBY71DDiOxaoAkMSBJYBffGI6HTGYjPOvUudlRgxN6_CNigGoeDiG67gsDwpLMGNZLcIY_i9q7TiePUjTXH2rl9Be0S8YYNzhiYazAZNyZCKTliq-N8__RmuGw_GEftg0etxVy7PSQDc5HYihDvXdU_8G5MmnSJeR01OmlCLtDusq7mUHSMx7moMRub8SyumrJjgwAU9q8blWlQF28xuNxIN1hLMaB5nbdEohMWaehJzwwFcWKl71IY6kzLokCDMSFsFBb-PDpd1DopA5XuBBETDrc3kNJuAldEjqyxunhF6QNTYkxAaSjwqs3J4cWnrZOuah4Zo6iubXnaKLcVurY-D5vVluDCaagWyE9f1ROtkiGjEv21mgIuZoSKJrpDPtwVmm8zTraTMeqZoyE2uwQau2Towqq5n6yEmiujZtn9wgZ7eXedZ7mvTLIvOKJD1jysfPjBKdgzyhTqrA4CfRo2PoXa-t10EiebZkJpQOdzxm22y7SHL48xsbopOEnZ93zHLM2gAZZ9f7MwQZRRoCT3z7523yMVE1sXw7YhQ8_yB)
  
22. Ogled lokacije
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bPD1Jzj048Nl_XMZz0A7o29AK1MXI10AGgA0Q7FfRUoTXBMT7NUyDZG_hhV-hyxQ9ZWjgjI3VV1-xyrxk-idQmZMp3xXboYgSkjA5Dn2Wcc-4QwTIRbW0I_eAbqYvmUKeJNMXVzAB_wyi1ktrML8zKKoe33rB1SiXcJPcYM5kly5x2TsqFEJzJI4HFXve0SOB5RqlIQNqgrTw-DeEEt3xEhYuwVbE_G3YhUfBT7v_nUy6pTggy3eZeGsjl9YTT-WBbamSJOV0LQmEe6pivPRBAAeVBE4qVsc80C5vvZQZ5hwSQPq4kQW_5310V-DjaL6ZJMGi_F21KadcgWexJxzgRdaodC9Xk7yuMQSOISu_SUKQsRD1P-nh3fugh0UEOd38hY47g6vRT2JzekqudYXqUTGYirnjy-9HyTluECiqdO1dCoX4MVts14d6JPuOuuZhHA8qxac3i4l-RRVdWEhIQGL0ZXjPnfE1cxzXgAwJM7SsyMnZYJOlLAjGHycZhzuz7MrP4DjWhvD79TS2Paw6meD7UIOjVZg9E2hrvElzGvrc_7hvq0B3UtqWZZK7unSxHr3Mvr_0m00)
