// // src/components/Footer.js

// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-gray-100 py-10 px-5 font-sans">
//             <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
//                 {/* Section 1: Brand/About & Newsletter */}
//                 <div className="flex-1 min-w-[300px] m-4 md:text-left text-center">
//                     <h3 className="text-3xl font-bold mb-4 text-green-500">YourBrand</h3>
//                     <p className="text-sm text-gray-400 mb-6">
//                         We are dedicated to providing the best solutions for your needs.
//                         Connecting you to quality and innovation.
//                     </p>
//                     <div className="mt-6">
//                         <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated!</h4>
//                         <p className="text-sm text-gray-400 mb-3">Join our newsletter for exclusive offers and updates.</p>
//                         <form className="flex md:flex-row flex-col items-center">
//                             <input
//                                 type="email"
//                                 placeholder="Your email address"
//                                 aria-label="Enter your email for newsletter"
//                                 className="flex-grow p-3 border-none rounded-md md:rounded-r-none outline-none text-gray-800 mb-3 md:mb-0 w-full md:w-auto"
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md md:rounded-l-none cursor-pointer transition-colors duration-300 w-full md:w-auto"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Section 2: Quick Links */}
//                 <div className="flex-1 min-w-[180px] m-4 text-center md:text-left">
//                     <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
//                     <ul className="list-none p-0">
//                         <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">About Us</a></li>
//                         <li className="mb-2"><a href="/services" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Our Services</a></li>
//                         <li className="mb-2"><a href="/products" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Products</a></li>
//                         <li className="mb-2"><a href="/blog" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Blog</a></li>
//                         <li className="mb-2"><a href="/careers" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Careers</a></li>
//                     </ul>
//                 </div>

//                 {/* Section 3: Support */}
//                 <div className="flex-1 min-w-[180px] m-4 text-center md:text-left">
//                     <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
//                     <ul className="list-none p-0">
//                         <li className="mb-2"><a href="/faq" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">FAQ</a></li>
//                         <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Contact Us</a></li>
//                         <li className="mb-2"><a href="/privacy" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Privacy Policy</a></li>
//                         <li className="mb-2"><a href="/terms" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Terms of Service</a></li>
//                         <li className="mb-2"><a href="/sitemap" className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm">Sitemap</a></li>
//                     </ul>
//                 </div>

//                 {/* Section 4: Contact Info */}
//                 <div className="flex-1 min-w-[200px] m-4 text-center md:text-left">
//                     <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
//                     <p className="text-sm text-gray-400 mb-2">
//                         123 Main Street,<br />
//                         Ambernath, Maharashtra, India<br />
//                         Pin: 421501
//                     </p>
//                     <p className="text-sm text-gray-400 mb-2">Email: <a href="mailto:info@yourbrand.com" className="hover:text-green-500 transition-colors duration-200">info@yourbrand.com</a></p>
//                     <p className="text-sm text-gray-400">Phone: <a href="tel:+911234567890" className="hover:text-green-500 transition-colors duration-200">+91 12345 67890</a></p>
//                 </div>
//             </div>

//             {/* Bottom Bar: Social Media & Copyright */}
//             <div className="border-t border-gray-700 mt-8 pt-6 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center">
//                 <div className="flex space-x-6 mb-4 md:mb-0">
//                     <a href="https://facebook.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-green-500 text-2xl transition-colors duration-200">
//                         <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
//                     </a>
//                     <a href="https://twitter.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-green-500 text-2xl transition-colors duration-200">
//                         <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="https://linkedin.com/company/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 text-2xl transition-colors duration-200">
//                         <i className="fab fa-linkedin-in"></i>
//                     </a>
//                     <a href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-green-500 text-2xl transition-colors duration-200">
//                         <i className="fab fa-instagram"></i>
//                     </a>
//                 </div>
//                 <div className="text-sm text-gray-400">
//                     © {new Date().getFullYear()} YourBrand. All rights reserved.
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;