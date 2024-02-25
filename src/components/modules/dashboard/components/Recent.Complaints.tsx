import { Tile } from '../common/Tile'


export const RecentComplaints = () => {
    const complaints = [
        {
            complainDescription: 'My profile is stuck at validation.',
            user: 'Jane Doe',
            date: 'Jan 12, 2024',
        },
        {
            complainDescription: 'My profile is stuck at validation.',
            user: 'Jane Doe',
            date: 'Jan 12, 2024',
        },
        {
            complainDescription: 'My profile is stuck at validation.',
            user: 'Jane Doe',
            date: 'Jan 12, 2024',
        },
    ]

    return (
        <div className="border border-current border-solid py-xs">
            <div className="flex justify-between items-ends px-sm">
                <div className="font-bold">Recent Complaints</div>
                <div className="text-orange-500">View All</div>
            </div>
            <div>
                {complaints.map((x, k) => {
                    return <Tile key={k} title={x.complainDescription} description={x.user} date={x.date} />
                })}
            </div>
        </div>
    )
}