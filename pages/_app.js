import '../styles/globals.css';

// components
import Layout from '../Components/Layout';
import Transition from '../Components/Transition'

// router
import {useRouter} from 'next/router'

// framer motion
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return(
    <Layout>
      <AnimatePresence node='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
   </Layout>
  );
}

export default MyApp;
