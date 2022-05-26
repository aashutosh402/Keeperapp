import React, { useState } from "react";

export const Createaria = (props) => {

  // step2. making an object which holds the form values
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  
// step 3. traking changes in inputs 

  const onchangeHandler = (event) => {
    const { name, value } = event.target;

    setNote({ ...note, [name]: value }); 
    // console.log(Note)
  };

  // step4 showing the values
  //  by passing the props into the card componet 
  // refer to addNote function into card component 
  const formSubmit = (event) => {
    event.preventDefault();

    props.onAdd(note);

    setNote({
      title: "",
      content: "",
    });
  };

  const DeleteNote = (id)=>{
setNote(

)

  

  }

  // step 1. making a form.
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          onChange={onchangeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={onchangeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
