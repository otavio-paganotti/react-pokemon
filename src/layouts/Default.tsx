import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="bg-primary p-4 text-white sticky top-0">
        <header className="flex justify-between">
          <h1 className="font-bold">
            <Link to={'/'}>Pokémon Page</Link>
          </h1>
          <a
            href="https://github.com/otavio-paganotti/react-pokemon"
            target="_blank"
          >
            Github
          </a>
        </header>
      </nav>
      <main className="h-screen-minus-56 w-screen overflow-x-hidden">
        {children || <Outlet />}
      </main>
    </>
  );
};

export default DefaultLayout;
