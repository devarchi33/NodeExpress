/**
 * New node file
 */
module.exports.Index = function(req, res) {
	  res.render('index', { title: 'Express' });
};

module.exports.usrAdd = function(req, res){
	//console.log('Form Data Received');
	//res.json(req.body);
	res.render('user_info', req.body);
};
