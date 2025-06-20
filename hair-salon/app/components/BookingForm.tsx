'use client';

import { FaPhone, FaWhatsapp, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';

export default function BookingForm() {
  const paymentDetails = {
    accountName: "PURO BEAUTY",
    accountNumber: "5360434792",
    bankName: "MoniePoint"
  };

  const contactNumber = "07075585589"; // Primary contact only

   
  return (
    <div className="space-y-4 max-w-md mx-auto p-4">
      {/* Payment Section */}
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <FaMoneyBillWave className="text-purple-600 mr-2" />
          <h3 className="font-bold">Payment Details</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="font-medium">Account Name:</span>
          <span>{paymentDetails.accountName}</span>
          
          <span className="font-medium">Account No:</span>
          <span>{paymentDetails.accountNumber}</span>
          
          <span className="font-medium">Bank:</span>
          <span>{paymentDetails.bankName}</span>
        </div>
      </div>

      {/* Course Prices */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Course Fees</h3>
        <div className="flex justify-between text-sm">
          <span>Brow Class:</span>
          <span className="font-medium">₦3,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Lash Class:</span>
          <span className="font-medium">₦3,000</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-purple-700">
          <span>Both Classes:</span>
          <span>₦6,000</span>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <FaPhone className="text-green-600 mr-2" />
          <h3 className="font-bold">After Payment</h3>
        </div>
        <p className="text-sm mb-2">Send payment receipt to:</p>
        <div className="flex items-center space-x-3 mb-2">
          <a 
            href={`tel:${contactNumber}`}
            className="flex items-center text-blue-600 text-sm"
          >
            <FaPhone className="mr-1" /> Call
          </a>
          <a
            href={`https://wa.me/${contactNumber.replace(/\D/g, '')}`}
            className="flex items-center text-green-600 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-1" /> WhatsApp
          </a>
        </div>
        <div className="text-xs bg-yellow-100 text-red-600 p-2 rounded">
          <FaInfoCircle className="inline mr-1" />
          <strong>Notice:</strong> Messages without payment receipt will be ignored
        </div>
      </div>

      {/* Note */}
      <div className="flex items-start text-xs text-gray-600">
        <FaInfoCircle className="mt-0.5 mr-1 flex-shrink-0" />
        <p>Access granted within 1 hour of payment confirmation. Include your full name when sending proof.</p>
      </div>
    </div>
  );
}