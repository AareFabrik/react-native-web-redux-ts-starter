import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
  TextStyle
} from "react-native";
import Hoverable from "../HOC/Hoverable";

export interface Props {
  setLanguage(language: string): void;
  onPressGloschli(): void;
}

export interface State {
  language: string;
}

export default class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
  }

  onSelectGerman = () => {
    this.props.setLanguage("de");
  };
  onSelectEnglish = () => {
    this.props.setLanguage("en");
  };
  onSelectHome = () => {};

  onMouseEnterHandler = () => {
    console.log("focused");
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableHighlight
            onPress={this.props.onPressGloschli}
            underlayColor={"transparent"}
          >
            <Text style={styles.title}>REACT NATIVE WEB</Text>
          </TouchableHighlight>

          <View style={styles.languages}>
            <Hoverable>
              {hover => (
                <TouchableHighlight onPress={this.onSelectGerman}>
                  <Text
                    style={[
                      styles.languageButton,
                      hover && styles.languageButtonHover
                    ]}
                  >
                    {"DE"}
                  </Text>
                </TouchableHighlight>
              )}
            </Hoverable>
            <Hoverable>
              {hover => (
                <TouchableHighlight onPress={this.onSelectEnglish}>
                  <Text
                    style={[
                      styles.languageButton,
                      hover && styles.languageButtonHover
                    ]}
                  >
                    {"EN"}
                  </Text>
                </TouchableHighlight>
              )}
            </Hoverable>
          </View>
        </View>
        <View style={{ height: 2, width: "100%", backgroundColor: "black" }} />
      </View>
    );
  }
}
interface Style {
  headerContainer: ViewStyle;
  header: ViewStyle;
  languages: ViewStyle;
  languageButton: TextStyle;
  languageButtonHover: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  headerContainer: {
    width: "100%",
    flexDirection: "column"
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  languages: {
    flexDirection: "row",
    alignItems: "center"
  },
  languageButton: {
    color: "#000",
    fontSize: 15,
    fontFamily: "Walter Turncoat",
    padding: 5
  },
  languageButtonHover: {
    backgroundColor: "gray"
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontFamily: "Walter Turncoat",
    paddingVertical: 20
  }
});
