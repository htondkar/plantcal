import React, { useState, useEffect } from 'react';
import styles from './Home.css';
import { InputForm } from './InputForm/InputForm';
import { Results } from './Results/Resutls';
import { Model } from '../domain/model';

const ephemerisModel = new Model();

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    if (startDate && endDate) {
      ephemerisModel
        .calculateImportantDates(startDate, endDate)
        .then(console.log);
    }
  }, [startDate, endDate]);

  if (results) {
    console.log(results);
  }

  return (
    <div className={styles.container} data-tid="container">
      <InputForm
        onSubmit={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
      />
      {startDate && <Results baseDate={startDate} />}
    </div>
  );
}
