import './App.css';
import { useState } from "react"
import contacts from "./contacts.json";

function App() {

  const allContacts = contacts
  const contactCopy = [...allContacts.slice(0, 5)]
  const [showOscar, setShowOscar] = useState(true)
  const [showRandom, setRandom] = useState()


  const randomContact = contactsArr => {
    const random = Math.floor(Math.random() * (52 - 5) + 5)
    const copyContactArr = [...allContacts]
    console.log(contactsArr)
    return contactsArr.unshift(allContacts[random])
  }

  return (

    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={() => randomContact(contactCopy)}>Random</button>
      <table>
        <tr>
          <td><strong>Picture</strong></td>
          <td><strong>Name</strong></td>
          <td><strong>Popularity</strong></td>
          <td><strong>Won Oscar</strong></td>
          <td><strong>Won Emmy</strong></td>

        </tr>

        {contactCopy.map((elm, idx) => {
          return <tr key={idx}>
            <td><img src={elm.pictureUrl} alt="picture" /></td>
            <td>{elm.name}</td>
            <td>{elm.popularity}</td>
            <td>{elm.wonOscar ? <p>Si</p> : <p>No</p>}</td>
            <td>{elm.wonEmmy ? <p>Si</p> : <p>No</p>}</td>

          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
