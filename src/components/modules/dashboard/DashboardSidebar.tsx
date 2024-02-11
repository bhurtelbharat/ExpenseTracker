import { Box } from '@mantine/core';
import { useState } from 'react';
import { LayoutDashboard, Users, ScreenShare, FileText } from 'tabler-icons-react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDashboard } from "@fortawesome/free-solid-svg-icons";

export const DashboardSidebar = () => {
  //const iconDashboard = <FontAwesomeIcon icon={faDashboard} />
  const [active, setActive] = useState(0);

  const data = [
    { icon: <LayoutDashboard />, label: 'Dashboard', path: "/dashboard" },
    { icon: <Users />, label: 'Users', path: "/dashboard/users" },
    { icon: <ScreenShare />, label: 'Web Details', path: "/dashboard/webdetails" },
    { icon: <FileText />, label: 'Complaints', path: "/dashboard/complains" },
    { icon: <FileText />, label: 'Queries', path: "/dashboard/queries" },
  ]

  const items = data.map((item, index) => (
    <NavLink className='font-semibold' to={item.path} key={item.label} end={item.label === 'Dashboard'}>
      <div className={'flex items-center rounded-lg py-xs px-sm'}>
        {item.icon}
        <div className="ml-xs">{item.label}</div>
      </div>
    </NavLink>
  ));

  return <Box w={220}>{items}</Box>
}