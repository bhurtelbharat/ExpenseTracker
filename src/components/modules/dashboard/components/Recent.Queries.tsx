import { Tile } from "../common/Tile"

export const RecentQueries = () => {
    const queries = [
        {
            description: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        },
        {
            description: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        },
        {
            description: "My profile is stuck at validation.",
            user: "Jane Doe",
            date: "Jan 12, 2024"
        }
    ]
    return (
        <div className="border border-current border-solid py-xs mt-sm">
            <div className="flex justify-between items-ends px-sm">
                <div className="font-bold">Recent Queries</div>
                <div className="text-orange-500">View All</div>
            </div>
            <div>
                {queries.map((query, index) => {
                    return <Tile key={index} title={query.description} description={query.user} date={query.date} />  
                })}
            </div>
        </div>
    )
}