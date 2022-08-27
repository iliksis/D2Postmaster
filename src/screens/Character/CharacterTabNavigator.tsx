import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ViewConfig } from "../../views.config";
import { Pressable } from "react-native";
import { CharacterContext } from "../../hooks/useCharacter";

const Tab = createBottomTabNavigator();

const CharacterTabNavigator = ({ navigation, route }) => {
	const { characterId } = route.params;

	return (
		<CharacterContext.Provider value={characterId}>
			<Tab.Navigator
				screenOptions={() => ({
					headerShown: false,
					headerLeft: () => (
						<Pressable onPress={() => navigation.openDrawer()}>
							<Ionicons name="ios-menu" size={24} color="white" />
						</Pressable>
					),
				})}
			>
				<Tab.Screen
					{...ViewConfig.Character}
					options={{
						tabBarIcon: (props) => (
							<Ionicons name="person" {...props} />
						),
					}}
				/>
				<Tab.Screen
					{...ViewConfig.Postmaster}
					options={{
						tabBarIcon: (props) => (
							<Ionicons name="mail" {...props} />
						),
						tabBarBadge: 5,
					}}
				/>
			</Tab.Navigator>
		</CharacterContext.Provider>
	);
};
export default CharacterTabNavigator;
