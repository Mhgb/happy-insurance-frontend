import { useState } from "react";
import { URL } from "../../utils/Constants";
import { Link } from "react-router-dom";
import "./CustomerRegistration.css";

function CustomerRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [nominee, setNominee] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("user");

  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [addressErrorMsg, setAddressErrorMsg] = useState("");
  const [nomineeErrorMsg, setNomineeErrorMsg] = useState("");
  const [contactErrorMsg, setContactErrorMsg] = useState("");
  const [relationshipErrorMsg, setRelationshipErrorMsg] = useState("");

  function handleRegistration(event) {
    event.preventDefault();
    if (
      name !== "" &&
      address !== "" &&
      nominee !== "" &&
      contact !== "" &&
      email !== "" &&
      password !== "" &&
      relationship !== ""
    ) {
      fetch(URL + "/create-account", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          address: address,
          nominee: nominee,
          relationship: relationship,
          contact: contact,
          type: type,
        }),
      })
        .then((result) => result.json())
        .then((responseData) => {
          if (responseData !== undefined) {
            alert(
              "Customer Registered Successfully\nCustomerId: " +
                responseData["customerId"] +
                "\nUse customer Id for login"
            );

            console.log(responseData);
          }
        });
    } else {
      alert("Enter details for required fields");
    }
  }

  return (
    <div className="customer-reg-container">
      <h2>Sign Up</h2>
      <form
        className="field-container"
        onSubmit={(event) => handleRegistration(event)}
      >
        <span className="form-elements">
          <label htmlFor="name">
            Full name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onInput={(e) =>
              setNameErrorMsg("" !== e.target.value ? "" : "*Enter your name")
            }
          />
          <i id="nameErrorMsg" className="errMsg">
            {nameErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="text"
            id="email"
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInput={(e) =>
              setEmailErrorMsg(
                "" !== e.target.value ? "" : "*email should not be empty"
              )
            }
          />
          <i id="emailErrorMsg" className="errMsg">
            {emailErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            type="password"
            id="password"
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInput={(e) =>
              setPasswordErrorMsg(
                "" !== e.target.value ? "" : "*password should not be empty"
              )
            }
          />
          <i id="passwordErrorMsg" className="errMsg">
            {passwordErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="address">
            Address<span>*</span>
          </label>
          <input
            type="text"
            id="address"
            maxLength={50}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onInput={(e) =>
              setAddressErrorMsg(
                "" !== e.target.value ? "" : "*address should not be empty"
              )
            }
          />
          <i id="addressErrorMsg" className="errMsg">
            {addressErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="nominee">
            Nominee<span>*</span>
          </label>
          <input
            type="text"
            id="nominee"
            maxLength={50}
            value={nominee}
            onChange={(e) => setNominee(e.target.value)}
            onInput={(e) =>
              setNomineeErrorMsg(
                "" !== e.target.value ? "" : "*nominee should not be empty"
              )
            }
          />
          <i id="nomineeErrorMsg" className="errMsg">
            {nomineeErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="relationship">
            Relationship with customer<span>*</span>
          </label>
          <input
            type="text"
            id="relationship"
            maxLength={50}
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            onInput={(e) =>
              setRelationshipErrorMsg(
                "" !== e.target.value
                  ? ""
                  : "*enter nominee relationship with customer"
              )
            }
          />
          <i id="relationshipErrorMsg" className="errMsg">
            {relationshipErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="contact">
            Contact<span>*</span>
          </label>
          <input
            type="text"
            id="contact"
            maxLength={10}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            onInput={(e) =>
              setContactErrorMsg(
                "" !== e.target.value
                  ? ""
                  : "*contact number should not be empty"
              )
            }
          />
          <i id="contactErrorMsg" className="errMsg">
            {contactErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="type">Account Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </span>
        <input className="submit-btn" type="submit" value="Register" />
      </form>
      <div className="navigation-links-container">
        <Link className="navigate" to={"../sign-in"}>
          Sign In
        </Link>
        <Link className="navigate" to={"../"}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default CustomerRegistration;
