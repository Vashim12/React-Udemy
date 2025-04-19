import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";
import "./style.css";


function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }





function Emoji() {
    
   
        return (
            <div>
              <h1>
                <span>emojipedia</span>
              </h1>
              <dl className="dictionary">
                {emojipedia.map(emojiTerm => (
                  <Entry
                    key={emojiTerm.id}
                    emoji={emojiTerm.emoji}
                    name={emojiTerm.name}
                    description={emojiTerm.meaning}
                  />
                ))}
              </dl>
            </div>
          
    )
}
export default Emoji;