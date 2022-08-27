import React from "react";

const useCharacter = () => {
	const characterContext = React.useContext(CharacterContext);

	return characterContext;
};
export default useCharacter;

export const CharacterContext = React.createContext<number>(undefined);
