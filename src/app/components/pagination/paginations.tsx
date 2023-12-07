// 'use client';

// import { Pagination } from 'flowbite-react';
// import { useState } from 'react';

// const PaginationCard=()=> {
//   const [currentPage, setCurrentPage] = useState(1);

//   const onPageChange = (page: number) => setCurrentPage(page);

//   return (
//     <div className="flex overflow-x-auto sm:justify-center self-ceneter py-10">
//       <Pagination
//         className=''
//         layout="pagination"
//         currentPage={currentPage}
//         totalPages={10}
//         onPageChange={onPageChange}
//         previousLabel="Previous"
//         nextLabel="Next"
//         showIcons

//       />
//     </div>
//   );
// }
// export default PaginationCard;
// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import {useLocation} from 'react-router-dom'

// const CustomPagination = ({page_name}: any) => {
//   // const url = useLocation()
//   // console.log(url)
// // const router = useRouter()
//   const temp = [1, 2, 3, 4, 5];
//   const handlePagination = () => {
//     console.log("Helloi");
//   };

//   return (
//     <>
//       {temp.map((m) => (
//         <Link key={m} href={{
//           pathname: `/${page_name}/${m}`,
//         }}>
//           <div key={m} className="flex text-center" onClick={handlePagination}>
//             <div className="h-[30px] w-[100px] border-1">{m}</div>
//           </div>

//         </Link>
//       ))}
//     </>
//   );
// };

// export default CustomPagination;

import React, { useState } from "react";
import { productData } from "@/app/lib/data";
import ProductCard from "../products/productCard";
const itemPerPage = 5;
const CustomPaginations = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(productData.length / itemPerPage);
  const pageIndex = Array.from(
    { length: numberOfPage },
    (_, index) => index + 1
  );
  const rows = productData.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-10 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {rows.map((itemRow) => (
          <div className="" key={itemRow.id}>
            {/* <div>{itemRow.title}</div>/<div>{itemRow.id}</div> */}
            <ProductCard {...itemRow} />
          </div>
        ))}
      </div>
      <div className=" py-10 flex justify-center ">
        <button
          disabled={currentPage < 1}
          className="border-1 px-4"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {pageIndex
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(numberOfPage, currentPage + 3)
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page - 1)}
              className={`border-1 px-2 ${
                page === currentPage + 1 ? "active bg-NeonPink text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
        <button
          disabled={currentPage >= numberOfPage - 1}
          className={`border-1 px-4`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPaginations;
