import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Footer, Button } from "../common";
import YouFeed from "../Trip/YouFeed";
import NearYouFeed from "../Trip/NearYouFeed";
import WorldFeed from "../Trip/WorldFeed";
import { connect } from "react-redux";

export default class SignUp extends React.Component {
  state = { screenToShow: "" };
  static navigationOptions = {
    title: "Main Feed",
    headerTintColor: "#F1F1F2",
    headerTitleStyle: { color: "#F1F1F2" }
  };

  updateScreenToShow = text => {
    this.setState({
      screenToShow: ""
    });
    this.setState({
      screenToShow: text
    });
  };
  renderChildView() {
    switch (this.state.screenToShow) {
      case "You":
        return <YouFeed />;
      case "NearYou":
        return <NearYouFeed />;
      case "World":
        return <WorldFeed />;
      default:
        return <YouFeed />;
    }
  }

  render(props) {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>{this.renderChildView()}</View>
        <View>
          <Footer updateScreenToShow={this.updateScreenToShow} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F2"
  },
  contentStyle: {
    flex: 1
  }
});

