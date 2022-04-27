import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    User: 4000,
    Revenu: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    User: 3000,
    Revenu: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    User: 2000,
    Revenu: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    User: 2780,
    Revenu: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    User: 1890,
    Revenu: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    User: 2390,
    Revenu: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    User: 3490,
    Revenu: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    User: 3490,
    Revenu: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    User: 3490,
    Revenu: 3000,
    amt: 2100,
  },
  {
    name: 'Oct',
    User: 3490,
    Revenu: 1300,
    amt: 2100,
  },
  {
    name: 'Nov',
    User: 3490,
    Revenu: 2300,
    amt: 2100,
  },
  {
    name: 'Dec',
    User: 349,
    Revenu: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
              
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="Revenu" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="User" strokeOpacity={opacity.uv} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
   
      </div>
    );
  }
}
