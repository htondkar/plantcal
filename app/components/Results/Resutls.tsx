/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import styles from './styles.scss';

interface Props {
  baseDate: Date;
}

export const Results: React.FunctionComponent<Props> = ({ baseDate }) => {

  return <section className={styles.root}>Root</section>;
};
