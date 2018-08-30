import React, { Component } from 'react';
import ListContacts from './ListContacts'
  
class App extends Component {

    state = {
        contacts: [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    };

    /**
     * @description Handles Remove Contact event and updates state
     */
    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((c) => c.id !== contact.id)
        }));
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