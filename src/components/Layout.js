import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - Sankar Wooliesx Tech Challange" : "Sankar Wooliesx Tech Challange" }</title>
            <meta name = "description" content={ description || "Sankar Wooliesx Tech Challange" } />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;