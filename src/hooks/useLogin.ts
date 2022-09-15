import React from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { Buffer } from "buffer";
import { Token, TokenContext } from "../contexts/TokenContext";
import { Platform } from "react-native";

const useLogin = () => {
	const { setToken } = React.useContext(TokenContext);

	const [redirectUri, setRedirectUri] = React.useState(null);

	Linking.addEventListener("url", () => {
		if (Platform.OS === "ios") {
			WebBrowser.dismissAuthSession();
		}
	});

	const fetchAccessToken = React.useCallback(async (code: string) => {
		const authCode = Buffer.from(
			`${Constants.manifest.extra.CLIENT_ID}:${Constants.manifest.extra.CLIENT_SECRET}`,
			"utf8"
		).toString("base64");
		const response = await fetch(
			"https://www.bungie.net/platform/app/oauth/token/",
			{
				method: "POST",
				body: `grant_type=authorization_code&code=${code}`,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Basic ${authCode}`,
				},
			}
		);
		const jsonResponse = await response.json();
		const dateNow = Date.now() / 1000;
		const token: Token = {
			accessToken: jsonResponse.access_token,
			expiresIn: dateNow + jsonResponse.expiresIn,
			refreshToken: jsonResponse.refresh_token,
			refreshExpiresIn: jsonResponse.refresh_expires_in,
			membershipId: jsonResponse.membership_id,
		};
		await setToken(token);
	}, []);

	React.useEffect(() => {
		if (redirectUri) {
			const { queryParams } = Linking.parse(redirectUri);
			const code = queryParams["code"] as string;
			fetchAccessToken(code);
		}
	}, []);

	const authorizeAsync = React.useCallback(async () => {
		const result = await WebBrowser.openAuthSessionAsync(
			`https://www.bungie.net/en/OAuth/Authorize?client_id=${Constants.manifest.extra.CLIENT_ID}&response_type=code&state=random_text`
		);
		setRedirectUri((result as WebBrowser.WebBrowserRedirectResult).url);
	}, []);

	return {
		authorizeAsync,
	};
};

export default useLogin;
