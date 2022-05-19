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

const Forms = () => {
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
                <Input
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
