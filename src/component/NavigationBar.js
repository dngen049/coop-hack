import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown , DropdownButton} from "react-bootstrap"
import "./NavigationBar.css"

//composante sur bar de navigation
class NavigationBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
      
      const navDropdownTitle = (<span className="fa fa-user"></span>);
      
      //Ceci c pour cacher la bar si on est dans WelcomePage
        let navStyle = {
        };
        if(this.props.location.pathname === '/'){
            navStyle = {
                display: 'none'
            };
        }else{
            navStyle = {
                display:"block"
            };
        }
        
      return (
        <Navbar style={navStyle} variant="dark"  bg="primary" >
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/HomePage" style={{width:"100%"}}>
          <div className="mr-auto" style={{display:"flex"}}  >
            <Nav.Link className="Brand"  eventKey="link-1"   as={Link} to="/HomePage" >Coop Hack</Nav.Link>
            <Nav.Link  eventKey="link-2"   as={Link} to="/Search" > Search</Nav.Link>
            <Nav.Link  eventKey="link-3"   as={Link} to="/App">My application</Nav.Link>
           
          </div>
          <div  >
            
             
            <DropdownButton
                alignRight
                title={navDropdownTitle}
                id="dropdown-menu-align-right">
                  <Dropdown.Item ><span className="fa fa-cog" ></span> Setting</Dropdown.Item>
                <Dropdown.Item eventKey="link-4" as={Link} to="/Profile"> <span className="fa fa-home"></span> Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/"  ><span className="fa fa-sign-out"></span> Logout</Dropdown.Item>
            </DropdownButton>
          </div>

          </Nav>
         
        </Navbar.Collapse >
      </Navbar>
      );
    }
  }


export default  withRouter(NavigationBar);



