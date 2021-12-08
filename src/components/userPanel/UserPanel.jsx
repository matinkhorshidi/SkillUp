import React from 'react';

import { Container, Grid } from '@mui/material';

import UserInfo from './UserInfo';
import UserSidebar from './UserSidebar';
import DashboardRoute from './DashboardRoute';
class UserPanel extends React.Component {
  render() {
    return (
      <Container
        maxWidth="lg"
        className={CSS.container}
        style={{ padding: '30px 0px' }}
      >
        <Grid
          container
          maxWidth="lg"
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="center"
          justifySelf="center"
          alignItems="flex-start"
          pb={2}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                px={1}
                style={{
                  position: 'sticky !important',
                  top: '101px !important',
                }}
              >
                <UserSidebar />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            //   px={1}
            //   style={{ backgroundColor: '#4895EF' }}
          >
            <DashboardRoute />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default UserPanel;
