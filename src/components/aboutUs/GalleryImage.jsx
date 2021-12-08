export const GalleryImage = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {' '}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text text-center">
            <h4 className="text-center">{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{' '}
        </a>{' '}
      </div>
    </div>
  );
};
