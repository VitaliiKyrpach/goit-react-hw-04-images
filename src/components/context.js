import { createContext, useContext } from 'react';
export const ImgContext = createContext();
export const useImg = () => useContext(ImgContext);
