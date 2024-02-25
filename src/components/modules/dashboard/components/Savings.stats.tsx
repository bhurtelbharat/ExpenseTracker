import { Grid } from "@mantine/core"
import { useState } from "react"

export const SavingsStats = () => {
    const [totalusers, settotalUsers]=useState(34000);
    const [newusers, setnewUsers]=useState(17000);
    const [newqueries, setnewQueries]=useState(25);
    const [complaints, setcomplaints]=useState(17000);

    return <Grid className="pb-md">
        <Grid.Col span={3}>
            <div className="text-gray-400">Total Users</div>
            <div className="text-md font-bold">{totalusers}</div>
        </Grid.Col>
        <Grid.Col span={3}>
            <div className="text-gray-400">New Users this month</div>
            <div className="text-md font-bold">{newusers}</div>
        </Grid.Col>
        <Grid.Col span={3}>
            <div className="text-gray-400">New Queries</div>
            <div className="text-md font-bold">{newqueries}</div>
        </Grid.Col>
        <Grid.Col span={3}>
            <div className="text-gray-400">Complaints this month</div>
            <div className="text-md font-bold">{complaints}</div>
        </Grid.Col>
    </Grid >
}