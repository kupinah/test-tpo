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
                <option>Ljubljana</option>
                <option>Maribor</option>
                <option>Kocevje</option>
                <option></option>
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