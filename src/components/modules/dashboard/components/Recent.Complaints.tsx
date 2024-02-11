import { Tile } from "../common/Tile"



export const RecentComplaints = () => {
    const complaints = [
        {
            complainDescription: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        },
        {
            complainDescription: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        },
        {
            complainDescription: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        }
    ];

    return (<div className="py-sm min-h-64">
        <div className="border border-current border-solid">
            <div className="flex justify-between items-ends px-md">
                <div className="font-bold">Recent Complaints</div>
                <div className="text-orange-500">View All</div>
            </div>
            <div>
                {complaints.map((x, k) => {
                    // return <div key={k} className="py-xs">
                    //     <div className="flex justify-between items-end px-md">
                    //         <div>{x.complainDescription}</div><div>{x.date}</div>
                    //     </div>
                    //     <div className="px-md font-semibold">{x.user}</div>
                    // </div>
                    return <Tile key={k} title={x.complainDescription} description={x.user} date={x.date} />  
                })}
            </div>
        </div>
    </div>
    )
}