import clsx from "clsx";

const PageItem = ({ item, page, itemLabel, current }: {
  item: number;
  itemLabel: number | string;
  page?: ((page: number) => void);
  current?: boolean;
}) => {
  return (
    <div className={clsx('page-item', current ? 'current' : '')} onClick={() => page && page(item)}>
      {itemLabel}
    </div>
  )
};

const Paginator = ({
  pagination,
  page
}: {
  pagination: {
    firstPage: number;
    lastPage: number;
    nextPages: number[];
    prevPages: number[];
    nextPage: number;
    prevPage: number;
    page: number;
  },
  page: ((page: number) => void)
}) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="mb-4">
        <nav className="flex gap-4" aria-label="Pagination">
          <PageItem page={(item) => pagination.page > 1 && page(item)} item={pagination.firstPage} itemLabel="<<" />
          <PageItem page={(item) => pagination.page > 0 && page(item)} item={pagination.prevPage} itemLabel="<" />
          {pagination.prevPages.length > 0 && pagination.prevPages.map((item) => (
            <PageItem item={item} itemLabel={item} page={page} />
          ))}
          <PageItem item={pagination.page} itemLabel={pagination.page} current={true} />
          {pagination.nextPages.length > 0 && pagination.nextPages.map((item) => (
            <PageItem item={item} itemLabel={item} page={page} />
          ))}
          <PageItem page={(item) => pagination.page < pagination.lastPage && page(item)} item={pagination.nextPage} itemLabel=">" />
          <PageItem page={(item) => pagination.page < pagination.lastPage && page(item)} item={pagination.lastPage} itemLabel=">>" />
        </nav>
      </div>
    </div>
  )
}

export default Paginator;