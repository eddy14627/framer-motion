import React from "react";
import { motion } from "framer-motion";

const DragAndDrop = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-around items-center">
      <h1>Drag and Drop</h1>
      <div className="flex justify-evenly gap-5">
        <div className="flex flex-col gap-10">
          <h2>No constraint</h2>
          <motion.div drag className="h-32 w-32 bg-red-500"></motion.div>
        </div>
        <div className="flex flex-col gap-10">
          <h2>y constraint</h2>
          <motion.div drag="y" className="h-32 w-32 bg-red-500"></motion.div>
        </div>
        <div className="flex flex-col gap-10">
          <h2>drag constraint</h2>
          <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            className="h-32 w-32 bg-red-500"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
