import { persistor, store } from "@redux/store";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { defaultTheme } from "@themes/defaut-theme";
import RouterContainer from "@routes/router-container";
import GlobalNotification from "@components/global-notification";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { darkTheme } from "@themes/dark-theme";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setLocation, setNavigate } from "@utils/navigateService";

function App() {
  const { isDarkMode } = useDarkModeContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setNavigate(navigate);
    setLocation(location);
  }, [navigate, location]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={isDarkMode ? defaultTheme : darkTheme}>
            <RouterContainer />
            <GlobalNotification />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
