import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes"

function createNote(notes){
      return (
            <Note 
                  key={notes.id}
                  title={notes.title}
                  content={notes.content}
            />
      );
}


function App(){
      return (
            <div>
                  <Header />
                  <div>
                        {notes.map(createNote)}
                  </div>
                  <Footer />
            </div>
      );
}

export default App;