import React, { Component } from 'react';
import Companies from './components/companies';
import AddCompany from './components/AddCompany';
import companiesData from './mocks/companies.json';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  state = {companiesData}

  // Delete Company
  delCompany = (id) => {
    this.setState({ companiesData: [...this.state.companiesData.filter(company => company.id !== id)] });
  }

  // Add Company
  addCompany = (newCompany)  => {
    this.setState({ companiesData: [...this.state.companiesData, newCompany] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddCompany addCompany={this.addCompany} />
        <Companies companiesData={this.state.companiesData} delCompany={this.delCompany}/>
      </div>
    );
  }
}

export default App;
