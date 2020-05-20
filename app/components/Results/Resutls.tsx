import React from 'react';

import styles from './styles.scss';
import { TransitToNatalAspect } from '../Home';

interface Props {
  content: TransitToNatalAspect[];
}

function formatDate(date: Date) {
  const year = new Intl.DateTimeFormat('en', {
    year: 'numeric'
  }).format(date);
  const month = new Intl.DateTimeFormat('en', {
    month: '2-digit'
  }).format(date);
  const day = new Intl.DateTimeFormat('en', {
    day: '2-digit'
  }).format(date);
  return `${day}-${month}-${year}`;
}

export const Results: React.FunctionComponent<Props> = ({ content }) => {
  return (
    <section className={styles.root}>
      <table>
        <tbody>
          {content.map(({ date, importantAnglesOfTheDay }, index) => {
            return (
              <tr key={`${date}-${index}`}>
                <td>{formatDate(date)}</td>
                <td>
                  {Object.entries(importantAnglesOfTheDay).map(
                    ([planet, { aspect }]) => (
                      <span
                        className={
                          aspect === 'conjunction'
                            ? 'strong'
                            : aspect === 'opposition'
                            ? 'medium'
                            : 'weak'
                        }
                      >
                        {`Sun ${aspect} natal ${planet}`}{' '}
                      </span>
                    )
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
