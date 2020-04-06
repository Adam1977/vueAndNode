const express = require('express')

const app = express()

const loginRouter = require('./router/login.router')
const listRouter = require('./router/list.router')

//跨域  后期删
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //为了跨域保持session，所以指定地址，不能用*
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/user', loginRouter)
app.use('/list', listRouter)

// app.use('*', (req, res) => {
//     res.json({
//         message: 'success'
//     })
// })
app.listen(30000, () => {
    console.log('server is running')
})
