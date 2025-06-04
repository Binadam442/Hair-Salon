   'use client'; // Add this for interactivity

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { FACILITIES } from './constants/Facilities';

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
              <p className="text-xl mb-8 text-amber-600">Training of Ilashladies, a beauty segment under the Puro_Beauty Company </p>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-600 hover:bg-green-700 text-green px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Register Here
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Section - NEW */}
        
        {/* Cafe Promo */}
        <p className="text-xl text-gray-800 leading-8 font-light italic bg-white/80 p-6 rounded-lg shadow-md border border-gray-200">
  Hello and welcome! My name is <strong className="font-semibold text-gray-900">PECULIAR UWAOMA</strong>, and I’ll be your instructor throughout this exciting training. This is a <em>life-changing course</em>, especially if you're looking to acquire a new skill that can start putting serious money into your pocket.
  <br /><br />
  Our online courses are hosted on the <strong>Telegram app</strong>, which is just like WhatsApp. <strong className="text-green-600">Class starts immediately after you register</strong> — no waiting.
  <br /><br />
  These are <strong>not live classes</strong>; all videos are already recorded and waiting for you in the class. You’ll have <strong>unlimited access for 3 months</strong> and direct access to ask questions whenever you need help.
  <br /><br />
  <span className="text-red-600 font-semibold uppercase">Class starts immediately you register!</span>
  <br /><br />
  👉 <strong>Register now via bank transfer</strong> <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-500 hover:bg-green-500 text-green px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Register Here
              </button>
  <br /><br />
  💸 <strong>Course Fees:</strong><br />
  – Brow Class: ₦2,500<br />
  – Lashes Class: ₦2,500<br />
  – Both (Brow + Lashes): ₦5,000
</p>


           
{/* Testimonials Section with Images */}
<section className="py-16 container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12">STUDENTS REVIEWS 👇🏽</h2>
  <div className=" gap-8">
    {[
      { 
        quote: "This class made learning so easy, it is as good as a physical training. No different at all. It's been 1month and I am working on clients. Thank you ma", 
        author: "Mercy",
        image: "/Puro20.jpeg", // Add your image path
        role: "Student" // Optional role/title
      },
      { 
        quote: "Who would have thought that your online training would teach me all I needed to know about semi permanent lashes and brows. At first I said to myself, the money is not much, might as well just spend it and see. Today I am so so good at it all. Mama thank you o",
        author: "Blessing",
        image: "/Puro21.jpeg",
        role: "Student"
      },
      { 
        quote: "I had big doubt that I would catch since I live far away from your physical shop. Today I am glad I made this bold step. I am now a certified lashes and brows artist. Thank you ma", 
        author: "Root",
        image: "/Puro22.jpeg",
        role: "Student"
      },
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
        {/* Testimonial Text */}
        <p className="text-gray-600 italic mb-6">"{item.quote}"</p>
        
        {/* Author Info with Image */}
        <div className="flex items-center">
          <div className="relative h-36 w-48 rounded-full overflow-hidden mr-4 border-2 border-amber-500">
            <Image
              src={item.image}
              alt={`${item.author}'s profile`}
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">{item.author}</p>
            {item.role && (
              <p className="text-sm text-gray-500">{item.role}</p>
            )}
          </div>
        </div>
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