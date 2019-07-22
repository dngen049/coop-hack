import React from 'react'
import Applications from '../data/Application'
import Application from './../component/Application'

export default class ApplicationPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      apps : []
    }
    this.removeElement = this.removeElement.bind(this)
  }
  //cette fonction se fait run au debut
  //on ajoute les job dont le user a applique dans un array dans le state
  componentDidMount(){
    var res =[]
    Applications.map((e)=>{
      if(e.deleted !== "true"){
        res.push(e)
      }
    })
    this.setState({apps:res})
  }

  //Cette fonction se fait appeller lorsque un user supprime une applications
  //Parametre : Id du job
  removeElement(elementId) {
    var el = Applications.find((data) => data.jobID === elementId) //on trouve l'element dans le array
    el.deleted = "true"                                             //on change deleted a True
    const arrayCopy = this.state.apps.filter(((data) => data.jobID !== elementId)) // on fait une copy des application sans l'element supprimer
    
    this.setState({apps: arrayCopy}) 
  }

  render(){
    return (
      <div className="container">
        <main class="main" style={{marginTop:"20px"}}>
        <div class="container">
          <div class="col-xs-12">

            <div class="section-title-wrap">
              <h3 class="section-title">
                My applications
              </h3>
            </div>

            <div class="item-listing">

             {this.state.apps.map(e  => <Application JobID={e.jobID} jobTitle={e.jobTitle} 
                                                rating ={e.rating} company={e.company} 
                                                location={e.location} Appstate={e.AppState}
                                                Applied={e.Applied} onRemove={this.removeElement}/>)}

            </div>

          </div>
        </div>
        </main>
      </div>
    )
  }
}
