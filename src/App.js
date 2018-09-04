import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

    state = {
        contacts: []
    };

    /**
     * Fetch data from an API and update state
     */
    componentDidMount() { 
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        });
    }

    /**
     * @description Handles Remove Contact event and updates state
     */
    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((c) => c.id !== contact.id)
        }));

        ContactsAPI.remove(contact);
    }

    /**
     * @description Renders Component
     */
    render() {
        return (
        <div>
                <ListContacts onDeleteContact={this.removeContact}
                    contacts={this.state.contacts} />
        </div>
        )
    }
}

export default App;