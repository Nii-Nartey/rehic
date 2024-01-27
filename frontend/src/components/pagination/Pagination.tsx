import './pagination.css';

interface PaginationInterface {
  totalNumGifs: number;
  itemsPerPage: number;
  setCurrentPageIndex: (index: number) => void;
  currentPageIndex: number;
}

interface EventSchema {
  target: { innerText: string };
}

const Pagination = (props: PaginationInterface) => {
  const numOfPages = Math.round(props.totalNumGifs / props.itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  const getClickedPageIndex = (e: EventSchema) => {
    const currentIndex = parseInt(e.target.innerText);

    props.setCurrentPageIndex(currentIndex);
    return currentIndex;
  };

  const activePage = (e: number) => {
    if (e == props.currentPageIndex) {
      return 'page-item active';
    }

    return 'page-item';
  };

  return (
    <nav aria-label='...' className='pagination-nav'>
      <ul className='pagination pagination-sm'>
        {pageNumbers.map((el, id) => (
          <li className={activePage(el)} aria-current='page' key={id}>
            <a
              className='page-link'
              onClick={(e: any) => getClickedPageIndex(e)}
            >
              {el}
            </a>
          </li>
        ))}

        {/*         <li className='page-item active'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
