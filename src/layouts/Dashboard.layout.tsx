import { AppShell, Avatar, Burger, Group, Menu, Skeleton, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { DashboardStats } from '../components/modules/dashboard/DashboardStats';
import { DashboardSidebar } from '../components/modules/dashboard/DashboardSidebar';
import { Userslist } from '../components/modules/dashboard/components/Users.List';
import logo from "../assets/Logo.svg"
import { Routes, Route } from 'react-router';
import { WebDetails } from '../components/modules/dashboard/components/Web.Details';
import { Complaints } from '../components/modules/dashboard/components/Complaints.list';
import { Queries } from '../components/modules/dashboard/components/Queries.list';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth/actions'
import { useNavigate } from 'react-router-dom'

export function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  const user = useSelector((state:any)=> state.authReducer.user);
  const dispatch:any = useDispatch();
  const navigate = useNavigate();

  const logoutUser = ()=>{
    dispatch(logout());
    navigate("/");
  }
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" wrap={'nowrap'} px="md"  align={'center'}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className={'flex justify-between w-full'}>
            Welcome {user.fullname ?? ''},
            <Menu shadow="md" width={200}>
              <Menu.Target>
               <Avatar>US</Avatar>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item>
                  Settings
                </Menu.Item>
                <Menu.Divider />

                <Menu.Item
                    onClick={logoutUser}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Group>
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
          <Route path="/webdetails" element={<WebDetails/>} />
          <Route path="/complaints" element={<Complaints/>} />
          <Route path="/queries" element={<Queries/>} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}