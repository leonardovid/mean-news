function userLogued (req,res,next){
	if (req.session.userId) {
		return res.redirect('/panel');
	} 	
	return next();		
}

function userLoguedOut (req,res,next){
	if (!req.session.userId) {
		return res.redirect('/auth');
	} 	
	return next();		
}


module.exports.userLogued = userLogued;
module.exports.userLoguedOut = userLoguedOut;