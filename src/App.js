import React, { useState } from "react";

const swapArr = function(arr, idx1, idx2) {
  let tempArr = arr;
  var temp = tempArr[idx1];
  tempArr[idx1] = tempArr[idx2];
  tempArr[idx2] = temp;
  return tempArr
};

export default function App() {
  const [pictures, setPictures] = useState([
    "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  ]);
  const [dragId, setDragId] = useState(-1)

  return (
  	<React.Fragment>
  	<h1 style={{textAlign: "center"}}>Drag and drop demo</h1>
    <div
      className="App"
      style={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
      }}
      onDragOver={e => {
        e.preventDefault();
      }}
      onDrop={e => {
  		const dropId = e.target.getAttribute("id")
        if(dragId!==-1 && dropId && window.confirm("are you sure")){
        	let newArr = swapArr(pictures, dragId, dropId)
        	setPictures(newArr)
        	setDragId(-1)
        }
        e.preventDefault()
      }}
    >
      {pictures.map((elem, idx) => {
        return (
          <img
            alt="random car"
            src={elem}
            key={idx}
            id={idx}
            width={"400px"}
            draggable
            onDragStart={(e, id) => {
    		  setDragId(e.target.getAttribute("id"))
            }}
          />
        );
      })}
    </div>
  	</React.Fragment>
  );
}
