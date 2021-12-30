import StudentsList from "./StudentDetails";

function StudentDetails() {
  let data = [
    {
      name: "Samir Nayakawadi",
      address: "28A, Lohar Galli",
      prn: 2017110117
    },
    {
      name: "Razak Nayakawadi",
      address: "17B, Lohar Galli",
      prn: 2021110388
    },
    {
      name: "Mustafa Nayakawadi",
      address: "10C, Lohar Galli",
      prn: 2019110788
    }
  ];

  return (
    <div>
      <h3 className="bookTitle">Students List :</h3>
      <ol>
        {data.map((item) => {
          return (
            <li>
              <StudentsList
                name={item.name}
                address={item.address}
                prn={item.prn}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default StudentDetails;
