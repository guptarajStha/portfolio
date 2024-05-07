import React,{useState, createContext} from 'react';
import App from '../App';
export const mContext = createContext();
const MainContext = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentResumeCursor, setCurrentResumeCursor] = useState("");
  return (
    <div>
      <mContext.Provider value ={{currentSection,setCurrentSection,currentResumeCursor, setCurrentResumeCursor}}>
        <App />
      </mContext.Provider>
      
    </div>
  );
}

export default MainContext;
