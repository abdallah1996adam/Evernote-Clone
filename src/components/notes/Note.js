import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./note.css";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFavorite } from "../../store/action/noteAction";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toogleFav = () => {
    dispatch(toggleFavorite(note));
  };
  const editNoteHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };
  //a const to change the heart color depending on the user action when click on the heart icon to add a note to his favrite or the opposite
  const heartMark = note.favorite ? "favorite" : "favorite_border";

  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: "pointer" }}
          onClick={toogleFav}
        >
          {heartMark}
        </i>
        <i
          className="material-icons "
          style={{ cursor: "pointer" }}
          onClick={deleteHandler}
        >
          delete
        </i>
      </div>
      <Link to={"/note/" + note.id}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text"> {moment(note.createdAt.toDate()).fromNow()} </p>
      <div className="right-align">
        <Link to={"/editnote/" + note.id}>
          <i
            className="material-icons "
            style={{ cursor: "pointer" }}
            onClick={editNoteHandler}
          >
            edit
          </i>
        </Link>
      </div>
    </div>
  );
};
export default Note;
