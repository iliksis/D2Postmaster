import { createDrawerNavigator } from "@react-navigation/drawer";
import { CharacterContext } from "../../hooks/useCharacter";
import { ViewConfig } from "../../views.config";

const Drawer = createDrawerNavigator();

const characters = [
	{
		class: "Warlock",
		light: 1578,
	},
	{
		class: "Titan",
		light: 1570,
	},
	{
		class: "Hunter",
		light: 1560,
	},
];

const CharacterDrawerNavigator = () => (
	<Drawer.Navigator>
		{characters.map((char, i) => (
			<Drawer.Screen
				{...ViewConfig.CharacterTabNavigator}
				name={`Character_${i}`}
				key={i}
				initialParams={{ characterId: i }}
				options={{ title: `${char.class} - ${char.light}` }}
			/>
		))}
	</Drawer.Navigator>
);
export default CharacterDrawerNavigator;
