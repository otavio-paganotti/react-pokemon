import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const container = ({ children }: IProps) => {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  )
}

export default container;