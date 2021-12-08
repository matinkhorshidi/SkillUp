import React from 'react';

import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/course/CourseDetails.module.css';

import Filters from './Accordion/Filters';

class CoursesSideBar extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;

    return (
      <Grid className={CSS.Box} ml={1} pr={0} m={2}>
        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            textAlign="right"
            py={3}
          >
            <Filters
              filarray={[
                {
                  title: 'برنامه نویسی وب',
                  subfilters: [
                    'ASP.NET WebForms',
                    'PHP',
                    'Wordpress',
                    'Django',
                    'Ruby',
                    'Asp.Net Core',
                    'Blazor',
                    'React',
                  ],
                },
                {
                  title: 'گرافیک',
                  subfilters: [
                    'Adobe xd',
                    'Figma',
                    'Adobe photoshop',
                    'UI/UX',
                    'Adobe illustrator',
                  ],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CoursesSideBar;
