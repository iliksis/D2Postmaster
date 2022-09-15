require("dotenv").config();

module.exports = {
	name: "D2Postmaster",
	slug: "d2postmaster",
	version: "0.0.1",
	owner: "iliksis",
	scheme: "d2postmaster",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#FFFFFF",
		},
	},
	web: {
		favicon: "./assets/favicon.png",
	},
	extra: {
		CLIENT_ID: process.env.CLIENT_ID,
		CLIENT_SECRET: process.env.CLIENT_SECRET,
		API_KEY: process.env.API_KEY,
	},
};
