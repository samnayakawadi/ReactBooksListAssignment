const StudentsList = (props) => {
  return (
    <div>
      <ul>
        <li>Name : {props.name}</li>
        <li>Address : {props.address}</li>
        <li>PRN : {props.prn}</li>
      </ul>
      <br />
    </div>
  );
};

export default StudentsList;
