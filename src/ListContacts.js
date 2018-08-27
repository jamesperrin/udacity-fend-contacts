import React, { Component } from 'react'

// Short version - Stateless Functional Component
const ListContacts = (props) => (
    <ol className='cotact-list'>
        {props.contacts.map(contact => (
            <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'>
                    Remove
                </button>
            </li>
        ))}
    </ol>
)
 
//Stateless Functional Component
// function ListContacts(props) {
//     const contacts = props.contacts;
//
//     return (
//         <ol className='cotact-list'>
//             {contacts.map(contact => (
//                 <li key={contact.id} className='contact-list-item'>
//                     <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
//                     <div className='contact-details'>
//                         <p>{contact.name}</p>
//                         <p>{contact.email}</p>
//                     </div>
//                     <button className='contact-remove'>
//                         Remove
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     )
//  }


// class ListContacts extends Component { 
//     render() { 
//         const contacts = this.props.contacts;

//         return (
//             <ol className='cotact-list'>
//                 {contacts.map(contact => (
//                     <li key={contact.id} className='contact-list-item'>
//                         <div className='contact-avatar' style={{
//                             backgroundImage: `url(${contact.avatarURL})`
//                         }} />
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.email}</p>
//                         </div>
//                         <button className='contact-remove'>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//         )
//     }
// }

export default ListContacts