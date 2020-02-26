import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from './form';
import Notes from "./note";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Happy little quote",
//       body:
//         "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
//     }
//   ]);

//   const addNewNote = note => {
//     const newNote = {
//       id: Date.now(),
//       title: note.title,
//       body: note.body
//     };
//     setNotes([...notes, newNote]);
//   };

//   return (
//     <div className="App">
//       <h1>My Notes</h1>
//       {/* we are going to pass a function down as a prop */}
//       <NoteForm addNewNote={addNewNote} />
//       <Notes notes={notes} />
//     </div>
//   );
// }


function MemberForm() {
  const [memberValues, setMemberValues] = useState([
    {
      name: 'John Doe',
      email: 'i-shot-the-sheriff@gmail.com',
      role: 'Man on the run'
    }
  ]);

  const addNewMember = member => {
      const newMember = {
          name: member.name,
          email: member.email,
          role: member.role
      };

      setMemberValues([...memberValues, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>New Member</h1>

        <NoteForm addNewMember={addNewMember}/>
      
        <div className="form">
          <Notes memberValues={memberValues}/>
        </div>
      </header>
    </div>
  );
}


export default MemberForm;

//   return (
//       <div className='MemberForm'>
//           <h1>New Member</h1>
//           <form onSubmit={addNewMember}>
//               <label htmlFor="title">name</label>
//               <input
//                   name="title"
//                   onChange={MemberForm}
//                   value={memberValues.title}
//               />
//               <label htmlFor="email">email</label>
//               <input
//                   email="email"
//                   onChange={MemberForm}
//                   value={memberValues.body}
//               />
//                <label htmlFor="role">role</label>
//               <textarea
//                   role="role"
//                   onChange={MemberForm}
//                   value={memberValues.body}
//               />
//               <button type="submit">Add Member</button>
//           </form>

//       </div>
//   );
// }

// export default MemberForm;
