import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js';

interface Props {}

export const Chart: React.FunctionComponent<Props> = props => {
  const canvasRef = React.createRef<HTMLCanvasElement>();
  const chartInstance = React.createRef<Chart | null>();

  useEffect(() => {
    if (canvasRef.current) {
      chartInstance.current = new ChartJS(canvasRef.current, {
        type: 'line',
        data: {}
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};
