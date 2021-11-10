import React from 'react';
import { Container, Grid } from '@mui/material';
import { useFormik } from 'formik';

import CSS from '../../../assets/css modules/Comment.module.css';

import InputFormik from '../InputFormik';
import TextAreaFormik from '../TextAreaFormik';
import CourseButton from '../CourseButton';

const Comment = (props) => {
  // const { image , name , details , teacher , time , price , oldPrice } = this.props;
  const { name, backgrColor, textColor } = props;

  const formik = useFormik({
    initialValues: { comment: 'vd', userName: 'vas', userEmail: 'vs@vsd' },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form id="blog123Comment" onSubmit={formik.handleSubmit}>
      <Container
        maxWidth="lg"
        className={CSS.Box}
        style={{
          backgroundColor: backgrColor,
          color: textColor,
        }}
      >
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          my={5}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pt={4}
            p={4}
          >
            <h5> {name}</h5>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            textAlign="right"
            pb={4}
            px={5}
          >
            <TextAreaFormik
              name={'* دیدگاه شما'}
              type={'text'}
              value={formik.values.comment}
              handlechange={formik.handleChange}
            />
          </Grid>
          <Grid
            container
            columns={{ xs: 6, sm: 6, md: 6 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            pb={4}
          >
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
              px={5}
            >
              <InputFormik
                name={'* ایمیل'}
                type={'email'}
                value={formik.values.userEmail}
                handlechange={formik.handleChange}
              />
            </Grid>
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
              px={5}
            >
              <InputFormik
                name={'نام'}
                type={'text'}
                value={formik.values.userName}
                handlechange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            columns={{ xs: 6, sm: 6, md: 6 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            px={5}
            pb={3}
          >
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
              py={1}
            >
              * بخش های ضروری علامت گذاری شده اند
            </Grid>
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
            >
              <CourseButton
                className={CSS.Buttom}
                onSubmit={formik.handleSubmit}
                type="submit"
                text={'ارسال دیدگاه'}
                txtColor={'#FFFFFF'}
                bgColor={'#4BB543'}
                bgOver={'rgb(181, 23, 158)'}
                fontSize={'0.9rem'}
                // fontOver={'0.9rem'}
              ></CourseButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Comment;
