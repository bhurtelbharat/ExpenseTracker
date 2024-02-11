import { Tabs } from "@mantine/core"
import { TableLayout } from "../common/Table"
import { useState } from "react";
import { TabsLayout } from "../common/Tabs";

export const Complaints=()=>{
    const [activeTab, setActiveTab] = useState<string | null>('unacknowledged');
    const [data, setData] = useState([]);

    const tabs = [
        { label: "Unacknowledged", value: "unacknowledged" },
        { label: "Acknowledged", value: "acknowledged" },
    ]

    const cols = [
        "complaint",
        "profile",
        "joineddate",
        "status"
    ]
    const tabledata = [
        {
            complaint:"My profile is stuck at validation",
            profile: "Jane Doe",
            joineddate: "jan 12, 2024",
            status: "Unacknowledged"
        },
        {
            complaint:"My profile is stuck at validation",
            profile: "Jane Doe",
            joineddate: "jan 12, 2024",
            status: "Acknowledged"
        }
    ]

    const colheader = [
        "Complaint",
        "Profile",
        "Joined Date",
        "Status"
    ]

    return <div>
    <div className="font-bold text-lg">Users</div>
    <div>
        <Tabs value={activeTab} onChange={setActiveTab} color="orange">
            <TabsLayout tabsList={tabs}/>

            <Tabs.Panel value="unacknowledged"  className="py-md">
                <TableLayout tabledata={tabledata.filter(x=>x.status=="Unacknowledged")} cols={cols} colheader={colheader} />
            </Tabs.Panel>

            <Tabs.Panel value="acknowledged"  className="py-md">
                <TableLayout tabledata={tabledata.filter(x=>x.status=="Acknowledged")} cols={cols} colheader={colheader} />
            </Tabs.Panel>
        </Tabs>
    </div>
</div>

}