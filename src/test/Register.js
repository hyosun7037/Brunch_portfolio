import React,{Component} from "react";
import {Card,Form,Button,Col} from "react-bootstrap"
import {faSave,faPlusSquare,faUndo} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import {Link} from "react-router-dom";

export default class Register extends Component {
constructor(props){
	super(props);
	this.state = this.initialState;
	this.state.show=false
	this.userChange=this.userChange.bind(this);
	this.submitUser=this.submitUser.bind(this);
}
initialState = { email:"" }
resetUser=() => { this.setState(() => this.initialState) }
submitUser= event =>{
        event.preventDefault();
        const user = email: this.state.email };
        axios.post("http://localhost:8080/forms",user)
	.then(response => {
	if(response.data!=null){
	this.setState({"show":true});
	setTimeout(() => this.setState({"show":false}),3000);}
	else{ this.setState({"show":false}); }});
	this.setState(this.initialState);}
userChange = event =>{ this.setState({ [event.target.name]:event.target.value }) };
userList=()=>{ return this.props.history.push("/list"); };
render()
{ const {email}=this.state;
	return (
        <div>
	<div style={{"display":this.state.show ? "block" : "none"}}>
	 </div>
	 <Card className={"border border-dark bg-dark text-white"}>
     		<Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Register</Card.Header>
     		<Form onReset={this.resetUser} onSubmit={this.submitUser} id="userFormId">
		<Card.Body>
     		<Form.Row>
     		<Form.Group as= {Col} controlId="formGridemail">
     		<Form.Label>Email</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="email"
     		value={email}
     		onChange={this.userChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Email" />
             </Form.Group>
             </Form.Row>
                <Card.Footer style={{"textAlign":"right"}}>
     		<Button size="sm" variant="primary" type="submit">
     		<FontAwesomeIcon icon={faSave} />Submit
     		</Button>{" "}
     		<Button size="sm" variant="primary" type="reset">
             <FontAwesomeIcon icon={faUndo} />Reset
             </Button>
                </Card.Footer>
		</Card.Body>
     		</Form>
     		<center><Link to="/login">Already have an Account ? </Link></center>
     		</Card>
            </div>
        ); 
    }}