import { useEffect, useState } from "react";
import { ActionIcon, Button, LoadingOverlay, Tabs } from '@mantine/core'
import { Eye, Pencil } from 'tabler-icons-react'
import { TableLayout } from "../common/Table";
import { TabsLayout } from "../common/Tabs";
import { GetAllUsers, GetAllUsersByStatus } from '../../../../API/Users/GetAllUsers'
import { ExpTable } from '../../../common/ExpTable'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { errorNotification } from "../../../../utils/helpers/notifications";


export const Userslist = () => {
    const [users,setUsers] = useState([] as any);
    const [loading,setLoading] = useState(false);
    const ActionsCol = (props:any)=>{
        return (
            <div className="flex justify-center gap-xs">
                <ActionIcon
                    variant="light"
                    onClick={() => navigate(`/users/${props.id}`)}
                >
                    <Eye size={20} />
                </ActionIcon>
                <ActionIcon
                    variant="light"
                    onClick={() => navigate(`/users/${props.id}/edit`)}
                >
                    <Pencil size={20} />
                </ActionIcon>
            </div>
        )
    }


    const headers = [
        { label: '', name:'img', width: '5%', align:'center', type: 'image'},
        { label: 'Profile', name:'fullname', width: '35%',},
        { label: 'Occupation', name:'occupation', width: '15%'},
        { label: 'Joined Date', name:'createdAt', width: '10%'},
        { label: 'Status', name:'status', type:'badge', width: '10%', align: 'center'},
        { label: 'Actions', name:'actions',width:'15%', align: 'center',type: 'action', actionCol: ActionsCol},
    ]

    const tabs = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Blocked", value: "blocked" }
    ];
    const navigate= useNavigate();

    const loadData = async () => {
        setLoading(true);
        try{
            const res:any = await GetAllUsersByStatus(activeTab ?? 'all');
            setUsers(res.data.map((user:any) => ({
                ...user,
                createdAt: moment(user.createdAt).format('MMM DD, YYYY')
            })));
        }catch(e){
            errorNotification({
                title: 'Error',
                message:e
            })
        }
        setLoading(false);
    }

    const [activeTab, setActiveTab] = useState<string | null>('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [activeTab])

    return (
        <div className="relative">
            <LoadingOverlay visible={loading}/>F
            <div className="font-bold text-md">Users</div>
            <div>
                <Tabs value={activeTab} onChange={setActiveTab} color="orange">
                    <TabsLayout tabsList={tabs} />

                    <Tabs.Panel value="all" className="py-md">
                        <ExpTable data={users} headers={headers} />
                    </Tabs.Panel>

                    <Tabs.Panel value="active" className="py-md">
                        <ExpTable data={users} headers={headers} />
                    </Tabs.Panel>

                    <Tabs.Panel value="inactive" className="py-md">
                        <ExpTable data={users} headers={headers} />
                    </Tabs.Panel>

                    <Tabs.Panel value="blocked" className="py-md">
                        <ExpTable data={users} headers={headers} />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}