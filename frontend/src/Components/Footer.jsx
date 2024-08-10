import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 w-[100%] flex flex-col items-center text-white pt-3">
      {/* Line 1 */}
      <div className="w-[80%] flex grid-cols-3 justify-between p-2 font-semibold">
        <div className="flex flex-col text-start">
          <a href="www.linkn.com">Home</a>
          <a href="www.linkn.com">Facilities</a>
          <a href="www.linkn.com">Staff</a>
          <a href="www.linkn.com">Download</a>
          <a href="www.linkn.com">About</a>
        </div>

        <div className="flex grid-cols-5 gap-5 text-xl">
          <a href="www.fb.lk">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="www.fb.lk">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="www.fb.lk">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="www.fb.lk">
            <i class="fa-brands fa-pinterest"></i>
          </a>
          <a href="www.fb.lk">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>

        <div className="text-end">
          <p>Faculty of Technology</p>
          <p>Pitipana North,</p>
          <p>Homagama</p>
          <p>011 3413488</p>
          <p>Fot@sjp.ac.lk</p>
        </div>
      </div>

      {/* Line 2 */}
      <div className="w-[80%] text-center p-2 font-normal">
        Copyright @2024 Mediloc.Pvt
      </div>
    </div>
  );
};

export default Footer;
