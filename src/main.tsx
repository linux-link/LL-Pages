
import * as ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

// 3. Render your application with `ColorModeScript` and `ChakraProvider`
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
