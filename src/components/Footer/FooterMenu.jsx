import React from 'react';

import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/FooterMenu.module.css';

class FooterMenu extends React.Component {
  render() {
    const { header, menu } = this.props;
    return (
      <React.Fragment>
        <div>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt={'4rem'}
            textAlign={'center'}
            color={'white'}
          >
            <p className={CSS.mnuHead}>{header}</p>
            {menu.map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterMenu;
