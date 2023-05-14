import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import RNLinearGradient from 'react-native-linear-gradient';

type Direction = 'horizontal' | 'vertical';

export type LinearGradientProps = PropsWithChildren<{
  colors: string[];
  direction?: Direction;
}>;

const LinearGradient: FC<LinearGradientProps> = ({
  children,
  direction = 'horizontal',
  colors,
}) => {
  const {start, end} = coordinates[direction];
  return (
    <RNLinearGradient
      start={start}
      end={end}
      colors={colors}
      style={styles.linearGradient}>
      {children}
    </RNLinearGradient>
  );
};

export {LinearGradient};

const styles = StyleSheet.create({
  linearGradient: {},
});

type Axis = {x: number; y: number};
const coordinates: Record<Direction, {start: Axis; end: Axis}> = {
  horizontal: {
    start: {x: 0, y: 0},
    end: {x: 1, y: 0},
  },
  vertical: {
    start: {x: 0, y: 0},
    end: {x: 1, y: 0},
  },
};
