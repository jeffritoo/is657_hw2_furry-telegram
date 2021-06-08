import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  container1:{
    border:"solid",
    borderColor:"black",
    height:300,
    width:150,
    padding:20,

  },
  container2:{
    border:"solid",
    borderColor:"black",
    height:150,
    width:350,
    padding:20,

  },
  box: {
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  },
  container1Text: {
    color: "black",
    fontWeight: "bold",
    alignSelf:"center",
    fontSize:20,
  },
  container2Text: {
    color: "black",
    fontWeight: "bold",
    fontSize:20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-start",
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    alignSelf: "stretch",
  }
});

