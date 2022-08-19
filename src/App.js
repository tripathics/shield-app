import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/layout'
// pages
import Home from './pages';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route exact path="/login" element={
            <Layout>
              <Login />
            </Layout>
          } />
          <Route exact path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
        </Routes>
      </Router>
    )
  }
}

export default App