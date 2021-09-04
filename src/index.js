import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactElectronApp from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

( function ()
{
	console.clear();
	const _app_string = ReactElectronApp.defaultProps.Description + ' v:' + ReactElectronApp.defaultProps.BuildNumber;

	console.log( "BEGIN\t", _app_string, new Date().toISOString() );
	try
	{
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			ReactDOM.render( <ReactElectronApp/>, document.getElementById("qai-app-root"));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

			return;
		} );
	}
	catch ( ex )
	{
		console.log( "CATCH", _app_string, new Date().toISOString() );
		console.error( ex.number, ":", ex.name, ":", ex.message );
		console.error( "exception stack::", ex.stack );
		return;
	}
	finally
	{
		console.log( "FINALLY\t", _app_string, new Date().toISOString() );
	}
	console.log( "END\t\t", _app_string, new Date().toISOString() );
	return;
} )();
