import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TokenProvider from "./src/contexts/TokenContext";
import MainNavigation from "./src/MainNavigation";

export default function App() {
	return (
		<TokenProvider>
			<NavigationContainer>
				<MainNavigation />
			</NavigationContainer>
		</TokenProvider>
	);
}
