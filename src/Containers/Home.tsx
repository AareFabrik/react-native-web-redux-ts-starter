import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  View
} from "react-native";
import { connect } from "react-redux";
import Title from "../Components/Title";
import I18n, { Terms } from "../I18n";
import { Language } from "../Store/Types";
import { Link } from "react-router-dom";

interface Props {
  language: Language;
}

interface State {}

export class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Title title={I18n.t(Terms.Home.descriptionTitle)} />
        <Text style={styles.text}> {I18n.t(Terms.Home.descriptionText)}</Text>
        <View style={{}}>
          <Link to="/about/">
            <Text style={styles.text}>
              {I18n.t(Terms.ButtonLabels.aboutButton)}
            </Text>
          </Link>
        </View>
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
)(Home);

interface Style {
  scrollView: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  scrollView: {
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
