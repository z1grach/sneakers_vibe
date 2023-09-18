import React from 'react';
import {useLocalObservable} from 'mobx-react';
import CoreStore from '../../store/CoreStore';

const StoreContext = React.createContext<CoreStore | null>(null);

interface MyComponentProps {
    children: React.ReactNode;
}

export const MobxProvider: React.FC<MyComponentProps> = ({children}) => {
    const coreStore = useLocalObservable(() => new CoreStore());

    return (
        <StoreContext.Provider
            value={coreStore}
        >
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const coreStore = React.useContext(StoreContext);
    if (!coreStore) {
        throw new Error('useStore must be used within a MobxProvider');
    }
    return coreStore;
};