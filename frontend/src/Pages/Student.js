import React from 'react';
import NavBar from '../Components/NavBarStudent';
import MedicalReport from '../Components/MedicalReport';
import Footer from '../Components/Footer';
import Reacts, { useEffect } from 'react';


function Student() {
  useEffect(() => {
    document.title = "Student Account";
  }, []);
  return (
    <div>
      
      <NavBar/>
      <MedicalReport/>
      <Footer/>
      
    </div>
  );
}

export default Student;
