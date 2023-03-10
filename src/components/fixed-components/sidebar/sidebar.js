import { NavLink } from "react-router-dom";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./sidebarMenu";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <i class="fa-solid fa-gauge"></i>,
  },
  // {
  //   path: "/users",
  //   name: "Users",
  //   icon: <FaUser />,
  // },
  // {
  //   path: "/messages",
  //   name: "Messages",
  //   icon: <MdMessage />,
  // },
  // {
  //   path: "/analytics",
  //   name: "Analytics",
  //   icon: <BiAnalyse />,
  // },
  {
    path: "/file-manager",
    name: "User Management",
    icon: <i class="fa-solid fa-file"></i>,
    subRoutes: [
      {
        path: "/createuser",
        name: "Create User ",
        icon: <i class="fa-solid fa-user"></i>,
      },
      {
        path: "/createrole",
        name: "Create Role",
        icon: <i class="fa-solid fa-lock"></i>,
      },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <i class="fa-solid fa-book-user"></i>,
    exact: true,
    subRoutes: [
      {
        path: "/client",
        name: "Client ",
        icon: <i class="fa-solid fa-user"></i>,
      },
      {
        path: "/documentType",
        name: "Document Type",
        icon: <i class="fa-solid fa-lock"></i>,
      },
      {
        path: "/kanban",
        name: "Kanban",
        icon: <i class="fa-solid fa-lock"></i>,
      },
    ],
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="mod-sidebar-container">
        <motion.div
          animate={{
            width: isOpen ? "265px" : "65px",

            transition: {
              duration: 0.3,
            },
          }}
          className={`mod-sidebar `}
        >
          <div className="mod-top_section">
            <>{isOpen && <h1 className="mod-logo">Admin Panel</h1>}</>

            <div className={isOpen ? `mod-bar` : "mod-bar2"} onClick={toggle}>
              <p className="sidebar-menu">
                <i class="fa-solid fa-bars"></i>
              </p>
            </div>
          </div>

          <section className="mod-routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="mod-link"
                  activeClassName="mod-active"
                >
                  <div className="mod-icon1">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mod-link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        {/* <main>{children}</main> */}
      </div>
    </>
  );
};

export default Sidebar;
