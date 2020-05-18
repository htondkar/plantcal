import React, { useState } from 'react';
import styles from './Home.css';
import { InputForm } from './InputForm/InputForm';
import { Results } from './Results/Resutls';

export default function Home() {
  const [baseDate, setBaseDate] = useState<Date | null>(null);

  return (
    <div className={styles.container} data-tid="container">
      <InputForm onSubmit={({ date }) => setBaseDate(date)} />
      {baseDate && <Results baseDate={baseDate} />}
    </div>
  );
}
