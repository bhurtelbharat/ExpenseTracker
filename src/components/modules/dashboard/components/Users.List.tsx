import { useEffect, useState } from "react";
import { Tabs } from '@mantine/core';
import { Eye } from 'tabler-icons-react';
import { TableLayout } from "../common/Table";
import { TabsLayout } from "../common/Tabs";
import { GetAllUsers } from "../../../../API/Users/GetAllUsers";
import { setUserToLocalStorage } from "../../../../utils/helpers/token.helper";


export const Userslist = () => {
    const [Users, setUser] = useState([]);
    
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

    const GetUsersList = async () => {
        const res = await GetAllUsers();
        console.log(res);
    }

    const [activeTab, setActiveTab] = useState<string | null>('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        GetUsersList();
    }, [])

    return (
        <div>
            <div className="font-bold text-md">Users</div>
            <div>
                <Tabs value={activeTab} onChange={setActiveTab} color="orange">
                    <TabsLayout tabsList={tabs} />

                    <Tabs.Panel value="all" className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="active" className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="inactive" className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>

                    <Tabs.Panel value="blocked" className="py-md">
                        <TableLayout tabledata={tabledata} cols={cols} colheader={colheader} />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}