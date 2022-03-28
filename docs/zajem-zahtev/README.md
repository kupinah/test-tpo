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

Naša aplikacija se bo ukvarjala s problemom komunikacije med občani oziroma prebivalci in očinskimi delavci. Veliko krat se je že zgodilo da povprečem občan opazi napake oziroma poškodbe prometne in javne infrastrukture (npr. nevzdrževana cesta ali pa vandaliziran prometni znak) v svoji občini. Lahko se zgodi tudi da posameznik pride do ideje, ki bi lahko izboljšala življenje vseh prebivalcev njegove občine (npr. postavitev nove klopce v lokalnem parku). Dokler se ta opažnja problema oziroma ideja ne prijavi na upravni enoti in pride do občinskega delavca, je enako, kot da je nihče ne bi zaznal oziroma si ideje izmislil. Tukaj pride do našega problema komunikacije med prebivalci in občnimi delavci. Na upravnih enotah je ponavadi potrebno čakati na prost termin, hkrati pa je kategorizacija vseh prijav odvisna od občnega delavca zadolženega za komunikacij s prebivalci. Naša rešitev je aplikacija, ki bi uporabnikom omogočila prijavo problemov ter idej, ki se navezujejo na njihovo občino, občnim delavcem pa informiranje prebivalcev s splošnimi sporočili ter kategoriziranje prijav na ideje, probleme in pa drugo.
Uporabnike bi sprva razdelili na občne delavce in pa prebivalce. Vsi občni delavci bodo imeli sposobnost pošiljanja splošnih novic, ki jih bodo videli vsi prebivalci občine. Poseben član občnih delavcev bo predstavnik občine. Ta je zadolžen da pregleda predloge prebivalcev ter preveri njihovo pristnost. Te ki so verodostojni nato posreduje primernim občnim organizacijam. Predstavnik občine bo imel dostop do podatkovne baze, ki bo sprejemala predloge prebivalcev. Ko bo predlog obdelal, ga bo lahko arhiviral - dodal v primarno podatkovno bazo in izbrisal iz baze za sprejem predlogov.
Druga in pomembnejša skupina uporabnikov so prebivalci. Med njih spadajo navadni prebivalci (brez prijavljenega stalnega prebivališča) ter sami občani. Imeli bodo opcijo, da do aplikacije dostopajo brez registracije. Tako bodo lahko dobivali novice za občino v kateri se nahajajo, nebodo pa mogli komunicirati z občnimi delavci ter objavljati pritožb oziroma predlogov. Druga opcija so registrirani uporabniki. Poleg dovoljenj neregistriranih uporabnikov bodo lahko sporočali pritožbe in predloge v trenutni pobčini. Za registrirane uporabnike se bo tudi vedelo, katera je njihova matična občina (glede na stalno prebivališče). V njej bodo imeli dodatne pravice kot so glasovanje o predlogih, ki jih je obdelal predstavnik občine, ter možnost najavljene komunikacije z občnimi delavci.
Spletna aplikacija bo delala v vseh občinah, ki jo podpirajo. Na aplikaciji se bo uporabniku (ob dovoljenju uporabljanja GPS) samodejno spreminjala občina v kateri se nahaja. Tako se bodo prijave od uporabnika navezovala na to občino. Obstajala bo tudi opcija, da pred prijavo problema oziroma ideje spremeni občino na katero se bo navezovalo.

:dart: **TO-DO** dodaj še malo več uvoda. Npr. boljše opiši zahteve (tudi nefunkcionalne). Obvezno omeni kje in kako se bo uporabljal rest api.

zunanji sistemi: transakcijska PB, PB sprejeti predlogi, REST API vmesnik
funkcionalne zahteve: dodajanje novic, prijava poškodbe, priporočilo ideje, glasovanje na idejah 
nefunkcionalne zahteve: delovanje funkcionalnosti v 100 ms, dostopno za različne občine, uporabniku dovoliti le določene funkcionalnosti v tuji občini 

## 2. Uporabniške vloge

- **Neregistriran uporabnik** - Vsak uporabnik, ki ni registriran. Neregistriran uporabnik si lahko ogleda novice, vendar ne more objavljati, pošiljati predloge in komunicirati s ostalimi uporabniki.  
- **Registriran uporabniki** - Uporabniki ki so že naredili registracijo in prijavo na spletno stran. Registrirani uporabniki lahko sledijo novice za svojo občino, pošiljajo predloge in komunicirati s ostalimi uporabniki. 
- **Občni delavec** - Občni delavci so zaposleni na občinskem uradu. Upravljateli lahko objavljajo novice, pregledajo predloge, komunicirajo z ostalimi oupravljateli in z uporabniki. 
-**Predstavnik občine** - Predstavnik občine je občni delavec, ki je zadolžen za preverjenje pristnosti predlog uporabnikov ter jih nato posreduje primernim organizacijam.
- **Administrator** - Administrator skrbi za pravilno delovanje in uporabljanje spletno stran. Lahko ogleda in briše objave in profilov. 
- :dart: **TO-DO**

- Opredelite glavne tipe uporabnikov vaše aplikacije glede na funkcionalnosti, ki jih imajo na voljo.
- Zelo pomembno je, da uporabniške vloge konsistentno imenujete. Na primer, če ste definirali vlogo **učitelj**, morate povsod uporabljati samostalnik **učitelj**, ne pa morda **profesor** ali **pedagog**. Tehniška besedila žal ne morejo dosegati leposlovnih standardov, tudi če so še tako dobro napisana.

## 3. Slovar pojmov

**Občina** - osnovna lokalna skupnost, ki v okviru zakonodaje samostojno ureja svoje zadeve in izvaja določene zakonske predpise na področjih, ki so ji dodeljena.
**Prebivalec** - oseba, ki v občini živi oziroma se v njej nahaja, nima pa v njej prijavljenega stalnega prebivališča.
**Občan** - prebivalec v občini, ki ima v njej prijavljeno stalno prebivališče.
**Občni delavec** - oseba zaposlena na upravni enoti občine.
**Predstavnik občine** - občni delavec zadolžen za preverjanje pristnosti in posredovanje uporabniških opažanj in priporočil.
**Občna organizacija** - normalna organizacija, ki se nahaja v občini (npr. gasilci), če v občini ni take organizacije se nanaša na najbližjo oziroma najprimernejšo organizacijo izven občine.

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

V tem razdelku podrobno opišite posamezne funkcionalnosti, ki jih vaša aplikacija ponuja svojim uporabnikom. Za vsako funkcionalnost navedite naslednje podatke:

### TO-DO Naziv zahteve

#### Povzetek funkcionalnosti

:dart: **TO-DO**

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

## 6. Nefunkcionalne zahteve

:dart: **TO-DO**

- Navedite splošne omejitve, ki jih moramo upoštevati v več funkcionalnostih ali celo skozi celoten razvoj aplikacije.

## 7. Prototipi vmesnikov

:dart: **TO-DO**

- Navesti je potrebno: zaslonske maske, sistemske vmesnike in vmesnike do naprav, vključno z referencami do primerov uporabe.
