import React, { useEffect } from "react";
import Button from "../../atoms/root-atoms/Button";
import MobileLinks from "../../atoms/header-atoms/MobileLinks";
import { animate, motion, stagger } from "framer-motion";

function Mobilelist({ open, setopen }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -300 },
  };
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".mobileLinkItem",
      open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: open ? staggerMenuItems : 0,
      }
    );
  }, [open]);

  return (
    <motion.div
      className="text-start start-0 bg-light mt-5 text-start pt-2 w-100 d-lg-none d-block"
      style={{ position: "absolute", zIndex: "10" }}
      animate={open ? "open" : "closed"}
      initial={{ opacity: 0 }}
      variants={variants}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <MobileLinks open={open} setopen={setopen}/>
      <div className="pt-2">
        <Button data={{ text: "Contact" }} />
      </div>
    </motion.div>
  );
}

export default Mobilelist;
