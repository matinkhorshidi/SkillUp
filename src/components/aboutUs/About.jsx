import '../../assets/css modules/Features.css';
import DeviderWithName from './../common/DeviderWithName';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <DeviderWithName name="درباره ما" />

        <div className="row">
          <div className="col-xs-12 col-md-6">
            {' '}
            <img src="img/about.jpg" className="img-responsive" alt="" />{' '}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3> چرا اسکیلاپ </h3>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h4>بدست میارید</h4>
              <div style={{ textAlign: 'right', direction: 'rtl' }}>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ padding: 0 }}>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
