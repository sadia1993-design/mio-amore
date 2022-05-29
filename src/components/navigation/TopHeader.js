import React from "react";
import mainLogo from "../../imges/admin_logo.png";
import profile from "../../imges/profile.jpg";
function TopHeader() {
  const prevFunction = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        style={{ zIndex: "1999" }}
        className="shadow shadow-indigo-800 min-h-[60px] transition duration-500  fixed w-full top-0 left-0 max-h-16 bg-gradient-to-r from-[#700a70] to-[#c5378e] "
      >
        <div
          className="logo-area bg-no-repeat w-[16.25rem] block min-h-[60px] float-left"
          style={{ backgroundImage: `url(${mainLogo})`, maxWidth: "100%" }}
        ></div>
        <div className="quick-area">
          <div className="float-left">
            <ul
              className="left-links  list-none h-[60px] leading-60  text-white  flex items-center "
              style={{ padding: "0px 15px", margin: "0" }}
            >
              <li className="sidebar-toggle-wrap ">
                <a
                  href="index.html"
                  data-toggle="sidebar"
                  className="sidebar_toggle"
                >
                  <i className="fas fa-bars"></i>
                </a>
              </li>

              <li className="hidden-sm hidden-xs  ml-3 ">
                <h4>Mio Amore Admin</h4>
              </li>
            </ul>
          </div>
          <div className="float-right">
            <ul
              className="info-menu right-links list-inline list-unstyled"
              style={{ height: "60px", lineHeight: "60px", padding: "0 45px" }}
            >
              <li className="profile showopacity inline-block relative opacity-100 pl-2 pr-2  ">
                <a
                  onClick={prevFunction}
                  className="toggle w-auto flex items-center  text-center  "
                >
                  <img
                    src={profile}
                    alt="user"
                    className=" h-11 w-11 relative top-0 right-3 rounded-full align-middle "
                  />
                  <span className=" text-white hover:visible hover:opacity-100">
                    Smith Wright <i className="fas fa-angle-down"></i>
                  </span>
                </a>
                <ul
                  className="w-[16.25rem]   invisible leading-6 absolute float-left top-full  profile animated fadeIn"
                  style={{
                    left: "-30px",
                    marginTop: "4px",
                    maxWidth: "180px",
                    boxShadow:
                      "rgb(242 239 239) 0px 2px 2px, rgb(242 239 239) 0px -2px 2px",
                    padding: "15px 25px",
                  }}
                >
                  <li className=" leading-10 block relative h-10 ">
                    <a href="ui-profile.html">
                      <i className="fa fa-user"></i> Profile
                    </a>
                  </li>
                  <li className=" leading-10 block relative h-10 ">
                    <a href="ui-login.html">
                      <i className="fa fa-lock"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
