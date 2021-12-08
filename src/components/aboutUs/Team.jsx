import '../../assets/css modules/Features.css';
import DeviderWithName from './../common/DeviderWithName';

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <DeviderWithName name="تیم اسکیلاپ" />
          <p className="text-center">حرفه ای تر از لئون د حرفه ای</p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {' '}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4 className="text-center">{d.name}</h4>
                      <p
                        className="text-center"
                        style={{ marginBottom: '80px' }}
                      >
                        {d.job}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
