import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet, useLocation} from 'react-router-dom'
import {useRef, createContext, useEffect} from 'react'

export const ScrollContext = createContext();

function App() {

    const footerRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname])

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
