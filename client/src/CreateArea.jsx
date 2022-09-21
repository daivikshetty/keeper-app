import React, {useState} from "react";
import Note from "./Note";

function CreateArea() {
      var [newTitle, setTitle] = useState("");
      var [newContent, setContent] = useState("");
      var [newArray, setNewArray] = useState([]);
      var [buttonColor, setButtonColor] = useState("#f5ba13")

      function doChange(event){
            if(event.target.name === "title"){
                  setTitle(event.target.value);
            }
            else{
                  setContent(event.target.value);
            }
      }

      function doClick(event){
            const newObject = {
                  key: newArray.length + 1,
                  title: newTitle,
                  content: newContent
            }

            setNewArray(prevArray => {
                  console.log([...prevArray, newObject]);
                  return ([...prevArray, newObject]);
            });

            event.preventDefault();
            setTitle("");
            setContent("");
      }

      var isHover = false;


      function deleteCard(id){
            setNewArray(prevArray => {
                  return prevArray.filter((noteItem, index) =>{
                        return id!==index;
                  })
            })
      }

      function hoverIn(){
            setButtonColor("grey")
      }
        
      function hoverOut(){
            setButtonColor("#f5ba13")
      }


  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={doChange} value={newTitle}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={doChange} value={newContent}/>
        <button onClick={doClick} style={{backgroundColor:buttonColor}} onMouseOver={hoverIn} onMouseOut={hoverOut}>Add</button>
      </form>
      {newArray.map((notes, index)=>
                        <Note 
                              onDelete={deleteCard}
                              id={index}
                              key={index}
                              title={notes.title}
                              content={notes.content}
                        />
                  )}
    </div>
  );
}

export default CreateArea;
