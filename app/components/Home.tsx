import React, { useState } from 'react';
import { InputForm } from './InputForm/InputForm';
import { Results } from './Results/Resutls';
import { Model, Bodies, Aspect } from '../domain/model';

import styles from './Home.scss';

const ephemerisModel = new Model();

export type TransitToNatalAspect = {
  date: Date;
} & Partial<
  {
    [key in 'sun' | 'mars' | 'jupiter' | 'saturn']: Record<
      Bodies,
      { aspect: Aspect; actualAngle: number }
    >;
  }
>;

export default function Home() {
  const [results, setResults] = useState<TransitToNatalAspect[]>([]);

  function handleSubmit({
    startDate,
    endDate
  }: {
    startDate: Date;
    endDate: Date;
  }) {
    if (startDate && endDate) {
      ephemerisModel
        .calculateImportantDates(startDate, endDate)
        .then(setResults);
    }
  }

  return (
    <div className={styles.container} data-tid="container">
      <InputForm onSubmit={handleSubmit} />
      {results && <Results content={results} />}
    </div>
  );
}
