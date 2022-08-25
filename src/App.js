import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/layout'
// pages
import Home from './pages';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Box from './pages/box';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Layout navLinks={[
              {
                linkTxt: "Sign in",
                link: '/login'
              }
            ]}>
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
                linkTxt: "Sign out",
                link: '/'
              }
            ]}>
              <Dashboard/>
            </Layout>
          } />
          <Route exact path="/board" element={
            <Layout navLinks={[
              {
                linkTxt: "Dashboard",
                link: '/dashboard'
              },
              {
                linkTxt: "Sign out",
                link: '/'
              }
            ]}>
              <Box />
            </Layout>
          } />
        </Routes>
      </Router>
    )
  }
}

export default App