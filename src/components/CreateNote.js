import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.value;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

const addEvent=()=>{
    props.passNote(note);
    setNote({
        title: "",
        content: "",
    })
}



  return (
    <>
      <div className="main_note">
        <form action="">
          <input
            type="text"
            id=""
            value={note.title}
            name="title"
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            id=""
            cols=""
            rows=""
            value={note.content}
            name="content"
            onChange={inputEvent}
            placeholder="Write a note..."
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
