import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import jobs from '../data/jobs'




export default class JobDetailPage extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    const x = jobs.find(((data) => data.id === "job1"))
    console.log(x.jobTtitle);
    return (

      <div id="page">
			
			<div className="page-hero">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="page-hero-content">
								<h1 className="page-title" style={{fontSize: "54px"}} >{x.jobTtitle}</h1>
								<div className="page-hero-details">
									<span className="item-badge">{x.rating}</span>
									<span className="entry-location">{x.location}</span>
									<span className="entry-company">{x.company} </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<main className="main main-elevated">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8 col-xs-12">
							<div className="content-wrap">
								<article className="entry">
									<div className="entry-content">
										<p>{x.p1}</p>
										<h2>What you will do</h2>
										<p>{x.p2}</p>
										<h3>Requirements</h3>
										<ul>
											<li>{x.u1}</li>
											<li>{x.u2}</li>
                      <li>{x.u3}</li>
										</ul>
										<p>{x.p3}</p>
									</div>
								</article>
								<a href="" className="btn btn-block btn-apply-content">Apply for this job</a>
							</div>
							<div className="content-wrap-footer">
								<div className="row">
									<div className="col-md-8 col-xs-12">
										<div className="entry-sharing"> Share this Job:
											<a href="" className="entry-share entry-share-facebook">Facebook</a>
											<a href="" className="entry-share entry-share-twitter">Twitter</a>
											<a href="" className="entry-share entry-share-google-plus">Google+</a>
											<a href="" className="entry-share entry-share-linkedin">LinkedIn</a>
											<a href="" className="entry-share entry-share-email">Email</a>
										</div>
									</div>
									<div className="col-md-4 col-xs-12 text-right">
										<a href="#">Report this listing</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-xs-12">
							<div className="sidebar">
							
								<aside className="widget widget_ci-company-info-widget">
									<h3 className="widget-title">Company Information</h3>
									<div className="card-info">
										<div className="card-info-media">
											<figure className="card-info-thumb">
												<img src={x.img} alt=""></img> </figure>
											<div className="card-info-details">
												<p className="card-info-title">{x.company}</p>
												<p className="card-info-link">
													<a href="">{x.url}</a>
												</p>
												<div className="card-info-socials">
													<a href="">
														<i className="fa fa-facebook"></i>
													</a>
													<a href="">
														<i className="fa fa-twitter"></i>
													</a>
													<a href="">
														<i className="fa fa-linkedin"></i>
													</a>
													<a href="">
														<i className="fa fa-google-plus"></i>
													</a>
												</div>
											</div>
										</div>
										<div className="card-info-description">
											<p>{x.description}</p>
										</div>
									</div>
								</aside>
								<aside className="widget widget_ci-related-items">
									<h3 className="widget-title">Related Jobs</h3>
									<div className="item-listing">
										<div className="list-item list-item-sm">
											<div className="list-item-main-info">
												<p className="list-item-title">
													<a href="single-job.html">Lion Tamer</a>
												</p>
												<div className="list-item-meta">
													<a href="" className="list-item-tag item-badge" style={{backgroundColor: "#0071c2"}}>3.7/5.0</a>
													<span className="list-item-company">Amazing Circus</span>
												</div>
											</div>
										</div>
										<div className="list-item list-item-sm">
											<div className="list-item-main-info">
												<p className="list-item-title">
													<a href="single-job.html">User Experience Designer</a>
												</p>
												<div className="list-item-meta">
													<a href="" className="list-item-tag item-badge" style={{backgroundColor:"#ec1a5b"}}>3.0/5.0</a>
													<span className="list-item-company">McIntire Solutions, LLC</span>
												</div>
											</div>
										</div>
										<div className="list-item list-item-sm">
											<div className="list-item-main-info">
												<p className="list-item-title">
													<a href="single-job.html">Software Tester</a>
												</p>
												<div className="list-item-meta">
													<a href="" className="list-item-tag item-badge" style={{backgroundColor: "#1fbbb4"}}>4.4/5.0</a>
													<span className="list-item-company">McIntire Solutions, LLC</span>
												</div>
											</div>
										</div>
										<div className="list-item list-item-sm">
											<div className="list-item-main-info">
												<p className="list-item-title">
													<a href="single-job.html">Senior Software Engineer</a>
												</p>
												<div className="list-item-meta">
													<a href="" className="list-item-tag item-badge" style={{backgroundColor: "#f26d46"}}>2.5/5.0</a>
													<span className="list-item-company">Google, Inc.</span>
												</div>
											</div>
										</div>
									</div>
								</aside>
							
							</div>
						</div>
					</div>
				</div>
			</main>
			
		</div>
      
    )
  }
}