import { useEffect, useState } from "react";
import PolicyCard from "../PolicyCard/PolicyCard";
import Pagination from "../Pagination/Pagination";
import "./PolicyView.css";

function PolicyView({ setComponent }) {
  const url = "http://localhost:8080";

  const [yourPolicies, updateYourPolicies] = useState([]);
  const [totalPages, updateTotalPages] = useState();
  const [currentPage, updateCurrentPage] = useState(0);

  useEffect(() => {
    console.log("Loading Your Policies from Database");
    let userId = sessionStorage.getItem("userId");
    const getYourPolicies = async () => {
      let result = await fetch(
        url + "/view-your-policies?cust_id=" + userId + "&pageNo=" + currentPage
      );
      let response = await result.json();
      console.log(response);
      updateTotalPages(response["totalPages"]);
      updateCurrentPage(response["pageable"]["pageNumber"]);
      updateYourPolicies(response["content"]);
    };
    getYourPolicies();
  }, [currentPage]);

  return (
    <div className="view-container">
      <h3>View Your Policies</h3>
      <div className="policy-cards-container">
        {yourPolicies.map((customePolicy) => (
          <PolicyCard customePolicy={customePolicy} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        updateCurrentPage={updateCurrentPage}
      />
    </div>
  );
}

export default PolicyView;
