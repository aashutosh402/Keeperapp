import React, { useState } from 'react'
import "../App.css"
import { Createaria } from './Createaria'
import{Notes} from './Notes'

export const Card = () => {
  // const createnote = (items)=>{
  //   return <Notes title = {items.title} content= {items.content} />
  // }

  // step 5 making a state with blank array for holding 
  // the value which is coming through createarea.js as props.onadd 
  const[notes,setNotes] =useState([])
const addNote = (newnote)=>{
setNotes(prevnotes=>{
  return [...prevnotes,newnote]
})
}

// we passed the only those notes whose id are not match  with the
// index in filter function 
// this id parameter coming from the delete button 
const DeleteNote  = (id)=>{

  setNotes(prevnotes=>{
    return prevnotes.filter((items,index)=>{
      return index!= id;
    })
  })


}





  return (
   <>

<Createaria onAdd = {addNote}/>
{
notes.map((items,index)=>{
return(
  <Notes key = {index} id = {index} title = {items.title} content = {items.content} ondelete= {DeleteNote}/>
)
})
}
   </>
  )
}

