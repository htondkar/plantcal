import React, { useState } from 'react';
import { PositionWithDate } from '../Home';
import moment from 'moment';
import numeral from 'numeral';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import CheckboxGroup from 'react-checkbox-group';

interface Props {
  results: PositionWithDate[];
}

const showablePlanets = [
  { value: 'sun', label: 'sun' },
  { value: 'mars', label: 'mars' },
  { value: 'moon', label: 'moon' },
  { value: 'mercury', label: 'mercury' },
  { value: 'venus', label: 'venus' },
  { value: 'jupiter', label: 'jupiter' },
  { value: 'saturn', label: 'saturn' },
  { value: 'uranus', label: 'uranus' },
  { value: 'neptune', label: 'neptune' },
  { value: 'pluto', label: 'pluto' }
];

const colors = {
  sun: 'orange',
  mars: 'red',
  moon: 'darkblue',
  mercury: '',
  venus: 'hotpink',
  jupiter: 'yellow',
  saturn: 'purple',
  uranus: 'brown',
  neptune: 'blue',
  pluto: 'grey'
};

export const PositionsTable: React.FunctionComponent<Props> = ({ results }) => {
  const [planetsToShow, setPlanetsToShow] = useState<string[]>([
    'moon',
    'saturn'
  ]);

  const firstRow = results[0];

  if (!firstRow) {
    return <div>No results!</div>;
  }

  const { date, ...planets } = firstRow;
  const planetsInvolved = Object.keys(planets);

  const stickyTop: React.CSSProperties = {
    position: 'sticky',
    top: 0
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Table View</Tab>
        <Tab>Chart</Tab>
      </TabList>

      <TabPanel>
        <table style={{ position: 'relative' }}>
          <thead>
            <tr>
              <th style={stickyTop}>Date</th>
              {planetsInvolved.map((planetName, index) => (
                <th style={stickyTop} key={index}>
                  {planetName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map(({ date, ...planetsPositions }) => (
              <tr key={date.toDateString()}>
                <td>{moment(date).format('YYYY-MM-DD')}</td>
                {Object.entries(planetsPositions).map(
                  ([__, { latitude }], index) => (
                    <td key={index}>{numeral(latitude).format('0[.]000')}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </TabPanel>

      <TabPanel>
        <LineChart
          width={1500}
          height={800}

          data={extractLatitudes(results)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="date" stroke="white" />

          <YAxis stroke="white" />

          <Tooltip contentStyle={{color: 'black'}}/>

          {planetsToShow.map(planet => (
            <Line
              key={planet}
              type="monotone"
              dataKey={planet}
              stroke={colors[planet]}
            />
          ))}
        </LineChart>

        <CheckboxGroup
          name="fruits"
          value={planetsToShow}
          onChange={setPlanetsToShow}
        >
          {Checkbox => (
            <>
              {showablePlanets.map(planet => (
                <label key={planet.value}>
                  <Checkbox value={planet.value} /> {planet.label}
                </label>
              ))}
            </>
          )}
        </CheckboxGroup>
      </TabPanel>
    </Tabs>
  );
};

function extractLatitudes(positions: PositionWithDate[]) {
  return positions.map(({ date, ...planets }) => ({
    date: moment(date).format('YY-M-D'),
    ...Object.fromEntries(
      Object.entries(planets).map(([planet, position]) => [
        planet,
        position.latitude
      ])
    )
  }));
}
