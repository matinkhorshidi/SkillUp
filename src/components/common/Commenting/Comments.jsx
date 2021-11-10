import React from 'react';

import { Container, Grid } from '@mui/material';

import CSS from '../../../assets/css modules/Comments.module.css';

// import InputFormik from '../InputFormik';
// import TextAreaFormik from '../TextAreaFormik';
import { useFormik } from 'formik';
import CommentBox from './CommentBox';

const Comments = (props) => {
  // const { image , name , details , teacher , time , price , oldPrice } = this.props;
  const { name, backgrColor, textColor } = props;

  const formik = useFormik({
    initialValues: { comment: 'vd', userName: 'vas', userEmail: 'vs@vsd' },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          <CommentBox
            writer={'دانیال جهانبخش'}
            comment={
              'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
            }
            date={'دو روز پیش'}
            backgrColor={'#ECECEC'}
            textColor={'#212529'}
          />
          <CommentBox
            writer={'دانیال جهانبخش'}
            comment={
              'مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند :'
            }
            date={'دو روز پیش'}
            backgrColor={'#ECECEC'}
            textColor={'#212529'}
            replys={[{ writer: 'گوچی', comment: 'very good', date: 'diruz' }]}
          />
        </Grid>
      </Container>
    </form>
  );
};

export default Comments;
