import React, { Component } from 'react'

export class addCompany extends Component {
    state = {
        // Could not use simply "newCompany" and then call this.state.newCompany.name or else, that is why it is doubled.
        id: Math.floor(Math.random() * 74) + 26,
        name: '',
        address: '',
        email: '',
        cuit: '',
        phone: '',
        newCompany: {
            id: Math.floor(Math.random() * 74) + 26,
            name: '',
            address: '',
            email: '',
            cuit: '',
            phone: ''
        }
    };

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        this.setState({ 
            newCompany:{
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
                cuit: this.state.cuit,
                phone: this.state.phone
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCompany(this.state.newCompany);
        this.setState({ id: Math.floor(Math.random() * 74) + 26,});
        this.setState({ name: ''});
        this.setState({ address: ''});
        this.setState({ email: ''});
        this.setState({ cuit: ''});
        this.setState({ phone: ''});
        this.setState({ 
            newCompany:{
                id: this.state.id,
                name: '',
                address: '',
                email: '',
                cuit: '',
                phone: ''
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="add-company" style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Company Name"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Street Adress"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.address}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="email Address"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="cuit" 
                    placeholder="Company CUIT"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.cuit}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone number"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.phone}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    name="add-company"
                />
            </form>
        )
    }
}

export default addCompany

