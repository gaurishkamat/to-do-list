import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  //   const [students, setStudents] = useState([]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
