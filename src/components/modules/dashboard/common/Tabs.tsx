import { Tabs } from '@mantine/core';

export const TabsLayout = (props: any) => {
    const { tabsList } = props;

    return <Tabs.List>
        {
            tabsList.map((tab:any, index:number) => (
                <Tabs.Tab value={tab.value} key={index} className='font-bold'>{tab.label}</Tabs.Tab>
            ))
        }
    </Tabs.List>
}