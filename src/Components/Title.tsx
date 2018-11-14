import * as React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

export interface Props {
  title: string;
}

export interface State {}

export default class Title extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: 20
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontFamily: "CabinSketch"
  }
});
