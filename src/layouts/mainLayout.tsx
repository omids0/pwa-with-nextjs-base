import type { FC } from "react";

interface IProps {
  children: JSX.Element;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default MainLayout;
