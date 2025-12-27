"use client";

import { motion } from "framer-motion";
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarNav from "./sidebar/SidebarNav";
import SidebarFooter from "./sidebar/SidebarFooter";
import { mainNavItems } from "@/constant/sidebar";
import { slideInFromLeft, fadeIn } from "@/lib/animations/variants";

const SideBar = () => {
  return (
    <motion.aside
      className="min-w-64 max-w-64 hidden lg:flex flex-col min-h-screen p-4 border-r border-slate-700/50 bg-gradient-to-b from-slate-900 to-slate-950 fixed top-0 left-0 backdrop-blur-xl"
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft}
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col h-full gap-[335px]"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <SidebarHeader logo="/images/Group.png" />
          <SidebarNav items={mainNavItems} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SidebarFooter />
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

export default SideBar;
