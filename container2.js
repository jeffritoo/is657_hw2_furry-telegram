import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function container2({children}) {
    return (
        <View style={styles.container2}>
            {children}
        </View>
    )
}
