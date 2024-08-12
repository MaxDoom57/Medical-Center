import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import photo1 from '../Resources/photo1.jpg';
import photo2 from '../Resources/photo2.jpg';
import photo3 from '../Resources/photo3.jpg';
import ambulance2 from '../Resources/ambulance2.jpg';
import photo7 from '../Resources/photo7.png';

const staff = [
  {
    role: 'Doctors',
    members: [
      { name: 'Name: John Doe',phone:'Phone No: 0987654321', email: 'Email: johndoe@example.com', image: photo1 },
      { name: 'Name: Jane Smith', email: 'Email: janesmith@example.com',image: photo2 },
    ],
  },
  {
    role: 'Ambulance Drivers',
    members: [
      { name: 'Name: John Doe', phone: 'Phone No: 1234567890', image: ambulance2 },
    ],
  },
  {
    role: 'Nurses',
    members: [
      { name: 'Name: Nurse Anne Brown', email: 'Email: annebrown@example.com', image: photo3 },
    ],
  },
  {
    role: 'Consultant',
    members: [
      { name: 'Name: Consultant John Doe', phone: 'Phone No: 0987654321', image: photo7 },
    ],
  },
];

const StaffList = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>
      <div className="container flex-grow p-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-left text-indigo-950">
          OUR STAFF MEMBERS
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {/* Define specific grid areas for each role */}
          {staff.map((group, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between h-full ${
                group.role === 'Doctors' ? 'xl:col-span-1 xl:row-span-2' :
                group.role === 'Nurses' ? 'xl:col-span-1 xl:row-span-1' :
                group.role === 'Ambulance Drivers' ? 'xl:col-span-1 xl:row-span-1' :
                group.role === 'Consultant' ? 'xl:col-span-1 xl:row-span-1 xl:col-start-3 xl:row-start-1' :
                ''
              }`}
            >
              <h2 className="mb-4 text-xl font-semibold text-left sm:text-2xl md:text-3xl">
                {group.role}
              </h2>
              <div className="flex flex-col justify-center flex-grow space-y-5">
                {group.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-5"
                  >
                    <img
                      src={member.image}
                      alt={`${member.name}'s image`}
                      className="object-cover w-full h-48 sm:w-36 sm:h-36"
                    />
                    <div>
                      <p className="text-lg font-medium sm:text-base md:text-lg">{member.name}</p>
                      {member.email ? (
                        <p className="text-sm text-gray-500">{member.email}</p>
                      ) : (
                        <p className="text-sm text-gray-500">{member.phone}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaffList;