export const Tile = (props: any)=>{
    const {title, description, date} = props;
    return <div className="flex items-center py-xs">
        <div className="flex-grow px-md">
            <div>{title}</div>
            <div className="font-semibold">{description}</div>
        </div>
        <div className="px-md">
            {date}
        </div>
    </div>
}