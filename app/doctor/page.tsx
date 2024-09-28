"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react'; // Ensure you have lucide-react installed for the icon

const AppointmentDetail: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const doctor = {
    name: 'Dr. Smith 👨‍⚕️',
    specialty: 'Dentist 🦷',
    degree: 'DDS (Doctor of Dental Surgery)',
    description: 'Dr. Smith has over 10 years of experience in providing dental care and is committed to ensuring the best outcomes for his patients.',
    image: '/assets/assets_frontend/doc1.png', // Update with your image path
  };

  const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['6:00 AM', '8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      setAppointmentConfirmed(true);
      // Here you can add logic to send the appointment details to an API or a different page
      console.log({
        doctor: doctor.name,
        specialty: doctor.specialty,
        date: selectedDate,
        time: selectedTime,
      });
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-8 mt-32 mx-40">
      {/* Doctor Image */}
      <div className="w-full md:w-2/6 mb-4 md:mb-0">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={300}
          height={300}
          className="object-cover bg-blue-500 rounded-md"
        />
      </div>

      {/* Doctor Details */}
      <div className="w-full md:w-4/6 md:pl-4 ">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          {doctor.name}
          <CheckCircle className="ml-2 text-green-500" />
        </h1>
        <h2 className="text-xl font-semibold text-indigo-600 mb-1">{doctor.specialty}</h2>
        <p className="text-md font-medium mb-1">Degree: {doctor.degree}</p>
        <p className="text-md mb-4">{doctor.description}</p>

        {/* Date Selection */}
        <h3 className="text-lg font-semibold mb-2">Select Date:</h3>
        <div className="flex flex-wrap mb-4">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`m-1 py-2 px-4 rounded ${selectedDate === date ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-600'}`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Time Selection */}
        <h3 className="text-lg font-semibold mb-2">Select Time:</h3>
        <div className="flex flex-wrap mb-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`m-1 py-2 px-4 rounded ${selectedTime === time ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-600'}`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Book Appointment Button */}
        <div className="flex justify-center">
          <button onClick={handleBookAppointment} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded">
            Book Appointment
          </button>
        </div>

        {/* Confirmation Message */}
        {appointmentConfirmed && (
          <div className="mt-4 text-green-600">
            <p>Appointment booked successfully for {doctor.name}!</p>
            <p>Date: {selectedDate}</p>
            <p>Time: {selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetail;
