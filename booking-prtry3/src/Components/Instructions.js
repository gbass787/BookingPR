import React, { Component } from 'react';
import Card from "react-bootstrap/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default class Instructions extends Component {
  
  constructor(props){
    super(props);
    console.log(this.props.Id);
  }


  render() {
    return(
      
      <Col>
        <Card style={{ width: '20rem' }} key={this.props.Id}>
          <Card.Img variant="top" src={require(`../Images/${this.props.img}`)}/>
          <Card.Body>
            <Card.Title>{this.props.bandname}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Link to={`/artistpage/${this.props.Id}`}><Button  variant="primary">Band page</Button></Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}