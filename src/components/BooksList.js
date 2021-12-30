import "./library.css";

function BooksList(props) {
  return (
    <div>
      {/* <h3 className="bookTitle">Books List :</h3> */}
      <ul>
        <li>Title : {props.title}</li>
        <li>Auther : {props.auther}</li>
        <li>Price : {props.price}</li>
      </ul>
      <br />
    </div>
  );
}

export default BooksList;
