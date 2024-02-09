
import { Stack, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import AppTopProduct from '../app-top-product';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppRecentTransaction from '../app-recent-transaction';

// ----------------------------------------------------------------------


export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={4}>
        <Typography variant="h4">Dashboard</Typography>

        <Button  color="primary" sx={{bgcolor:'primary.contrastText',px:2,borderRadius:0.7}} startIcon={<Iconify icon="uil:setting" />}>
          Manage
        </Button>
      </Stack>

      <Grid container spacing={0.4}>
        <Grid xs={12} sm={6} md={3} spacing={1}>
          <AppWidgetSummary
            title="Total Revenue"
            total="$10.540"
            color="success"
            percent='22.04%'
            up
            icon={<SvgColor alt="icon" src="/assets/icons/ic_dollar.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Orders"
            total="1,352"
            color="info"
            percent='42.04%'
            up
            icon={<SvgColor alt="icon" src="/assets/icons/ic_cart.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Active Sessions"
            total={44}
            color="warning"
            percent='12.04%'
            icon={<SvgColor alt="icon" src="/assets/icons/navbar/ic_personal.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Sessions"
            total={234}
            color="error"
            percent='32.04%'
            icon={<SvgColor alt="icon" src="/assets/icons/navbar/ic_customer.svg" />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={2}>
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Orders Over Time"
            subheader={[{}]}
            chart={{
              labels: [
                '01 am',
                '02 am',
                '03 am',
                '04 am',
                '05 am',
                '06 am',
                '07 am',
                '08 am',
                '09 am',
                '10 am',
                '11 am',
                '12 am',
                '01 pm',
                '02 pm',
                '03 pm',
                '04 pm',
                '05 pm',
                '06 pm',
                '07 pm',
                '08 pm',
                '09 pm',
                '10 pm',
                '11 pm',
                '12 pm',
              ],
              series: [
                {
                  name: 'May 21',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 64, 52, 59, 36, 39,30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  total:430
                },
                {
                  name: 'May 22',
                  type: 'line',
                  fill: 'solid',
                  data: [20, 35, 46, 20, 25, 15, 44, 32, 49, 36, 39,30, 20, 35, 46, 20, 25, 15, 44, 32, 49, 36],
                  total:718
                
                },
              ],
              
            }}
            sx={{borderRadius:1}}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Last 7 Days Sales"
            sold='1,390'
            revenue='$18,990'
            chart={{
              series: [
                { label: '1', value: 200 },
                { label: '2', value: 320 },
                { label: '4', value: 140 },
                { label: '5', value: 321 },
                { label: '6', value: 280 },
                { label: '7', value: 300 },
              ],
            }}
            sx={{borderRadius:1}}

          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AppRecentTransaction
            title="Recent Transaction"
            sx={{borderRadius:1}}
           
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <AppTopProduct
            title="Top Products by Units Sold"
            sx={{borderRadius:1}}
           
          />
        </Grid>
      </Grid>
    </Container>
  );
}
