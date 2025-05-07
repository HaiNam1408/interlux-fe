import { persistor, store } from "@redux/store";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { defaultTheme } from "@themes/defaut-theme";
import RouterContainer from "@routes/router-container";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={defaultTheme}>
            <RouterContainer />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
