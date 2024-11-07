import { createContext, useContext } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import PropTypes from "prop-types";

// Create the MediaQueryContext
const MediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  // Define media query breakpoints
  const [isMobile] = useMediaQuery("(max-width: 767px)"); // Mobile screen
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  ); // Tablet screen
  const [isDesktop] = useMediaQuery("(min-width: 1024px)"); // Desktop screen

  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

MediaQueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the media query context
export const useMediaQueryContext = () => {
  return useContext(MediaQueryContext);
};
