import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 992);

  const desktopNav = <nav className="w-60 h-screen"></nav>;

  const mobileNav = <nav></nav>;

  return <header>{isMobile ? mobileNav : desktopNav}</header>;
};

export default Navbar;
