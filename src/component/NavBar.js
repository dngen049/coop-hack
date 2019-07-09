import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
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
        <nav style={navStyle}  class="navbar navbar-inverse">
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
      </nav>
      );
    }
  }


export default  withRouter(Nav);