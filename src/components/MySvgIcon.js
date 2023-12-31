import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MySvgIcon = ({color = 'black', size = 24}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
        fill="#6bb463"
        stroke="black"
      />
    </Svg>
  );
};

export default MySvgIcon;
