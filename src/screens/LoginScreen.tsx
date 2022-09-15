import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { ViewConfig } from "../views.config";
import useLogin from "../hooks/useLogin";

const LoginScreen = () => {
	const { authorizeAsync } = useLogin();

	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button
				title="Go to profile"
				onPress={async () => await authorizeAsync()}
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
