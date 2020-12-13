import React, { Component } from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types';

class Companies extends Component {
  render() {
    return this.props.companiesData.map((comp) => (
        <ListItem key={comp.id} comp={comp} delCompany={this.props.delCompany}/>
    ));
  }
}

Companies.PropTypes = {
    Companies: PropTypes.array.isRequired
}

export default Companies;