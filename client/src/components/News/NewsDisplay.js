import React from 'react';
import News from './News';
import NewsTwo from './NewsTwo'
import App from './App.css'


function NewsDisplay() {


    return (
        <div className="flex-container">

            <NewsTwo />
            <News />

        </div>
    );
}
export default NewsDisplay;