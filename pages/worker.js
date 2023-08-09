import Layout from '../components/Layout';
import LineChartComponent from '../components/LineChartComponent';

const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 150 },
];


export default function Worker() {
    return (
        <Layout>
            <div>
                <LineChartComponent data={data} />
            </div>
        </Layout>
      );
}