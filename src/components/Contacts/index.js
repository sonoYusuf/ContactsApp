import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

function Contacts() {

    const [contacts,setContacts]=useState([
        {
            fullname:"Mehmet",
            phone_number:"0526918210"
        },{
            fullname:"Ahmet",
            phone_number:"0829290192"
        },{
            fullname:"Yusuf",
            phone_number:"0562901022"
        }
    ]);
    
    useEffect(() =>{
        console.log(contacts);
    },[contacts]);

  return (
    <div id='container'>
        <h1>Contacts</h1>
     <List contacts={contacts}/> 
     <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
