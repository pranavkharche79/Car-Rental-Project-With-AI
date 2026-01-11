import { Star, Users, Gauge, Fuel } from 'lucide-react';
import { Car } from '../data/cars';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {!car.available && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Not Available
          </div>
        )}
        {car.available && car.category === 'electric' && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Eco-Friendly
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.brand}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{car.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 my-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span className="capitalize">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span className="capitalize">{car.fuel}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {car.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              ${car.pricePerDay}
              <span className="text-sm text-gray-500 font-normal">/day</span>
            </p>
          </div>
          <button
            onClick={() => navigate(`/car/${car.id}`)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              car.available
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!car.available}
          >
            {car.available ? 'View Details' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}
