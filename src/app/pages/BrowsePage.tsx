import { useState } from 'react';
import { cars, Car } from '../data/cars';
import { CarCard } from '../components/CarCard';
import { SlidersHorizontal } from 'lucide-react';

export function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'suv', label: 'SUV' },
    { value: 'sports', label: 'Sports' },
    { value: 'electric', label: 'Electric' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-150', label: '$0 - $150' },
    { value: '150-250', label: '$150 - $250' },
    { value: '250+', label: '$250+' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Rating' },
  ];

  const filterCars = () => {
    let filtered = [...cars];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((car) => car.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      if (priceRange === '0-150') {
        filtered = filtered.filter((car) => car.pricePerDay <= 150);
      } else if (priceRange === '150-250') {
        filtered = filtered.filter(
          (car) => car.pricePerDay > 150 && car.pricePerDay <= 250
        );
      } else if (priceRange === '250+') {
        filtered = filtered.filter((car) => car.pricePerDay > 250);
      }
    }

    // Sort
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  const filteredCars = filterCars();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Browse Our Fleet
          </h1>
          <p className="text-gray-600">
            Find the perfect vehicle for your journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCars.length}</span>{' '}
            vehicles
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No vehicles found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
