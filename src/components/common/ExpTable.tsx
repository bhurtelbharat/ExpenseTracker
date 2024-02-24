import { Avatar, Badge, Table } from '@mantine/core'
import { getImageUrl } from '../../utils/helpers/imageUrlHandler'

// interface IExpTableProps {
//     data: any;
//     headers: any;
// }
export const ExpTable = (props:any)=>{
    const {headers, data} = props;

    const getTdComponent = (val:string, settings:any, id = null)=>{
            switch (settings.type){
                case 'badge':
                    return <Badge>{val}</Badge>
                case'image':
                    return <Avatar src={getImageUrl(val)}/>
                case 'action':
                    return settings.actionCol({ id })
                default:
                    return val
            }

    }
    return <Table>
        <Table.Thead>
            <Table.Tr>
                {
                    headers.map((header: any, index: number) => (
                        <Table.Th key={index} style={{width:header.width, textAlign: header.align || 'left'}} >{header.label}</Table.Th>
                    ))
                }
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {data.map((v:any, key:number)=>(
                <Table.Tr key={key}>
                    {
                        headers.map((header: any, index: number) => (
                            <Table.Td key={index} style={{width:header.width, textAlign: header.align || 'left'}} >{getTdComponent(v[header.name],header, v.id)}</Table.Td>
                        ))
                    }
                </Table.Tr>
            ))
            }
        </Table.Tbody>
    </Table>
}