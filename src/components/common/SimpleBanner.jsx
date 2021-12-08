import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/Banner.module.css';
import { ReactComponent as Chevron } from '../../assets/image/Icons/chevron.svg';
import SvgIcon from './SvgIcon';
import { Link } from 'react-router-dom';

class SimpleBanner extends React.Component {
  render() {
    // const { image , name , details , teacher , time , price , oldPrice } = this.props;
    const { name, menu, menuUrl, backgrColor, textColor, tag, url } =
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
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pr={5}
          >
            <h3> {name}</h3>
            <h6>
              <span>
                <Link className={CSS.Link} to={menuUrl}>
                  {menu}
                </Link>
              </span>{' '}
              >{' '}
              <span>
                {' '}
                <Link
                  className={CSS.Link}
                  to={{
                    pathname: url,
                    state: { name: name, color: backgrColor },
                  }}
                >
                  {tag}
                </Link>
              </span>
            </h6>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SimpleBanner;
