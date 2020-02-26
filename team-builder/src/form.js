import React, {useState} from 'react';
// import ReactDOM from 'react-dom';



const NoteForm = props => {
    console.log("props", props);
    const [note, setNote] = useState({
      name: "",
      email: "",
      role: ""
    });
  
    const handleChanges = e => {
      console.log(note);
      // console.log("the name", e.target.name)
      // console.log("the event target", e.target)
      //we are dynamically setting our keys.
      // setNote({ ...note, title: e.target.value });
      // setNote({ ...note, note: e.target.value });
      //  const nameObj={...note}
      //  nameObj[e.target.name]= e.target.value
      // setNote(nameObj)
      setNote({
        ...note,
        [e.target.name]: e.target.value
      });
    };

  
    const submitForm = e => {
      e.preventDefault();
      props.addNewMember(note);
      setNote({ name: "", email: "", role: "" });
    };
  
    return (
      <form onSubmit={submitForm}>
        <div className="formdiv">
          <div className="namestuff">
            <label htmlFor="title">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChanges}
              value={note.name}
            />
          </div>
          
          <div className="namestuff">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChanges}
              value={note.email}
            />
          </div>

          <div className="namestuff">
            <label htmlFor="note">Role</label>
            <input
              id="note"
              type="text"
              name="role"
              onChange={handleChanges}
              value={note.role}
            />
          </div>

          <button type="submit">Add Member</button>
        </div>
      </form>
    );
  };
  
  export default NoteForm;
  

// function MemberForm() {
//     const [memberValues, setMemberValues] = useState({
//         name: '',
//         email: '',
//         role: ''
//     });

//     const addNewMember = member => {
//         const newMember = {
//             name: member.name,
//             email: member.email,
//             role: member.role
//         };

//         setMemberValues([...memberValues, newMember]);
//     };

//     return (
//         <div className='MemberForm'>
//             <h1>New Member</h1>
//             <form onSubmit={addNewMember}>
//                 <label htmlFor="title">name</label>
//                 <input
//                     name="title"
//                     onChange={MemberForm}
//                     value={memberValues.title}
//                 />
//                 <label htmlFor="email">email</label>
//                 <input
//                     email="email"
//                     onChange={MemberForm}
//                     value={memberValues.body}
//                 />
//                  <label htmlFor="role">role</label>
//                 <textarea
//                     role="role"
//                     onChange={MemberForm}
//                     value={memberValues.body}
//                 />
//                 <button type="submit">Add Member</button>
//             </form>

//         </div>
//     );
// }

// export default MemberForm;