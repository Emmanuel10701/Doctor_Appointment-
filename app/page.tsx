"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Import the arrow icon

const HeroSection: React.FC = () => {
  // Declare an array of specialties
  const specialties = [
    { name: 'Dentist', image: '/assets/assets_frontend/dentist.jpg' },
    { name: 'Cardiologist', image: '/assets/assets_frontend/cardiologist.jpg' },
    { name: 'Dermatologist', image: '/assets/assets_frontend/dermatologist.png' },
    { name: 'Pediatrician', image: '/assets/assets_frontend/pediatrician.jpg' },
    { name: 'Orthopedist', image: '/assets/assets_frontend/orthopedist.png' },
    { name: 'Neurologist', image: '/assets/assets_frontend/neurologist.jpg' },
    { name: 'Gynecologist', image: '/assets/assets_frontend/gynecologist.png' },
  ];

  // Declare an array of doctors
  const doctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'Dentist', image: '/assets/assets_frontend/dr1.jpg', available: true },
    { id: 2, name: 'Dr. Jones', specialty: 'Cardiologist', image: '/assets/assets_frontend/dr2.jpg', available: false },
    { id: 3, name: 'Dr. Brown', specialty: 'Dermatologist', image: '/assets/assets_frontend/dr3.jpg', available: true },
    { id: 4, name: 'Dr. Williams', specialty: 'Pediatrician', image: '/assets/assets_frontend/dr4.jpg', available: true },
    { id: 5, name: 'Dr. Johnson', specialty: 'Orthopedist', image: '/assets/assets_frontend/dr5.jpg', available: false },
    { id: 6, name: 'Dr. Lee', specialty: 'Neurologist', image: '/assets/assets_frontend/dr6.jpg', available: true },
    { id: 7, name: 'Dr. Kim', specialty: 'Gynecologist', image: '/assets/assets_frontend/dr7.jpg', available: true },
    { id: 8, name: 'Dr. Patel', specialty: 'Dentist', image: '/assets/assets_frontend/dr8.jpg', available: true },
    { id: 9, name: 'Dr. Garcia', specialty: 'Cardiologist', image: '/assets/assets_frontend/dr9.jpg', available: true },
    { id: 10, name: 'Dr. Martinez', specialty: 'Dermatologist', image: '/assets/assets_frontend/dr10.jpg', available: false },
  ];

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const filterDoctors = (specialty: string) => {
    setSelectedSpecialty(specialty);
    const filtered = specialty === '' ? doctors : doctors.filter(doctor => doctor.specialty === specialty);
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <div className="hero min-h-screen md:flex flex-col-reverse bg-blue-100">
        <div className="hero-overlay bg-opacity-60 flex flex-row">
          <div className="hero-content text-neutral-content flex flex-col justify-center w-6/12 p-8"> {/* 60% width for text */}
            <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Book Appointment With Trusted Doctors
            </h1>
            
            <div className="flex items-center mb-4">
              <Image
                src="/assets/assets_frontend/group_profiles.png"
                alt="Group of healthcare professionals"
                width={60}
                height={50}
                className="object-cover"
              />
              <p className="mb-5 text-sm text-slate-500 ml-4">
                Get personalized care tailored to your needs with our dedicated team of experienced healthcare professionals.
              </p>
            </div>

            <p className="mb-5 text-sm text-slate-500">
              Your health is our priority, and we are here to support you every step of the way.
            </p>

            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded flex items-center w-1/2">
                Book Appointment <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          <div className="flex-none w-6/12"> {/* 40% width for image */}
            <Image
              src="/assets/assets_frontend/header_img.png"
              alt="Doctor with patient"
              width={300}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-5">
          Find Your Specialty
        </h1>
        <p className="text-md text-slate-500 mb-8">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>

        <div className="flex justify-center flex-wrap mb-10">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center mx-4 mb-6">
              <Image
                src={specialty.image}
                alt={specialty.name}
                width={100}
                height={100}
                className="rounded-full object-cover cursor-pointer"
                onClick={() => filterDoctors(specialty.name)}
              />
              <h2 className="mt-2 text-sm text-slate-600 capitalize">{specialty.name}</h2>
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-5">
          Top Doctors
        </h1>
      </div>

      {/* Doctors Cards Section */}
      <div className="flex flex-wrap gap-8 mx-20 ">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="border rounded-lg overflow-hidden shadow-md">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={140}
              height={90}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className={`text-sm font-bold ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
                {doctor.available ? '. Available' : ' . Not Available'}
              </span>
              <h2 className="mt-2 text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm text-slate-500">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center my-10">
        <button className="bg-indigo-200 hover:bg-indigo-300 text-slate-700 py-3 px-4 rounded-full  hover:bg-slate-1000">
          Load More
        </button>
      </div>

      {/* Banner Section */}
      <div className="flex items-center mx-auto   justify-center w-[78%] rounded-lg h-[88%] bg-blue-600 text-white p-10">
     
        <div className="w-1/2 flex flex-col justify-center p-5">
          <h1 className="text-3xl font-bold mb-4">Create Your Account Today</h1>
          <p className="mb-4">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded">
              Create Account
            </button>
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded">
              Book Appointment
            </button>
          </div>
       
        </div>
        <div className="w-1/2">
          <Image
            src="/assets/assets_frontend/appointment_img.png" // Replace with your actual banner image
            alt="Banner"
            width={300}
            height={190}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
