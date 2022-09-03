import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/layout'
// pages
import Home from './pages';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Box from './pages/box';

const generateNavLi = () => {
  let conditionalNavLi = []
  let authToken = sessionStorage.getItem('Auth Token')
  if (authToken) {
    conditionalNavLi = [
      {
        linkTxt: "Dashboard",
        link: '/dashboard'
      },
      {
        linkTxt: "Sign out",
        link: '/',
        id: 'logout'
      },
      {
        linkTxt: '',
        link: '/dashboard',
        id: 'userDp'
      }
    ]
  }
  if (!authToken) {
    conditionalNavLi = [
      {
        linkTxt: "Sign in",
        link: '/login'
      }
    ]
  }
  return conditionalNavLi
}


class App extends Component {
  defaultNavLi = [
    {
      linkTxt: "Contact us",
      link: "/#ourTeam"
    }
  ]

  render() {
    const navLi = [...this.defaultNavLi ,...generateNavLi()]
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Layout navLinks={navLi}>
              <Home />
            </Layout>
          } />
          <Route exact path="/login" element={
            <Layout navLinks={[]}>
              <Login />
            </Layout>
          } />
          <Route exact path="/dashboard" element={
            <Layout navLinks={[
              {
                linkTxt: "Contact us",
                link: '/#ourTeam'
              },
              {
                linkTxt: "Sign out",
                link: '/',
                id: 'logout'
              },
              {
                linkTxt: '',
                link: '/dashboard',
                id: 'userDp'
              }
            ]}>
              <Dashboard/>
            </Layout>
          } />
          <Route exact path="/board" element={
            <Layout navLinks={navLi}>
              <Box />
            </Layout>
          } />
        </Routes>
      </Router>
    )
  }
}

export default App