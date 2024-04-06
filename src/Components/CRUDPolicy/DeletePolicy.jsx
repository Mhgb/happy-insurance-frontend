import { useEffect, useState } from "react";
import { URL } from "../../utils/Constants";
import trashIcon from "../../images/trash-bin.png";
import DialogBox from "../DialogBox/DialogBox";
import "./DeletePolicy.css";

export default function DeletePolicy() {
  const userId = sessionStorage.getItem("userId");
  const [policies, updatePolicies] = useState([]);
  const [deletePolicyId, updateDeletePolicyId] = useState();
  const [dialogBox, toggleDialogBox] = useState(false);
  const dialogMsg = "Are you sure you want to Delete policy ?";

  useEffect(() => {
    fetchPolicyDetails();
  }, []);

  function fetchPolicyDetails() {
    fetch(URL + "/policies?userId=" + userId)
      .then((result) => result.json())
      .then((rspData) => updatePolicies(rspData))
      .catch((error) => console.log(error));
  }

  function handleDeletePolicy(policyId) {
    console.log(policyId);
    fetch(URL + "/delete-policy?policy_id=" + policyId, {
      method: "DELETE",
    })
      .then((result) => fetchPolicyDetails())
      .catch((error) => console.log(error));
    //To update policy list after deletion
  }

  return (
    <div className="delete-policy-container">
      <h2>Policies owned by you</h2>
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
                    <tr key={policy.policyId} className="rows">
                      <td>{policy.policyId} </td>
                      <td>{policy.policyType} </td>
                      <td>{policy.policyTitle} </td>
                      <td>{policy.premium} </td>
                      <td>{policy.sumAssured} </td>
                      <td>{policy.term} </td>
                      <td>
                        <img
                          id="trash-icon"
                          src={trashIcon}
                          alt="delete"
                          onClick={() => {
                            updateDeletePolicyId(policy.policyId);
                            toggleDialogBox(true);
                          }}
                        />
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
      {dialogBox && (
        <DialogBox
          message={dialogMsg}
          param={deletePolicyId}
          executeFunc={handleDeletePolicy}
          toggleDialogBox={toggleDialogBox}
        />
      )}
    </div>
  );
}
