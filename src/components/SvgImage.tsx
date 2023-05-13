import React, {memo} from 'react';

import {SvgProps} from 'react-native-svg';
import {COLORS} from '@src/constants';
import {SVG_IMAGES} from '@src/constants/SvgImages';

export type SvgImageName = keyof typeof SVG_IMAGES;

export type SvgImageProps = SvgProps & {
  name: SvgImageName;
  color?: string;
  type?: 'icon' | 'illustration';
};

const SvgImage = ({
  name,
  color = COLORS.BLACK,
  type = 'icon',
  ...props
}: SvgImageProps) => {
  const SVG = SVG_IMAGES[name];
  return (
    <SVG
      fill={type === 'icon' ? color : COLORS.WHITE}
      fillOpacity={1}
      {...props}
      accessible
    />
  );
};

const Memoized = memo(SvgImage);

export {Memoized as SvgImage};
