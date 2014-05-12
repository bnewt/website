
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.home = function(req, res){
  res.render('home');
};

exports.images= function(req, res){
  res.render('images');
};

exports.testimonials = function(req, res){
  res.render('testimonials');
};

exports.contact = function(req, res){
  res.render('contact');
};

exports.about = function(req, res){
  res.render('about');
};
