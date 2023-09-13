import React, { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerOption {
    icon: string;
    path: string;
    label: string;

}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IAppThemeProviderPropos {
    children: React.ReactNode;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;

}

export const DrawerProvider: React.FC<IAppThemeProviderPropos> = ({ children }) => {
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const hadleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);
   
    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: hadleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    );
};

