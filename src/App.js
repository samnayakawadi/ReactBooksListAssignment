import "./styles.css";
// import BooksList from "./components/BooksList";
// import StudentsList from "./components/StudentsList";
import AddBooks from "./components/AddBooks";
import BookDetails from "./components/BookDetails";
import StudentDetails from "./components/StudentDetails";

import { useState } from "react";

export default function App() {
  const [addBook, setAddBook] = useState("");

  const onSaveHandler = (data) => {
    setAddBook(data);
  };

  return (
    <div>
      <h2 className="title">Welcome to LibraryX</h2>
      <AddBooks onSave={onSaveHandler} />
      <BookDetails />
      <StudentDetails />
    </div>
  );
}
