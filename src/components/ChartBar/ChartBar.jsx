
import { Bar, BarChart, XAxis, YAxis, Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ChartBar = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="my-10">
            <ResponsiveContainer width={"100%"} maxHeight={500} minHeight={300}>

                <BarChart
                    data={data}
                    width={1280}
                    height={500}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis dataKey={'amt'}></YAxis>

                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    {/* <Bar dataKey={'uv'} fill="purple" activeBar={<Rectangle fill="pink" stroke="blue" />}></Bar> */}
                    <Bar dataKey="uv" fill="purple" shape={<Rectangle fill="pink" stroke="blue" />} />

                    <Bar dataKey={'pv'} fill="blue" shape={<Rectangle fill="gold" stroke="purple" />}></Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default ChartBar;