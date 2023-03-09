const http = require("http");

http.createServer(function(request, response){
    response.end("Im workin! Have a nice day :)");
}).listen(3000);
