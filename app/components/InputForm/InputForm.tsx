import React, { useState } from 'react';
import moment from 'moment';

import styles from './inputForm.scss';

interface Props {
  onSubmit: (values: Values) => void;
}

interface Values {
  startDate: Date;
  endDate: Date;
}

export const InputForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (startDate && endDate) {
      onSubmit({ startDate, endDate });
    } else {
      // eslint-disable-next-line no-alert
      alert('Set a date!');
    }
  }

  function handleChange(setter: (date: Date) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const newDate = e.target.valueAsDate;
        if (moment.isDate(newDate)) {
          setter(newDate);
        }
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Date is not valid');
      }
    };
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="start-date">Start date</label>
        <input
          type="date"
          id="start-date"
          placeholder="Enter start date"
          value={
            moment(startDate).isValid()
              ? moment(startDate).format('YYYY-MM-DD')
              : ''
          }
          onChange={handleChange(setStartDate)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="end-date">End date</label>
        <input
          type="date"
          id="end-date"
          placeholder="Enter end date"
          value={
            moment(endDate).isValid()
              ? moment(endDate).format('YYYY-MM-DD')
              : ''
          }
          onChange={handleChange(setEndDate)}
        />
      </fieldset>

      <button type="submit" disabled={!startDate || !endDate}>
        Calculate
      </button>
    </form>
  );
};
