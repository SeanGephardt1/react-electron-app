const _api = {
	API_ADMIN_USER_HEADERS: {
		'headers':
		{	
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Content-Type': 'application/json',
			'x-api-user-token': 'X-SYSTEM-TOKEN'
		}
	},
	API_BASE_URL: process.env.REACT_APP_SVC_BUILD,
	API_AUTH_CALL_PLAIN: '/auth?plain=true',
};
export
{
	_api as ApiValues
};