import { AppShell, Burger, Group, Skeleton, Text, ActionIcon, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DashboardStats } from '../../components/modules/dashboard/DashboardStats';
import { DashboardSidebar } from '../../components/modules/dashboard/DashboardSidebar';
import { Userslist } from '../../components/modules/dashboard/components/Users.List';
import logo from "../../assets/Logo.svg"
import { Routes, Route, useNavigate } from 'react-router';
import { WebDetails } from '../../components/modules/dashboard/components/Web.Details';
import { Complaints } from '../../components/modules/dashboard/components/Complaints.list';
import { Queries } from '../../components/modules/dashboard/components/Queries.list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getImageUrl } from '../../utils/helpers/image.helper';
import { Bell } from "tabler-icons-react";
import { getToday } from '../../utils/helpers/date.helper';
import { Menu, MenuItem } from '@mantine/core';
import { removeSession } from '../../store/auth/actions';

export function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.authReducer.user)
  const navigate = useNavigate();

  const logOut = async () =>{
    await dispatch(removeSession());
  }


  useEffect(()=>{
    console.log(user);
  },[user]);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <div className="w-full h-full px-md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className='flex w-full h-full justify-between items-center'>
            <div className='font-bold'>Welcome, {user?.fullname ?? ''} !</div>
            <div className='flex gap-md items-center'>
              <div className='font-bold'>{getToday()}</div>
              <ActionIcon variant="transparent" color="black">
                <Bell />
              </ActionIcon>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <ActionIcon variant="transparent">
                    <Avatar src={getImageUrl(user?.img ?? '')} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    Profile
                  </Menu.Item>
                  <Menu.Item>
                    User Settings
                  </Menu.Item>
                  <Menu.Item onClick={(event:any)=>logOut()}>
                    Log Out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text> <img src={logo} alt="Expense Tracker Logo" /></Text>
        </Group>
        <DashboardSidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path="" element={<DashboardStats />} />
          <Route path="/users" element={<Userslist />} />
          <Route path="/webdetails" element={<WebDetails />} />
          <Route path="/complains" element={<Complaints />} />
          <Route path="/queries" element={<Queries />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}