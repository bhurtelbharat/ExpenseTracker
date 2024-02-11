import { Card, Grid, Text } from '@mantine/core';

export const CardLayout = (props: any) => {
  const { leading, content, actions, trailing } = props;
  return <Card padding="lg" withBorder>
    {/* return  <div className='bg-slate-100 rounded-sm p-md shadow-lg border'> */}
    <Grid>
      {leading && <Grid.Col span={3}>
        {leading}
      </Grid.Col>}
      <Grid.Col span={6}>
        {content}

        {actions && <div>
          {actions}
        </div>}
      </Grid.Col>
      {trailing && <Grid.Col span={3}>
        {trailing}
      </Grid.Col>}
    </Grid>
  </Card>
  {/* </div> */ }
}