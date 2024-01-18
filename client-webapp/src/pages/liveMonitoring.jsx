import React, { useState, useEffect, useContext } from "react";
//import Modal from "react-modal";
import axios from "../api/axios";
import { UserContext } from '../App';
import { Menu } from '@headlessui/react'


const LiveMonitoring = () => {

  const user = useContext(UserContext);

  const [consoleText, setConsoleText] = useState(">>> starting experiment");

  //display the success dialog box when upload the code
  // const [isUploadSuccessModalOpen, setIsUploadSuccessModalOpen] =
  //   useState(false);

  // const [isUploadFailedModalOpen, setIsUploadFailedModalOpen] = useState(false);

  // Use React Router's useLocation to get query parameters

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/status");
  //     const data = await response.json();

  //     // Update state of the robots and attachments based on the received data
  //     setRobotStatus(data.robotStatus);
  //     setAttachmentsStatus(data.attachmentsStatus);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Fetch data initially
  //   fetchData();

  //   // Set up interval for get updates every minute
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, 60000);

  //   // Clear interval on component unmount to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, []);


  //submitting code
  // const handleCodeSubmit = async () => {
  //   // Check if id is null before making the request
  //   if (userId === null) {
  //     console.error("Invalid id:", userId);
  //     return;
  //   }

  //   const apiUrl = `api/experiment/${userId}/code`;
  //   //console.log("Api Url:", apiUrl);

  //   const encodedCode = (code);
  //   const value = { code: encodedCode, requirements: "" };
  //   console.log("req:", value);
  //   try {
  //     const response = await axios.post(apiUrl, value);

  //     console.log("Response:", response);

  //     if (response.status === 201 ) {
  //       console.log("Code submitted successfully");
  //       setIsUploadSuccessModalOpen(true);
  //     } else {
  //       console.error("Failed to submit code");
  //       setIsUploadFailedModalOpen(true);
  //     }
  //   } catch (error) {
  //     console.error("Error submitting code:", error);
  //   }
  // };

  // const closeUploadSuccessModal = () => {
  //   setIsUploadSuccessModalOpen(false);
  // };

  // const closeUploadFailedModal = () => {
  //   setIsUploadFailedModalOpen(false);
  // };

  const getColorForValue = (value) => {
    switch (value.toLowerCase()) {
      case 'unknown':
        return 'gray';
      case 'disconnected':
        return 'red';
      case 'connected':
        return 'green';
      default:
        return 'black'; // Default color if none of the above match
  };
  }  





  return (
    <>
      <div className=" bg-primary/90  mx-auto my-5 shadow-lg rounded-2xl flex max-w-7xl p-3  text-mainText">
        
        <div className="w-full grid grid-cols-2 grid-rows-2  gap-5 p-5">
          {/* live feed */}
        <div className="bg-ternary min-h-96 rounded-lg">
          test
        </div>
        {/* console */}
        <div className="bg-ternary min-h-96 rounded-lg font-mono p-5">
          <p>
            {consoleText}
          </p>
        </div>

        {/* meters */}
        <div className="bg-ternary min-h-96 rounded-lg"></div>
        {/* graph */}
        <div className="bg-ternary min-h-96 rounded-lg"></div>
         
        </div>
      </div>
    </>
  );
};

export default LiveMonitoring;
