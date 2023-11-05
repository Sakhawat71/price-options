// import PropTypes from 'prop-types';
import { Line, LineChart, XAxis, YAxis } from "recharts";

const ChartLine = () => {

    const studentMarksData = [
        {
          student: "John Smith",
          math: 85,
          physics: 78,
          english: 92,
        },
        {
          student: "Emily Johnson",
          math: 92,
          physics: 88,
          english: 89,
        },
        {
          student: "Michael Davis",
          math: 78,
          physics: 76,
          english: 84,
        },
        {
          student: "Sarah Brown",
          math: 89,
          physics: 90,
          english: 77,
        },
        {
          student: "Daniel Lee",
          math: 95,
          physics: 85,
          english: 91,
        },
        {
          student: "Sophia Wilson",
          math: 72,
          physics: 82,
          english: 75,
        },
        {
          student: "William Martin",
          math: 88,
          physics: 91,
          english: 80,
        },
        {
          student: "Olivia Taylor",
          math: 91,
          physics: 79,
          english: 88,
        },
        {
          student: "James Anderson",
          math: 84,
          physics: 93,
          english: 86,
        },
        {
          student: "Ava White",
          math: 76,
          physics: 87,
          english: 89,
        },
      ];
      



    return (
        <div>
            <LineChart width={1280} height={350} data={studentMarksData}>
                <Line dataKey={'math'} stroke="blue"></Line>
                <Line dataKey={'physics'} stroke="green"></Line>
                <Line dataKey={'english'} stroke="red"></Line>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

// ChartLine.propTypes = {

// };

export default ChartLine;