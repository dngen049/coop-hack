import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import WelcomePage from './pages/WelcomePage'
import Homepage from './pages/Homepage'
import AppPage from './pages/ApplicationPage'
import Profile from './pages/ProfilePage'
import Search from './pages/SearchPage'
import Job from './pages/JobDetailPage'
import NavBar from './component/NavBar';



export default function App(props) {
  return (
  
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/App" component={AppPage} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Search" component={Search} />
        <Route path="/Job/:id" component={Job} />
        
      </Switch>

    </Router>
  
   
  )
}
