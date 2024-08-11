import React, { useState } from 'react';

const MedicalReport = () => {
  const medicalHistory = [
    {
      date: '2024-08-01',
      description: 'Routine Check-up',
      medicines: 'Vitamin D, Omega-3',
    },
    {
      date: '2024-07-15',
      description: 'Flu Symptoms',
      medicines: 'Tamiflu, Lyrica',
    },
    {
      date: '2024-06-10',
      description: 'Allergy Test',
      medicines: 'Cetirizine, Penadol',
    },
    {
      date: '2024-05-01',
      description: 'Physical Examination',
      medicines: 'Ibuprofen, Paracetamol',
    },
    {
      date: '2024-04-18',
      description: 'Dental Check-up',
      medicines: 'Amoxicillin, Paracetamol',
    },
    {
      date: '2024-03-25',
      description: 'Eye Test',
      medicines: 'None',
    },
    {
      date: '2024-03-10',
      description: 'Skin Allergy',
      medicines: 'Cetirizine, Hydrocortisone',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter the medical history based on the search term
  const filteredHistory = medicalHistory.filter(record =>
    record.date.includes(searchTerm)
  );

  return (
    <div className="w-full min-h-screen p-4 bg-gray-50">
      <div className="w-full bg-white rounded-lg shadow-md">
        {/* Search Bar */}
        <div className="flex justify-between p-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold">Student Medical Account</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search by date (YYYY-MM-DD)..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search medical history"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Patient Information */}
          <div className="w-full p-4 border-b border-gray-300 md:w-1/4 md:border-b-0 md:border-r">
            <h1 className="mb-8 text-xl font-bold">Student Details</h1>
            <div className="flex justify-between pb-1 font-semibold border-b border-gray-300"></div>
            <h2 className="text-xl font-bold">A.L Senarathna</h2>
            <p className="text-lg ">TE 101599</p>
            <p className="text-lg ">19/20 Batch</p>
          </div>
          {/* Medical History */}
          <div className="w-full p-4 md:w-3/4">
            <h2 className="mb-2 text-xl font-bold">Medical History</h2>
            <div className="flex justify-between pb-1 font-semibold border-b border-gray-300">
              <p className="w-1/4">Date</p>
              <p className="w-1/2 text-left">Description</p>
              <p className="w-1/4">Medicines</p>
            </div>
            {/* Medical History Data with Scrollable Area */}
            <div className="mt-2 overflow-y-auto" style={{ maxHeight: '16rem' }}>
              {filteredHistory.length > 0 ? (
                filteredHistory.map(({ date, description, medicines }, index) => (
                  <div
                    key={index}
                    className={`flex p-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
                  >
                    <p className="w-1/4">{date}</p>
                    <p className="w-1/2 text-left">{description}</p>
                    <p className="w-1/4">{medicines}</p>
                  </div>
                ))
              ) : (
                <div className="p-2 text-center text-gray-500">No records found</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Get Medical Report Button */}
      <div className="flex justify-end mt-4 space-y-2 md:space-y-0 md:space-x-2">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-md shadow-md shadow-bg-slate-500 md:w-auto hover:bg-sky-600"
          aria-label="Get the full medical report"
        >
          Request Medical Report
        </button>
      </div>
    </div>
  );
};

export default MedicalReport;
