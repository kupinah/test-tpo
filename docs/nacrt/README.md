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
![Razvojni pogled](https://teaching.lavbic.net/plantuml/png/TP3DJiCm3CVlUGhJEpn15MdJxbJakelRcDLDcaH9Di7GNeqRxuKt16EmtIpP_m__xkf8Cq7ljvGoXwfKSHmIPfp1Sw3wcWXYhcDKocB57Wj1qqMPNTm5X1xts00Mw9RGjfPsF93MRmemLtx6eKBpH1u7deh3TKW_odNuahRjzwNMwg1KY5OIJF9K0qEfcJxU0xjJXZ4tCXR9ipk6u7M_HplHZ9w6I_rfjypIp4l4vUxN0nmilJoCVVdJ5Wx7W3EMLTvk4D8LEAlRTBfOyqJoQifaVTpmVoJdzlTQE2inay4O9Jna4FDF)

### Fizični pogled
![Fizični pogled](https://teaching.lavbic.net/plantuml/png/XPEnRjim48PtFiNLKpjawHm8K5304108R0bbw4RBvvYsH18aBI0jychT-buzYf8hAx8zwKZzt_5uz_DJs6EBi6bEQ9tIWR46Tm620QTUzm6soc4TbD7C7vMsqiaM6gKnl5a4uyBUCFRv2rJMEBdHwgZWyP7IeDl96hCi_YjDfshykCyTRXlpEYTORLfhDEe0As4R35g23qxg5O3q80Jf_MdZttp0DilWDmE02PDtWRxgA6jraA0qTEZKRbYl23vh2QQ4-SiiGMMTx9g3r0S47MjVWAho1cJJnKot17BsplgMtIzqqfLKQD5pY_NDj5NvKNjHrbpFatxTI6-wNjxYTaJK0h5EmC-J9hM2d1VGjUZ90akbyoB9nVVd6pBwEns_20x__Y7fdOd_rvr66oxsNbHNmMjp5kLLvDQK1PzXapOjMP2w_tvXV6wsCj0jj8hUJoUkefJVi_yFRAA1_5627PD8sCXVikU_yQVBysSuNs3uqzSP4oqyUV8F3rbyHiD3Zojw7-VdtQyvO_dB82nOLGwg8cuN_OAcG-iKbemCcKBErkSesYZbe8PLVCXCEKIL9EGk9ienPeAVmtpCDsndyLOi0d6Nkl8F)

### Logični pogled
![Logični pogled](https://teaching.lavbic.net/plantuml/png/VPFRJiCm38RlynJX0VO6qoGEDmW6aq3SkudNkKtZoacBDiIxqyCE7QJSL9K___Olsxc9EwnGPwx1MiX7fNPaKHiIut3yhx3AK89I3hTHHzP2-IvgIu8c4diLIl8r25JQaSUuhr6pn1qhLOCf8KVzGVYfbylGP64V8bQhbVvIMXi78MZ1d48KC5HqbLupWGEQNd7Ew9mLqFeaOziXk0erWWNu0ZV2MtBmgnJc3cqAPK9XLiQ1t53qhMPXGovLzRqfC8UKthA5GVx45Ve8KbnpxkKpxEHhJfhr0tZXbWmcnv10Gxj4_DGgWIYKFRcE7JAMPoxxrM72r4RGEixdjfE0F2udGVBkosqlN9ypwAyswSPoY5m_yEtcSOX_NoxpddqKTWvbzZwRRkEGUIhfado6vN4f2UJx8K82rAFx13bWvGfioKxOnEoQBRf_tf4Rtn1ikckB9RSUxk00aoEEKg2dq_JwqiFBN2nMaq6eOvk5NKoZO-PgDF43)

## 2. Načrt strukture

### 2.1 Razredni diagram

![img]()

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/Nacrt\ arhitekture/RazredniDiagram.puml))

### Registracija
![img](https://teaching.lavbic.net/plantuml/png/fLJ1ZjCm4BtdAwpbKWGvz0IggXxQggW2YMfNSE3cn4EPnFL4upGIM_7ls4cQE4gMRiKjVZFFdZVp9hzGWKYHKmsHpT4KakL9f5fQAoxHMgRvaUbir8OqyNAP-6_9lrShyMOxt-ss7w8riG8UnpynW1dVa98fcRI_mD7ds_dmWZxy26hC1bDYUNtzusut97VHjJv3z2UADhMEXqSueYrPffWvZO8Ibi-GFWXfnJ3qjOc8KCWb4YB64oo4oqDpzCU2qI5v29qBOfaOj3djXycKf6ZaNYq4cj83S9AemumZM4q1y8xxgkJixK9KXChZ1KEkCUsWNkAtzdadBszQ25mBx0EVhxW8stmPlLUGacMEYvxgddigPNcs6rBGrE4IApaRA7al1Zf6958rvzgelEt8AE_Ca4cJmO7f9-eNwkc-FIDXj27ZvXC5MPtXaqkZ53NDwhCiGMUz6DVh34xkaXwgB2Hkb2ygT6rHb61JnbGLVTKJankEImHsleG6omCdtMLBWV_hozXgp9ty_KaUeJwt7NJO5sUWPTVHbM-7SeFBEa71MFvfBRBactYRDx00FdiJJBBkDq7B23pG8HCMk5xWxwpOtAXXKBLF_swXmy1lTjt93bgrUry1uw7U17ZTXeQC7_9GRopTjx7DceU2xb_uru_4hSJqtpYELrE_iMZgrnR7VUfV)

### Prijava
![img](https://teaching.lavbic.net/plantuml/png/bLJ1Zfim4Btp5TRsachB8QTMKSGXYLAjMgbHL-sXDuEdTC1ua0r8tLN_lJO4C87TR6xmx3VpPkQD_w00bg1E90GcHrLopGkMI6uCUmvsFCbJJRKIUvAajzlOVNFzDuhOkyFwU3ny37Qa1UZv-MSDeEOH4bAL9ka2MFhwi9u668-_WvYpGLLOzTa_7OzJyd2wapK4_u9WtzPnTzAOyKOXerZp9qZk63Ui1xzr69k8VmuO2w7WA3VCL1fLwe0KZ2GFk2_R67prViCQGj51a4jC1cXKyQCapME5ERAygn9qgsGy-DBZpE-44tEl8KMRc2SsuweamQiSDoFLfdkiU5MRFGdmfKsA-C0c9Sn895fEtKTz41k6gfhTgpLaN6LmqlGRvGjwXc_7Y3KQdt4rHKb6PlXehr62abRjFwz0PcCnjjSP53R823K6ObJynGfjMmJ5sCbOKZ6gNfZST5pCSrnhcCjm3iC2V0lP_1R9VQXdcPpOnMsA4rkC5-sg9KCZCRVbFnGyXVR_t46BVRK6sWuTZLmxX1rSDXJaZULLQv4XryJhl8a5yCcPO95rkmdE3Cy30x9WWJw0YzbeTKN3HBMx_jF0W87RxBQJ0nITzxu1ZQTs4-1j6-epVl7kGQBRDhPRSx-WsnV-xIEnAx7qM8MXrxFBTpKCewKNxZy0)

### Odjava
![img](https://teaching.lavbic.net/plantuml/png/bLHDZzCm4BtdLrZBfGXow0bKLJcqLT4A92fMSE3cn4EOnF54TX89LlntRETxazrkR_ORlvatN_wD0bY2Ef4Gc1nLoJKlM2AvCUmnEF0aJpNLIXn9ajxlOtVc-ayKiJUdxVby-X0SI0lGI_id3Q2M7X9IbIRf75ZwzhITEnZDtq0isQ0ghFhe7y_dENcm7cGDmRyWEFeyxhwAZ3VyZd73sYERANqC67j7th1vksCDeN18IPKMw0aqmpNa4fC16kDyBqdpM66EB6_p0EsZZeRFFSwckNe56b8qbUO9PdnJak1LZhkHQiCzLBogpP44j3hGIuQ2ezmnIqMLlcSf64dzTK7gqgnxh_TYnr1LYtUrXeoh32wQVg5yHizmTenOevaoheOeoSWC7-mpIb3Injzv1J8Rax6rpg2mJaQeCH2ZuizcQCiYACPMnfgAKVLAv-RjOfEPSZqAdxfp61RGYt5N6zyY-HJgMIOdzkGrnObDPk9jraq7pFhf02Cnj-dV5pm5V-ygQB4lTe3sGqKZLmvX6vSD2KtQyk9eaI5NnEkysGZWNpS4gwpRXw1ZJ6PWG5P6e7VWV3PQNT4mK-sU_p0mOE0ssrToWA9kxnlGUF6R0A_Rq2dZ9x_uZQNRDhPTysb2jo_ywrjYLsBjimh3ISswFpGCexMFxJy0)

### Pregled predlogov
![img](https://teaching.lavbic.net/plantuml/png/hLJ1Rjim3BtxAuZkucBD8QSDHX2WIP0XMD4M6xQxR16POaKq95d0MlJV9xboAzNPsW8xsNvy91yV9VyI7A4Hkf5Oc5QeZcbsX4OoO-2-MB6ctMlg5L-J9BrOrE6TwT_B9NpOpBVRpQTYHPgZdiQ_Q4GrhT2GiffaAE3JvvjvNk0v_0tvD1kL5NRi_dcxpPEVeYlPO_5G5EjXZhERlKGEdKOkQS_EW1aOeDk8G2RylW3us6dHiZiH6ULv1V7rCOYzEQ8M5jqF3wSqHuA_vEpkQYtCXFKiC4QWVPmUzQ0nebz7459x1fMSE3kCPJl_OLlnfDIt-MwPxSsQE0PsdqfzbIroqT6z7Qz0A7k2xNpndMcPEc0f_5CgjaA3d5LWh1OgTBWInYvYnML8s_lvoGqvUOCB2A4AQY8vQUQNmwd-kxHnLHE3KriXEI_1p5bU9Y2A6Kbkr1yGvYpfXE4zx8yL-4SGDdC6Qw5Oca5ruv4anVW38IJzDDYqeNWENwDx4P3KiaOSqgBlt7j7XZA__k_gdLQlhoBo_DGHmVBKUOYSos3pWPMftV-WtmmUbvdLf-XUdVCtydQO7z_Ym_iFjJzp-RzbDbjERd8nkTe9wmy0)

### Glasovanje med predlogi
![img](https://teaching.lavbic.net/plantuml/png/hLHDRzim3BtxLn3T9LkNGquRZ230aY15i8yM6xgxR16UOaKq9Dd0Mko_JtBaM9xITGLsiltu-FX4KluXE48fT2anCxLG3TFi2ALani1ZjcPbNMbg5T-G9BrS5lwTwP-h5RpQBdQxxRjiJPgZJkCt6b6b2YKfgqbw0PU-s2wc0cFuA_8q6vKLTgZ-VhUR9f-ZQzbYzYlBDlqvhcxSWpgc3WX7vD1ev98gSGNCm1ZxZFmkH61oaiSCO5uvNWu5aNHVrvt1ilP9izSvT2Iu1nMcy6ZYjf9ZRTRNxg5GawKrhnijQlOW0iDhXjTJ45jpH2qiTlSEZcc3evYpVoYqC0bhD1WYK9z6WBht6D2F0mZnZ7gNd3Wx3BAD-x2rE3jrPRvPPbkp8OwUtSPMdsMBgUdGlJtFGIXxWTqvyRqvZK2ufrHiZGOvoy5OBPIly4aOkmoAAvzMdLVWZm9lOPnwKimDXrFnjBLXL4c3uxP2jBJzcarbFAAOaTGD_Zt2EaiwOhWUjiSStCCRcxibB8HYSGOLfKEY5ECMGaZwxlVLYq_XBwT5ZWAIQbQAGopwmhatP6ZIh_yx-awhvqSHUExK0UdlQR8FWVF1j_d0Pd6x_qA_xNiycxJw4jsvwzoDlElFZ__IXvSljTkvwRzbFbybDpbBhdR4oYx_5o_gF4LzC_t1_GO0)

### Dodajanje predlogov
![img](https://teaching.lavbic.net/plantuml/png/hLHDYzim4BtxLmpRYqkQGquj9WGs2IbBItTfeNVP6jAnjHeZAO9swN-lv2Y9lVQsMUX9zfitNq_F_a4IeI9JASniGxeLHZn2fOIry9IjHTNi3H-qtB1YiroMyLcOdwiLlDakThlj-spDHg8PnpyQH3skKB5sXbKi4D8NsyMmm2Ny5UKu6xKZT-h-ORSR9f-ZQtN0x7UMRRezRkxBMdW1hK6fU2zkG5WuOWy9Wi7eJnd0N0khs1TWdI6zZuYtM98MVOZBAY1tiW3IBW9IkCDZ0U70-Agu4HNL_PmPnywKEkTl2_1CCWR2V8sYwWnT5aXaQ8xgeEbMIEYd4mXz-U8ECybIrATERNXn3HMdlD3ccmlZsWtBEEpi472wcas_IaFsmZ-UIOe9jW_5xsmZT8qvXLDfiKQBygnDoFbCrYrJnLLCsuVzsNSvmmRl88OAA9dLg5bhI7BvycWfC1QuBolq_DGPObXcsYB2EpOls-4Q1rc7dXH_jrWriVWG_eB-MM3AOg-xzvOj3_JwlrVlZVxtLIHUs3eXc4_v8N5keyoroFjo_uL-tscS3wIUeeVfF1fwwFR7QtHulQc3vvxzUkRprUXJpaRVTe_r1m00)

### Brisanje predlogov
![img](https://teaching.lavbic.net/plantuml/png/hLHDZziW4BtpAz3sudxaa5ChAufK9qeLjUgkMdNls8nIOi9OW96wg_xtWeiJM7jtkr9Fnc_Up3pU03y51ze8tKWWfXMgOvgTQ2EPCVIULAnf3nfxnJSeKQzMTLWp_Mkzfg-sozrk-vvKg3deQVoJ1b3J2Wqggr660ZvzkLtc1IxXRy2dsQ2ii6Ft3xjTddoELh87yfkGpR2FgqeBmzGHQAU1IpomAyeC7T6R2D9C_ZsXzAsugpr9H4RnkgGE1GyHNwcLeZb3bsRN1mayxpH0JxJfj6ZPNTecBcEdtfn02mlkXuSVKNFcxESrNmJ626t_MWrwq1ZHpoD8qraCAZboTXpBTlx7jkAirBVvRfdjpGOv17QVIdsM_S3ewDwUbrGeEyDsllZUj65yXV1VgLW51ZWhgR5QgD3XYp1s5IkkGzh1xn_Ta9CtU4T3gAGrefmqyyFXM3ykRHpLnE3KLfeSpc3c8YyJ4CMCH3Vg3mXp5dN2y1xsfvBwJn2sS0PgeLYQWNNZaIJ5-0CX9DuQQDfGF8U_WdiGaDYoHXpJeY-SUuS6Cx_-x-YTLi-F8lByhYC2nTnvY9oFmUOZArAxdw1V3nuNcTLpTA_E-HjvC-mV_iM7bnzgV-RojsMnM4zkCfbSxOH59g_WR8aPrflyMVi3)

### Pregled novic
![img](https://teaching.lavbic.net/plantuml/png/pLF1Rjim3BtxAuJsug788QSEGH2WIP0YwB0E6zexRH4fOqKC95d0MkpV9yjE8ZifrjrwilpuI3u-IYyaKPHaIeMPhKZlmS1Eb0gi5M_P7CfgOxZMSi6ApNHQD6SmlsSpSRqShrRBsspEHg8vZzyRH7rUeMJj3AkcG4WVByVz0gVmJvJdsQWTkKFthwjLF_aOdQiQipzPjeXpN3rk54gXsLE9LmAiYC3t-2zwejyo8MxsXYfufHZd_Cj4n1Eq8Qpj3Wqvz4y6PKBoJ798MRyMXkoGT1BM5XOFxT1eehWMF68YDINgaonXszNSXxEhwA0njFZbmDLsmHAZ6hOikQ0FqgadE3e6QpaHfDq5hWy6h6q5UeivXQ_IC4UB4YR2EaDw4tA-aNNJjjkiCpVHC-pGEJrqAF5596jkt1ZrIaG0h69_aD0Wu1sRXE4j5gGXfN1H1YJX19_gtKI4JpFiI7459MtJdC-o1s_qF-piICyMspkVNzXBHxXhhDf2dbhsFlinkfRtpBkuS_JXGVo8G-C7Xl_lYnKkpF3PZ4Qpm_pfSp_1H-fV)

### Dodajanje novic
![img](https://teaching.lavbic.net/plantuml/png/pLJ1QXin4BtlLuZaiYNuu5FBOWorZKjeQKeBlSzAGpAxYiP8ig0D_VTAMdkjZHsQGWyzIVlqPjxC6saVIA6GPAN6olLaTc3XKKWDpecdQWMolxUyDshDckrYqQOzs1_BfRZUpBVRpTjgnLQXFJ__O17DUGR9nblMAK4Cds_cqmIduw-epgFHUF97zNVRxJHuF5tfFLQ_gcgT-xYwQpi880m7adWbm8a1-Pm1CIdxgH9YPi1f3ermtfAvJqXms9A14k9MHkHMDOACJu02ltziH5mmVMhkGL9NnjnmqgMio_MRHWGcbV2TnLwJ7A5JxPaBukFW2zfS_W2Ec2XzImtSA5RG7MHsSUzxQWvHKUARZvMwDIlCsknOSKklfDFFrf8xihEdHnCkS0CgkdKzc0vhYgisi4A7QdGbndmYvnU3sd8mWufwdYiCn3E72bz4SHE6SPOfBiyNWcTRCFxHlF-JEGHh_c3dWVJTuV0ewWjpEH3U9wiwg4lBNcRVPTVgYNaNPuu1BNt9JUChcl_hYnKlpFDdCvijZ_rFVWWdVEJ-1W00)

### Brisanje novic
![img](https://teaching.lavbic.net/plantuml/png/pLHDZzCm4BtdLrZB9O1ww0bKLPL8gw8An28Gt2Vng4pZUYhRiSIk-EyuJj9rqgwst3ZPUlFcpSppno-IA2eobSBCrgHFOE0eAWNMYiUiWAhU6swqNBDYiroMxHxCxzLAlDhCjzlDkwnW8z5SnZyQH7sfKB5sXbKh4DBdc_bOu2dy3ULbDcf7RgZ-VhiT9v-ZXMem-vDbwpZ7NM78WZwWqEofmZi1LWpObmY9KUkFcH1lwQ4C58fnpbylX6UIYUZzNg5C5IFmhDp9K0qFYLpSGHV2nXxHa4F_mw2SrfnGTYyqrWcBJvsJQ69p7NZ6HEfqx4-oX4ElUGfxLzFGOoZntO5hx9ebncxOikIIRgIFdOoEmKuk16btXUk30JjRjsUJKrYLXW8jIbW8wmpfVSZvJDOjksghtjoadsc5tkcfGual8haxhHkpaKG4m2hsGmij0jwnIHZUOaaQKWgNLK0IJl2fEIv4MDfXPufhgEYGvlmlv-2DVi7EdlJJzayelt8kFU53QzK1yjIovzdtqRLyPDxLCqSV7iJNE3JUCFm_NwnmOQRFPZPR3VEdp_q9FbEpoGTp4-LD-edy1G00)

### Urejanje novic
![img](https://teaching.lavbic.net/plantuml/png/pLHDYzim4BtxLuZTYzkIGquj8GGs2Lb2bztIihtBrf0TMz44IHPqb_xtol97P2UXAVIm9yjFRsQUtepqWW9OZZgNa9WIrO5hlcUvvCQmjsJ9ytAdgL9YHPBqV9xLQwv_BHRiTZtTRDQVaoLf0Vfq_ru3gDCCEIchITO9VFXqFHqcE6v_1t4Q3SgYxQf_sMo6mVtkKbQG_4wILJZ7pRE6Wgi2c2A7ETmmRbY7FGQ83QI_9OnD53UIt8mPgr7jQiGPo53n6A8izyXMp1WgMmE2sse_O_u3zQ-aakTOn36VAWq2GrbAFyoO8nGrVD1GIinxw2Z_QIT1nDe3S4cuJuGbVuqgX1LlQrHc3nejkEUBCdhAzZNJQCQaex0cCVlQz0nq4DU0FSRYdWPzWWGlsfm7lxObTXfzYH_MEsXM922e8KE2ChoIZWF1mR6kEMUupXkmDMKz1IdwhrHy2GP4toqVyu36pfjgYzRSIC-uGklqsA785nPDQJDcSOhpSyUT9Hqn_jCSlfC-EAt-OcTB-cdQovgUwKjBkAkjAdWQMtQP_HHSImVcdUqvE7yXleL3mnM7_-V1yWCplZQJoQ8xVtpTZt1FJKPFsLMKZ_4ZyWS0)

### Iskanje novic/predlogov
![img](https://teaching.lavbic.net/plantuml/png/nLN1Yjim4BtxAyJsuh8r9QSM4mnDGigoPRkqqBjiYLInLXCaMT0k_VTAjhoMx3XrOA4dspDlHZDlvba_6Q6eOhBYD54r4oSiyHEgE5OAFISRNDK72OqWM-0Wr-lIlMFvgoZGczrglzzzI3OW2PLJ_sT9gPXcg41e2TmbiE6htIfECBY_KJADfa8ptP_-SR-FWr-y6zxGv4-IRDi-RkvKZSMHtY2ia7z7KQtF2K8Pinuky8OgId2Eb9PC7ApZbdKXwTiSVM5Ahn_0i0g_VvIKS3WKxg0-QvOLg7FVTurG6VbypE3iI_GELFUUjjWn78K4kQ9l2H1yzB3qP3zqpV8-pXRyNMFTg2qGwj2DjRF5QFQxb4mD-EvvHtB4X3w3DZQvRpOzIsPFu0jpDknW-mVJniG7l4FEbQCIW4yEEqb6e9mlpJk27V2Ma5OKR4ox0N4QPn5OSJ31CcJOQ901mdBOFEN8FbnXcL6qP29SdmpAobg24AMfOHn-A5hLBdbiVg1cvE1GuueTevsyRkudK13nzRgZDrByUnGUPxlsba5GuJvup2T7yn6d8TqNu5zRZjE8wdDmMvsXaZss_TCbF5o_rCFETNy2T1zfUlHxc95qYuAXm2vgTh0BuNwi7YrQq2lekJkj28GvSq87d30Ky3BHP9HYcIINQ70asrc9_Vyvk0s_JESWWzOmlgYMocgAlgIgQERdHJNR_DMBPHTcSXK6rsaorjHm3Vy5)

### Ogled lokacije
![img](https://teaching.lavbic.net/plantuml/png/bLJBRjim4BphAuZqugBGmQSMHc0WZk70Q9e4BT13RsjnwzAYkG992ss2_dj9Yh8eAmhKawJTsSSCH_mbEB92w49YPagXAj1mP8K4OzXBjeAYt6iwANvBalJrzSw_W_wpNB9tw_bci_wOhKXprCFydKPKmmu5AQj9-WQkVBwUznjqwQ_8XzMehB3jz4-RJR_ud5t94sP_i-msyBXwt4laJ589XJZW5GF3GkW-HbXlyPUCiG-L5YKy_y2ZF60jECpUBvZuwRH9-vxJh6pMHXsQd-EVsp1BcOK1jLRYZ9lHxW0rRBaRecnlr2kzydp9dZHoIVknz0FLee0iwzFqcM71cSwQZAMASM8tJzly085B4xofn52aN4459IoOiLgelMV50tfDxKWlspSBzcHkYQD7YETAc0TVYBD-lOFM97YYxnsHsvzzWSg4NPfl_-cMmTyMjGBfbqrEZTCkqJMUEVWjuep1AKOfmuJupX8l1QPL4uy7r70takg4Umwr9PqWkADzN33tyCJpsk1Eg5Ijd7Q5YoGbnhgj9NqtM9I-UJ_yWFL5egEN7W67G-Gngzo7BSMY9JOuZeeCUSac5uZddHQcm_U46Q2zoqUXhOSZph6EaM2RUs7iTGmi4yoDb_a0irJkD-2FGUDPJ-hNu6wx6hLu2lnnYWurSh4r9IXdS-6UKi4A3VBKqFqndUUQ_pDOhdaTE4w5y7yPReh3BamvQg2m5NKoD5kEscSYF9edediKNxNE233URjqXXq3dcYO_rJH3z5kUIT1ZbXabFzanxH1dcEx-zRTtTmDU98RN-Zy0)

### Izbira lokacije
![img](https://teaching.lavbic.net/plantuml/png/bLHDZzem4BtdLrZR2zKg1qwjq0ff0R52tMvNhTH3RqCyfIR64zacQdVL_rxRSOX3o8fU89bvy_6UN_nBS6I5q8N4p9H2LQ3Xm0e9nh3NR055kTDqL7n9alJTtTO_W_updxDtg-bwlVgGBKXprCFyWqPKmmu5AQj9-WQkVBgQzXjqwQ_8XzMehB3jz8_hTR_ub5t88sP_ismPUDniNhQacQGI2h776mQ6XT1ZZB3UugyPOtaBdZ5ZjL0x5xkjj2ZXvGSUv1vhmM52sptKiE4p9fHzxtv_El7GGqNQVk9IDGdUzC1IYk8KwfOyzMLbem7giEaf_gaDirGcl-rjhPKuuSRMSgCkzChpENlMo2Njnj9FL8i2igolcSyC2qvqLcGiLOmJkt_Uv7i8N9hWVIKkAAwWWX9IlNb0hoZLyPi5UpHBub7cIfWdNuYJVlrGtmUYdKJs6IeJTcdU_QjR1dzRr0gaNxOLrHqtfssYQ_G4-2tYZ4xQE2LA6IR4PvOOCp2jcdWye8QxaLGdt7EeBUa4mHtjmuovFqyyhmrkXKhLocbRk4XIOgpRMj9tWqNfc_V3JrYV9JfwwH5ms4SUaygzs5BCMcA3uwZ8a9ViwWBtcMXXEdnFc07QktmKsdeuuXph60csUHJ6tiN0FC7SUvdtC4dbVWF-9MWywKbz2Uwsgr6Bvy0Vhz6XHYusfWJbR2xSlrImG8CyDNH_JEUvvliCbciU1uvJ8VnVXhl6OMUc73LGs8ew6PejH-rp9JoQ9w9x52zQPmGORxVka4EWSqsJlzOqG_HRdadGOvOP9N-rOzeXpZ3T_Ujlx-u6F4iCh_L_)

### Pregled uporabniškega profila
![img](https://teaching.lavbic.net/plantuml/png/bLJ1Zfim4Btp5TRsaggDgfnQHQiSaYXLrAgDkjeUUXlmb0uO1jc0r5trtsj301Deixd1yxpnctap_aKIHKGwKXYObF82D6GYKc2CU0ws4AMnvYgNErQix-z3zmtwzsOZNkrNXyF-VR1bBL5Fppzgn7oQ8UAyrAnS0ajVxLVZ1CFnDvHJDkObbTtj7mw7CRa_tQeAWpz1i6lgk3jfZ1LAKMZ-IGhk11Xnnauj94RIdmCXtXIQKdYYDc3nUYqU2zOGvfIsfrYP33MLM3zgb5vSpIGlGuvFeIOp6zJSyZLCe4Pty9bCUV-5QuhWdTKe5SSRNmx7NBCUGX-iAev8ySOhk9TA8cqRYhgfUZZurE72RtfJkUsCpQmXeWGM1KieK_BAjpS_b51MPiSIpzAiUbXW1gJMmb8fZz-A68tYxdT2OjbmgYxhKQu5vUKahjAOG9xWsQXvFIDhNATznjKh2ZOgeRwHY-OVIbJ9K8mrCy7C9XcWsc18EVopGjiMoM7d-OoAGVMCSsExX3VSpgFbPJg7KOQT6FThxxT8waCTowGiBg8vZ6mnNhQHcmuO-Ua0e-n8hiKnWnYR_tC7OJgQjXtI6fVq1Ncs_7UqsB1hudNUQ0IeNRSvrkr3S6PuCz0ZCoFG9N0vQvrVqJ1IxSA_6-onOSbxwFmKO6sVbLEp2VYo3VKPF-3KR2pVjh7jcli5tRxmBxV4hiJSOxLSUZsxUCENoytS0_SN)

### Brisanje profila
![img](https://teaching.lavbic.net/plantuml/png/bLLBZzCm4BxdLrZBfJmgr1Eegdfegw8A11MhvS1j4WzX4YSJsMaaTiL_nqxpS9eitTxYp_FuPhuPvpT9517fI65WKieBq929I84nuYdOG9J6ca-vtB9YlLg5xXlqd_LQlDejzllTXs33Mg8Utt_IYFauGiHvgLcv0DPziLiC0_JNtr6ElJ4lgMopVzplXyxTxKQTCFWR1DkwZhkD9WDvWgBG_8iKt0ameWMFPqmCo3y5Ghobnz3QqEprKbHCqa65nbHHr45zZgF6MA4Sf6YmvpCKcb9ufBE12_fGi8OmfxH9TZ8PQYgnUj0eFJkFJsToEDETCggpV0iJgD1TV25JhhvoHH6yjnobudZjq-6OAzQzwRrbnH4fNdi5TrH9f6VHKDTLznUVMrpumjQLsyxOo1eYIc1Mi8Go9Qzyc_c-XF9ajYoneMRPmmmp8BKKrfNo-9s8qIXkZoCdbhNFgOrwa4j1UJcoEsbCl56OvZEG9XmEp_KK1HkLKDV8MNs64bNI5sF5J32pGNgeCXXI3izMQDiYEMmrds3HivvGRYYNy1R8QJI_3ESmoh0buuuslqLI7sgzJChYmfh3o1RZHHkewO21dWumoexaKXmoYB4-Dns4yMZQTaWhND8LvCdotz5Ymww9r_q68z2y3bDUjmz1u-7DG8TCZ40RmCMiT7w5mu2rC_zXiCFw9U-WvYd0oZuhnteJy6KRwdlyX6EziNpRnfxNt2_ezeL_kIHs9QOUg_dSwzd56pwVhwSUkE3oR_9okpSNlub_)

### Urejanje profila
![img](https://teaching.lavbic.net/plantuml/png/hLLBZzCm4BxdLrZBfJmYr1EegdheLaKL22fMkmTkJZo4IPnCP2UHs8h_ZlEsconj9MxnU1xVp7oVymi5i11LAC7J2MOvLpnbeUHQivEtvM4IAIepSK-Ir7eTrDzS_TvisAlTSh_VVV2sf0IewVqd1P1DCuIK5OfadS24BtTBDy5u_Ht4D1go0ek--iVztWqURhUo1E-FvzqtVTmzAeXv5WFB5Vr4oUyOrwmt7biRSy2VFCPyJ675TA4mY-fZhj1O4jjKvgHuaA5EwE0wKn1YnWzYnJ0hQWEa7ANj4O6MP1kqn8Ils27b4PZpsvmq2Ggm1RXulM8LeMXk52GImy4qTdfK44aGJgETxSK-JJfJ-DcgyzYrbNJ5Ifs2mW8gCpCnZsTmEJm72lMiKrFbMn3p2kgBBwYBzLUgCEJl3KOXAThOS2YYYjJe-c1GKOYIDlPgUwZ8afOweDhr3XUVUpkpwTLqRYPZCYiUOimNEGbU96YrRoe_5BmezJq9wA0Pz7pXBFCTSrOv2IBHnFHSIJfIJFnAbv3pU9pLr9Es8owMC9IICGw3N3HdNe2CnsRCCcD8JPBHL6a839jVxD2CnIBg38eHzSpct7KnIyOdMsE99QQRbCdmVqlJrzq4-PIQPXp2B2uU6hBMyazgTMg_7ETG05kvpKNTJe8kmkB0O9cXG9-Wpbcfx0861tNj_gHXi8qY7qpTKm2LULQEZHBWEeNQ4J_uiL4itQROLkPsGxSB_lgL64dCFLQ-Rytix0tt_StS0-UT_zEkztjpzflu2m00)

### Pošiljanje sporočil
![img](https://teaching.lavbic.net/plantuml/png/bLLBZzCm4BxdLrZBfJmYr1Eegdfegw8L22eME71puY5CucOYsud4hlZls6aUJcFHxQtvvk5lPhwP_aO1B4MLIeXqWMN55J-nL7AjsLEqvMcHAQfBiID9QhrEt6-k_cmsxCL-UJZitqLRKWBKtFv10PJp32cLHf5q2MpuSh-S9XZDNq7Cew4qQFhNtnyEq-31kfKrH7-ZQDVMSNSaZJBdPGvCLwGeHSdl6DTiD3pqE9iKyHGn5bSASZYLMDoB5SFIEApHa639LqmRXMLceTSLQPbZduWMBrVimN1Jwnq9Q1qK519JPsW8XKzGGIP1C5Fda75MAVerK3oRlhMMuzamvsXpOy4VqRgTVTmZtoqLdbZUKmVuakIy0UVn2RLPVwO6K_xMFYGaPHlF-KWPDQH6rw6uZKT-U0PPSPuUg9RwQFZOuyoVS4lSbcSpAvvYpXSL2MuAzAW7ccWT6xw04qVPj_yDoq1BwZzdGIJQcBhFsWrovbVRIJirT7qEyvcqDL6e_OYhJrogfFtc1cG-5ZC8ReGkz1PgYw04k-47M8oi0vERZejvczGkm6KwX-49FF7R7K6B53xKH-c2s8Kt9QajniiscQO39lDqW9PMaYjsV-8PjD_zmiwbQTiXxE3oeI1lBF-L5cboJRmUDv40FZeH1ADk5q4NuMbWG08Iw1Eud8qght2Oi7RkFpGCsBZa0zIT0cX0sLFWDW6Ujw5-n4zxjDp6qcqRUrvplw3R5_xv8x4h4JfMSUprB7Y8utWJEdDHw8ybZby5h_a_)

### Pregled profilov ostalih uporabnikov
![img](https://teaching.lavbic.net/plantuml/png/bLHBZzCm4BxdLrZBfGWgr1EeMlNGLaKh45GiSE0sYOSmYUk9x2GIk-A_OwTvE9j0jpTxPhwPRvw_IA98o2GA8vkJBi30IIGAh1MFqHQIF3LSQRbZnURsDlPlCByt6_5YlpeSzc-ZBHk9Pgf_Rn3rr4F2kZIil0C7N-rNOmU3-WlAAHfrIMKN_TtXC0RtsgsgCFeJHRicZvkZmLIX56MLOGgYCFoJ5Dm8iA9LVMqqnxD2ZF9uZ8HuLHZAuO6SsTbcyN8jlXLi8DQKZmtmSvn1ZTxY8zdozXFNbC0R5qWgJZU1yP5JhjaCflVE8oUaU1EGxyEGoC_5GTDG7nGVEha82zWGT-avpmOIoc1Hi8Gofu2wYtnVGbdP7KjigJdsiC0Ja5eB1oMTlXOfMiNTTm9YsM2gpkkTN0lIvSIkCfY1ph2jypoVKLbZGpP4N0nHi5KPzOLSD7yeKML3CeMZWIVdP13L5cFIyCyCNLaanzGsVuR5m7gcS-DsYM1GVO-MJzrv6Psm8-E_BhwJvA6eGzcSnHDhZXENJE1jr4ql6FNJ2wno8xaMToT8iVct5OJfQBfoIDUuh4yeQCj_Huij-o9Uner6W1xy4CoYhX-25X7CG2-P6O7EWVTP6ts1muYrD_zkiPSDIzwBsbE0DHft2lmcuFCsD4JyS4VBRonVjx7dDGyJkdxXdzyIjn9pnsgv36esUuYNoytScViB)

### Dodajanje komentarja
![img](https://teaching.lavbic.net/plantuml/png/hL9DJuD04BtlhvZefSRqq9E6D1nQWZ7rO3HwNzX97Q2xP7OXqSR_Bf0kXT9O3zxWVSpiUxiVf11IuhH0ONFIfMIvWxIGri9Uh6IQRzbKMgrDONYvJDfloPzX2DVH8ewZEx4oh92d_0CZwkc4r6Z7fcW7DFP5j1WFED8lgAPkr8wSttuVnsDppwwA2iMt4EiknrLabCoapX1oisj4aZDv1T92Jsnw74OXzW9Wxaq1MCUajmrsgrgdTyrk0gWDgS5AJpKRkq38tK8FRpmAmyZxwUIo-NCv1RspMVNgfAlisYXizVILC5dg7VwqZoe0qcwYBvcKINxJU-fCd54863G-AkemgeMgqh1CDEK3p2IPhEK0k5pm_zTGi_vJ1mVfkps-4Mpl-uciMteeF9sOuPiFBcUd7PnrbumrCZrtGV5IuEPcfazfFW-Fvpxtj8U2tlO3)

### Brisanje komentarja
![img](https://teaching.lavbic.net/plantuml/png/lLFBJiCm4BpdAwnoAQ0UUW9LLGzf5LGL2GI2-oPU5IUf7QsTIBJYtt42pfl2YPipEplU6M_U14SM2OfIz7GYP0O41nQbe3KxUJv4oPvKBlbQfOgMox0y0xslLknYCm-2pOtdA-98m_eT8SgXGgIa8PMM0hPzlfbt1Pho4_9XDqeZZBlzDWYwpNNLJtFqFZnlNVcOFEnJv2nH1qi0Yc72GBCAtDKOwmn_yXYxpWXpVK0I1eljCIIXXUDFBnUiK89_qKG2nqx9dLip-BOTP8pzCHn-TXBnm-sDl2jP-If0f4hTmJk7idR4bJPN7E9QERDV9X6D1NlLim6JwxNYE3QByxFb2oQa6V1jF5o5v_WZQJceOuArNhWSVTQJAg4yKmIX54aBKs4C1RG0rxTWsf2G-_-8eI3vfmo-gQ-wsGWit_jUQBDqqAgl6EEBCmxJVWQZtNQv2xlQZvLH_CsmVPdXAircgsRkaJrkr-ikh__VZRD6vQxwF-qd)

### 2.2 Opis razredov

**1.Uporabnik (Entity)**

V tem razredu shranimo podatke o uporabniki.

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

Pogled za registracijo

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

Pogled za prijavo

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

Pogled za odjavo

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|     odjava     |              -               |       void        |        Odjava uporabnika         |
|  potrdiOdjavo  |              -               |       void        |     Potrdi odjavo uporabnika     |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |

**15.Pregled profila (Boundary)**

Pogled za pregledovanje svojega profila

**Nesamoumevne metode:**

|      **Ime metode**       | **Imena in tipi parametrov** |  **Tip rezultata**   |          **Pomen**          |
| :-----------------------: | :--------------------------: | :------------------: | :-------------------------: |
|       prikaziProfil       |              -               |      Uporabnik       |  Prikaz profila uporabnika  |
|  preusmeritevUrediProfil  |              -               |         void         |  Preusmeritev uredi profil  |
| preusmeritevIzbrisiProfil |              -               |         void         | Preusmeritev izbriši profil |
|       prikaziObjave       |              -               | List<Novica/Predlog> |  Prikaz objave uporabnika   |
|      prikaziPogovore      |              -               |   List<Sporocilo>    | Prikaz pogovorov uporabnika |

**16.Pregled tujega profila (Boundary)**

Pogled za pregledovanje tujega profila

**Nesamoumevne metode:**

|  **Ime metode**   | **Imena in tipi parametrov** |  **Tip rezultata**   |            **Pomen**             |
| :---------------: | :--------------------------: | :------------------: | :------------------------------: |
| prikaziTujProfil  |              -               |      Uporabnik       | Prikaz profila tujega uporabnika |
| prikaziTujeObjave |              -               | List<Novica/Predlog> | Prikaz objave tujega uporabnika  |
|  prikaziPogovore  |              -               |   List<Sporocilo>    |   Prikaz pogovore uporabnikov    |

**17.Urejanje profila (Boundary)**

Pogled za urejanje profila

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

Pogled za brisanje profila

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |            **Pomen**             |
| :------------: | :--------------------------: | :---------------: | :------------------------------: |
|    izbrisi     |              -               |       void        |    Izbriši profil uporabnika     |
|    preklic     |              -               |       void        | Odpovedanje procesa registracije |
  
**19.Pošiljanje sporočila (Boundary)**

Pogled za pošiljanje sporočila

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)**  | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :----------------------: | :---------------------------------: |
|   prejemnikId    |        int         | Identifikator prejemnika |                  -                  |
|     vsebina      |       string       |    Vsebina sporocila     |                  -                  |

**Nesamoumevne metode:**

| **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** | **Pomen** |
| :-------------: | :--------------------------: | :---------------: | :-------: |
| posljiSporocilo |              -               |    StatusCode     |     -     |
|     preklic     |              -               |       void        |     -     |

**20.Dodajanje komentarja (Boundary)**

Pogled za dodajanje komentarja

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------: | :---------------------------------: |
|     komentar     |       string       |   Vsebina komentarja    |                  -                  |


**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |           **Pomen**           |
| :------------: | :--------------------------: | :---------------: | :---------------------------: |
| dodajKomentar  |              -               |       void        | Dodajanje komentarja predloga |

**21.Ogled komentarja (Boundary)**

Pogled za ogled komentarja

**Nesamoumevne metode:**

|        **Ime metode**         | **Imena in tipi parametrov** | **Tip rezultata** |                        **Pomen**                        |
| :---------------------------: | :--------------------------: | :---------------: | :-----------------------------------------------------: |
| preusmeritevIzbrisiKomentarja |              -               |       void        | Metoda za preusmeritev na streni za brisanje komentarja |
|        prikaziKomentar        |              -               |     Komentar      |                    Prikazi komentar                     |

**22.Brisanje komentarja (Boundary)**

Pogled za brisanje komentarja

**Nesamoumevne metode:**

| **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |           **Pomen**           |
| :-------------: | :--------------------------: | :---------------: | :---------------------------: |
| izbrisiKomentar |              -               |       void        | Metoda za brisanje komentarja |

**23.Objava novice (Boundary)**

Pogled za objavo novice

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------: | :---------------------------------: |
|      naslov      |       string       |      Naslov novico      |                  -                  |
|     vsebina      |       string       |     Vsebina novico      |                  -                  |
|     obcinaId     |        int         |  Identifikator Občine   |                  -                  |
|      datum       |        date        |      Datum objave       |                  -                  |
|     lokacija     |       string       |   Lokacija za novico    |


**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** | **Pomen** |
| :------------: | :--------------------------: | :---------------: | :-------: |
|  objaviNovico  |              -               |       void        |     -     |
|    preklic     |              -               |       void        |     -     |

**24.Ogled novice (Boundary)**

Pogled za ogled novice

**Nesamoumevne metode:**

|      **Ime metode**       | **Imena in tipi parametrov** | **Tip rezultata** |               **Pomen**                |
| :-----------------------: | :--------------------------: | :---------------: | :------------------------------------: |
|       prikaziNovico       |              -               |       void        |        Prikaz podatki o novico         |
|  preusmeritevUrediNovico  |              -               |       void        | Preusmeritev na strani urejanje novico |
| preusmeritevIzbrisiNovico |              -               |       void        | Preusmeritev na strani brisanje novico |

**25.Urejanje novice (Boundary)**

Pogled za urejanje novice

**Atributi:**

| **Ime atributa** | **Podatkovni tip** | **Pomen(če ni očiten)** | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :---------------------: | :---------------------------------: |
|      naslov      |       string       |      Naslov novico      |                  -                  |
|     vsebina      |       string       |     Vsebina novico      |                  -                  |
|     obcinaId     |        int         |  Identifikator Občine   |                  -                  |
|      datum       |        date        |      Datum objave       |                  -                  |
|     lokacija     |       string       |   Lokacija za novico    |


**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** | **Pomen** |
| :------------: | :--------------------------: | :---------------: | :-------: |
|  urediNovico   |              -               |       void        |     -     |
|    preklic     |              -               |       void        |     -     |

**26. Brisanje novice (Boundary)**

Pogled za brisanje novice

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |   **Pomen**    |
| :------------: | :--------------------------: | :---------------: | :------------: |
| izbrisiNovico  |             void             |       void        | Izbriši novico |

**27. Objava predloga (Boundary)**

Pogled za objavo predloga

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |         **Pomen(če ni očiten)**         | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-------------------------------------: | :---------------------------------: |
|      naslov      |       String       |             Naslov predloga             |                  -                  |
|     vsebina      |       String       |            Vsebina predloga             |                  -                  |
|     obcinaId     |        Int         | Id občine na katero se navezuje predlog |                  -                  |
|      datum       |        Date        |              Datum objave               |                  -                  |
|     lokacija     |       String       | Lokacija na katero se navezuje predlog  |                  -                  |

**Nesamoumevne metode:**  

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |        **Pomen**         |
| :------------: | :--------------------------: | :---------------: | :----------------------: |
| objaviPredlog  |             void             |       void        |      Objavi predlog      |
|    preklic     |             void             |       void        | Prekliči objavo predloga |

**28. Ogled predloga (Boundary)**

Pogled za odgled predloga

**Nesamoumevne metode:**

|       **Ime metode**       | **Imena in tipi parametrov** | **Tip rezultata** |                 **Pomen**                 |
| :------------------------: | :--------------------------: | :---------------: | :---------------------------------------: |
|       prikaziPredlog       |             void             |      Predlog      |              Prikaže predlog              |
|  preusmeritevUrediPredlog  |             void             |       void        | Uporabnika preusmeri na urejanje predloga |
| preusmeritevIzbrisiPredlog |             void             |       void        |  Uporabnika preusmeri na izbris predloga  |

**29. Urejanje predloga (Boundsary)**

Pogled za urejanje predloga

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |         **Pomen(če ni očiten)**         | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-------------------------------------: | :---------------------------------: |
|      naslov      |       String       |             Naslov predloga             |                  -                  |
|     vsebina      |       String       |            Vsebina predloga             |                  -                  |
|     obcinaId     |        Int         | Id občine na katero se navezuje predlog |                  -                  |
|      datum       |        Date        |             Datum spremembe             |                  -                  |
|     lokacija     |       String       | Lokacija na katero se navezuje predlog  |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |         **Pomen**          |
| :------------: | :--------------------------: | :---------------: | :------------------------: |
|  urediPredlog  |             void             |       void        | Shrani novo urejen predlog |
|    preklic     |             void             |       void        | Prekliči urejanje predloga |

**30. Brisanje predloga (Boundary)**

Pogled za brisanje predloga

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |        **Pomen**         |
| :------------: | :--------------------------: | :---------------: | :----------------------: |
| izbrisiPredlog |             void             |       void        |     Izbriši predlog      |
|    preklic     |             void             |       void        | Prekliči izbris predloga |

**31. Glasovanje med predlogi (Boundary)**

Pogled za glasovanje med predlogi

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |        **Pomen(če ni očiten)**        | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-----------------------------------: | :---------------------------------: |
|       glas       |        Bool        | Glas za predlog (všeček ali nevšeček) |                  -                  |

**Nesamoumevne metode:**

| **Ime metode** | **Imena in tipi parametrov** | **Tip rezultata** |         **Pomen**         |
| :------------: | :--------------------------: | :---------------: | :-----------------------: |
|   vseckanje    |             void             |       void        |  Všečka trenutni predlog  |
|  nevseckanje   |             void             |       void        | Nevšečka trenutni predlog |

**32. Izbor lokacije (Boundary)**

Pogled za izbiro lokacije

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |            **Pomen(če ni očiten)**             | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :--------------------------------------------: | :---------------------------------: |
|     lokacije     |       String       | Lokacija določene objave (novice ali predloga) |                  -                  |

**Nesamoumevne metode:**
|  **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |         **Pomen**         |
| :--------------: | :--------------------------: | :---------------: | :-----------------------: |
| prikazZemljevida |        objavaID : int        |      iframe       | Prikaže zemljevid okolice |
|  izborLokacije   |             void             |      string       | Izbere določeno lokacijo  |
|     preklic      |             void             |       void        |  Prekliči izbor lokacije  |

**33. Ogled lokacije (Boundary)**

Pogled za ogled lokacije

**Nesamoumevne metode:**

|  **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |                  **Pomen**                  |
| :--------------: | :--------------------------: | :---------------: | :-----------------------------------------: |
| prikazZemljevida |             void             |      iframe       | Prikaže zemljevid povezan s trenutno objavo |

**34. Dostop API (Boundary)**

Pogled za dostop do API-a

**Atributi:**

| **Ime atributa** | **Podatkovni tip** |                  **Pomen(če ni očiten)**                  | **Zaloga vrednosti (če ni očiten)** |
| :--------------: | :----------------: | :-------------------------------------------------------: | :---------------------------------: |
|      napaka      |       String       | Vrnjena vrednost v primeru napake pri dostopanju do APIja |                  -                  |

**Nesamoumevne metode:**

|  **Ime metode**  | **Imena in tipi parametrov** | **Tip rezultata** |                  **Pomen**                   |
| :--------------: | :--------------------------: | :---------------: | :------------------------------------------: |
| dostopDoLokacije |             void             |    StatusCode     |         Dostopi do lokacije na APIju         |
|   izpisNapake    |       napaka : String        |       void        | Izpiše možno napako med dostopanjem do APIja |


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
