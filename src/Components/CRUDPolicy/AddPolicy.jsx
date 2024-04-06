import { useState } from "react";
import { URL } from "../../utils/Constants";

export default function AddPolicy() {
  const userId = sessionStorage.getItem("userId");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Life Insurance");
  const [premium, setPremium] = useState("");
  const [sum, setSum] = useState("");
  const [term, setTerm] = useState("");

  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [premiumErrorMsg, setPremiumErrorMsg] = useState("");
  const [sumErrorMsg, setSumErrorMsg] = useState("");
  const [termErrorMsg, setTermErrorMsg] = useState("");

  const handleAddPolicy = (event) => {
    event.preventDefault();
    if (title !== "" && premium !== "" && term !== "" && sum !== "") {
      console.log(title + " " + type + " " + premium + " " + sum + " " + term);

      fetch(URL + "/add-policy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          type: type,
          title: title,
          premium: premium,
          sum: sum,
          term: term,
        }),
      })
        .then((result) => result.json())
        .then((responseData) => {
          if (responseData !== undefined) {
            alert(
              "Policy Added Successfully\nPolicyId: " + responseData["policyId"]
            );

            console.log(responseData);
          }
        });
    } else {
      alert("Please fill required fields");
    }
  };
  return (
    <div className="add-policy-container">
      <h2>Add Policy</h2>
      <form
        id="add-policy-form"
        className="field-container"
        onSubmit={(event) => handleAddPolicy(event)}
      >
        <span className="form-elements">
          <label htmlFor="type">
            Policy Type<span>*</span>
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Life Insurance">Life Insurance</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Term Insurance">Term Insurance</option>
          </select>
        </span>
        <span className="form-elements">
          <label htmlFor="title">
            Policy Title<span>*</span>
          </label>
          <input
            type="text"
            id="title"
            maxLength={50}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onInput={(e) =>
              setTitleErrorMsg(
                "" !== e.target.value ? "" : "*Enter Policy title"
              )
            }
          />
          <i id="titleErrorMsg" className="errMsg">
            {titleErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="premium">
            Premium<span>*</span>
          </label>
          <input
            type="number"
            id="premium"
            maxLength={50}
            value={premium}
            onChange={(e) => setPremium(e.target.value)}
            onInput={(e) =>
              setPremiumErrorMsg(
                "" !== e.target.value ? "" : "*premium should not be empty"
              )
            }
          />
          <i id="premiumErrorMsg" className="errMsg">
            {premiumErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="sum">
            Sum Assured<span>*</span>
          </label>
          <input
            type="number"
            id="sum"
            maxLength={50}
            value={sum}
            onChange={(e) => setSum(e.target.value)}
            onInput={(e) =>
              setSumErrorMsg(
                "" !== e.target.value ? "" : "*sum should not be empty"
              )
            }
          />
          <i id="sumErrorMsg" className="errMsg">
            {sumErrorMsg}
          </i>
        </span>
        <span className="form-elements">
          <label htmlFor="term">
            Term<span>*</span>
          </label>
          <input
            type="number"
            id="term"
            maxLength={50}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onInput={(e) =>
              setTermErrorMsg(
                "" !== e.target.value ? "" : "*term should not be empty"
              )
            }
          />
          <i id="termErrorMsg" className="errMsg">
            {termErrorMsg}
          </i>
        </span>
        <input className="submit-btn" type="submit" value="Add Policy" />
      </form>
    </div>
  );
}
