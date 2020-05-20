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
          {content.map(({ date, ...rest }, index) => {
            return (
              <tr key={`${date}-${index}`}>
                <td>{formatDate(date)}</td>
                <td>
                  {Object.entries(rest).flatMap(([planet, aspects]) =>
                    Object.entries(
                      aspects
                    ).map(([natalPlanet, { aspect }], index) => (
                      <Aspect
                        key={index}
                        aspect={aspect}
                        transitPlanet={planet}
                        natalPlanet={natalPlanet}
                      ></Aspect>
                    ))
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

const Aspect = ({ aspect, transitPlanet, natalPlanet }) => (
  <span
    className={
      aspect === 'conjunction'
        ? 'strong'
        : aspect === 'opposition'
        ? 'medium'
        : 'weak'
    }
  >
    {`${transitPlanet} ${aspect} natal ${natalPlanet}`}{' '}
  </span>
);
