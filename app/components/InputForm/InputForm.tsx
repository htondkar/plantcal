import React, { useState } from 'react';
import moment from 'moment';
import Collapsible from 'react-collapsible';

import styles from './inputForm.scss';

interface Props {
  onSubmit: (values: FormValues) => void;
}

export interface FormValues {
  startDate: Date;
  endDate: Date;
  startDate2: Date | null;
  startDate3: Date | null;
}

export const InputForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startDate2, setStartDate2] = useState<Date | null>(null);
  const [startDate3, setStartDate3] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (startDate && endDate) {
      onSubmit({ startDate, endDate, startDate2, startDate3 });
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
        <Collapsible
          trigger={<a>Second start date</a>}
          onClose={() => setStartDate2(null)}
        >
          <input
            type="date"
            id="start-date-2"
            placeholder="Enter start date #2"
            value={
              moment(startDate2).isValid()
                ? moment(startDate2).format('YYYY-MM-DD')
                : ''
            }
            onChange={handleChange(setStartDate2)}
          />
        </Collapsible>
        <Collapsible
          trigger={<a>Third start date</a>}
          onClose={() => setStartDate3(null)}
        >
          <input
            type="date"
            id="start-date-3"
            placeholder="Enter start date #3"
            value={
              moment(startDate3).isValid()
                ? moment(startDate3).format('YYYY-MM-DD')
                : ''
            }
            onChange={handleChange(setStartDate3)}
          />
        </Collapsible>
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
