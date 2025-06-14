import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import {useRef, createContext} from 'react'

export const ScrollContext = createContext();

function App() {

    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({behavior: "smooth"});
    }

  return (
    <>
        <ScrollContext.Provider value={{ scrollToFooter }}>
            <Header />
            <Outlet />
            <Footer ref={footerRef} />
        </ScrollContext.Provider>
    </>
  );
}

export default App
