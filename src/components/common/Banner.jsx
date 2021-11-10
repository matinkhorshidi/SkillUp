import React from 'react';

import { Container, FormControl, Grid, MenuItem, Select } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Banner.module.css';

class Banner extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, menu, filter, number, backgrColor, textColor, ReadTime } =
      this.props;

    return (
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{ backgroundColor: backgrColor, color: textColor }}
      >
        <Grid
          container
          // columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
          my={3}
          height={'8rem'}
        >
          <Grid
            container
            item
            xs={6}
            sm={6}
            md={6}
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pr={5}
          >
            <h3> {name}</h3>
            <h6> {menu}</h6>
          </Grid>
          {/* number of elements */}
          {filter && (
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              textAlign="right"
            >
              <div style={{ margin: '0 4rem' }}>
                {number} &ensp; : تعداد نوشته
              </div>
              {/* مرتب سازی */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                {/* <InputLabel id="demo-simple-select-standard-label"></InputLabel> */}
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  style={{ fontFamily: 'iran-yekan' }}
                  // value={age}
                  // onChange={handleChange}
                  // label="Age"
                >
                  <MenuItem value={10} style={{ fontFamily: 'iran-yekan' }}>
                    آخرین
                  </MenuItem>
                  <MenuItem value={20} style={{ fontFamily: 'iran-yekan' }}>
                    قدیمی ترین
                  </MenuItem>
                  <MenuItem value={30} style={{ fontFamily: 'iran-yekan' }}>
                    پر بیننده ترین
                  </MenuItem>
                </Select>
              </FormControl>
              &ensp; : مرتب سازی بر اساس{' '}
            </Grid>
          )}
          {ReadTime && (
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              textAlign="right"
            >
              {' '}
              <div style={{ margin: '0 4rem' }}>زمان مطالعه : {ReadTime}</div>
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

export default Banner;
