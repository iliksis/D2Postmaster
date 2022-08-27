import React from "react";
import LoginScreen from "./screens/LoginScreen";
import ItemModal from "./screens/Character/ItemModal";
import PostmasterScreen from "./screens/Character/PostmasterScreen";
import CharacterDrawerNavigator from "./screens/Character/CharacterDrawerNavigator";
import CharacterTabNavigator from "./screens/Character/CharacterTabNavigator";
import CharacterScreen from "./screens/Character/CharacterScreen";

type view =
	| "Login"
	| "ItemModal"
	| "Postmaster"
	| "CharacterDrawerNavigator"
	| "CharacterTabNavigator"
	| "Character";

export const ViewConfig: {
	[key in view]: { name: key; component: React.ComponentType<any> };
} = {
	Login: {
		name: "Login",
		component: LoginScreen,
	},
	CharacterDrawerNavigator: {
		name: "CharacterDrawerNavigator",
		component: CharacterDrawerNavigator,
	},
	ItemModal: {
		name: "ItemModal",
		component: ItemModal,
	},
	CharacterTabNavigator: {
		name: "CharacterTabNavigator",
		component: CharacterTabNavigator,
	},
	Character: {
		name: "Character",
		component: CharacterScreen,
	},
	Postmaster: {
		name: "Postmaster",
		component: PostmasterScreen,
	},
};
