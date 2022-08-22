import React, {useState} from "react";
import notes from "./notes";
import Note from "./Note";

function CreateArea() {
      var [newTitle, setTitle] = useState("");
      var [newContent, setContent] = useState("");
      var [newArray, setNewArray] = useState([]);

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
                  key: notes.length + newArray.length + 1,
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

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={doChange} value={newTitle}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={doChange} value={newContent}/>
        <button onClick={doClick}>Add</button>
      </form>
      {notes.map((notes)=>
                        <Note 
                              key={notes.id}
                              title={notes.title}
                              content={notes.content}
                        />
                  )}
      {newArray.map((notes)=>
                        <Note 
                              key={notes.id}
                              title={notes.title}
                              content={notes.content}
                        />
                  )}
    </div>
  );
}

export default CreateArea;
