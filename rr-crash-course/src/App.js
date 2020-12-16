import React, { Component } from 'react';
import Companies from './components/companies';
import AddCompany from './components/AddCompany';
import UpdateCompany from './components/UpdateCompany';
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
    newCompany.id = this.state.companiesData[this.state.companiesData.length - 1].id + 1;
    this.setState({ companiesData: [...this.state.companiesData, newCompany] });
  }
  
  // Update Company
  searchCompany = (id) => this.state.companiesData.find(company => parseInt(company.id) === parseInt(id));

  updateCompany = (updatedCompany)  => {
    const companies = this.state.companiesData;
    const index = this.state.companiesData.findIndex(company => company.id === updatedCompany.id);
    companies[index] = updatedCompany;
    this.setState({ companiesData: companies });
  }




  render() {
    return (
      <div className="App">
        <Header />
        <AddCompany addCompany={this.addCompany} />
        <UpdateCompany searchCompany={this.searchCompany} updateCompany={this.updateCompany}/>
        <Companies companiesData={this.state.companiesData} delCompany={this.delCompany}/>
      </div>
    );
  }
}

export default App;
