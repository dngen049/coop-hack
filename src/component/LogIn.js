import React from 'react';
import { Button, FormGroup, FormControl, Form } from "react-bootstrap"
import {withRouter} from 'react-router';
import users from '../data/users'
import './Login.css';

//composante pour l'authentification
class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            email: "",
            password: "",
            confirmpassword : "",
            LogMode: false,
            invalidEmail:false,
            invalidPassword: false,
            PasswordErrorMsg:"",
            invalidConfirmPassword: false
         
        };
        
    }
    //Retourn  faux si les champs ne sont pas tous rempli
    //Dependement s'il est en mode login ou non
    validateForm() {
        if(this.state.LogMode){
            return this.state.email.length > 0 && this.state.password.length > 0;
        }else{
            return this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmpassword.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0  ;
        }
    }
   
    //Cette fonction se charge de update le state
    //Lorsque on ecrit dans un des champs de texte
    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value,   invalidEmail:false,
        invalidPassword: false, invalidConfirmPassword:false
    });
    }

    //Dependament du logMode 
    //Si c vrai on verfie la chaine du email 
    //et si elle est correct on verifie par rapport a la BD si on peut trouver le user
    //Si le user existe on grant passage sinon erreur
    //Si logMode est Faux, on verifie si les champs sont bien rempli, sinon erreur
    handleSubmit = event => {
        event.preventDefault();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(this.state.email).toLowerCase())){
            if(this.state.LogMode){
                const user = users.find(((data) => data.email === this.state.email))
                console.log(user);
                if(user !==  undefined){
                    if(user.passWord === this.state.password){
                        this.props.history.push('/coop-hack/HomePage')
                    }else{
                        this.setState({ invalidPassword: true, PasswordErrorMsg:"Invalid password" });
                    }
                }else{
                    this.setState({ invalidEmail: true });
                }
            }else{
                if(this.state.password.length < 6){
                    this.setState({ invalidPassword: true, PasswordErrorMsg:"Invalid password, password must at least 6 character long" });
                }else if(this.state.confirmpassword !== this.state.password){
                    this.setState({ invalidConfirmPassword: true });
                }else{
                    this.props.history.push('/coop-hack/Homepage')
                }
            }
          
        }else{
            if(this.state.LogMode){
                this.setState({ invalidPassword: true ,  invalidEmail: true, PasswordErrorMsg:"Invalid password"  });
            }else{
                this.setState({ invalidPassword: true ,  invalidEmail: true, invalidConfirmPassword: true , PasswordErrorMsg:"Invalid password, password must at least 6 character long"  });
            }
        }
        
        
        
    }
    render(){
        let ForgortPassA = {
        };
        if(this.state.LogMode){
            ForgortPassA = {
                display:"initial"
            };
        }else{
            ForgortPassA = {
                display:"none"
            };
        }
        return(
            <div className="Login" style={{margin:"15px"}}>
                
                <h3 style={{marginBottom:"20px", color:"black"}}>{this.state.LogMode ? "Login" : "Sign up"}</h3>
                <Form noValidate   onSubmit={this.handleSubmit}>
                    <FormGroup controlId="firstName" hidden={this.state.LogMode} >
                    
                        <FormControl 
                        placeholder="First name"
                        type="name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        />
                        
                    </FormGroup>
                    <FormGroup controlId="lastName" hidden={this.state.LogMode} >
                    
                        <FormControl 
                        placeholder="Last name"
                        type="name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        />
                        
                    </FormGroup>
                    <FormGroup controlId="email" >
                  
                        <FormControl 
                        placeholder="Email"
                        
                        isInvalid = {this.state.invalidEmail}
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        />
                        <FormControl.Feedback type="invalid">
                            invalid Email
                        </FormControl.Feedback>
                    </FormGroup>
                
                     <FormGroup controlId="password">
                  
                        <FormControl
                      
                        isInvalid = {this.state.invalidPassword}
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        type="password"
                        />
                        <FormControl.Feedback  type="invalid">
                            {this.state.PasswordErrorMsg}
                        </FormControl.Feedback>
                    </FormGroup>

                    <FormGroup controlId="confirmpassword"  hidden={this.state.LogMode}>
                    
                        <FormControl
                        isInvalid={this.state.invalidConfirmPassword}
                        placeholder="Confirm password"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange}
                        required
                        type="password"
                        />
                         <FormControl.Feedback  type="invalid">
                            The password does not match
                        </FormControl.Feedback>
                    </FormGroup>
                
                    
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{textAlign:"left"}} >
                            <ul className="Auth-link">
                                <li><a style={ForgortPassA} href="#">Forgot Password</a></li>
                                <li><a onClick={() => this.setState({LogMode:!this.state.LogMode})} href="#">{this.state.LogMode ? "Don't have an account" : "Already have an account"}</a></li>
                            </ul>
                            
                        
                        </div>
                        <div  >
                            <Button
                                block
                                style={{width:"100px"}}
                                disabled={!this.validateForm()}
                                type="submit">
                                {this.state.LogMode ? "Login" : "Sign up"}
                            </Button>
                            
                        </div>
                    </div>
                
               
                </Form>
            </div>
        )
    }
}


export default  withRouter(LogIn);