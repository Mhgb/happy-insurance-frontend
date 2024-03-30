import { useEffect, useState } from "react";
import PolicyCard from "../PolicyCard/PolicyCard";
import Pagination from "../Pagination/Pagination";
import { URL } from "../../utils/Constants";
import "./PolicyView.css";

function PolicyView() {
  const [yourPolicies, updateYourPolicies] = useState([]);
  const [totalPages, updateTotalPages] = useState();
  const [currentPage, updateCurrentPage] = useState(0);

  useEffect(() => {
    console.log("Loading Your Policies from Database");
    let userId = sessionStorage.getItem("userId");
    const getYourPolicies = async () => {
      let result = await fetch(
        URL + "/view-your-policies?cust_id=" + userId + "&pageNo=" + currentPage
      );
      let response = await result.json();
      console.log(response.content);
      if (response.content.length > 0) {
        updateTotalPages(response["totalPages"]);
        updateCurrentPage(response["pageable"]["pageNumber"]);
        updateYourPolicies(response["content"]);
      }
    };
    getYourPolicies();
  }, [currentPage]);

  return (
    <div className="view-container">
      <h3>View Your Policies</h3>
      <div className="policy-cards-container">
        {yourPolicies.length > 0 ? (
          yourPolicies.map((customePolicy) => (
            <PolicyCard customePolicy={customePolicy} />
          ))
        ) : (
          <div>No policies opted</div>
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        updateCurrentPage={updateCurrentPage}
      />
    </div>
  );
}

export default PolicyView;
