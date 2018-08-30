import React, { Component } from 'react'
// import React from 'react'
import PropTypes from 'prop-types'



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
        this.setState({query: query.trim()})
    }

    render() { 
        const contacts = this.props.contacts;

        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                {contacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={()=> this.props.onDeleteContact(contact)} className='contact-remove' title='Remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
            </div>
        )
    }
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts