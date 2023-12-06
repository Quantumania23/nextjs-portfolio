// Fonts
import {Sora} from '@next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../Components/Nav.js'
import Header from '../Components/Header.js'
import TopLeftImg from '../Components/TopLeftImg.js'


const Layout = ({children}) => {
  return(
    <div 
    className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}
    >
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>
  );
};

export default Layout;
