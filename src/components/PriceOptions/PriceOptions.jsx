/* eslint-disable no-unused-vars */

import PriceOption from "../PriceOption.jsx/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99 per month",
            "features": [
                "Access to gym equipment",
                "Standard hours of operation",
                "Locker room access",
                "Free Wi-Fi",
                "Group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99 per month",
            "features": [
                "24/7 access to the gym",
                "Unlimited group fitness classes",
                "Personal trainer consultation",
                "Sauna and steam room access",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$79.99 per month",
            "features": [
                "Access for two adults and up to two children",
                "Full gym access and classes",
                "Childcare services",
                "Towel service",
                "Nutritional counseling"
            ]
        }
    ]


    return (

        <div >
            <h2 className="text-center font-bold text-3xl my-3">We Provide Best Prices in the Town.</h2>

            <div className="flex justify-center mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        priceOptions.map(option => <PriceOption
                            option={option}
                            key={option.id}
                        ></PriceOption>)
                    }
                </div>
            </div>
        </div>
    );
};


export default PriceOptions;