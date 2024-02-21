import { Grid, Button } from '@mantine/core';

export const DeleteModal = (props: any) => {
    const { setOpenModal, deleteItem } = props
    return <form className="w-full">
        <Grid>
            <Grid.Col span={12}>
                <div>Are you sure you want to delete this item?</div>
                <div>All your transaction related to this item will be discarded.</div>
            </Grid.Col>
            <Grid.Col span={12} className='flex justify-end'>
                <Button variant="outline" color="orange" onClick={() => setOpenModal(false)}>Cancel</Button> <Button variant="filled" color="orange" onClick={(event)=>deleteItem()}>Confirm</Button>
            </Grid.Col>
        </Grid>
    </form>
}