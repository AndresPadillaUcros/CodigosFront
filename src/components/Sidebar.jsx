import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const SidebarLinks = () => {
    
    return (
      <ul className='mt-12'>
        <SidebarRoute to='inicio' title='Inicio' icon='fas fa-home' />
        <SidebarRoute to='python' title='Perfil' icon='fas fa-smile-wink' />
      
      </ul>
    );
  };

  
  const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
      <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
        {/* Sidebar starts */}
  
        <div className='sidebar hidden md:flex'>
          <div className='px-8'>

            <SidebarLinks />
          </div>
        </div>
        <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
          <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
          <i className='fas fa-home' />
        </div>
        {open && <ResponsiveSidebar />}
        {/* Sidebar ends */}
      </div>
    );
  };
  
  const ResponsiveSidebar = () => {
    return (
      <div>
        <div
          className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
          id='mobile-nav'
        >
          <div className='px-8'>
            <SidebarLinks />
          </div>
        </div>
      </div>
    );
  };
  
  const SidebarRoute = ({ to, title, icon }) => {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'sidebar-route text-white bg-blue-400'
              : 'sidebar-route text-gray-900 hover:text-white hover:bg-blue-300'
          }
        >
          <div className='flex items-center'>
            <i className={icon} />
            <span className='text-sm  ml-2'>{title}</span>
          </div>
        </NavLink>
      </li>
    );
  };
  

  
  
  export default Sidebar;
  