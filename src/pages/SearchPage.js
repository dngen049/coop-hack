import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import jobs from '../data/jobs'



export default class SearchPage extends React.Component {
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
                <b>405</b> Jobs Found
              </h3>
            </div>
            <div class="item-listing">
            <div class="list-item list-item-featured">
                <div class="list-item-main-info">
                  <p class="list-item-title-eyebrow">Featured</p>
                  <p class="list-item-title">
                    <a href="single-job.html">User Experience Designer</a>
                  </p>
                  <div class="list-item-meta">
                    <a href="" class="list-item-tag item-badge">4.5/5.0</a>
                    <span class="list-item-company">McIntire Solutions, LLC</span>
                  </div>
                </div>
                <div class="list-item-secondary-info">
                  <p class="list-item-location">Richmond, VA</p>
                  <time class="list-item-time" datetime="2017-01-01">3 hours ago</time>
                </div>
              </div>
              <div class="list-item">
                <div class="list-item-main-info">
                  <p class="list-item-title">
                    <a href="single-job.html">User Experience Designer</a>
                  </p>
                  <div class="list-item-meta">
                    <a href="" class="list-item-tag item-badge">4.5/5.0</a>
                    <span class="list-item-company">McIntire Solutions, LLC</span>
                  </div>
                </div>
                <div class="list-item-secondary-info">
                  <p class="list-item-location">Richmond, VA</p>
                  <time class="list-item-time" datetime="2017-01-01">3 hours ago</time>
                </div>
              </div>
              <item text={"hhh"} author={"quote.author"}></item>

            
              
              
              <div class="list-item">
                <div class="list-item-main-info">
                  <p class="list-item-title">
                    <a href="single-job.html">User Experience Designer</a>
                  </p>
                  <div class="list-item-meta">
                    <a href="" class="list-item-tag item-badge">4.5/5.0</a>
                    <span class="list-item-company">McIntire Solutions, LLC</span>
                  </div>
                </div>
                <div class="list-item-secondary-info">
                  <p class="list-item-location">Richmond, VA</p>
                  <time class="list-item-time" datetime="2017-01-01">3 hours ago</time>
                </div>
              </div>
              <div class="list-item-secondary-wrap">
                <a href="" class="btn btn-round btn-white btn-transparent">Load More Jobs</a>
              </div>
            </div>
          </div>
         
      </div>
    </main>
    </div>

    )
  }
}