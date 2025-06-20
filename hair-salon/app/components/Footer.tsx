 import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-300 transition">Home</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Puro_Beauty</span>
              </li>
              <li className="flex items-center gap-2">
                <span></span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <span>purofashion.beauty@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/1M8a1Re4dL/?mibextid=wwXIfr
" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-green-300 transition" />
              </Link>
              <Link href="https://www.facebook.com/share/197mbQMfNt/?mibextid=wwXIfr
" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-green-300 transition" />
              </Link>
              <Link href="https://www.instagram.com/ilashladies?igsh=MTg2MjB3YzZrcnRsdQ%3D%3D&utm_source=qr
" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-green-300 transition" />
              </Link>
              <Link href="https://www.instagram.com/puro_beauty_salon/profilecard/?igsh=MTRwZWJhamY3MWdyaw==
" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-green-300 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Puro_Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}