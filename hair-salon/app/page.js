'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

export default function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-[url('/Puro3.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[url(/images/Censad11.jpeg)] bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-green px-4 pb-60">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-600">Welcome to Brows/Lashes</h1>
              <p className="text-xl mb-8 text-amber-600">Training of Ilashladies, a beauty segment under the Puro_Beauty Company</p>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Register Here
              </button>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <div className="container mx-auto p-6">
          <p className="text-xl text-gray-800 leading-8 font-light italic bg-white/80 p-6 rounded-lg shadow-md border border-gray-200">
            Hello and welcome! My name is <strong className="font-semibold text-gray-900">PECULIAR UWAOMA</strong>, and I'll be your instructor throughout this exciting training. This is a <em>life-changing course</em>, especially if you're looking to acquire a new skill that can start putting serious money into your pocket.
            <br /><br />
            Our online courses are hosted on the <strong>Telegram app</strong>, which is just like WhatsApp. <strong className="text-green-600">Class starts immediately after you register</strong> — no waiting.
            <br /><br />
            These are <strong>not live classes</strong>; all videos are already recorded and waiting for you in the class. You'll have <strong>unlimited access for 3 months</strong> and direct access to ask questions whenever you need help.
            <br /><br />
            <span className="text-red-600 font-semibold uppercase">Class starts immediately you register!</span>
            <br /><br />
            👉 <strong>Register now via bank transfer</strong>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="ml-4 bg-amber-500 hover:bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Register Here
            </button>
            <br /><br />
            💸 <strong>Course Fees:</strong><br />
            – Brow Class: ₦3,000<br />
            – Lashes Class: ₦3,000<br />
            – Both (Brow + Lashes): ₦6,000
          </p>
        </div>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">STUDENTS REVIEWS 👇🏽</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                name: "Priscilla from Edo State",
                image: "/whatsapp1.jpeg"
              },
              { 
                name: "Deborah",
                image: "/whatsapp2.jpeg"
              },
              { 
                name: "Christy", 
                image: "/whatsapp3.jpeg"
              }
            ].map((student, index) => (
              <div key={index} className="text-center">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
                <p className="mt-2 font-medium">{student.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button 
                onClick={() => setShowBookingForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <BookingForm />        
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}