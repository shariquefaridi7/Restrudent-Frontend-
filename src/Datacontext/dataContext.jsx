// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState([]);
    const [open, setopen] = useState(false);
    const [count, setcount] = useState(2);
    const [Amount, setAmount] = useState(0);


    return (
        <DataContext.Provider value={{ sharedData, setSharedData, open, setopen, count, setcount, Amount, setAmount }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
