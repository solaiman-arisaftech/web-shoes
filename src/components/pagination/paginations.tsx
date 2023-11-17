'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';

const PaginationCard=()=> {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center self-ceneter py-10">
      <Pagination
        className=''
        layout="pagination"
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
        previousLabel="Previous"
        nextLabel="Next"
        showIcons
      />
    </div>
  );
}
export default PaginationCard;