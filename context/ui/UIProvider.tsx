import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

interface IProps {
  children: ReactNode;
}

const UI_INITIAL_STATE = {
  sidemenuOpen: false,
};

export const UIProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
