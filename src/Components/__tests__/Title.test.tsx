import * as React from "react";
import * as renderer from "react-test-renderer";
import Title from "../Title";

test("Default Title renders correctly", () => {
  const tree = renderer.create(<Title title={"Title"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
