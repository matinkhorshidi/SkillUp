import { React, useState } from 'react';
import { Grid, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { useFormik } from 'formik';

import CSS from '../../../assets/css modules/CommentBox.module.css';
import userImage from '../../../assets/image/WriterImage.jpg';
import { ReactComponent as Reply } from '../../../assets/image/Icons/Reply.svg';

// import InputFormik from '../InputFormik';
import TextAreaFormik from '../TextAreaFormik';
import CourseButton from '../CourseButton';
import Image from './../Image';
import SvgIcon from './../SvgIcon';
import '../../../assets/css modules/CommentBox.css';

const CommentBox = (props) => {
  const { writer, comment, date, replys, backgrColor, textColor } = props;
  const [showReply, setShowReply] = useState(false);

  const formik = useFormik({
    initialValues: { comment: 'vd', userName: 'vas', userEmail: 'vs@vsd' },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const ShowReply = () => {
    setShowReply(!showReply);
  };
  return (
    <Grid
      item
      md={12}
      xs={12}
      sm={12}
      style={{
        backgroundColor: backgrColor,
        color: textColor,
      }}
      className={CSS.Box}
      mb={3}
      mx={4}
    >
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
        pb={2}
      >
        <Grid
          item
          md={6}
          xs={6}
          sm={6}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          textAlign="right"
          px={1}
          py={1}
        >
          <p className={CSS.writer}>{writer}</p>
          <Image
            mode={'fill'}
            src={userImage}
            height={'45px'}
            width={'100'}
            borderR={'50%'}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={6}
          sm={6}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          textAlign="right"
          px={1}
          py={1}
        >
          <p className={CSS.date}>{date}</p>
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        sm={12}
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="end"
        textAlign="right"
        pb={1}
        px={5}
      >
        {comment}
      </Grid>

      <Grid
        container
        columns={{ xs: 6, sm: 6, md: 6 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        px={2}
        pb={3}
      >
        <Grid
          item
          md={12}
          xs={12}
          sm={12}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          textAlign="right"
          py={1}
        >
          <Tooltip
            title="پاسخ دادن"
            placement="top"
            TransitionComponent={Zoom}
            arrow
            style={{ fontFamily: 'iran-yekan' }}
          >
            <Button>
              <SvgIcon
                mystyle={{ transform: 'rotate(-180deg)' }}
                onClick={ShowReply}
                Icon={Reply}
                size={'25px'}
                bgColor={'rgba(0, 0, 0, 0.6)'}
                bgOver="rgba(0, 0, 0)"
                cursor={'pointer'}
              ></SvgIcon>{' '}
            </Button>
          </Tooltip>
        </Grid>
        {showReply ? (
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="end"
            textAlign="right"
            pb={1}
            px={5}
          >
            <TextAreaFormik
              name={'پاسخ شما'}
              type={'text'}
              value={formik.values.comment}
              handlechange={formik.handleChange}
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <CourseButton
                className={CSS.Buttom}
                onSubmit={formik.handleSubmit}
                type="submit"
                text={'ارسال دیدگاه'}
                txtColor={'#FFFFFF'}
                bgColor={'#4BB543'}
                bgOver={'rgb(181, 23, 158)'}
                fontSize={'0.8rem'}
                // fontOver={'0.9rem'}
              ></CourseButton>
            </Grid>
          </Grid>
        ) : (
          <div></div>
        )}
        {replys ? (
          replys.map((reply, index) => (
            <CommentBox
              writer={reply.writer}
              comment={reply.comment}
              date={reply.date}
              backgrColor={'#D9D9D9'}
              textColor={'#212529'}
            />
          ))
        ) : (
          <div></div>
        )}
      </Grid>
    </Grid>
  );
};

export default CommentBox;
