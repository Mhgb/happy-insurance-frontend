import "./PolicyCard.css";
function PolicyCard({ customePolicy }) {
  return (
    <div className="card">
      <p>
        <span>Policy Id</span> {customePolicy.policyId}
      </p>
      <p>
        <span>Type </span>
        {customePolicy.policyType}
      </p>
      <p>
        <span>Title </span>
        {customePolicy.policyTitle}
      </p>
      <p>
        <span>maturity date </span>
        {customePolicy.maturityDate}
      </p>
      <p>
        <span>Term </span>
        {customePolicy.term}
      </p>
      <p>
        <span>Premium </span>
        {customePolicy.premium}
      </p>
    </div>
  );
}

export default PolicyCard;
