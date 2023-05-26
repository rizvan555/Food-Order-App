import Footer from "@/pages/components/layouts/Footer";
import Header from "@/pages/components/layouts/Header";
import React from "react";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
