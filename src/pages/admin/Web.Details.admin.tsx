import { useState } from "react";
import { Tabs, Grid, TextInput, Input } from '@mantine/core';
import { TabsLayout } from "../../components/modules/dashboard/common/Tabs";
import { CardLayout } from "../../components/modules/dashboard/common/Card";
import { Features } from "../../components/modules/dashboard/components/FeaturesLayout";
import { Testimonials } from "../../components/modules/dashboard/components/Testimonials";

export const WebDetailsAdmin = () => {
    const tabs = [
        { label: "Landing Screens", value: "landingscreens" },
        { label: "Features", value: "features" },
        { label: "Testimonials", value: "testimonials" },
    ]

    const carddata = [
        {
            title: "Title",
            text: "Track your spending habits",
        },
        {
            title: "Subtitle",
            text: "Try our expense tracker",
        }
    ]

    const [activeTab, setActiveTab] = useState<string | null>('landingscreens');
    const [data, setData] = useState([]);

    return (
        <div>
            <div className="font-bold text-lg">Users</div>
            <div>
                <Tabs value={activeTab} onChange={setActiveTab} color="orange">
                    <TabsLayout tabsList={tabs} />

                    <Tabs.Panel value="landingscreens" className="flex space-between w-full">
                        <Grid className="py-md w-full">
                            {carddata.map((data: any, index: number) => (
                                <Grid.Col span={6} key={index} >
                                    <div className="w-full bg-gray-100 rounded-lg landingInput">
                                        <span className="text-xs text-gray-400 px-xs w-full">{data.title}</span>
                                        <Input value={data.text} className="h-8"/>
                                    </div>
                                </Grid.Col>

                            ))}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="features" className="flex space-between w-full">
                        <Features />
                    </Tabs.Panel>
                    <Tabs.Panel value="testimonials" className="flex space-between w-full">
                        <Testimonials/>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}