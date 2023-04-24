import { IPagination } from "@/types";
import PageItem from "./PageItem";

const Paginator = ({
  pagination,
  page
}: {
  pagination: IPagination,
  page: ((page: number) => void)
}) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="mb-4">
        <nav className="flex md:gap-4" aria-label="Pagination">
          <PageItem page={page} item={pagination.firstPage} itemLabel="<<" />
          <PageItem page={page} item={pagination.prevPage} itemLabel="<" />
          {pagination.prevPages.length > 0 && pagination.prevPages.map((item) => (
            <PageItem key={'prev-' + item} item={item} itemLabel={item} page={page} />
          ))}
          <PageItem item={pagination.page} itemLabel={pagination.page} current={true} />
          {pagination.nextPages.length > 0 && pagination.nextPages.map((item) => (
            <PageItem key={'next-' + item} item={item} itemLabel={item} page={page} />
          ))}
          <PageItem page={page} item={pagination.nextPage} itemLabel=">" />
          <PageItem page={page} item={pagination.lastPage} itemLabel=">>" />
        </nav>
      </div>
    </div>
  )
}

export default Paginator;
