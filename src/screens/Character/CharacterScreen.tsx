import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useCharacter from "../../hooks/useCharacter";
import { ViewConfig } from "../../views.config";

const HomeScreen = ({ navigation, route }) => {
	const characterId = useCharacter();

	return (
		<View style={styles.container}>
			<Text>Character Screen {characterId}</Text>
			<Button
				title="Go to Postmaster"
				onPress={() => navigation.navigate(ViewConfig.Postmaster.name)}
			/>
		</View>
	);
};
export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
