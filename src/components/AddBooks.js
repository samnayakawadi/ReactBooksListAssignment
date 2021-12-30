import { useState } from "react";

const AddBooks = (props) => {
  const [bookTitle, setBookTitle] = useState("");

  const titleChaneHandler = (event) => {
    setBookTitle(event.target.value);
  };

  const submitHandler = () => {
    props.onSave(bookTitle);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="title" onChange={titleChaneHandler}>
          Book Title
        </label>
        <input type="text" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
