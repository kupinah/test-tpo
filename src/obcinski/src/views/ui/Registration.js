import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import React, {useState} from 'react'

const Forms = () => {
    const[ime,setIme] = useState(null)
    const[priimek,setPriimek] = useState(null)
    const[mail,setMail] = useState(null)
    const[geslo,setGeslo] = useState(null)
    const[username,setUsername] = useState(null)
    const[obcina,setObcina] = useState(null)
    
    function getIme(val){
        setTimeout(() => {
            setIme(val.target.value)
        }, 500);
    }

    function getPriimek(val){
        setTimeout(() => {
            setPriimek(val.target.value)
        }, 500);
    }

    function getMail(val){
        setTimeout(() => {
            setMail(val.target.value)
        }, 500);
    }

    function getGeslo(val){
        setTimeout(() => {
            setGeslo(val.target.value)
        }, 500);
    }

    function getUsername(val){
        setTimeout(() => {
            setUsername(val.target.value)
        }, 500);
    }

    function getObcina(val){
        setTimeout(() => {
            setObcina(val.target.value)
        }, 500);
    }

    function registracija(){
        console.log(ime);
        console.log(priimek);
        console.log(geslo);
        console.log(obcina);
        console.log(username);
        console.log(mail);
    }


return (
<Row>
    <Col>
    {/* --------------------------------------------------------------------------------*/}
    {/* Card-1*/}
    {/* --------------------------------------------------------------------------------*/}
    <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <i className="bi bi-bell me-2"> </i>
        Register
        </CardTitle>
        <CardBody>
        <Form>
            <FormGroup>
            <Label for="ime">Ime</Label>
            <Input onChange={getIme}
                id="ime"
                name="ime"
                placeholder="Elena"
                type="string"
            />
            </FormGroup>
            <FormGroup>
            <Label for="priimek">Priimek</Label>
            <Input
                id="priimek"
                name="priimek"
                placeholder="Najdova"
                type="string"
            />
            </FormGroup>
            <FormGroup>
            <Label for="username">Username</Label>
            <Input
                id="username"
                name="username"
                placeholder="en"
                type="string"
            />
            </FormGroup>
            <FormGroup>
            <Label for="email">Email</Label>
            <Input
                id="email"
                name="email"
                placeholder="en@gmail.com"
                type="string"
            />
            </FormGroup>
            <FormGroup>
            <Label for="password">Password</Label>
            <Input
                id="password"
                name="password"
                type="password"
            />
            </FormGroup>
            <FormGroup>
            <Label for="obcinaId">Selektiraj obcina:</Label>
            
                <Input id="obcinaId" name="select" type="select">
                  <option>Dol pri Ljubljani</option>
                  <option>??entilj</option>
                  <option>Piran</option>
                  <option>Ljubljana</option>
                  <option>Prebold</option>
                  <option>??ren??ovci</option>
                  <option>Bovec</option>
                  <option>Ru??e</option>
                  <option>Tolmin</option>
                  <option>Dom??ale</option>
                  <option>Braslov??e</option>
                  <option>Idrija</option>
                  <option>Rade??e</option>
                  <option>??kofja Loka</option>
                  <option>Kanal</option>
                  <option>Slovenj Gradec</option>
                  <option>Ren??e - Vogrsko</option>
                  <option>Kungota</option>
                  <option>Ajdov????ina</option>
                  <option>Gornja Radgona</option>
                  <option>Razkri??je</option>
                  <option>Polj??ane</option>
                  <option>Star??e</option>
                  <option>Sevnica</option>
                  <option>Ribnica na Pohorju</option>
                  <option>Vitanje</option>
                  <option>Zavr??</option>
                  <option>Ver??ej</option>
                  <option>Sveta Ana</option>
                  <option>Hrpelje - Kozina</option>
                  <option>Ribnica</option>
                  <option>Radenci</option>
                  <option>Preddvor</option>
                  <option>Pivka</option>
                  <option>??martno pri Litiji</option>
                  <option>Semi??</option>
                  <option>Sveti Jurij v Slovenskih goricah</option>
                  <option>Gorje</option>
                  <option>Pod??etrtek</option>
                  <option>Trzin</option>
                  <option>Velenje</option>
                  <option>Lukovica</option>
                  <option>Ptuj</option>
                  <option>Medvode</option>
                  <option>Duplek</option>
                  <option>Muta</option>
                  <option>Sveti Toma??</option>
                  <option>Log - Dragomer</option>
                  <option>??tore</option>
                  <option>Kozje</option>
                  <option>??empeter-Vrtojba</option>
                  <option>Gorenja vas - Poljane</option>
                  <option>Markovci</option>
                  <option>Brezovica</option>
                  <option>Miren - Kostanjevica</option>
                  <option>Zagorje ob Savi</option>
                  <option>Kranj</option>
                  <option>Oplotnica</option>
                  <option>??marje pri Jel??ah</option>
                  <option>Kamnik</option>
                  <option>Nazarje</option>
                  <option>Rogatec</option>
                  <option>Dobrna</option>
                  <option>Beltinci</option>
                  <option>Tabor</option>
                  <option>Cerknica</option>
                  <option>Lovrenc na Pohorju</option>
                  <option>Kobarid</option>
                  <option>Hrastnik</option>
                  <option>Cerkvenjak</option>
                  <option>Dobrovnik</option>
                  <option>Dravograd</option>
                  <option>Hajdina</option>
                  <option>Podlehnik</option>
                  <option>??rna na Koro??kem</option>
                  <option>Ljutomer</option>
                  <option>Kr??ko</option>
                  <option>Benedikt</option>
                  <option>??entjur</option>
                  <option>??marje??ke Toplice</option>
                  <option>Lenart</option>
                  <option>Novo mesto</option>
                  <option>Miklav?? na Dravskem polju</option>
                  <option>Kobilje</option>
                  <option>Velika Polana</option>
                  <option>Kri??evci</option>
                  <option>Radlje ob Dravi</option>
                  <option>Hodo??</option>
                  <option>Puconci</option>
                  <option>??irovnica</option>
                  <option>Kostanjevica na Krki</option>
                  <option>Sol??ava</option>
                  <option>Sredi????e ob Dravi</option>
                  <option>Kuzma</option>
                  <option>Gori??nica</option>
                  <option>Bohinj</option>
                  <option>??entjernej</option>
                  <option>??u??emberk</option>
                  <option>Polzela</option>
                  <option>??kocjan</option>
                  <option>Bloke</option>
                  <option>Trbovlje</option>
                  <option>Horjul</option>
                  <option>Dornava</option>
                  <option>??alec</option>
                  <option>??martno ob Paki</option>
                  <option>??iri</option>
                  <option>Lendava</option>
                  <option>Lo??ka dolina</option>
                  <option>Kranjska Gora</option>
                  <option>Bled</option>
                  <option>Ig</option>
                  <option>??alovci</option>
                  <option>Kostel</option>
                  <option>Mozirje</option>
                  <option>Bre??ice</option>
                  <option>Naklo</option>
                  <option>Odranci</option>
                  <option>??kofljica</option>
                  <option>Lo??ki Potok</option>
                  <option>Postojna</option>
                  <option>Dobrepolje</option>
                  <option>Pesnica</option>
                  <option>Ankaran</option>
                  <option>Vipava</option>
                  <option>Cerkno</option>
                  <option>Ljubno</option>
                  <option>Vuzenica</option>
                  <option>Bistrica ob Sotli</option>
                  <option>Gornji Petrovci</option>
                  <option>Cerklje na Gorenjskem</option>
                  <option>La??ko</option>
                  <option>Dolenjske Toplice</option>
                  <option>Vransko</option>
                  <option>Dobrova - Polhov Gradec</option>
                  <option>Litija</option>
                  <option>Destrnik</option>
                  <option>Brda</option>
                  <option>Makole</option>
                  <option>Dobje</option>
                  <option>Menge??</option>
                  <option>Ti??ina</option>
                  <option>Komen</option>
                  <option>Ilirska Bistrica</option>
                  <option>Roga??ovci</option>
                  <option>Ivan??na Gorica</option>
                  <option>Mirna</option>
                  <option>Stra??a</option>
                  <option>Me??ica</option>
                  <option>Selnica ob Dravi</option>
                  <option>Ko??evje</option>
                  <option>Ravne na Koro??kem</option>
                  <option>Velike La????e</option>
                  <option>Grosuplje</option>
                  <option>Morav??e</option>
                  <option>Prevalje</option>
                  <option>Ho??e - Slivnica</option>
                  <option>Nova Gorica</option>
                  <option>Slovenska Bistrica</option>
                  <option>Maj??perk</option>
                  <option>Apa??e</option>
                  <option>Murska Sobota</option>
                  <option>Se??ana</option>
                  <option>Sv. Trojica v Slovenskih goricah</option>
                  <option>Metlika</option>
                  <option>Slovenske Konjice</option>
                  <option>??o??tanj</option>
                  <option>Sveti Andra?? v Slovenskih goricah</option>
                  <option>Izola</option>
                  <option>Cankova</option>
                  <option>Ormo??</option>
                  <option>Vrhnika</option>
                  <option>Grad</option>
                  <option>Lu??e</option>
                  <option>??en??ur</option>
                  <option>Radovljica</option>
                  <option>Vojnik</option>
                  <option>Videm</option>
                  <option>Ra??e - Fram</option>
                  <option>Roga??ka Slatina</option>
                  <option>Tr??i??</option>
                  <option>Turni????e</option>
                  <option>Zre??e</option>
                  <option>Celje</option>
                  <option>Borovnica</option>
                  <option>Mislinja</option>
                  <option>Jesenice</option>
                  <option>Sodra??ica</option>
                  <option>Logatec</option>
                  <option>Cirkulane</option>
                  <option>Gornji Grad</option>
                  <option>Svetij Jurij ob ????avnici</option>
                  <option>Mokronog - Trebelno</option>
                  <option>??elezniki</option>
                  <option>Kidri??evo</option>
                  <option>Podvelka</option>
                  <option>??etale</option>
                  <option>??entrupert</option>
                  <option>??rnomelj</option>
                  <option>Mirna Pe??</option>
                  <option>Jezersko</option>
                  <option>Re??ica ob Savinji</option>
                  <option>Jur??inci</option>
                  <option>Trebnje</option>
                  <option>Moravske Toplice</option>
                  <option>Trnovska vas</option>
                  <option>Koper</option>
                  <option>Diva??a</option>
                  <option>Osilnica</option>
                  <option>Maribor</option>
                  <option>Vodice</option>
                  <option>Komenda</option>
                </Input>
              </FormGroup>
            <Button>Register</Button>
        </Form>
        </CardBody>
    </Card>
    </Col>
</Row>
);
};

export default Forms;