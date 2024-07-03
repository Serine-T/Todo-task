import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import useResponsive from 'src/customHooks/useResponsive';

import Sidebar from './Sidebar';
import { StyledMain, StyledRoot } from './styled';
import HeaderSection from './Header';

const Layout = () => {
  const isMobile = useResponsive('down', 'lg');
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      {isMobile && <HeaderSection onOpenNav={() => setOpen(true)} />}
      <Sidebar open={!isMobile || open} onCloseNav={() => setOpen(false)} />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledRoot>
  );
};

export default Layout;
