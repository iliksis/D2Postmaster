import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ViewConfig } from "../views.config";

const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button
				title="Go to profile"
				onPress={() =>
					navigation.navigate(
						ViewConfig.CharacterDrawerNavigator.name
					)
				}
			/>
		</View>
	);
};
export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
