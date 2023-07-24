/* eslint-disable react/prop-types */

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ContractTemplate from './contractTemplate';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 150,
  width: '100%',
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const ContractDetails = ({ contractData,closeContractHandler }) =>{
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,
            }}
          >
            <Item elevation={6}>
              <div style={{ alignItems: 'center', margin: '20px' }}>
                <Box mr={2}>
                  <Typography style={{ margin: '10px', fontWeight: 'bold' }}>
                    Contract of {contractData.firstName} {contractData.lastName}
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ margin: '10px' }}>
                    Email: {contractData.email}
                  </Typography>
                </Box>
              </div>
            </Item>
            <Item elevation={8}>
              <div style={{ alignItems: 'center', margin: '20px' }}>
                <Box>
                  <Typography style={{ margin: '14px' }}>
                    Document Status: {contractData.status === undefined ? 'not available' : contractData.status}
                  </Typography>
                </Box>
                <Box mr={2}>
                  <Typography style={{ margin: '14px' }}>
                    Start Date: {contractData.startDate === undefined ? 'not available' : new Date(contractData.startDate).toLocaleDateString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ margin: '14px' }}>
                    Cancellation Date: {contractData.cancelationDate === undefined ? 'not available' : new Date(contractData.cancelationDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </div>
            </Item>
          </Box>
        </ThemeProvider>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            gap: 2,
          }}
        >
          <Paper elevation={6}>
            <Typography variant="h4" style={{ margin: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Contract Template
            </Typography>
            <ContractTemplate firstName={contractData.firstName} lastName={contractData.lastName} email={contractData.email} />
          </Paper>
          
        </Box>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button variant='contained' style={{ margin: '20px', fontWeight: 'bold' }} onClick={closeContractHandler}>Close Contract and view table</Button>
      </Grid>
    </Grid>
  );
}
export default ContractDetails;