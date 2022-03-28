# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Občinski obveščevalnik |
| **Člani projektne skupine** | Luka Markićević, Haris Kupinić, Luka Brodnik, Elena Najdova, Luka Pantar |
| **Kraj in datum**           | Ljubljana, 28.3.2022                                   |

## Povzetek projekta

Tekom vsakdanjega življenja, marsikdo opazi napake, poškodbe in zlorabe prometnih infrastruktur ter občinskih posesti. Marskido se tudi spomni idej oziroma načinov kako bi lahko izboljšal vsakodnevno življenje. Zaradi kompliciranih pristopov k obveščanju občinskih delavcev se veliko teh opažanj oziroma idej ne izrazi in posledično tudi ne razreši. S skupino si želimo razviri aplikacijo, ki bi ta problem rešila in omogočala tekočo komunikacijo med občani ter občinskimi delavci. Uporabniki bi dobili obvestila o dogodkih in delih v občini kar preko aplikacije, preko nje pa bi lahko sporočali svoja mnenja in opažanja naravnost v pisarne upravnih enot. Aplikacija bi pravtako omogočala registriranim uporabnikom glasovati na predlogah njihovih soobčanov. Splošne novice s strani občine bi lahko objavljal samo predstavnik občine, ki bi bil tudi zadolžen za preverjanje verodostojnosti podatkov prejetih od občanov. Pravilne podatke bi nato tudo posredoval občni organizaciji, ki bi se s predlogom oziroma problemom tudi soočila.

Na trgu že obstajajo podobne rešitve za zadan problem. Od naše aplikacije se razlikujejo, ker so predvsem namenjene določeni občini, kar pomeni da se jih ne da uporabljati vsepovsod, ali pa delujejo na obsegu celotne države, kar pa je za posamične občine neučinkovito.

## 1. Uvod

:dart: **TO-DO**

- V uvodu opišite problemsko domeno (kateri problem bo naša aplikacija reševala) in kratek pregled glavnih funkcionalnosti (kaj vse bo aplikacija počela).

## 2. Uporabniške vloge

- Neregistriran uporabnik - Vsak uporabnik, ki ni registriran. Neregistriran uporabnik si lahko ogleda novice, vendar ne more objavljati, pošiljati predloge in komunicirati s ostalimi uporabniki.  
- Registriran uporabniki - Uporabniki ki so že naredili registracijo in prijavo na spletno stran. Registrirani uporabniki lahko sledijo novice za svojo občino, pošiljajo predloge in komunicirati s ostalimi uporabniki. 
- Upravitelji občine - Upravljateli občine so zaposleni na občinskem uradu. Upravljateli lahko obljavljajo novice, pregledajo predloge, komunicirajo s ostalimi oupravljateli in s uporabniki. 
- Administrator - Administrator skrbi za pravilno delovanje in uporabljanje spletno stran. Lahko ogleda in briše objave in profilov. 
- :dart: **TO-DO**

- Opredelite glavne tipe uporabnikov vaše aplikacije glede na funkcionalnosti, ki jih imajo na voljo.
- Zelo pomembno je, da uporabniške vloge konsistentno imenujete. Na primer, če ste definirali vlogo **učitelj**, morate povsod uporabljati samostalnik **učitelj**, ne pa morda **profesor** ali **pedagog**. Tehniška besedila žal ne morejo dosegati leposlovnih standardov, tudi če so še tako dobro napisana.

## 3. Slovar pojmov

:dart: **TO-DO**

- Natančno opredelite vse têrmine, ki jih boste uporabljali v nadaljevanju dokumenta.

## 4. Diagram primerov uporabe

:dart: **TO-DO**

- Narišite diagram primerov uporabe v jeziku UML.
- Diagram predstavlja interakcijo med akterji in funkcionalnostmi (kdo lahko kaj počne).
- Akterji so tipično uporabniške vloge, lahko pa gre tudi za zunanje komponente (sistemi), ki komunicirajo z našo aplikacijo.
- Za izdelavo uporabite ogrodje PlantUML, in sicer [Use Case Diagram](https://plantuml.com/use-case-diagram).
- V poročilo vključite **izvorno kodo diagrama v jeziku PlantUML**, ki naj bo prisotna v repozitoriju, sliko diagrama pa vključite s povezavo (in ne preko neposredne vključitve binarne datoteke) preko storitve [`https://teaching.lavbic.net/plantuml`](https://teaching.lavbic.net/plantuml), kot prikazuje spodnji primer.
- Diagram naj bo **jasno berljiv**.

![DPU](https://teaching.lavbic.net/plantuml/svg/VP9DJiCm48NtFiKeRCWYbP8c4c9HzGTOLofXWTYuoJGrTUngOgj8m64u3FV2ZbCf0jIDfRptlPdesVFES3AsbN2tBXdh3a8TEV4MjhmwDAIjgYijDO4XhZfdeJ8ZgiOTjz8yufjPID6erjbGkGDfHDaEAzuXl3COpLtrSqzxOT3hccgae5qL3ykR-vLJEP4-1N4hNP9zZiRoocXQZd81-Gtykv19t1am6aWqUmEr8AoCq8gnFWHHUTJ4jqeS88rWiO4o_UjamSdEphDLNBsA5zM9pc0x93SfOtuwLur4Y9xuznS48EeRERSJhKcqI2_AzWjmYA_TvWjGDa3P9MWwGDDBK3v0-IMe6A32tGGhCqXyZyd7pFV3oXII6LoxFuvxBtnaCNDd7aDIwvDocY_4ATCO9lOu6G9m2-uHeQgzLJWh6BatXAgahN5malxA_CumdCrTohtW7m00)

**Diagram primerov uporabe** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve

1. Registracija
2. Prijava
3. Odjava
4. Pregled uporabniškega profila
5. Ureditev profila
6. Brisanje profila
7. Sprememba gesla
8. Dodajanje novice o dogodkih, spremembah v občini, aktualnih dogajanj...
9. Urejanje novice
10. Brisanje novice
11. Pregled novice
12. Dodajanje predlogov o poškodbah, idejah, težavah... 
13. Glasovanje med predlogi
14. Urejanje predlogov
15. Pregled predlogov
16. Brisanje predlogov
17. Pošiljanje sporočil
18. Iskanje novice/predlogov
19. Pregled profilov ostalih uporabnikov
20. Komentiranje


V tem razdelku podrobno opišite posamezne funkcionalnosti, ki jih vaša aplikacija ponuja svojim uporabnikom. Za vsako funkcionalnost navedite naslednje podatke:

### TO-DO Naziv zahteve

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 1. Registracija
Neregistriran uporabnik lahko registrira račun, kar predstavlja osnovno funkcionalnost za omogočanje polne izkušnje pri uporabi naše aplikacije. Po izpolnjeni registracijski formi in uspešni registraciji, uporabnik si bo ustvaril račun s pomočjo, katerega bo lahko dostopal do različnih vsebin in funkionalnosti aplikacije.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 2. Prijava
Registiran uporabnik, občni delavec, predstavnik občine ter administrator lahko s procesom prijave dostopajo do svojih računov in vseh funkcionalnosti, ki jih njihova vloga omogoča.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 3. Odjava
Registiran uporabnik, občni delavec, predstavnik občine ter administrator se lahko tudi odjavijo iz svojega računa ter aplikaciji pristopijo kot gostje.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 4. Pregled uporabniškega profila
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko pregledajo svoj račun ter informacije, ki jih delijo z drugimi.

- **Povzetek funkcionalnosti** v enem ali največ nekaj stavkih.
- Prvi stavek naj se prične z nazivom uporabniške vloge (ali uporabniških vlog, če se funkcionalnost nanaša na več kot eno vlogo), nato pa naj sledita beseda **lahko** in navedba funkcionalnosti.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 5. Ureditev profila
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko urejajo svoj profil ter posodabljajo osnovne informacije, kot so ime, priimek, geslo, itn.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

## 6. Brisanje profila
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko izbrišejo svoj račun. Razlogov zato je kar nekaj - selitev, prenehanje funkcije v občini, itn.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

## 7. Dodajanje novic o dogodkih, spremembah v občini, aktualnih dogajanj...
Občni delavec in predstavnik občine lahko dodajajo novice o trenutnih dogajanj v občini. S promocijo dogodkov in del v občini, promovirajo tudi svoje delo in pa tudi obveščajo stanovalce o vseh aktualnostih.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 8. Urejanje novice
Občni delavec in predstavnik občine lahko urejata objavljenje novice. To je lahko potrebno zgolj zaradi manjše pravopisne napake ali pa kakšne bolj resne spremembe.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 9. Brisanje novic
Občni delavec in predstavnik občine lahko tudi pobrišeta novice, kar je izjemno koristno v primeru, da ugotovita, da je novica napačna ali pa, da je prišlo do neke spremembe.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 10. Pregled novice
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko pregledujejo novice o aktualnih dogajanj v občini, del, aktivnosti, ipd.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 11. Dodajanje predlogov o odpravljanju poškodb, novih idej, težavah...
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko dodajajo predloge, kako bi popravili neko poškodbo, kaj bi radi imeli v svoji občini ali pa kako bi odpravili neko težavo.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 12. Glasovanje med predlogi
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko glasujejo med predlogi, izbirajo tistega, ki njim najbolj ustreza in ki bo bil v največji meri pomagal prosperitetu občine.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 13. Urejanje predlogov
Registriran uporabnik (autore predloga), občni delavec, predstavnik občine in administrator lahko urejajo predloge, kar bo še posebej koristno za boljše oblikovanje cilja predlogov, odpravljanje pravopisnih napak, ipd.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

## 14. Pregled predlogov
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko pregledajo predloge in na podlagi tega vpogleda formirajo svoje mnenje o le-tem.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 15. Brisanje predlogov
Registriran uporabnik (autor predloga), občni delavec, predstavnik občine in administrator lahko brišejo predloge, za katere menijo, da ne ustrezajo standardom in pogojem uporabe aplikacije.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 16. Pošiljanje sporočil
Registriran uporabnik, občni delavec, predstavnik občine in administrator si lahko izmenjujejo sporočila med sabo, kar bo močno olajšalo povezovanje in komunikacijo članov občine.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 17. Iskanje novice/predlogov
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko iščejo novice in predloge, ki jih zanimajo. Na ta način bodo hitreje dostopali do zase koristnih vsebin.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.


#### Povzetek funkcionalnosti

:dart: **TO-DO**

## 18. Pregled profilov ostalih uporabnikov
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko pregledujejo profile ostalih uporabnikov in na ta način lažje ustvarijo interakcijo med sabo.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

  #### Povzetek funkcionalnosti

:dart: **TO-DO**

## 19. Komentiranje
Registriran uporabnik, občni delavec, predstavnik občine in administrator lahko komentirajo predloge/novice, kar bo prispevalo k lažjemu razumevanju ter hitrejši izmenjavi informacij, ki lahko koristijo večjem številu ljudi.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

## 6. Nefunkcionalne zahteve

:dart: **TO-DO**

- Navedite splošne omejitve, ki jih moramo upoštevati v več funkcionalnostih ali celo skozi celoten razvoj aplikacije.

## 7. Prototipi vmesnikov

:dart: **TO-DO**

- Navesti je potrebno: zaslonske maske, sistemske vmesnike in vmesnike do naprav, vključno z referencami do primerov uporabe.
