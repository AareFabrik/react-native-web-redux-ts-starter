import { AppRegistry } from "react-native";
import "babel-polyfill";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
