import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
  <>
    <Header />
    <div className="min-h-screen bg-gray-100">{children}</div>
  </>
  );
};

export default Layout;
