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
  
