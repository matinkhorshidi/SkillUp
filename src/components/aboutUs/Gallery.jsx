import { GalleryImage } from './GalleryImage';

import '../../assets/css modules/Features.css';
import { Grid } from '@mui/material';
import DeviderWithName from './../common/DeviderWithName';

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <Grid className="container">
        <div className="section-title ">
          <DeviderWithName name="گالری" />
          <p className="text-center">اسکیلاپ را ببینید </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <GalleryImage
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </Grid>
    </div>
  );
};
