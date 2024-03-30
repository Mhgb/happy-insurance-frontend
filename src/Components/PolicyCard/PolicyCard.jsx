import "./PolicyCard.css";

function PolicyCard({ isAdmin, customePolicy }) {
  return (
    <div className="card">
      <div className="card-content">
        <p>
          <span>Policy Id</span> {customePolicy.policyId}
        </p>
        <p>
          <span>Title </span>
          {customePolicy.policyTitle}
        </p>
        <p>
          <span>Term </span>
          {customePolicy.term}
        </p>
        <p>
          <span>Premium </span>
          {customePolicy.premium}
        </p>
        <p>
          <span>next due date </span>
          {customePolicy.nextDueDate}
        </p>
        <p>
          <span>maturity date </span>
          {customePolicy.maturityDate}
        </p>
        <p>
          <span>commencement date </span>
          {customePolicy.commencementDate}
        </p>
        <p>
          <span>Insurer </span>
          {customePolicy.insurer}
        </p>
        <p>
          <span>Status </span>
          {customePolicy.status}
        </p>
        {isAdmin && (
          <p>
            <button id="policy-delete-btn">Delete</button>
          </p>
        )}
      </div>
      <p className="type">{customePolicy.policyType}</p>
    </div>
  );
}

export default PolicyCard;
