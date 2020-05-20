import React, { useState } from 'react';
import { InputForm, FormValues } from './InputForm/InputForm';
import { Results } from './Results/Resutls';
import { Model, Bodies, Aspect } from '../domain/model';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './Home.scss';
import { Chart } from './Chart/Chart';

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
  const [results2, setResults2] = useState<TransitToNatalAspect[]>([]);
  const [results3, setResults3] = useState<TransitToNatalAspect[]>([]);

  async function handleSubmit({
    startDate,
    endDate,
    startDate2,
    startDate3
  }: FormValues) {
    const result = await ephemerisModel.calculateImportantDates(
      startDate,
      endDate
    );

    setResults(result);

    if (startDate2) {
      const result2 = await ephemerisModel.calculateImportantDates(
        startDate2,
        endDate
      );

      setResults2(result2);
    }

    if (!startDate2 && results2) {
      setResults2([]);
    }

    if (startDate3) {
      const result3 = await ephemerisModel.calculateImportantDates(
        startDate3,
        endDate
      );

      setResults3(result3);
    }

    if (!startDate3 && results3) {
      setResults3([]);
    }
  }

  return (
    <div className={styles.container} data-tid="container">
      <InputForm onSubmit={handleSubmit} />
      <Tabs>
        <TabList>
          <Tab>Table View</Tab>
          <Tab>Chart</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.resultsWrapper}>
            <Results content={results} />
            <Results content={results2} />
            <Results content={results3} />
          </div>
        </TabPanel>
        <TabPanel>
          <Chart />
        </TabPanel>
      </Tabs>
    </div>
  );
}
