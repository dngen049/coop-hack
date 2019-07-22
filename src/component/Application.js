import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

//composante pour les applications 
class Application extends React.Component{
    constructor(props){
        super(props)
        
        
    }
  
    render(){
       
        //Ici on verifie l'etat de l'application et
        // on change la couleur du texte par rapport a l'etat
        if(this.props.Appstate == "Selected for interview"){
            Statestyle={color: "#49c420", fontWeight: "bold"}
        }else if(this.props.Appstate == "Pending"){
            Statestyle={color: "#ffce2b", fontWeight: "bold"}
        }else{
            Statestyle={color: "#c70700", fontWeight: "bold"}
        }
        //ICI on contruit le path 
        var link = "/Job/"+ this.props.JobID;
      
        return(
            <div class="row">

                <div class="list-item col-sm-10">
                  <div class="list-item-main-info">
                    <p class="list-item-title">
                        {this.props.Appstate !== "Rejected / Expired" ? <Link to={link}>{this.props.jobTitle}</Link> : <a>{this.props.jobTitle}</a>}
                    </p>
                    <div class="list-item-meta">
                      <a href="" class="list-item-tag item-badge">{this.props.rating}</a>
                      <span class="list-item-company">{this.props.company} ({this.props.location})</span>
                    </div>
                  </div>
                  <div class="list-item-secondary-info">
                    <p class="list-item-location" style={Statestyle}>{this.props.Appstate}</p>
                    <time class="list-item-time">Applied {this.props.Applied}</time>
                  </div>
                </div>

                <div class="col-sm-2">
                
                  <Button
                    onClick={() => this.props.onRemove(this.props.JobID)}
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="danger"
                    type="submit"
                    size="lg">
                    <span className="fa fa-trash"></span>
                  </Button>
                 
                 
                </div>

              </div>
        )
    }
}


export default Application;