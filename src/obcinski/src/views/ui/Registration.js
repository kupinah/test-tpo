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
                  <option>Šentilj</option>
                  <option>Piran</option>
                  <option>Ljubljana</option>
                  <option>Prebold</option>
                  <option>Črenšovci</option>
                  <option>Bovec</option>
                  <option>Ruše</option>
                  <option>Tolmin</option>
                  <option>Domžale</option>
                  <option>Braslovče</option>
                  <option>Idrija</option>
                  <option>Radeče</option>
                  <option>Škofja Loka</option>
                  <option>Kanal</option>
                  <option>Slovenj Gradec</option>
                  <option>Renče - Vogrsko</option>
                  <option>Kungota</option>
                  <option>Ajdovščina</option>
                  <option>Gornja Radgona</option>
                  <option>Razkrižje</option>
                  <option>Poljčane</option>
                  <option>Starše</option>
                  <option>Sevnica</option>
                  <option>Ribnica na Pohorju</option>
                  <option>Vitanje</option>
                  <option>Zavrč</option>
                  <option>Veržej</option>
                  <option>Sveta Ana</option>
                  <option>Hrpelje - Kozina</option>
                  <option>Ribnica</option>
                  <option>Radenci</option>
                  <option>Preddvor</option>
                  <option>Pivka</option>
                  <option>Šmartno pri Litiji</option>
                  <option>Semič</option>
                  <option>Sveti Jurij v Slovenskih goricah</option>
                  <option>Gorje</option>
                  <option>Podčetrtek</option>
                  <option>Trzin</option>
                  <option>Velenje</option>
                  <option>Lukovica</option>
                  <option>Ptuj</option>
                  <option>Medvode</option>
                  <option>Duplek</option>
                  <option>Muta</option>
                  <option>Sveti Tomaž</option>
                  <option>Log - Dragomer</option>
                  <option>Štore</option>
                  <option>Kozje</option>
                  <option>Šempeter-Vrtojba</option>
                  <option>Gorenja vas - Poljane</option>
                  <option>Markovci</option>
                  <option>Brezovica</option>
                  <option>Miren - Kostanjevica</option>
                  <option>Zagorje ob Savi</option>
                  <option>Kranj</option>
                  <option>Oplotnica</option>
                  <option>Šmarje pri Jelšah</option>
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
                  <option>Črna na Koroškem</option>
                  <option>Ljutomer</option>
                  <option>Krško</option>
                  <option>Benedikt</option>
                  <option>Šentjur</option>
                  <option>Šmarješke Toplice</option>
                  <option>Lenart</option>
                  <option>Novo mesto</option>
                  <option>Miklavž na Dravskem polju</option>
                  <option>Kobilje</option>
                  <option>Velika Polana</option>
                  <option>Križevci</option>
                  <option>Radlje ob Dravi</option>
                  <option>Hodoš</option>
                  <option>Puconci</option>
                  <option>Žirovnica</option>
                  <option>Kostanjevica na Krki</option>
                  <option>Solčava</option>
                  <option>Središče ob Dravi</option>
                  <option>Kuzma</option>
                  <option>Gorišnica</option>
                  <option>Bohinj</option>
                  <option>Šentjernej</option>
                  <option>Žužemberk</option>
                  <option>Polzela</option>
                  <option>Škocjan</option>
                  <option>Bloke</option>
                  <option>Trbovlje</option>
                  <option>Horjul</option>
                  <option>Dornava</option>
                  <option>Žalec</option>
                  <option>Šmartno ob Paki</option>
                  <option>Žiri</option>
                  <option>Lendava</option>
                  <option>Loška dolina</option>
                  <option>Kranjska Gora</option>
                  <option>Bled</option>
                  <option>Ig</option>
                  <option>Šalovci</option>
                  <option>Kostel</option>
                  <option>Mozirje</option>
                  <option>Brežice</option>
                  <option>Naklo</option>
                  <option>Odranci</option>
                  <option>Škofljica</option>
                  <option>Loški Potok</option>
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
                  <option>Laško</option>
                  <option>Dolenjske Toplice</option>
                  <option>Vransko</option>
                  <option>Dobrova - Polhov Gradec</option>
                  <option>Litija</option>
                  <option>Destrnik</option>
                  <option>Brda</option>
                  <option>Makole</option>
                  <option>Dobje</option>
                  <option>Mengeš</option>
                  <option>Tišina</option>
                  <option>Komen</option>
                  <option>Ilirska Bistrica</option>
                  <option>Rogašovci</option>
                  <option>Ivančna Gorica</option>
                  <option>Mirna</option>
                  <option>Straža</option>
                  <option>Mežica</option>
                  <option>Selnica ob Dravi</option>
                  <option>Kočevje</option>
                  <option>Ravne na Koroškem</option>
                  <option>Velike Lašče</option>
                  <option>Grosuplje</option>
                  <option>Moravče</option>
                  <option>Prevalje</option>
                  <option>Hoče - Slivnica</option>
                  <option>Nova Gorica</option>
                  <option>Slovenska Bistrica</option>
                  <option>Majšperk</option>
                  <option>Apače</option>
                  <option>Murska Sobota</option>
                  <option>Sežana</option>
                  <option>Sv. Trojica v Slovenskih goricah</option>
                  <option>Metlika</option>
                  <option>Slovenske Konjice</option>
                  <option>Šoštanj</option>
                  <option>Sveti Andraž v Slovenskih goricah</option>
                  <option>Izola</option>
                  <option>Cankova</option>
                  <option>Ormož</option>
                  <option>Vrhnika</option>
                  <option>Grad</option>
                  <option>Luče</option>
                  <option>Šenčur</option>
                  <option>Radovljica</option>
                  <option>Vojnik</option>
                  <option>Videm</option>
                  <option>Rače - Fram</option>
                  <option>Rogaška Slatina</option>
                  <option>Tržič</option>
                  <option>Turnišče</option>
                  <option>Zreče</option>
                  <option>Celje</option>
                  <option>Borovnica</option>
                  <option>Mislinja</option>
                  <option>Jesenice</option>
                  <option>Sodražica</option>
                  <option>Logatec</option>
                  <option>Cirkulane</option>
                  <option>Gornji Grad</option>
                  <option>Svetij Jurij ob Ščavnici</option>
                  <option>Mokronog - Trebelno</option>
                  <option>Železniki</option>
                  <option>Kidričevo</option>
                  <option>Podvelka</option>
                  <option>Žetale</option>
                  <option>Šentrupert</option>
                  <option>Črnomelj</option>
                  <option>Mirna Peč</option>
                  <option>Jezersko</option>
                  <option>Rečica ob Savinji</option>
                  <option>Juršinci</option>
                  <option>Trebnje</option>
                  <option>Moravske Toplice</option>
                  <option>Trnovska vas</option>
                  <option>Koper</option>
                  <option>Divača</option>
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