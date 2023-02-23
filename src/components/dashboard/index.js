import React from "react";
import Box from "@mui/material/Box";
import "./dashboard.css";
import { Avatar, Grid } from "@mui/material";
import Phone from "../../assets/phone.png";
import SMS from "../../assets/sms.png";
import Global from "../../assets/global.png";
import User from "../../assets/user-square.png";
import Calender from "../../assets/calendar.png";
import Lore from "../../assets/Lore.png";
import logo from "../../assets/logo.png";
import thelore from "../../assets/thelore.png";
import thelore2 from "../../assets/thelore2.png";
import enter from '../../assets/enterbutton.png'
import { Link } from "react-router-dom";
const Dashboard = () => {
  var styles = { border: "2px solid black" }
  return (
    <>
      

    <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-6  p-3 p-lg-5 bottom-back">
           {/* the lore image */}
          <img src={thelore} alt="side" className="side_img" />
          <img src={thelore2} alt="side" className="side_img2" />
            <h1 className="line" style={{ fontSize: '40px', fontWeight: "700" }}>THE LORE</h1>

            <p className="para_text">
              The gateway bridging the digital and physical world together.An army of 5555 Yokai will be set free on the blockchain, roaming the realm. Owning a Yokai gives you access to the realm through the portal.
            </p>
            <p className="para_text">
              Simply holding a Yokai will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more. While exploring the outlines of Surge we realised there is a huge gap between the virtual and physical world.
              We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together.Our goals will always be for the community - creating, building and innovating together with the community. The realm is a place defying the rules and boundaries you know today, blurring the lines of reality and creating a phygital world. A Yokai's long journey begins with one step.
            </p>
            <p>
              Are you brave enough to enter?
            </p>

            {/* <span className="px-2 py-2  enter" style={styles}>Enter</span> */}
            <button className="enter">
            <img src={enter} className="img-fluid" width={"200px"} />
            {/* <p className="enter_text">  Enter </p> */}
            </button>
          </div>
          <div className="col-md-6 p-2 p-lg-5 back">
            <img src={Lore} className="mt-3" height="550"></img>
          </div>
        </div>
                {/* <div className="line2"></div> */}
      </div >
    </>
  );
};
export default Dashboard;
