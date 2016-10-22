var connect = require('connect');
var compression = require('compression');
var serveStatic = require('serve-static');

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header 
    return false
  }
 
  // fallback to standard filter function 
  return compression.filter(req, res)
}

connect().use(compression({filter: shouldCompress}));
connect().use(serveStatic(__dirname + '/build')).listen(3000, function(){
    console.log('Server running on 3000...');
});
