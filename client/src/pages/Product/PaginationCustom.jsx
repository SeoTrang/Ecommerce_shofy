import React, { useState } from "react";

function PaginationCustom() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  // Example items, to simulate fetching from another resources.
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div>
      {currentPageData.map((item) => (
        <div>
          <h3>Item #{item}</h3>
        </div>
      ))}

      
    </div>
  );
}

export default PaginationCustom;