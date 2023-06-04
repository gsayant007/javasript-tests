import React from "react";

function Profile1(){
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }


function Profile2(){
    return(
        <img 
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        ></img>
    );
}
  
export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile1 />
        <Profile2 />
      </section>
    );
  }
  