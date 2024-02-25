import { BarChart } from '@mantine/charts';

export const ChartStats = () => {

    const data = [
        { month: 'January', Expenses: 1200 },
        { month: 'February', Expenses: 1900 },
        { month: 'March', Expenses: 400 },
        { month: 'April', Expenses: 1000 },
        { month: 'May', Expenses: 800 },
        { month: 'June', Expenses: 750 },
    ];

    return <div>
        <div className="pb-md font-bold">New Signups in 6 months</div>
        <BarChart
            h={300}
            data={data}
            dataKey="month"
            series={[
                { name: 'Expenses', color: 'orange' },
            ]}
            tickLine="y"
        /></div>
}