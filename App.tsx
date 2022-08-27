import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewConfig } from "./src/views.config";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={() => ({
					headerShown: false,
				})}
			>
				<Stack.Screen {...ViewConfig.Login} />
				<Stack.Screen {...ViewConfig.CharacterDrawerNavigator} />
				<Stack.Screen
					{...ViewConfig.ItemModal}
					options={{ presentation: "modal" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
