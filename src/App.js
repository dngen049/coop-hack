import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import WelcomePage from './pages/WelcomePage'
import Homepage from './pages/Homepage'
import AppPage from './pages/ApplicationPage'
import Profile from './pages/ProfilePage'
import Search from './pages/SearchPage'
import Job from './pages/JobDetailPage'
import NavBar from './component/NavigationBar';
import './App.css';


export default function App(props) {
  return (
  
    <Router>
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Redirect to="/coop-hack" >

        </Redirect>
      </Route>
        <Route exact path="/coop-hack" component={WelcomePage} />
        <Route exact path="/coop-hack/Homepage" component={Homepage} />
        <Route exact path="/coop-hack/App" component={AppPage} />
        <Route exact path="/coop-hack/Profile" component={Profile} />
        <Route exact path="/coop-hack/Search" component={Search} />
        <Route exact path="/coop-hack/Job/:id" component={Job} />
        
      </Switch>

    </Router>
  
   
  )
}
