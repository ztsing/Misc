function _zqSetCookie(key,value,options)
{
	if( ! options )
	{
		options = {};
	}
	if( options.expires )
	{
		var expires = options.expires;
		var unit = expires.toString().substr(expires.toString().length-1);
		expires = parseInt(expires,10);
		if( 'h' === unit )
		{
			expires = 3600000*expires;
		}
		else if( 'm' === unit )
		{
			expires = 60000*expires;
		}
		else if( 's' === unit )
		{
			expires = 1000*expires;
		}
		
		options.expires = new Date( +(new Date())+expires ).toUTCString();
	}
	return document.cookie=[
		key,'=',value,
		options.expires ? (';expires=' + options.expires):'',
          options.path    ? ('; path=' + options.path) : ';path=/',
		options.domain  ? ('; domain=' + options.domain) : '',
		options.secure  ? ('; secure') : ''
	].join('');
}
function _zqGetCookie(key)
{
	var re = new RegExp('(?:\\b|;)\\s*'+key+'=([^;]+)');
	var match = re.exec(document.cookie);
	if( match instanceof Array )
	{
		return match[1];
	}
}
function _zqRemoveCookie(key, domain, path)
{
	if( ! domain ){
		domain='';
	}else{
		domain=';' + domain;
	}
	if( ! path ){
		path = '/';
	}
	path = ';' + path;
	document.cookie=key + '=0;expires='+(new Date( +(new Date())-1 ).toUTCString()) + domain + path;
}
