import { AnimatePresence, delay, motion } from "framer-motion";

import React, { useState } from "react";

const EnterExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen justify-around items-center">
      <h1>Enter Exit Animation</h1>

      {/* By default, when a React component is removed from the tree,
    it is instantly removed from the DOM. AnimatePresence allows you
    to animate the exit of components before they are removed, enabling
    you to create graceful exit animations. */}

      {/* When we say a "React component is removed from the tree" it
    means that a component is no longer being rendered by React
    due to changes in the application's state or props. For instance,
    this can happen when conditional rendering is used to display or
    hide components. for example by using isVisible below we are
    conditional rendering */}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="bg-red-500 w-32 h-32"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0, scale: 1.5 }}
            exit={{ opacity: 0, x: -500, scale: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <button
        className="px-4 py-2 bg-cyan-300"
        onClick={() => setIsVisible(!isVisible)}
      >
        change visiblility
      </button>
    </div>
  );
};

export default EnterExitAnimation;
