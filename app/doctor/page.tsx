"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentDetail: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal

  const doctor = {
    name: 'Dr. Smith',
    specialty: 'Dentist 🦷',
    degree: 'DDS (Doctor of Dental Surgery)',
    description: 'Dr. Smith has over 10 years of experience in providing dental care and is committed to ensuring the best outcomes for his patients. He believes in a patient-centered approach, focusing on education and preventive care to empower patients to take charge of their oral health.',
    image: '/assets/assets_frontend/doc1.png',
  };

  const times = ['6:00 AM', '8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      setModalOpen(true);
    } else {
      alert('Please select both date and time.');
    }
  };

  const confirmAppointment = () => {
    setAppointmentConfirmed(true);
    setModalOpen(false);
    console.log({
      doctor: doctor.name,
      specialty: doctor.specialty,
      date: selectedDate,
      time: selectedTime,
    });
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <div className="flex flex-col md:flex-row p-8 mt-32 mx-auto max-w-6xl">
      <div className="w-full md:w-2/6 mb-4 md:mb-0">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={300}
          height={300}
          className="object-cover bg-blue-500 rounded-md shadow-lg"
        />
      </div>

      <div className="w-full md:w-4/6 md:pl-4">
        <div className='border p-4 rounded-lg shadow-md bg-white'>
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            {doctor.name}
            <Image
              src="/images/verify.png"
              alt="verify"
              width={24}
              height={24}
              className="object-cover bg-slate-50 ml-4 rounded-full"
            />
          </h1>
          <h2 className="text-xl font-semibold text-indigo-600 mb-1">{doctor.specialty}</h2>
          <p className="text-md font-bold text-green-600 mb-1">
            Degree: <span className='font-semibold'>{doctor.degree}</span>
          </p>
          <p className="text-sm text-slate-500 mb-4">{doctor.description}</p>
        </div>

        {/* Date Selection */}
        <h3 className="text-lg font-semibold mb-2 mt-4">Select Date:</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          className="border border-indigo-600 rounded p-2 mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          dateFormat="MMMM d, yyyy"
        />

        {/* Time Selection */}
        <h3 className="text-lg font-semibold mb-2">Select Time:</h3>
        <div className="flex flex-wrap mb-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`m-1 py-2 px-4 rounded transition duration-200 
                ${selectedTime === time ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white'}`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Book Appointment Button */}
        <div className="flex justify-center">
          <button onClick={handleBookAppointment} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg hover:shadow-xl transition duration-200">
            Book Appointment
          </button>
        </div>

        {/* Confirmation Message */}
        {appointmentConfirmed && (
          <div className="mt-4 text-green-600">
            <p>Appointment booked successfully for {doctor.name}!</p>
            <p>Date: {selectedDate?.toLocaleDateString()}</p>
            <p>Time: {selectedTime}</p>
          </div>
        )}

        {/* Confirmation Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold">Confirm Appointment</h3>
              <p className="mt-2">Doctor: {doctor.name}</p>
              <p>Date: {selectedDate?.toLocaleDateString()}</p>
              <p>Time: {selectedTime}</p>
              <div className="flex justify-between mt-4">
                <button onClick={confirmAppointment} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                  Confirm
                </button>
                <button onClick={() => setModalOpen(false)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetail;
