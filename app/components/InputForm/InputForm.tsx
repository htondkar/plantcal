import React, { useState } from 'react';
import moment from 'moment';

import styles from './inputForm.scss';

interface Props {
  onSubmit: (values: Values) => void;
}

interface Values {
  date: Date;
}

export const InputForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [date, setDate] = useState<Date | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (date) {
      onSubmit({ date });
    } else {
      // eslint-disable-next-line no-alert
      alert('Set a date!');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const newDate = e.target.valueAsDate;
      if (moment.isDate(newDate)) {
        setDate(newDate);
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Date is not valid');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Enter a date"
        value={moment(date).isValid() ? moment(date).format('YYYY-MM-DD') : ''}
        onChange={handleChange}
      />
      <button type="submit">Calculate</button>
    </form>
  );
};
