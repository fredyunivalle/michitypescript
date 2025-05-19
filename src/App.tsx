import { useState } from 'react';
import AppNavbar from "./layouts/AppNavbar";
import Sidebar from './layouts/Sidebar';
import AppRoutes from './AppRoutes';


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
       <>
      <AppNavbar onToggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} onClose={toggleSidebar} />
      <main className="mt-4">
         <AppRoutes />
      </main>
     </>
  );
};

export default App;
