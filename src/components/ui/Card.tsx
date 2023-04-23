import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const card = ({ children }: IProps) => {
  return (
    <>
      <div>
        this is a card
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default card