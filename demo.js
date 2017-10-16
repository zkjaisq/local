var fs =require('fs')
var dirName =process.argv[2]
fs.exists('[2]',function(exists){
    if(exists){ console.log('yes');}
    else{process.chdir("/Users/Administrator")
        fs.mkdirSync("./"+dirName)
        process.chdir("./+dirName")
        fs.mkdirSync('css')
        fs.mkdirSync('js')
        fs.writeFileSync("index.html", "<!DOCTYPE>\n<title>Hello<title>\n<h1>Hi<h1>")
        fs.writeFileSync("css/style.css", "h1{color: red}")
        fs.writeFileSync("js/main.js", "war string = 'Hello Word'\nalert(sreing)")
        process.exit(0)   
        }
});