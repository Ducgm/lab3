//b1: khai báo http
onst http = require("http");
// muốn deploy lên hosting heroku
// thì cần set port với process.env.PORT
const port = process.env.PORT || 3000;

const port = process.env.PORT || 3000;
//b3: tạo web sẻver, set header + code, thêm nội dung cho web
//requesr: client => server
//respone: server => client
const app = http.createServer((req, res) ==> {
    res.statusCode = 200; // HTTP_OK
    res.setHeader("Content-Type", "text/html");
    res.end("Hello my fen, It's me";)

});

//Bước 4: chạy web bằn cách listen port
app.listen(port, () => {
    console.log("Server is listening at http://localhost:" + port);

});
