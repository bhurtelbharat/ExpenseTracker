import { Grid } from "@mantine/core"
import { SavingsStats } from "../../components/modules/dashboard/components/Savings.stats"
import { ChartStats } from "../../components/modules/dashboard/components/Chart.stats"
import { RecentComplaints } from "../../components/modules/dashboard/components/Recent.Complaints"
import { RecentQueries } from "../../components/modules/dashboard/components/Recent.Queries"

export const DashboardStatsAdmin = () => {
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