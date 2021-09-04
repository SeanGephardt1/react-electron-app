import React from 'react';
export const DashboardContext = React.createContext( {
	DEBUG: false,
	User: {
		IsAuthenticated: true,
		Token: "",
	},
	UserSessionData: [],
	SignIn: () => { },
	SignOut: () => { }
});