import React from 'react';
import { DashboardContext } from './util/app-context.js';
import { AppConfig } from './config.js';
import './App.css';
import logo from './logo.svg';

export default class ReactElectronApp extends React.PureComponent
{
  static contextType = DashboardContext; 
  static defaultProps = {
    Application: "SeanGApp",
    Description: "myApp",
    BuildNumber: "0.1.0",
    StorageKeys: {
        IsAuthenticated: "qai-auth",
        Token: "qai-token",
        LastAuth: "qai-lastAuth"
    }
};  
  constructor ( props )
  {
      super( props );
      this.StoreKeys = ReactElectronApp.defaultProps.StorageKeys;

      this.state = {
          isLoading: false,
          hasRedirect: false,
      };

      console.debug( 'ReactElectronApp.process.env.NODE_ENV', process.env.NODE_ENV );

      if ( process.env.NODE_ENV === "development" )
      {
          //  console.debug( 'ReactElectronApp.process.env.NODE_ENV', process.env.NODE_ENV );         
          // console.debug( 'QuivrWebApp.process.env.REACT_APP_NAME', process.env.REACT_APP_NAME );
          // console.debug( 'QuivrWebApp.process.env.REACT_APP_BUILD', process.env.REACT_APP_BUILD );
          // console.debug( 'QuivrWebApp.process.env.REACT_APP_SVC_BUILD', process.env.REACT_APP_SVC_BUILD );
      }

      document.title = ReactElectronApp.defaultProps.Application;
 
      // document.getElementsByTagName( "META" )[ 1 ].content = process.env.REACT_APP_NAME;
      // document.getElementsByTagName( "META" )[ 2 ].content = process.env.NODE_ENV + '.' + process.env.REACT_APP_BUILD;
      // document.getElementsByTagName( "META" )[ 3 ].content = process.env.REACT_APP_SVC_BUILD;
      return;
  };
  InitContext()
  {   //  
    console.debug( "InitContext" );//, this.state, this.context );
      //  this.ValidateLocalStorage();

      // add context methods
      this.context.DEBUG = AppConfig.DEBUG;
      this.context.SignIn = this.SignIn.bind( this );
      this.context.SignOut = this.SignOut.bind( this );

      return;
  };
  componentDidMount()
  {   //  
    console.debug( "ReactElectronApp.componentDidMount()" );
      return;
  }
  componentWillUnmount()
  {	//  
    console.debug( "ReactElectronApp.componentWillUnmount()" );
      return;
  }; 
  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React in Electron</h1> 
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React</a>
        </header>
      </div>
    );
  };
}