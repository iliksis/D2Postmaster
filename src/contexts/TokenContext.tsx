import React from "react";
import * as SecureStore from "expo-secure-store";

export const TokenContext = React.createContext<context>(null);

const TokenProvider = ({ children }) => {
	const [token, setToken] = React.useState<Token>(null);

	const get = React.useCallback(async () => {
		const token = await SecureStore.getItemAsync("token");
		setToken(JSON.parse(token));
	}, []);

	React.useEffect(() => {
		if (!token) {
			get();
		}
	}, []);

	const set = React.useCallback(async (token: Token) => {
		alert("setting");
		setToken(token);
		await SecureStore.setItemAsync("token", JSON.stringify(token));
	}, []);

	return (
		<TokenContext.Provider value={{ token, setToken: set }}>
			{children}
		</TokenContext.Provider>
	);
};
export default TokenProvider;

export interface Token {
	accessToken: string;
	expiresIn: number;
	membershipId: string;
	refreshExpiresIn: number;
	refreshToken: string;
}

type context = {
	token?: Token;
	setToken: (token: Token) => Promise<void>;
};
