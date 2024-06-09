import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
