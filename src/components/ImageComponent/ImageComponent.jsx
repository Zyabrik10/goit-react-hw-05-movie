import { Loader } from 'components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function ImageComponent({
  src = '',
  alt = '',
  className = '',
  width = '',
  height = '',
  boxClassName = ''
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.addEventListener('load', () => {
      setIsImageLoaded(true);
    });
  }, [src]);

  return (
    <>
      {!isImageLoaded && (
        <div className={boxClassName}>
          <Loader />
        </div>
      )}
      {isImageLoaded && (
        <img
          className={className}
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </>
  );
}

ImageComponent.apply.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  boxClassName: PropTypes.string,
};
