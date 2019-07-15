import React from 'react'
import {Button, style} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ApplicationPage extends React.Component {
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
              <h3 class="section-title">
                My applications
              </h3>
            </div>

            <div class="item-listing">

              <div class="row">

                <div class="list-item col-sm-10">
                  <div class="list-item-main-info">
                    <p class="list-item-title">
                      <a href="single-job.html">User Experience Designer</a>
                    </p>
                    <div class="list-item-meta">
                      <a href="" class="list-item-tag item-badge">4.5/5.0</a>
                      <span class="list-item-company">McIntire Solutions, LLC (Richmond, VA)</span>
                    </div>
                  </div>
                  <div class="list-item-secondary-info">
                    <p class="list-item-location" style={{color: "#ffce2b", fontWeight: "bold"}}>Pending</p>
                    <time class="list-item-time">Applied 1 hour ago</time>
                  </div>
                </div>

                <div class="col-sm-2">
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="danger"
                    type="submit"
                    size="lg">
                    <span className="fa fa-trash"></span>
                  </Button>
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="outline-primary"
                    type="submit"
                    size="lg">
                    <span className="fa fa-file"></span>
                  </Button>
                </div>

              </div>

              <div class="row">

                <div class="list-item col-sm-10">
                  <div class="list-item-main-info">
                    <p class="list-item-title">
                      <a href="single-job.html">Co-op/Intern : Python Mathlab Programmer</a>
                    </p>
                    <div class="list-item-meta">
                      <a href="" class="list-item-tag item-badge">4.5/5.0</a>
                      <span class="list-item-company">Ciena (Kanata, ON)</span>
                    </div>
                  </div>
                  <div class="list-item-secondary-info">
                    <p class="list-item-location" style={{color: "#ffce2b", fontWeight: "bold"}}>Pending</p>
                    <time class="list-item-time">Applied 3 days ago</time>
                  </div>
                </div>

                <div class="col-sm-2">
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="danger"
                    type="submit"
                    size="lg">
                    <span className="fa fa-trash"></span>
                  </Button>
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="outline-primary"
                    type="submit"
                    size="lg">
                    <span className="fa fa-file"></span>
                  </Button>
                </div>

              </div>

              <div class="row">

                <div class="list-item col-sm-10">
                  <div class="list-item-main-info">
                    <p class="list-item-title">
                      <a href="single-job.html">Game Generalist Programmer</a>
                    </p>
                    <div class="list-item-meta">
                      <a href="" class="list-item-tag item-badge">5.0/5.0</a>
                      <span class="list-item-company">Keywords Studios (Ottawa, ON)</span>
                    </div>
                  </div>
                  <div class="list-item-secondary-info">
                    <p class="list-item-location" style={{color: "#49c420", fontWeight: "bold"}}>Selected for interview</p>
                    <time class="list-item-time">Applied 6 days ago</time>
                  </div>
                </div>

                <div class="col-sm-2">
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="danger"
                    type="submit"
                    size="lg">
                    <span className="fa fa-trash"></span>
                  </Button>
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="outline-primary"
                    type="submit"
                    size="lg">
                    <span className="fa fa-file"></span>
                  </Button>
                </div>

              </div>

              <div class="row">

                <div class="list-item col-sm-10">
                  <div class="list-item-main-info">
                    <p class="list-item-title">
                      <a href="single-job.html">Junior Java Developer</a>
                    </p>
                    <div class="list-item-meta">
                      <a href="" class="list-item-tag item-badge">4.0/5.0</a>
                      <span class="list-item-company">IBM Canada (Kanata, ON)</span>
                    </div>
                  </div>
                  <div class="list-item-secondary-info">
                    <p class="list-item-location" style={{color: "#c70700", fontWeight: "bold"}}>Rejected</p>
                    <time class="list-item-time">Applied 2 weeks ago</time>
                  </div>
                </div>

                <div class="col-sm-2">
                  <Button
                    className="pull-right"
                    style={{marginTop: "30px", marginLeft: "20px"}}
                    variant="danger"
                    type="submit"
                    size="lg">
                    <span className="fa fa-trash"></span>
                  </Button>
                </div>

              </div>

            </div>

          </div>
        </div>
        </main>
      </div>
    )
  }
}
