import {
  Chart, BarSeries, Title, ArgumentAxis, ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';
import { FC, ReactElement } from 'react';

type Props = {
  title: string;
  data: {
    title: string;
    value: unknown;
  }[];
};

const BarChart: FC<Props> = ({ title, data }: Props): ReactElement => (
  <div className="card w-100">
    <Chart
      rotated
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries
        valueField="value"
        argumentField="title"
      />
      <Title text={title} />
      <Animation />
    </Chart>
  </div>
);

export default BarChart;
