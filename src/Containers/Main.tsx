import * as React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "../Components/Header";
import I18n from "../I18n";
import { Actions, ApplicationState } from "../Store/index";
import { Language } from "../Store/Types";
import About from "./About";
import Home from "./Home";
import NoMatch from "./NoMatch";

export interface Props {
  history: any;
  setLanguage(language: string): void;
  language: Language;
}

export interface State {}

export class Main extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // change to the settings language
    if (
      I18n.language !== this.props.language &&
      this.props.language !== undefined
    ) {
      this.props.setLanguage(undefined);
      this.handleLanguageChange(this.props.language);
    }
  }

  handleLanguageChange = language => {
    I18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      this.props.setLanguage(language);
    });
  };

  handlePressGlsochli = () => {
    this.props.history.push("/");
  };

  handlePressBuy = () => {
    this.props.history.push("/buy/");
  };

  render() {
    return (
      <View style={styles.main}>
        <Header
          setLanguage={language => this.handleLanguageChange(language)}
          onPressGloschli={this.handlePressGlsochli}
        />

        <View style={styles.routeContainer}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route component={NoMatch} />} />
          </Switch>
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ settings }: ApplicationState) => ({
  language: settings.language
});

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: language => dispatch(Actions.Settings.setLanguage(language))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

const styles = StyleSheet.create({
  main: {
    width: "100%",
    minHeight: "100vh"
  },
  routeContainer: {
    width: "100%",
    padding: 20
  },
  title: {
    color: "green"
  }
});
