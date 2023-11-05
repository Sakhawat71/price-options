import axios from "axios";
import { useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PhoneChart = () => {

    const [phones,setPhones] = useState([]);
    useState(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;

            const phoneNewObj = phoneData.map(phone => {
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phoneNewObj);
        })
    },[])

    console.log(phones)

    return (
        <div className="flex mx-auto">
            <BarChart width={1250} height={250} data={phones}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'price'} fill="blue"></Bar>
            </BarChart>
        </div>
    );
};

export default PhoneChart;