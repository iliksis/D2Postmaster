import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ItemModal = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Item Modal</Text>
			<Button title="close" onPress={() => navigation.goBack()} />
		</View>
	);
};
export default ItemModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
