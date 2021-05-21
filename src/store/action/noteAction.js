export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("the note has been added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection("notes").doc(note.id).delete()
      .then(() => {
        console.log("the note has been deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleFavorite = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favoriteStatus = !note.favorite;
    const firestore = getFirestore();
    firestore.collection("notes").doc(note.id).update({
        favorite: favoriteStatus
    }).then(()=>{
        console.log('success');
    }).catch((error)=>{
        console.log(error);
    })
  };
};

export const updateNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      firestore .collection("notes").doc(note.id).update({
          title: note.title,
          content:note.content
          }).then(()=>{
          console.log('success');
      }).catch((error)=>{
          console.log(error);
      })
    };
  };
  
