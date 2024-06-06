import React, { useState } from "react";
import { motion } from "framer-motion";

/*
"layout changes" refer to any changes that affect 
the size and position of elements on the page:

    1. **Adding or Removing Elements**:
    - When new elements are added to or removed from 
    the DOM, the surrounding elements may need to 
    reposition themselves to accommodate these changes.

    2. **Resizing Elements**:
    - When an element's dimensions (width or height)
    change, for instance, due to new content being
    added or removed, the layout of surrounding
    elements might need to adjust.

    3. **Visibility Changes**:
    - When elements are shown or hidden, such as using
    conditional rendering, the layout can change
    because the space occupied by these elements 
    changes.

    4. **State Changes**:
    - Changes in state that affect how components are 
    rendered, including dynamic content updates, can
    lead to layout changes.

### Explanation of Layout Changes in below code

    1. **Initial Render**:
    - Initially, `isVisible` is `false`, so only the 
    `motion.div` with the `motion.h3` element inside 
    is rendered. The layout is determined by the 
    dimensions and position of this `motion.div`.

    2. **Toggling Visibility**:
    - When the `motion.div` is clicked, `isVisible` 
    toggles to `true`, causing the paragraph 
    (`motion.p`) to be rendered. This is a layout 
    change because a new element is added to the DOM,
    affecting the size and possibly the position of
    the `motion.div`.

    3. **Animating Layout Changes**:
    - With the `layout` prop enabled, Framer Motion 
    detects this change in layout (the addition of the `motion.p` element)
    and smoothly animates the transition. Instead of
    the `motion.div` instantly resizing to fit the 
    new content, it animates from its old size to
    the new size over the specified duration.

    - The `transition` prop with `layout: { duration: 1, type: "spring" }`
    specifies that the layout change should be animated 
    over 1 second using a spring animation, which provides 
    a natural, bouncy effect.

    4. **Removing the Paragraph**:
    - When the `motion.div` is clicked again, `isVisible`
    toggles back to `false`, causing the `motion.p`
    to be removed. This is another layout change 
    as the `motion.div` now needs to resize to 
    its original dimensions. Again, the `layout` 
    prop ensures that this change is animated 
    smoothly.

### Visual Example

- **Before Click**: The `motion.div` is rendered with just the `motion.h3` inside it.
- **After Click**: The `motion.p` is added, causing the `motion.div` to expand. This expansion is animated due to the `layout` prop.
- **Second Click**: The `motion.p` is removed, causing the `motion.div` to shrink back. This shrinking is also animated.

*/
const HoverAndClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <motion.div
        className="bg-white border rounded-lg p-5 w-auto max-w-lg"
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setIsVisible(!isVisible)}
      >
        <motion.h3>hover and click</motion.h3>
        {isVisible && (
          <motion.p
            className="w-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            illo culpa facere? Dicta velit culpa, odio ut officia qui, adipisci
            dolor nesciunt iure quos explicabo quam nobis possimus natus est?
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default HoverAndClick;
