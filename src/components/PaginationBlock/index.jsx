import './paginationBlock.css';

import { Pagination } from 'antd';
import React from 'react';

const PaginationBlock = () => {
  return (
    <div className="pagination">
      <nav className="pagination-nav" aria-label="Page navigation">
        <Pagination defaultCurrent={1} total={50} />
      </nav>
    </div>
  );
};

export default PaginationBlock;
