// import React from 'react';
// import { Outlet } from 'react-router-dom';

// import Header from './component/Header/Header';
// import Footer from './component/Footer/Footer';
// import { ThemeProvider } from './utilities/Theme';

// function Layout() {
//   return (
//     <>
//       <ThemeProvider>
//         <main>
//           <Header />
//           <section>
//             <Outlet />
//           </section>
//           <Footer />
//         </main>
//       </ThemeProvider>
//     </>
//   );
// }

// export default Layout;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ThemeProvider } from './utilities/Theme';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
