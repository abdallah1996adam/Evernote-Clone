import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from '../../components/notes/notesList'

export const FavoritePage = () => {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favornotes",
    },
  ]);
  const favornotes = useSelector((state)=> state.firestore.ordered.favornotes)
  console.log(favornotes);

  return(
      <>
       <NotesList notes={favornotes}/>   
      </>
  )
};


export default FavoritePage;