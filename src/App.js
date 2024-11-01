import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'; // Adjust the path if necessary
import HeaderCarousel from './component/HeaderCarousel';
import MySection from './component/MySection';
import ProductCard from './component/ProductCard';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar for customer view */}
                
                <HeaderCarousel />
                <MySection />
                <ProductCard />
                <About />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import HeaderCarousel from './component/HeaderCarousel';
// import MySection from './component/MySection';
// import GoldRate from './component/GoldRate';
// import ProductCard from './component/ProductCard';
// import About from './component/About';
// import Contact from './component/Contact';
// import Footer from './component/Footer';
// import AdminPage from './component/AdminPage'; // Adjusted import path

// const App = () => {
//     return (
//         <Router>
//             <div className="App">
//                 <Navbar />
//                 <HeaderCarousel />
//                 <MySection />
//                 <Routes>
//                     <Route path="/" element={<GoldRate />} />
//                     <Route path="/admin" element={<AdminPage />} />
//                 </Routes>
//                 <ProductCard />
//                 <About />
//                 <Contact />
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './component/Navbar';
// // import HeaderCarousel from './component/HeaderCarousel';
// // import MySection from './component/MySection';
// // import GoldRate from './component/GoldRate';
// // import ProductCard from './component/ProductCard';
// // import About from './component/About';
// // import Contact from './component/Contact';
// // import Footer from './component/Footer';

// // const App = () => {
// //     return (
// //         <Router>
// //             <div className="App">
// //                 <Navbar />
                
// //                 <HeaderCarousel />
// //                             <MySection />
// //                             <GoldRate />
// //                             <ProductCard />
// //                             <About />
// //                             <Contact />
// //                             <Footer />
// //             </div>
// //         </Router>
// //     );
// // };

// // export default App;
