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
  ![img](https://teaching.lavbic.net/plantuml/png/bPB1RjD048Rl-nIZS6aFLPJGIAWgaTeAkA1IfUJ6PRoU95CxEyjudPQy3G_3Up6s0zb2EN2mBNc-R-OVhpTS4gn4KY5FpZKLXuYAMoZGLskLDfHUQb58Yg6n4eMKKIMjiAtJPtfALpMlmzRAuEr6cb7ea-YrQ4bwqpShQkl-5_1xuW0zRZXH3gdAO-O3PCM6lhOKF7tabLs1ycclPk-ltxoxUO6-GqtiEM98_o-y6DVrgy3ebfJMt2Hb-sxGHb4i0bSZkBg7vGGkBtjkFdSk7bl2Q358wFd1XeCKYdlo8y065ZEpYcuUwZSJdtdBNmCOAWb9fIOThAbPVdZrJsaWpusqa-FKTU_su1qcihJE0f_DBS05n0bSl8MgvkeMFxJR8ikB9wT7QJ5pbhUJfYPDEqbpzB1ORaoTPUsCSpDUTqPKsf7odPIOAZg9_PDFdIKzExGUZ-4-OMeRMxl4liCXwH-LafvDclNSSj9pdueTDOcFfuGW4AXj8ltu7lXB68-py0nx-oLAxecaj0y2l8zIXmSAl84Xfkn-0W00)
  - Alternativni tok 2
  ![img](https://teaching.lavbic.net/plantuml/png/bP7FJjj04CRl-nIZz08752KbKeKW4Y3e1L4Ko8tBU3q9WvrTCnu7shVfY_J6Up6sqsRvT-Z1jkJvVj_tpUuTvmIB63MBJyxL1OSA1LUGeI-M4fkG-rX60HKCjOqeQABAQO5DgJVqfCSbByFAnk3jHPAeq6kKaoWvoMbdbfNc_axmBx4NFTwnKYeIYOy93v0CQtfeA7Ywu8KzWTAqBvFpaszdfn-ehr2KFLSOzF-13-kwRXKON9BGaciLjdE3feg2MU1Y0CVNC1_1uM6dcqwTgxQMC9Zr47g-jt28cU0lyWF06cOJex8s3-MdWQ-u-Ty0XY86bLYIzDJOAD__-XJgbVkcj9jZRTtRFNYDIjRMMU6zgHKuW6e41qTGb5nSulTcbILzSMTt2yqcplgsqDYWSGj9AjqibX9ZPrrROj-8horH2Qr9-2hcg0NjLDsNTvqrtTjO3uTmhQXDRMlds3bichwPvFGgQTBfvgDEzoDRKwsylIM4286QkgBdtu5lmt2ObBSJ9e5xWkS_1Cablm00)

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
