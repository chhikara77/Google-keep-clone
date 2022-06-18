import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./Note";

const App = () => {
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    // alert("i m click")
    setAddItem((prevData)=>{
      return[...prevData,note];
    })
   



  }

const  onDelete=(id)=>{
  setAddItem((oldData)=>
  oldData.filter((currData,indx)=>{
    return indx!==id;
  })
  )

}

  return (
    <>
      <Header />
      <CreateNote
      passNote={addNote}
      />
     

    {
      addItem.map((val,index)=>{
        return <Note key={index} id={index} title={val.title} content={val.content}
        deleteItem={onDelete}
        
        />
      })
    }

      <Footer/>
    </>
  );
};

export default App;
