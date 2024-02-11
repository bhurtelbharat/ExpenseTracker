import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DashboardStats } from '../../components/modules/dashboard/DashboardStats';
import { DashboardSidebar } from '../../components/modules/dashboard/DashboardSidebar';
import { Userslist } from '../../components/modules/dashboard/components/Users.List';
import logo from "../../assets/Logo.svg"
import { Routes, Route } from 'react-router';
import { WebDetails } from '../../components/modules/dashboard/components/Web.Details';
import { Complaints } from '../../components/modules/dashboard/components/Complaints.list';
import { Queries } from '../../components/modules/dashboard/components/Queries.list';

export function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="logo">Lg</div>
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
          <Route path="/complains" element={<Complaints/>} />
          <Route path="/queries" element={<Queries/>} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}