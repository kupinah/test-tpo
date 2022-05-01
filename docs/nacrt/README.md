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

![Logični pogled](../gradivo/img/logicnipogled.png)
![Fizični pogled](../gradivo/img/fizicnipogled.png)

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
  ![img](https://teaching.lavbic.net/plantuml/png/bP71IiD048RlUOgXNlGWfSM0Y1PiKIyYelRYRP9CTPhjJfnisleuleWttyj9gcsA5V6GG3BVzy-_x3Dd11EHaCWoYigSVO6ACqWmpPzKAf-buaGXAFhIHkH3YyfeWfKB3xGCvuwV_Cp6aDgBj4LX6aI7eXdfg0bBdAN_0DORLz3YcGEr8LLPxFPBUgd8ftJD4tiyjNVjnPV3uulH3leMDN3A1VhmVs5dsQWv27HkbQSuTrFoK1MYc7ZEEt1-3-CUd9usq60GHSKc3pfZfSmovb2eJDXX1x24kzZuf5w3-chAjl4TpP2B3ogET6NrpKfNltwLLkIHaNPT7EhqkZxFCP3rZApguS0Ad43HWvCpo1tdDtXLpP9772gNwAUqVx1HxkB8sjPAtvH-hII6yNeXxdEs_cYB_SWAr-AHYV6VedK-_5hJxS9zm52L8yceIVcgl3t8Q6jPt63ZNeFPLUNuySuWoPpAm4v0e2eB-dZpqXIf3_fzAPy0)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP71IiD048RlUOgXNlGWqc90H0jjKIyYelRYRPATwfXq9yvkgZwEB-BDztAIQasn8Xusi9d_-_z_T-_P4Sn4OYRFIH8AzXKgpY73lBXJgRtBfHI5gEY3ZSZ7ZihH3Eiotj1p79Lyv-SsXjm-f1qLvb5qBEf89wrPLfhx3y4gSIbwkkT8NP6gF6tc0ptMv7CwvvajJzsihVHqV70osQ2-H8sSSuK-_X_OM3Pf3mAzaPkpvs1tPjiUZAvXseUZetOw72P9zMq4lQcICtW1bSgCI-m11hXAJPyr_gWlXgmJbIXcdWk6GdnKAKcNrC2eVFdhLsYft3UblHF7nhtfpGkCP3qJgxexj0A7KFNXy1YAaeiBFAldsIsEbGFw1zhU-KQkqiJQDiZ0a463P2RZLI1kirjjkk0WiS8Dk6zW-YTedNS_O_Rsu3fYhCD47BKkdvNN1uxMmj9MDkstiakrWFSt1iaM52AN0W9rgEZzrKjRf3derwDy0000)

7. Dodajanje novic o dogodkih, spremembah v občini, aktualnih dogajanj...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP6zJiDG34RtF8LL5XWGQaKaXA0IL30XgFZPM9mR5zo4w-3S1EZRy29il1TEKj4KEi2GEyJds9_bHqu9PY8XaTSeAZFs1Ie-GO8kUr2fVEea5uMWw4ihaGyzAgKPLdcufTTmalE3Vx8oE7j8UnIw87egcf9EscP9Rjr_0TyJE-ZbaGFr8LLvsUoNz5oHTtJ1C_iyzMTjnUUd1sUJ3VGKDR3Z0dtulx0nRDGk0eEfyXphV4wUeIf4CV6S3U3a1kw6S7JKKkDn51MhXZ2uIXGNv621znvIIN6EVaxWfMP70y0IhcEJasOewflvQ_fboq4cFgZaf9qnCiDrlpOAs67xXjdLE3Hjcosuna2MDhB0ksERV0Z540wFWHU5v9wNORTtLl1r75d01XuPF6hWTejkpdQx1_RvKMJn6dxV-BZX2wMQbAUcXOo-5Oktk-oxjmSt0KDLJYIbN_vgdlnDNgwsNaXfBMFSOdV35hFBPlZvmI19JMNWN42WAWlwVFVoysho1G00)
  - Alternativni tok 1
  - ![img](https://teaching.lavbic.net/plantuml/png/bP6zJkj044PxFyKeDDm2eKHOka8G2IAe44JyTBSPhoSmiTanuxM1l0qlGiTxtV4w0WVIKDY5zvpvll4-S4wm40cPl2H9NR2lKF4HCdJ5lKhZSoUbA0H5NziH-J2WSbfWKuPRUWad9T_xHpi6Po_I0OKkY9wAvgIpE2mhRVeFu3EnXvuVED0GKfNdxNvDJmrvHnUyiCVJC6idFJ_zUpRRGizH0pkkq8VV2rlB9d4H6CsLbzYMI_8CJIMAcUTY12StS3U6ewD8JQT9KdqDXD5LfhWY1olyvo6N79VebmHUMdOq0gpXEZKvwq9HNytVq2yZ1uNue5AIziR43DT_sYfWZnqOPhV6eHlRRS4j1hAsYHNUcrho8LHZE3m6NbLIUbwNtVtp1L-dYHNiu8d1amwEM_Gvkt4F7FAJnEfr_87nQSTNIYqfpqqB1NqgLczlFNT_7su2XgQUIKxHNxVRFCXf8oQDsDquOdOv1NwyCqZMKXsu513mrDGLVRnv-VxhvJy0)

8. Urejanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP9DJiD034RtEOLLDh10g16HK5KgjHMi4Ag07i19NEecZ8Cp2N0SBiAEU-4aYAO_6nQPHUOz-xCyQqu9LY8-blSWA3Ds1Ig-G8n9zgnIkJIHN1IyeYljYfplKIcjiChz4xtxQSxFxiMk8R63j4TXuaLdeYdfl2qMvrRz0FZhs45lQ_RKXrJbxRXVqcj5Bg4xNjddgD_h9BgTNTtCZz0BLCy95-Zy_uMZOODs41Wib3TOvnjo35KXYh7ZR03JHrWEOJnkgSaa28fjGHWibJReDWHEQave05Z2GsHutBH1_J1ZHxXlESZ4UPMSj3D2CvBkrr41E-pICDiJ-wPiavjhz6Jv0ejuFh7E8oY6CBg6IYdbLfNJiotv40MMhY538yDziXq2-tmOMBQ6lpG-QlX2gIRbXQJeC_fJBDlvRzsB2tZqwAjoBYaT-ENQ7kMX7dPwjA-dj1CcQh7biCLiOnb-Vp58N5FfEHSGgCg2lZ-TD8FrLYC_)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP7DJjj04CVlVefHUcaF22N2KeKW4aHmgge8cbilO-y49ZOxxdXiA6_J5-cDz-fuZS1fS-d1U_3y_X-xSy-1O2jYXJnbMLjnR53n0GeigpkLBePIQb4mnTZwYA9Dg41Rx6hxHazsKVDTVF0nb7wGJYWiJVHID92kabbHk_i_m5lY23tUiz4KKfN7m_gMVdGKI_h2M_yYJRC-vDUNdwzM1-Wrgd793KRxVy71ibcw2CpMoZliwnr5XguHnI9oDOEBMzZCuUmiKSjbbZNlXZ3RAEqmxWYYz5pI3B25czpnOeX1_UcAFS7Nn44bqLHgqb6nS4Kv_Zeem14xSSptn3RO3hsvHoFlbtd5ewKddq8pXzDpw9G29wby_FHEtkIPjnl8XPEBlybq2PpoYyox3Vo9y_d0DqezAQybe5Nq9l5kHw--nyTmQsXTkv90IVzQRNyGQ2ycJzXcdZ3VHOKllncawAarhWK48dLjGo-_eWobnsV_7iUN5tZshGTEa2az-nARL97_0000)

9. Brisanje novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP6nJiD038RtF8LL5XWGQaKaL44bMW4BGgYb2vkJkE0cFGVdKihZy29il1VEfO9Kb84XDyJVv_y_tJDd10iHdyWcYggSNOcAAqWmpPzKQfUbKeY2LtILZSZv3fNH0kl2Fz36NnRyv5OsXjGEqWw5gHSTYsQaax0iAMpxB-0xiOLUdzbJ5rALr_r-HIyrkPHkUM6VesxMGNmzFhkQxA7lKJsdNABp_nVsbet2HQ1thxp4TR4anr2NefWupdjmEODv7yxF0pKQHL7vin1wSwKbkYM1apMdr0EiO1eRdZGng6zcx0XtWODSd5SfI5jZO4RQ_jehO8kT6cRlnBvPs_JcDNgoVf5LF1vPyX3AFWml82yulyERUfKyubYvQZeU7lqeqpYoceqoC6NGA8bX7DBaaBCsjciC8glP6ATcn7yRrl9uk_Za16OUVLrD9AEWRqlk3ZBQIOa3Dky7p5ubnyyF1adML7ak10JgggJFToUXGNErBm00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP6nJiD038RtF8LL5XWGQaKaXA1IMm4BGWZemkOaBfYav-2x57WSNeIDzyAvL92ACZ0aKkBl-_rVyiW5mK8aPFAQ9BvaLwFY4ZBComULnXMvLA8G59st4RdGemfQO5E5EteDaueVtDB6aDkDj4TX7aIdeWNfB8PbbQN_0hutTj3B8mVgGwhoijttzDoGo-cI5tOvwk_QIS-dHsUpBVGrQk2SQtJX_yBMiaay20mcnP8TU_jczZY0oItCXt1o4gVZSPBKFq4mc2izeNiYSBBYd0Q07cvImxCs7lNDZ0tXAd9GYWig5MbdZCp8krTR1UomGyFi_t1eOzk-lC90rY-nYljZstmCzH2EJw6ikBp2YsQPtUDKsRSTT_T-b9iqiPgjCZ9br2gPOHotoIuNtTg-CKgiPciScf7-RLZB_NNmmG7S1WoDdqb1KL-Nt1mKjB4bZTXy6B5hvH8_FnWaMv4FN0a8DBwcptSdiK5xj2y0)

10. Pregled novic
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP71Qi9048Rl-nI3lRI78WO3HQoWqfwAYAqFiDcCEYJkffEDsfVhhU_LILPgfA7GGqBO_Rv__jtiA4NOEESJTrAgpCWMclKU4csoBRlAfiRbZi6pjgLieVKjAiMDhdB_XYS_pMbhzx8DHbx8BKeRxtZcE4MUDs59Bkc_W9-90Jhko6CROdR7Rh_4zmgjmHVQo6EnFUicVfuzFCqxwALcJuOARVt_XSwogZa8z1R8kANICycjGLKurecbh0VJLrWFO3nkkCb4gU8I2RsbM3ccODs13FP0bx2AXKxgEPe_HBZY5mq7cREUNOuSZ4WC4vOw1HsmeM3oeyZNiNLnEcYFKaz9m_k9J1v1CO3H8sGvPGlTkExsxeAkOYNrQZGIDAhH8fpWp5Buq6qdKbAmTeRYn7yvql3-7DxlGrXjv7EvosAAL_bnWwm73R9aolJN9uLBTTy0)
  

11. Dodajanje predlogov o odpravljanju poškodb, novih idej, težavah...
  - Osnovni tok
  ![img](https://teaching.lavbic.net/plantuml/png/bP7BJkj038RtUGghR621K2iY7I6e11MiaAYuxCx6oRZ5pJ0EpgHm-ZQy23lUwpXfH5DHa5Xa5l7tNom_iYEOYSHCNfEaAZYKgFW46UR5NAKEBXSl2b4nL3QY47kKendMFjxJQpptF0zFDeRS7j8UXNaKlH1rf9FMBFFc_WNuJ5n3BuySgG-foijkVKNFDOMShdbcNw1-rbvwTV7dShA3dg96phd447yls5asQHU1mLHvWKk_eC1GbwAO1Iu6S7u73qCuFMsfyJX9oeqX36uonHNbiCA_0PmuN61O49HApikS1e0LtAOcpvfOr7_ci6KmxKWe94GLJxhMZ4oJhtzz8rbpnyRPwJWspiqglCH8LZcnreTZ2p-1SWWdPy2hKdpWhl7-mGQ-JHFhsC0ZWqSDtAxI1Urts_GLeyGQDefZKwIDmg0bAKzD60lQQApXOMTzT0Ht4MDTJSJH5uFTaJ_Ak_ss1uwsQgOjzZ1iCRjnWH_l398jgOhi1GJgggIFjo3RzxFq_m00)
  - Alternativni tok 1
  ![img](https://teaching.lavbic.net/plantuml/png/bP7DJkD03CVlUGghUu43gbeH2I6e1DLoGgA2vRON9-CMDyCuE9C2VHjUP6-yrpeVegde7lQGESI__uVb9tO4Iv6OoLkIL0M74XMV8SEyMAdKmUNYHI4gXif65EA0ShJ4siTVz1QlFA_2iuqXjuTqG64UHQz57UcyDSkykNy3lX8xwFM98mqXLNazhA_efQQGqoqlxGiqpFgHtboV_PmVe1UeaNCkCSJ_5nmicxIBm6YXlCQDNrDWg4jHp08N8xXwWCS9N5oqr6oM9ENE44PtcUAMSjZYxm1E7Aunh0bA9UTbHIF02kvJasTDBEgxEUmPB7eI2WbHnPDscgbfykxNFoGTTsgSdOvZuzoimXkCP9KJQtqoi_1pA2TmVWcyBSK7xXiV7U_W-pInZWqyDNZQmEqgVT1HlyrGCKsiOQCuDKNQA0pQaFB2XB6WdSOQdlJMup4yH8nrDHT7hK5VS7_WQ2ydRR77IOlPaGhy_CCWsOQgo5v0851TbVJv4MJ_19PlXr5qt29HQHjiq3Ny2m00)

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
