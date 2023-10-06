import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Map from './Component/Map/Map';
import Footer from './Component/Footer/Footer';
import Slider from './Component/Slider/Slider';
import Bottom from './Component/Bottom/Bottom';
import Middle from './Component/Middle/Middle';
import Hidden from './Component/Hidden/Hidden';
import Contact from './Component/Contact/Contact';
import Home from './Component/HomeFile';
import Travel from './Component/Travel Places/Travel';
import Privacy from './Component/Privacy Policy/PrivacyPolicy';
import Information from './Component/Information/Information';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './Component/Terms/Terms';
import Faq from './Component/Faq/Faq';
import Experience from './Component/Experience/Experience';
import Bookmark from './Component/Bookmark/Bookmark';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showing: true
    }
  }
  showingHandler = () => {
    this.setState({
      showing: !this.state.showing
    })
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={
              <Home></Home>
            }>              
            </Route>
            <Route path='/contact' element={
              <Contact></Contact>
            }>              
            </Route>
            <Route path='/destination' element={
              <Travel></Travel>
            }>              
            </Route>
            <Route path='/privacy-policy' element={
              <Privacy></Privacy>
            }>              
            </Route>
            <Route path='/USA-travel-information' element={
              <Information></Information>
            }>              
            </Route>
            <Route path='/terms-of-use' element={
              <Terms></Terms>
            }>              
            </Route>
            <Route path='/faq' element={
              <Faq></Faq>
            }>              
            </Route>
            <Route path='/experience' element={
              <Experience></Experience>
            }>              
            </Route>
            <Route path='/bookmark' element={
              <Bookmark></Bookmark>
            }>              
            </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}
export default App;