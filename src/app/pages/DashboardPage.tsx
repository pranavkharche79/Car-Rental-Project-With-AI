import { Calendar, Car, CreditCard, User, Clock, MapPin } from 'lucide-react';

export function DashboardPage() {
  const bookings = [
    {
      id: '1',
      carName: 'Mercedes S-Class',
      pickupDate: '2026-01-15',
      returnDate: '2026-01-18',
      status: 'active',
      total: 750,
    },
    {
      id: '2',
      carName: 'Tesla Model 3',
      pickupDate: '2025-12-20',
      returnDate: '2025-12-25',
      status: 'completed',
      total: 900,
    },
    {
      id: '3',
      carName: 'Porsche 911',
      pickupDate: '2026-02-01',
      returnDate: '2026-02-03',
      status: 'upcoming',
      total: 700,
    },
  ];

  const stats = [
    { label: 'Total Bookings', value: '12', icon: Calendar, color: 'blue' },
    { label: 'Active Rentals', value: '1', icon: Car, color: 'green' },
    { label: 'Total Spent', value: '$8,450', icon: CreditCard, color: 'purple' },
    { label: 'Member Since', value: 'Jan 2025', icon: User, color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            My Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your bookings and account information
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600',
            };
            return (
              <div key={stat.label} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      colorClasses[stat.color as keyof typeof colorClasses]
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">john.doe@email.com</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                <Car className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold">Browse Cars</p>
                  <p className="text-sm text-gray-600">Find your next ride</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold">View Bookings</p>
                  <p className="text-sm text-gray-600">Check your rentals</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold">Payment Methods</p>
                  <p className="text-sm text-gray-600">Manage payments</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                <User className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold">Account Settings</p>
                  <p className="text-sm text-gray-600">Update preferences</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">My Bookings</h3>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-lg">{booking.carName}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'active'
                            ? 'bg-green-100 text-green-600'
                            : booking.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Pick-up: {booking.pickupDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Return: {booking.returnDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        ${booking.total}
                      </p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
