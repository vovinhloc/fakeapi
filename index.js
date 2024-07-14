const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000; // Hoặc bất kỳ cổng nào bạn muốn
// Sử dụng middleware CORS để cho phép tất cả các origin
app.use(cors());
// Hoặc bạn có thể cấu hình chi tiết hơn:
// app.use(cors({
//     origin: 'http://localhost:5500', // Chỉ cho phép origin này
//     methods: ['GET'],              // Chỉ cho phép phương thức GET
//     allowedHeaders: ['Content-Type'] // Chỉ cho phép header Content-Type
// }));

// Dữ liệu options (bạn có thể thay thế bằng dữ liệu từ database, ...)
const options = [
    "url",
    "abc",
    "con gài",
    "con gà 3",
    "trái cam 4",
    "táo",
    "chuối",
    "xoài",
    "dưa hấu"
];

app.get('/api/options', (req, res) => {
    res.json(options);
});

app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});
