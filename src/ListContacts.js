import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


// Short version - Stateless Functional Component
// const ListContacts = (props) => (
//     <ol className='contact-list'>
//         {props.contacts.map(contact => (
//             <li key={contact.id} className='contact-list-item'>
//                 <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
//                 <div className='contact-details'>
//                     <p>{contact.name}</p>
//                     <p>{contact.email}</p>
//                 </div>
//                 <button onClick={()=> props.onDeleteContact(contact)} className='contact-remove' title='Remove'>
//                     Remove
//                 </button>
//             </li>
//         ))}
//     </ol>
// )

//Stateless Functional Component
// function ListContacts(props) {
//     const contacts = props.contacts;

//     return (
//         <ol className='contact-list'>
//             {props.contacts.map(contact => (
//                 <li key={contact.id} className='contact-list-item'>
//                     <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
//                     <div className='contact-details'>
//                         <p>{contact.name}</p>
//                         <p>{contact.email}</p>
//                     </div>
//                     <button onClick={()=> props.onDeleteContact(contact)} className='contact-remove' title='Remove'>
//                         Remove
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     )
//  }

// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }

// Stateful Class Component
class ListContacts extends Component { 

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => { 
        this.setState({query: ''})
    }

    render() {
        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;

        let showingContacts;

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingContacts = contacts.filter(contact => match.test(contact.name));
        } else {
            showingContacts = contacts;
        }

        showingContacts.sort(sortBy('name'));

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link to='/create' className='add-contact' title='Add Contact'>Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length} total</span>
                        <button onClick={this.clearQuery} title='Show all'>Show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                {showingContacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={()=> onDeleteContact(contact)} className='contact-remove' title='Remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
            </div>
        )
    }
}

export default ListContacts