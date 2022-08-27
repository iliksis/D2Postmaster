import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ViewConfig } from "../../views.config";

const DetailsScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Text>Postmaster Screen</Text>
		<Button
			title="Go to Character"
			onPress={() => navigation.navigate(ViewConfig.Character.name)}
		/>
		<Button
			title="Open item"
			onPress={() => navigation.navigate(ViewConfig.ItemModal.name)}
		/>
	</View>
);
export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
