# Načrt sistema

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | Občinski obveščevalnik                                         |
| **Člani projektne skupine** | Luka Markićević, Haris Kupinić, Luka Brodnik, Elena Najdova, Luka Pantar |
| **Kraj in datum**           | Ljubljana, 21.4.2022                                   |

## Povzetek

:dart: **TO-DO**

- Povzetek je, kot že vemo, celoten dokument, strnjen v največ 150 besed.

## 1. Načrt arhitekture

:dart: **TO-DO**

[Komponentni diagram](https://teaching.lavbic.net/plantuml/png/VL9DRu904BtxApRS_GicJIHcvKDIQWys7bRPaf5bTmEL9ZN-zo8328FARUQzUU_j35OSCv5AvaIRbUyk7NQPCVPLbV80Mdo2_DtVwhCrXJXeA3E82lCDgaUqgU1u9zf29igaM5zdzMSx0-yzu7x8FUVcSFVmYXoKXcoFNTGZpLQLT2UX2FvtraAV88RoH-PDcZvBi5cwFhwr9eQDPpiLeLTRRLkFJdCdStMI5IIDdZP9BRRRXc_XchEOnnzkm7lPbJ6faYmGjcpOewso-NpnO0UJ3lAwX4_WFlCJV91wT2549ziT7XKfz2gJ6Pg3391NFFwTaFJYgYymd1rSQxHzHCd_G6gwgNy0)

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

## 3. Načrt obnašanja

1. Registracija
  - Osnovni tok
  ![image](https://teaching.lavbic.net/plantuml/png/bP5BJiD038RtEOLLDh10gAML489AW80D0bJe0Po9MqpIcU0uvN4R3iEzS992XzU2HH8f_ZxxzymTPmIp43GDJqbIvUnB55n0YYwVIwXzva8H15JGLrOYhn6LqGphGc_fIOyAdlk5bS7PYoIYq6cGuo0PoKdRB2si-m_WSs87FTwnKWo9XCV81uYA5JtKv1rTyCmUJ_6qZT7PyTxfoI_qDOgounAz_b_uDMxIhWAzInAQSwN2TcvGbq4mzPptuEW6fdquE6YvyJX9odLBw4qw2HtVst08gU0BkHvW1PEHMMap3-NPn2_Uz6C0GnwyIYX8EcjWbkj-_IbrvD18kpdMfdkp1ozHoT8c5dXxR07seUp3_Y7a1UUNU5ulqYWlRcwjfSaeiRoDD31fq4WIewl5OcEGMDR669gnsnYbq9A4hqE6cjDcsNvvA-Q63PTPuVvp6Op08MolCkpim8sYrfMTJuPjYzLAtoePVOaqQhbfl-MkqYLLoklhH0XGLoMzlNgE5-Ht)
  - Alternativni tok 1
  - Alternativni tok 2

2. Prijava
  - Osnovni tok
  - Alternativni tok 1

3. Odjava
  - Osnovni tok

4. Pregled uporabniškega profila
  - Osnovni tok

5. Ureditev profila
  - Osnovni tok
  - Alternativni tok 1
  - Alternativni tok 2

6. Brisanje profila
  - Osnovni tok
  - Alternativni tok 1

7. Dodajanje novic o dogodkih, spremembah v občini, aktualnih dogajanj...
  - Osnovni tok
  - Alternativni tok 1

8. Urejanje novic
  - Osnovni tok
  - Alternativni tok 1

9. Brisanje novic
  - Osnovni tok
  - Alternativni tok 1

10. Pregled novic
  - Osnovni tok

11. Dodajanje predlogov o odpravljanju poškodb, novih idej, težavah...
  - Osnovni tok
  - Alternativni tok 1

12. Glasovanje med predlogi
  - Osnovni tok

13. Urejanje predlogov
  - Osnovni tok
  - Alternativni tok 1

14. Pregled predlogov
  - Osnovni tok

15. Brisanje predlogov
  - Osnovni tok
  - Alternativni tok 1

16. Pošiljanje sporočil
  - Osnovni tok

17. Iskanje novice/predlogov
  - Osnovni tok

18. Pregled profilov ostalih uporabnikov
  - Osnovni tok

19. Dodajanje komentarja
  - Osnovni tok

20. Brisanje komentarja
  - Osnovni tok
  - Alternativni tok 1

21. Izbira lokacije
  - Osnovni tok
  - Alternativni tok 1

22. Ogled lokacije
  - Osnovni tok
