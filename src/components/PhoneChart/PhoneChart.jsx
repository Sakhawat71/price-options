import axios from "axios";
import { useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Watch } from "react-loader-spinner";

const PhoneChart = () => {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useState(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;

                const phoneNewObj = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneNewObj);
                setLoading(false)
            })
    }, [])

    console.log(phones)

    return (
        <div className="mx-auto">
            <div className="flex justify-center ">
                {loading && <Watch
                    height="80"
                    width="80"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />}
            </div>
            <div>
                <BarChart width={1250} height={250} data={phones}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey={'price'} fill="blue"></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PhoneChart;