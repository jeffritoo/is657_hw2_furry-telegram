import React from "react";
import { Text, View, StatusBar } from "react-native";
import styles from "./styles";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";
import Container1 from "./container1"
import Container2 from "./container2"
import container1 from "./container1";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Container1>
      <Text style={styles.container1Text}>Column</Text>
        <Column>
          <Box>Child</Box>
          <Box>Child</Box>
          <Box>Child</Box>
        </Column>
      </Container1>  
      <Container2>
      <Text style={styles.container2Text}>Row</Text>
      <Row>
        <Box>Child</Box>
        <Box>Child</Box>
        <Box>Child</Box> 
      </Row> 
      </Container2>
    </View>
  );
}

