import { Search, Shield, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import { CarCard } from '../components/CarCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const navigate = useNavigate();
  const featuredCars = cars.filter((car) => car.available).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1533630217389-3a5e4dff5683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY4MTExNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl mb-8">
              Discover our premium collection of vehicles. From luxury sedans to
              powerful SUVs, we have the perfect car for every journey.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/browse')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Browse Cars
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-lg -mt-20 relative z-10 max-w-5xl mx-auto rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick-up Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick-up Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose DriveNow?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best in car rental services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                All our vehicles come with comprehensive insurance coverage for
                your peace of mind.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is available round the clock to assist
                you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with no hidden fees. What you see is what you
                pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Vehicles
              </h2>
              <p className="text-xl text-gray-600">
                Check out our most popular rentals
              </p>
            </div>
            <Link
              to="/browse"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your perfect car today and enjoy an unforgettable journey
          </p>
          <button
            onClick={() => navigate('/browse')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Booking Now
          </button>
        </div>
      </section>
    </div>
  );
}
