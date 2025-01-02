import React from 'react';
import { FcFilmReel } from "react-icons/fc";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { DimensionData } from "../data";

interface TheaterListItemProps {
  theater: {
    id: string;
    name: string;
    badge: string;
    address: string;
    dimension: DimensionData[];
  };
  onTimeSelect: (theaterName: string, dimensionCategory: string, time: string, price: string, badge: string) => void;
  selectedDimensionCategory: string;
  selectedTime: string;
}

const TheaterListItem: React.FC<TheaterListItemProps> = ({
  theater,
  onTimeSelect,
  selectedDimensionCategory,
  selectedTime,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <FcFilmReel size={25} />
          <h2 className="font-medium text-xl">{theater.name}</h2>
        </div>
        <div className={`badge ${theater.badge.toLowerCase()} text-white font-bold px-2 py-1 rounded`}>
          {theater.badge}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{theater.address}</p>
      {theater.dimension.map((dimension) => (
        <div key={dimension.dimensionCategory} className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700 uppercase">{dimension.dimensionCategory}</span>
            <span className="flex items-center">
              <FaIndianRupeeSign size={14} className="mr-1" />
              {dimension.price}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {dimension.time.map((time) => (
              <button
                key={time}
                className={`px-3 py-1 text-sm font-medium rounded-md border ${
                  selectedDimensionCategory === dimension.dimensionCategory && selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onTimeSelect(theater.name, dimension.dimensionCategory, time, dimension.price, theater.badge)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheaterListItem;

