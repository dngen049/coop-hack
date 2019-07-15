import React from 'react'
import {Button, style} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ProfilePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <main class="main">
        <div class="container">
          <div class="col-xs-12">

            <div class="section-title-wrap">
              <h3 class="section-title" style={{marginTop: "30px"}}>
                My Profile
              </h3>
            </div>

            <div class="row">
              <div class="col-sm-6">

                <p style={{marginTop: "30px"}}>Full Name</p>
                <input style={{width: "100%"}} type="text" value="Michael Cloutier"/>

              </div>

              <div class="col-sm-6">

                <p style={{marginTop: "30px"}}>Location</p>
                <input style={{width: "100%"}} type="text" value="Ottawa, ON, Canada"/>

              </div>

              <div class="col-sm-12">

                <p style={{marginTop: "30px"}}>Education</p>
                <textarea rows = "5" cols = "145">
                  TODO: Info about education
                </textarea>

                <p style={{marginTop: "30px"}}>Experience</p>
                <textarea rows = "5" cols = "145">
                  TODO: Info about education
                </textarea>

              </div>

              <div class="col-sm-4">
                <p style={{marginTop: "30px"}}>Resume</p>
                <input type="file" id="myFile"/>
              </div>

              <div class="col-sm-8">
                <Button
                    className="pull-right"
                    style={{marginTop: "40px", marginLeft: "20px"}}
                    variant="outline-primary"
                    type="submit"
                    size="lg">
                    Save Changes
                  </Button>
                  <Button
                    className="pull-right"
                    style={{marginTop: "40px", marginLeft: "20px"}}
                    variant="default"
                    type="submit"
                    size="lg">
                    Preview
                  </Button>
              </div>
            </div>

          </div>
        </div>
        </main>
      </div>
    )
  }
}
