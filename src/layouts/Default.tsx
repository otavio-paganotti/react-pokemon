import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children || <Outlet />}</div>
    </>
  );
};

export default DefaultLayout;
