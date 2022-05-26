import React from "react";

export const Notes = (props) => {
  const handleClick  = ()=>{
props.ondelete(props.id);
  }

  return (
    <>
      <div className="container note">
        <div className="card m-2 col-md-6">
          <h1 className="card-title"> {props.title} </h1>
          <p className="card-text"> {props.content}</p>
          <button onClick={handleClick} className="delete">Delete</button>
        </div>
      </div>
    </>
  );
};


