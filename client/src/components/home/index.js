import React from 'react';
import Footer from '../widgets/footer';
import Header from '../widgets/header';
import NavBar from '../widgets/nav';
import Scanner from '../widgets/scanner';
import Solution from '../widgets/solution';
import Ai from '../widgets/ai';
import ContactUs from '../widgets/contact';


const Home = (props)  => {
 
    return (<div className="container-fluid p-0">
            <NavBar />
            <Header />
            <Scanner />
            <Ai />
            <Solution />
            <ContactUs />
            <Footer />
    </div>)
}


export default Home;