import * as React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import Main from "./Containers/Main";
import { store, persistor } from "./Store/Store";

export interface Props {}

export interface State {}

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<View style={{ flex: 1, backgroundColor: "white" }} />}
          persistor={persistor}
        >
          <Router>
            <Main />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
