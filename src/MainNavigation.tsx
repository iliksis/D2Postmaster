import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import CharacterDrawerNavigator from "./screens/Character/CharacterDrawerNavigator";
import ItemModal from "./screens/Character/ItemModal";
import { TokenContext } from "./contexts/TokenContext";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	const { token } = React.useContext(TokenContext);

	if (!token) {
		return <LoginScreen />;
	}

	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen
				name="CharacterDrawerNavigator"
				component={CharacterDrawerNavigator}
			/>
			<Stack.Screen
				name="ItemModal"
				component={ItemModal}
				options={{ presentation: "modal" }}
			/>
		</Stack.Navigator>
	);
};
export default MainNavigation;
