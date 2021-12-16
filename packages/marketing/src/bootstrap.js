import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Mount function to startup the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
};

// If we are in development and in isoloation
// call mount immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

// We are running through container
// and we should xport the mount function
export {mount};
