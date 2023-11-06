import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
  <>
    <div className="h-screen bg-gray-100">{children}</div>
  </>
  );
};

export default Layout;
