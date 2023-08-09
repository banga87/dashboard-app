import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";


const LineChartComponent = ({ data }) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="value" stroke="#F15F2" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}

export default LineChartComponent;