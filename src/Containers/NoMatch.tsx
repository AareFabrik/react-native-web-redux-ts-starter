import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle
} from "react-native";
import { connect } from "react-redux";
import Title from "../Components/Title";
import { Language } from "../Store/Types";

interface Props {
  language: Language;
}

interface State {}

export class NoMatch extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Title title={"404"} />
        <Text style={styles.text}>{"Page not found."}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ settings }: any) => ({
  language: settings.language
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoMatch);

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white"
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Walter Turncoat"
  }
});
