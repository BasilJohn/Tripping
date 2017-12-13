import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { BlockDetail } from "../common";
import { connect } from "react-redux";

class ListItem extends React.Component {
  render() {
    const { tripStartPlace, tripEndPlace } = this.props.trip;
    return (
      <TouchableOpacity
        style={styles.touchStyle}
        onPress={() => this.props.navigation.navigation.navigate("TripStory")}
      >
        <View style={styles.tileStyle}>
          <BlockDetail>
            <Image
              style={styles.imageTileStyle}
              source={require("../../images/IntroImage.jpg")}
            />
          </BlockDetail>
          <BlockDetail>
            <Text style={styles.titleStyle}>
              Your trip from {tripStartPlace} to {tripEndPlace}
            </Text>
          </BlockDetail>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchStyle: {
    paddingBottom: 5
  },
  tileStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    elevation: 1,
    height: 100
  },
  titleStyle: {
    flex: 2,
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center"
  },
  imageTileStyle: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    marginRight: 5
  }
});

const mapStateToProps = ({ navigation }) => {
  return {
    navigation
  };
};

export default connect(mapStateToProps, {})(ListItem);
