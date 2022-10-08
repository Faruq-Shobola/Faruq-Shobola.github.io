import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work} from './container';

const App = () => {
    return(
        <div className="app">
            <About />
            <Header />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;