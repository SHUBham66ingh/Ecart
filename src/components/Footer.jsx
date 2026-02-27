import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">E-Cart</h2>
          <p className="text-base leading-relaxed">
            Your one-stop shop for the best products at unbeatable prices.
            Shop smart, shop fast, and shop easy with a seamless experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-base">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Extra Section (for size + professionalism) */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About</h3>
          <p className="text-base leading-relaxed">
            We provide high-quality products with secure checkout and fast delivery.
            Trusted by thousands of happy customers.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-slate-700 py-6 text-center text-base">
        <p>
          Made with <span className="text-red-500 text-lg">❤️</span> from Shubham | © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;