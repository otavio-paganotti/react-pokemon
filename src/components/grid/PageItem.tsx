import clsx from 'clsx';

const PageItem = ({
  item,
  page,
  itemLabel,
  current,
}: {
  item: number;
  itemLabel: number | string;
  page?: (page: number) => void;
  current?: boolean;
}) => {
  return (
    <div
      className={clsx('page-item', current ? 'current' : '')}
      onClick={() => page && page(item)}
    >
      {itemLabel}
    </div>
  );
};

export default PageItem;
