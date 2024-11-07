import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MediaQueryProvider } from "./context/MediaQueryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <MediaQueryProvider>
        <App />
      </MediaQueryProvider>
    </ChakraProvider>
  </StrictMode>
);
