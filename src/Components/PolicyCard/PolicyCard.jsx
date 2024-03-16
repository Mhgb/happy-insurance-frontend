import "./PolicyCard.css";
function PolicyCard({ customePolicy }) {
  return (
    <div className="card">
      <p>{customePolicy.policyId}</p>
      <p>{customePolicy.policyType}</p>
      <p>{customePolicy.policyTitle}</p>
      <p>maturity date: {customePolicy.maturityDate}</p>
      <p>Term: {customePolicy.term}</p>
      <p>Premium: {customePolicy.premium}</p>
    </div>
  );
}

export default PolicyCard;
