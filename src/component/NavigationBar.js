import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown , DropdownButton} from "react-bootstrap"


class NavigationBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
      const navDropdownTitle = (<span className="fa fa-user"></span>);
        let navStyle = {
        };
        if(this.props.location.pathname == '/'){
            navStyle = {
                visibility: 'hidden'
            };
        }else{
            navStyle = {
                visibility:"initial"
            };
        }
        
      return (
        <Navbar style={navStyle} variant="pills"  bg="light" >
        <Navbar.Brand as={Link} to="/HomePage">Coop Hack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Search" > Search</Nav.Link>
            <Nav.Link as={Link} to="/App">My application</Nav.Link>
           
          </Nav>
          <Nav>
            
             
            <DropdownButton
                alignRight
                title={navDropdownTitle}
                id="dropdown-menu-align-right">
                  <Dropdown.Item href="#"><span className="fa fa-cog"></span> Setting</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Profile"> <span className="fa fa-home"></span> Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/" ><span className="fa fa-sign-out"></span> Logout</Dropdown.Item>
            </DropdownButton>
          </Nav>
         
        </Navbar.Collapse >
      </Navbar>
      );
    }
  }


export default  withRouter(NavigationBar);



{/* <nav style={navStyle}  class="navbar navbar-inverse">
<div class="container-fluid">
  <div class="navbar-header">
    <Link  class="navbar-brand" to="/HomePage">Coop Hack</Link>
  </div>
  <ul class="nav navbar-nav">
    <li ><Link activeClassName="active" className="Nav__link" to="/Search">Job Search</Link></li>
    <li ><Link activeClassName="active" className="Nav__link" to="/App">My application</Link></li>
    
   
  </ul>
  <ul class="nav navbar-nav navbar-right">
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span></a>
          <ul class="dropdown-menu">
                <li><a className="Nav__link" ><span class="glyphicon glyphicon-cog"></span> Setting</a></li>
                <li> <Link className="Nav__link" to="/Profile"> <span class="glyphicon glyphicon-home"></span> Profile</Link></li>
                <li><Link className="Nav__link" to="/"><span class="glyphicon glyphicon-log-out"></span> Logout</Link></li>
          </ul>
      </li>
  </ul>
</div>
</nav> */}