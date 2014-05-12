var path = require('path');
var fs = require('fs');

var basePath = path.dirname(require.main.filename);
var imagesPath = path.resolve(basePath, 'public/images');

var validTypes = [
    'bathroom',
    'commercial',
    'exterior',
    'kitchen',
    'lower_level'
];

var isValidType = function(type){
    return validTypes.indexOf(type) !== -1;
};

var getExtension = function(filename) {
    var ext = path.extname(filename||'')
                    .split('.')
                    .map(function(str) {
                        return str.toLowerCase();
                    });
    return ext[ext.length - 1];
}

var imageExtensions = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'bmp',
    'tif',
    'tiff'
];

var isImageExtension = function(ext){
    return imageExtensions.indexOf(ext) !== -1;
};

var isImageFile = function(file){
   var ext = getExtension(file);
   return isImageExtension(ext);
};

var getImages = function(type){
    if(!type || !isValidType(type)) {
        return [];
    }
    var files = [];
    var imageTypePath = path.join(imagesPath, type);
    try {
        files = fs.readdirSync(imageTypePath);
    } catch(err) {
        return [];
    }
    return files.filter(isImageFile);
};

exports.index = function(req, res){
    var images = getImages(req.params.type);
    res.json(images || []);
};
