import React, { Component } from 'react'

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

import slika from "../../assets/images/users/user1.jpg";
import { Link } from "react-router-dom";


const MyProfileData = [
    {
      img: slika,
      ime: "Elena",
      priimek: "Najdova",
      email: "en@gmail.com",
      username: "en",
      obcina: "Ljubljana"
    }]

export default class MyProfile extends Component {
  render() {
    return (
        <Row>
            <Col>
            <Card>
                <div class="p-5">
                    <CardTitle><h2><b>My Profile</b></h2></CardTitle>
                    {MyProfileData.map((blg, index) => (
                        <Row class="position-relative">
                            <Col sm="6" lg="6" xl="3" key={index}>
                                <img src={blg.img} alt="profile pic"></img>
                            </Col>
                            <Col sm="6" lg="6" xl="3" key={index}>
                                <div>
                                    <div><b>Ime:</b> {blg.ime}</div>
                                    <div><b>Priimek:</b> {blg.priimek}</div>
                                    <div><b>Username:</b> {blg.username}</div>
                                    <div><b>Emal:</b> {blg.email}</div>
                                    <div><b>Moja obcina:</b> {blg.obcina}</div>
                                </div>
                                <div class="position-absolute bottom-0 end-0">
                                    <Button className="btn" color="secondary">
                                    <Link to="/editmyprofile" className="nav-link">
                                    Edit Profile
                                    </Link>
                                    </Button>
                                    <Button className="btn" color="danger">
                                    <Link to="/editmyprofile" className="nav-link">
                                    Delete Profile
                                    </Link>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Card>
            
            </Col>
        </Row>
    )
  }
}
