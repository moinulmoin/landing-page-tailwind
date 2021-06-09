import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className="h-screen font-sans">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
