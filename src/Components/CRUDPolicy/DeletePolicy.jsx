import { useEffect, useState } from "react";
import { URL } from "../../utils/Constants";
import "./DeletePolicy.css";

export default function DeletePolicy() {
  const userId = sessionStorage.getItem("userId");
  const [policies, updatePolicies] = useState([]);

  useEffect(() => {
    fetchPolicyDetails();
  }, []);

  function fetchPolicyDetails() {
    fetch(URL + "/policies?userId=" + userId)
      // fetch(URL + "/retrieve-policies")
      .then((result) => result.json())
      .then((rspData) => updatePolicies(rspData))
      .catch((error) => console.log(error));
  }

  function handleDeletePolicy(event) {
    console.log(event.target.value);
    fetch(URL + "/delete-policy?policy_id=" + event.target.value, {
      method: "DELETE",
    })
      .then((result) => fetchPolicyDetails())
      .catch((error) => console.log(error));
    //To update policy list after deletion
  }

  return (
    <div className="delete-policy-container">
      <h2>Policies owned by you</h2>
      {/* <button onClick={displayPolicy}>display policies</button> */}
      <div>
        {policies && policies.length > 0 ? (
          <table className="policy-tbl">
            <thead>
              <tr>
                <th>Policy Id</th>
                <th>Type</th>
                <th>Title</th>
                <th>Premium</th>
                <th>Sum Assured</th>
                <th>Term</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {policies.length > 0 &&
                policies.map((policy) => {
                  return (
                    <tr key={policy.policyId}>
                      <td>{policy.policyId} </td>
                      <td>{policy.policyType} </td>
                      <td>{policy.policyTitle} </td>
                      <td>{policy.premium} </td>
                      <td>{policy.sumAssured} </td>
                      <td>{policy.term} </td>
                      <td>
                        <button
                          id="policy-delete-btn"
                          value={policy.policyId}
                          onClick={handleDeletePolicy}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <div>No Policies owned by you</div>
        )}
      </div>
    </div>
  );
}
