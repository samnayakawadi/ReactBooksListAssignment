import { useState } from "react";
import BooksList from "./BooksList";

const BookDetails = (props) => {
  let [bookDetails, setBookDetails] = useState([
    {
      title: "The Great Childhood of Abdul Razak",
      auther: "Samir Nayakawadi",
      price: "499"
    },
    {
      title: "The Fucking Department of Technology",
      auther: "Samir Nayakawadi",
      price: "999"
    },
    {
      title: "The Number One Bullshit Guy : Sadhu Srinivas",
      auther: "Samir Nayakawadi",
      price: "1999"
    }
  ]);

  return (
    <div>
      <ol>
        {bookDetails.map((item) => {
          return (
            <li>
              <BooksList
                title={item.title}
                auther={item.auther}
                price={item.price}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BookDetails;
