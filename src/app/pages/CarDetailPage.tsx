import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import {
  ArrowLeft,
  Star,
  Users,
  Gauge,
  Fuel,
  Check,
  Calendar,
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CarDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Car not found
          </h1>
          <button
            onClick={() => navigate('/browse')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    if (!pickupDate || !returnDate) return 0;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days * car.pricePerDay : 0;
  };

  const totalPrice = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Car Image */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Car Specs */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Seats</p>
                    <p className="font-semibold">{car.seats} People</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-semibold capitalize">{car.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Fuel className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fuel Type</p>
                    <p className="font-semibold capitalize">{car.fuel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-semibold">
                      {car.rating} ({car.reviews} reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Car Info & Booking */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {car.name}
                    </h1>
                    <p className="text-gray-500 mt-1">{car.brand}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{car.rating}</span>
                  </div>
                </div>
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm capitalize">
                  {car.category}
                </span>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold mb-4">Book This Car</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pick-up Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {totalPrice > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Daily Rate:</span>
                        <span className="font-semibold">
                          ${car.pricePerDay}/day
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">
                          {Math.ceil(
                            (new Date(returnDate).getTime() -
                              new Date(pickupDate).getTime()) /
                              (1000 * 60 * 60 * 24)
                          )}{' '}
                          days
                        </span>
                      </div>
                      <div className="border-t border-blue-200 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Total:</span>
                          <span className="text-2xl font-bold text-blue-600">
                            ${totalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    disabled={!car.available || !pickupDate || !returnDate}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      car.available && pickupDate && returnDate
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {car.available ? 'Book Now' : 'Not Available'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
