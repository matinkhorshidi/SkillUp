import React from 'react';
import { Grid } from '@mui/material';

import CSS from '../../assets/css modules/weblog/WriterDetails.module.css';

import Image from '../common/Image';
import Like from './../common/Like';
import SvgIcon from './../common/SvgIcon';

import { ReactComponent as ShareIcon } from '../../assets/image/Icons/shareB.svg';
import { ReactComponent as CommentIcon } from '../../assets/image/Icons/Comment.svg';

class WriterDetails extends React.Component {
  render() {
    const { writerName, writerDetails, WriterImage, scrollToComment } =
      this.props;

    return (
      <Grid className={CSS.Box} ml={1} pr={0} pb={3}>
        <Grid width={'100%'} height={'150px'}>
          <Image
            className={CSS.course_image}
            mode={'fit'}
            src={WriterImage}
            height={'140px'}
            width={'100'}
            borderR={'5px'}
          />
        </Grid>
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
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="right"
            px={4}
          >
            <Grid>
              <h5> {writerName}</h5>
            </Grid>
            <Grid>
              <p style={{ margin: '0px' }}> {writerDetails}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <hr className={CSS.hr} />
        </Grid>

        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <SvgIcon
            Icon={CommentIcon}
            size={'20px'}
            bgColor={'grey'}
            cursor={'pointer'}
            mystyle={{ padding: '0px 5px' }}
            onClick={scrollToComment}
          />
          <Like />
          <SvgIcon
            Icon={ShareIcon}
            size={'23px'}
            bgColor={'grey'}
            cursor={'pointer'}
          />
        </Grid>
      </Grid>
    );
  }
}

export default WriterDetails;
