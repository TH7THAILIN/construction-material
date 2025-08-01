import React from "react";

const MyAccount = () => {
  return (
    <section className="py-17.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-10">
          <h1 className="font-semibold text-xl xl:text-heading-3 text-dark mb-2">
            My Account
          </h1>
          <p className="text-gray-5">Manage your account and order history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-3 bg-white p-6">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gray-1"></div>
                <h3 className="font-semibold text-lg text-dark">John Doe</h3>
                <p className="text-gray-5">john.doe@example.com</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="block rounded px-4 py-2 text-blue-500 bg-blue-50">
                  Dashboard
                </a>
                <a href="#" className="block rounded px-4 py-2 text-gray-5 hover:bg-gray-1">
                  Orders
                </a>
                <a href="#" className="block rounded px-4 py-2 text-gray-5 hover:bg-gray-1">
                  Wishlist
                </a>
                <a href="#" className="block rounded px-4 py-2 text-gray-5 hover:bg-gray-1">
                  Profile
                </a>
                <a href="#" className="block rounded px-4 py-2 text-gray-5 hover:bg-gray-1">
                  Logout
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-gray-3 bg-white p-8">
              <h2 className="font-semibold text-xl text-dark mb-6">Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="rounded-lg bg-blue-50 p-6 text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2">5</div>
                  <div className="text-gray-5">Total Orders</div>
                </div>
                <div className="rounded-lg bg-green-50 p-6 text-center">
                  <div className="text-2xl font-bold text-green-500 mb-2">3</div>
                  <div className="text-gray-5">Completed</div>
                </div>
                <div className="rounded-lg bg-orange-50 p-6 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">12</div>
                  <div className="text-gray-5">Wishlist Items</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-dark mb-4">Recent Orders</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-3">
                        <th className="pb-3 font-medium text-dark">Order ID</th>
                        <th className="pb-3 font-medium text-dark">Date</th>
                        <th className="pb-3 font-medium text-dark">Status</th>
                        <th className="pb-3 font-medium text-dark">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 text-gray-5">#12345</td>
                        <td className="py-3 text-gray-5">Jan 15, 2025</td>
                        <td className="py-3">
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                            Completed
                          </span>
                        </td>
                        <td className="py-3 font-medium text-dark">$299.99</td>
                      </tr>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 text-gray-5">#12344</td>
                        <td className="py-3 text-gray-5">Jan 10, 2025</td>
                        <td className="py-3">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                            Processing
                          </span>
                        </td>
                        <td className="py-3 font-medium text-dark">$149.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
