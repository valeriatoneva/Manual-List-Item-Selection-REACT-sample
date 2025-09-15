import { createContext, Dispatch, useContext, useState } from 'react';

export const GlobalContext = createContext<{globalState: GlobalStateInterface, setGlobalState: Dispatch<React.SetStateAction<GlobalStateInterface>>}>(undefined as any);
export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalState = () => {
  const initialState = {
    menuSelectedItem: undefined
  } as GlobalStateInterface;

  const [globalState, setGlobalState] = useState<GlobalStateInterface>(initialState);

  return { globalState, setGlobalState };
};

interface GlobalStateInterface {
  menuSelectedItem: string | undefined;
}
