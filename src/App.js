import React, { Component } from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

    state = {
        screen: 'list', // list, create
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

        // ContactsAPI.remove(contact);
    }

    /**
     * @description Renders Component
     */
    render() {
        return (
            <div>
                {this.state.screen === 'list' && (
                    <ListContacts
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts} 
                        onNavigate={() => {
                            this.setState({ screen: 'create' })
                        }}/>
                )}

                {this.state.screen === 'create' && (
                    <CreateContact/>
                )}
        </div>
        )
    }
}

export default App;