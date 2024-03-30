import { useEffect, useState } from "react";
import { URL } from "../../utils/Constants";
import "./PolicySelection.css";

function PolicySelection() {
  const [policies, setPolicies] = useState([]);
  const [policyList, setPolicyList] = useState([]);
  const [currentPolicy, setCurrentPolicy] = useState("");

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [premium, setPremium] = useState("");
  const [term, setTerm] = useState("");
  const [insurer, setInsurer] = useState("myself");

  useEffect(() => {
    console.log("Loading Policies from Database");

    const getPolicies = async () => {
      let result = await fetch(URL + "/all-policies");
      let response = await result.json();
      setPolicies(response);
    };
    getPolicies();
  }, []);

  useEffect(() => {
    setPolicyList(policies[Object.keys(policies).at(0)]);
  }, [policies]);

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
      fetch(URL + "/confirm-policy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("userId"),
          policyId: currentPolicy["policyId"],
          insurer: insurer,
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
          setInsurer("myself");
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
              Object.keys(policies).map((type, index) => (
                <li
                  key={index}
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
            {policyList &&
              policyList.map((policy) => {
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
        <span className="policy-details">
          <label htmlFor="insurer">Insurer</label>
          <select
            id="insurer"
            value={insurer}
            onChange={(e) => setInsurer(e.target.value)}
          >
            <option value="myself">Myself</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="wife">Wife</option>
            <option value="children">Children</option>
          </select>
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
