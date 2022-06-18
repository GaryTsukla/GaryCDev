const express = require('express');
const app = express();
const path = require('path');
const addPath=function(p){
	return path.join(__dirname,p);
};
// Access static resources in these pages
app.use('/assets', express.static(addPath('/assets')));
/* app.use('/images', express.static(addPath('/images'))); */

// Send requested page, h=header&request,r=response
app.get('/',(h,r)=>{
	r.sendFile(addPath('/index.html'));
});

// Throw 404 if no page found
app.use((h,r)=>{
	r.status(404).sendFile(addPath('/404.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
	// eslint-disable-next-line no-console
	console.log('Server listening on port '+PORT+'...');
});