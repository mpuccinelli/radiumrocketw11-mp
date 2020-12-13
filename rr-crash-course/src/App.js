import React, { Component } from 'react';
import Companies from './components/companies'
import companiesData from './mocks/companies.json';
import './App.css';

class App extends Component {
  state = {companiesData}

  // Delete Company

  delCompany = (id) => {
    this.setState({ companiesData: [...this.state.companiesData.filter(company => company.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <h1>CaldAr: Companies App</h1>
        <p>ID NAME ADDRESS EMAIL CUIT PHONE</p>
        <Companies companiesData={this.state.companiesData} delCompany={this.delCompany}/>
      </div>
    );
  }
}

export default App;
