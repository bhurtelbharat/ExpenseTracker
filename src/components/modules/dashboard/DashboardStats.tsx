import { Grid } from "@mantine/core"
import { SavingsStats } from "./components/Savings.stats"
import { ChartStats } from "./components/Chart.stats"
import { RecentComplaints } from "./components/Recent.Complaints"
import { RecentQueries } from "./components/Recent.Queries"

export const DashboardStats = () => {
    return <Grid>
        <Grid.Col span={8}>
            <SavingsStats />
            <RecentComplaints />
            <RecentQueries />
        </Grid.Col>
        <Grid.Col span={4}>
            <ChartStats />
        </Grid.Col>
    </Grid>
}