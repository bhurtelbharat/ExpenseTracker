import { Tabs } from "@mantine/core";
import { TableLayout } from "../common/Table";
import { TabsLayout } from "../common/Tabs";
import { useState } from "react";

export const Queries =()=>{
    const [activeTab, setActiveTab] = useState<string | null>('unacknowledged');
    const [data, setData] = useState([]);

    const tabs = [
        { label: "Unacknowledged", value: "unacknowledged" },
        { label: "Acknowledged", value: "acknowledged" },
    ]

    const cols = [
        "user",
        "message",
        "createddate",
        "status"
    ]
    const tabledata = [
        {
            user: "Jane Doe",
            message:"My profile is stuck at validation",
            createddate: "jan 12, 2024",
            status: "Unacknowledged",
        },
        {
            user: "Jane Doe",
            message:"My profile is stuck at validation",
            createddate: "jan 12, 2024",
            status: "Acknowledged"
        }
    ]

    const colheader = [
        "User",
        "Message",
        "Created Date",
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