/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import styles from './styles.scss';

interface Props {
  baseDate: Date;
}

export const Results: React.FunctionComponent<Props> = ({ baseDate }) => {
  // console.log(momentz.get('year'));
  // console.log(momentz.get('month') + 1);
  // console.log(momentz.get('D'));

  swisseph.swe_julday(
    momentz.get('year'),
    momentz.get('month') + 1,
    momentz.get('D'),
    0,
    swisseph.SE_GREG_CAL,
    julday_ut => {
      // Sun position
      swisseph.swe_calc_ut(julday_ut, swisseph.SE_SUN, flag, function(body) {
        console.log('Sun position:', body.longitude);
      });

      // Moon position
      swisseph.swe_calc_ut(julday_ut, swisseph.SE_MOON, flag, function(body) {
        console.log('Moon position:', body.longitude);
      });

      swisseph.swe_calc_ut(julday_ut, swisseph.SE_MARS, flag, function(body) {
        console.log('Mars position:', body.longitude);
      });
    }
  );

  return <section className={styles.root}>Root</section>;
};
