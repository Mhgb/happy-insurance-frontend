import { useEffect, useState } from "react";
import "./PolicySelection.css";

function PolicySelection({ setComponent }) {
  const url = "http://localhost:8080";

  const [policies, setPolicies] = useState([]);
  const [policyList, setPolicyList] = useState([]);
  const [currentPolicy, setCurrentPolicy] = useState("");

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [premium, setPremium] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("Loading Policies from Database");

    const getPolicies = async () => {
      let result = await fetch(url + "/policies");
      let response = await result.json();
      setPolicies(response);
      // setPolicyList(response[Object.keys(policies).at(0)]);
    };
    getPolicies();
  }, []);

  useEffect(() => {
    console.log("selected policy type: " + type + "policy title: " + title);

    if (type !== "" && title !== "") {
      policyList.forEach((policy) => {
        if (policy.policyTitle === title) {
          setCurrentPolicy(policy);
          setSumAssured(policy.sumAssured);
          setPremium(policy.premium);
          setTerm(policy.term);
        }
      });
    }
  }, [type, title, policyList]);

  function UpdatePolicyList(event) {
    setPolicyList(policies[event.target.innerHTML]);
    console.log(policyList);
  }

  function ConfirmPolicy() {
    console.log(currentPolicy);
    if (currentPolicy !== "") {
      fetch(url + "/confirmPolicy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("userId"),
          policyId: currentPolicy["policyId"],
        }),
      })
        .then((result) => result.json())
        .then((response) => {
          setType("");
          setTitle("");
          setSumAssured("");
          setPremium("");
          setTerm("");
          setCurrentPolicy("");
          alert("Thank you for Trusting us to insure you. You are insured now");
          console.log(response);
        });
    }
  }

  return (
    <div className="selection-container">
      <h2>Policy Selection</h2>
      <div>
        <div className="policy-type">
          <h3>Policy Type</h3>
          <ul className="policy-list">
            {Object.keys(policies).length ? (
              Object.keys(policies).map((type) => (
                <li
                  className="options"
                  onClick={(e) => {
                    setType(e.target.innerHTML);
                    setTitle("");
                    setSumAssured("");
                    setPremium("");
                    setTerm("");
                    setCurrentPolicy("");
                    UpdatePolicyList(e);
                  }}
                >
                  {type}
                </li>
              ))
            ) : (
              <div>No Policies available.</div>
            )}
          </ul>
        </div>
        <div className="policy-type">
          <h3>Policy Title</h3>
          <ul className="policy-list">
            {policyList.map((policy) => {
              return (
                <li
                  className="options"
                  onClick={(e) => setTitle(e.target.innerHTML)}
                >
                  {policy.policyTitle}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <span className="policy-elements">
          <label htmlFor="policyType">Policy Type</label>
          <select
            id="policyType"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setTitle("");
              setSumAssured("");
              setPremium("");
              setTerm("");
              setCurrentPolicy("");
              UpdatePolicyList(e);
            }}
          >
            <option value="">--Select an option--</option>
            {Object.keys(policies).map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </span>
        <span className="policy-elements">
          <label htmlFor="policyTitle">Policy Title</label>
          <select
            id="policyTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="">--Select an option--</option>
            {policyList.map((policy) => (
              <option value={policy.policyType}>{policy.policyType}</option>
            ))}
          </select>
        </span> */}
        <br />
        <span className="policy-details">
          <label htmlFor="sumAssured">SumAssured</label>
          <input
            type="text"
            id="sumAssured"
            maxLength={50}
            value={sumAssured}
            readOnly
          />
        </span>
        <br />
        <span className="policy-details">
          <label htmlFor="premium">Premium</label>
          <input
            type="text"
            id="premium"
            maxLength={50}
            value={premium}
            readOnly
          />
        </span>
        <br />
        <span className="policy-details">
          <label htmlFor="term">Term</label>
          <input type="text" id="term" maxLength={50} value={term} readOnly />
        </span>
        <br />
        <span id="confirm-btn">
          <button className="submit-btn" onClick={ConfirmPolicy}>
            Confirm
          </button>
        </span>
      </div>
    </div>
  );
}

export default PolicySelection;
