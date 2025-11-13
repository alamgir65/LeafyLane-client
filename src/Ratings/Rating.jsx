import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; 
import demo from "../assets/person3.jpg";

const Rating = ({ item }) => {
    const {
        rating,
        review,
        property_name,
        reviewer_name,
        reviewer_image,
        property_image,
        created_at,
    } = item;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="bg-primary p-7 h-full text-white rounded-lg">
            <div className="flex gap-3 mb-4 items-center">
                <img
                    src={property_image ? property_image : demo}
                    className="w-40 h-18 rounded-xl object-cover"
                    alt={property_name}
                />
                <div>
                    <h1 className="text-xl font-bold">{property_name}</h1>
                </div>
            </div>

            <div>
                <div className="flex items-center mb-2">{renderStars(rating)}</div>
                <p className="italic">"{review}"</p>

                <div className="flex justify-between items-center mt-8">
                    <div className="flex gap-3 items-center">
                        <img
                            src={reviewer_image? reviewer_image : demo}
                            className="w-12 h-12 rounded-full object-cover"
                            alt={reviewer_name}
                        />
                        <p className="font-semibold">{reviewer_name}</p>
                    </div>
                    <p className="text-sm opacity-75">{created_at}</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;
