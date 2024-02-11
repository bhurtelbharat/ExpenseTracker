import { useState } from "react";
import { Tabs } from '@mantine/core';
import { Eye } from 'tabler-icons-react';
import { TableLayout } from "../common/Table";
import { TabsLayout } from "../common/Tabs";


export const Userslist = () => {
    const tabs = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Blocked", value: "blocked" }
    ]

    const cols = [
        "profile",
        "occupation",
        "joineddate",
        "status",
        "actionsIcon",
    ]
    const tabledata = [
        {
            profile: "Jane Doe",
            occupation: "Developer",
            joineddate: "jan 12, 2024",
            status: "Active",
            actionsIcon: <Eye />
        }
    ]

    const colheader = [
        "Profile",
        "Occupation",
        "Joined Date",
        "Status",
        "Action",
    ]

    const [activeTab, setActiveTab] = useState<string | null>('all');
    const [data, setData] = useState([]);

    return (
        <div>
            <div className="font-bold text-md">Users</div>
            <div>
                <Tabs value={activeTab} onChange={setActiveTab} color="orange">
                    <TabsLayout tabsList={tabs}/>

                    <Tabs.Panel value="all"  className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="active"  className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="inactive"  className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="blocked"  className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}