import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom'
import { Navbar,NavDropdown, Nav, Glyphicon } from "react-bootstrap"

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
      const navDropdownTitle = (<span className="glyphicon glyphicon-user"></span>);
        let navStyle = {
        };
        if(this.props.location.pathname == '/'){
            navStyle = {
                padding: '0',
                border_radius: '0',
                visibility: 'hidden'
            };
        }else{
            navStyle = {
                padding: '0',
                borderRadius: '0'
            };
        }
        
      return (
        <Navbar  bg="light" >
        <Navbar.Brand as={Link} to="/HomePage">Coop Hack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Search" > Search</Nav.Link>
            <Nav.Link as={Link} to="/App">My application</Nav.Link>
           
          </Nav>
          <Nav>
              <NavDropdown  title="hello" className="pull-right"  id="basic-nav-dropdown" style={{
                marginRight: 15
              }} pullRight="false" >
                <NavDropdown.Item href="#"><span className="glyphicon glyphicon-cog"></span> Setting</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Profile"> <span className="glyphicon glyphicon-home"></span> Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" ><span className="glyphicon glyphicon-log-out"></span> Logout</NavDropdown.Item>
        
              </NavDropdown>
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