import { useEffect, useState } from "react";
import { URL } from "../../utils/Constants";
import "./Nominee.css";

function Nominee() {
  const currentCustomer = sessionStorage.getItem("userId");

  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");

  useEffect(() => {
    const getNomineeDetails = async () => {
      let result = await fetch(URL + "/customer-nominee/" + currentCustomer, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      let response = await result.json();

      console.log(response);

      setName(response["nomineeName"]);
      setRelationship(response["relationship"]);
    };
    getNomineeDetails();
  }, []);

  const handleSubmit = async () => {
    let response = await fetch(URL + "/update-nominee", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: currentCustomer,
        nominee: name,
        relationship: relationship,
      }),
    }).then((result) => result.json());
    console.log(response);
  };

  return (
    <div className="nominee-container">
      <h2>Nominee Details</h2>
      <span className="form-elements">
        <label htmlFor="name">Nominee Name</label>
        <input
          type="text"
          id="nominee-name"
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </span>
      <span className="form-elements">
        <label htmlFor="relationship">Relationship with customer</label>
        <input
          type="text"
          id="nominee-relationship"
          maxLength={50}
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
      </span>
      <input
        type="submit"
        value="Save Changes"
        onClick={handleSubmit}
        className="submit-btn"
      />
    </div>
  );
}
export default Nominee;
