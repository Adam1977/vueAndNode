const express = require('express')

const router = express.Router()

const models = require('../../db/models')
// 不然拿不到req.body传参
const bodyParser = require('body-parser')

router.use(express.json())
router.use(express.urlencoded())
router.use(bodyParser.urlencoded({extended: true}))

// 新增用户
router.post('/addUser', async (req, res) => {
    let {name, password} = req.body
    let user = await models.User.create({
        name,
        password
    })
    res.json({
        message: '增加成功',
        user
    })
})

// 登录
router.post('/login', async (req, res) => {
    let {name, password} = req.body
    let listOne = await models.User.findOne({
        where: {
            name
        }
    })
    if (listOne && password == listOne.password) {
        res.json({
            message: 'login success',
            listOne
        })
    } else {
        res.json({
            message: 'login failure'
        })
    }
})

module.exports = router
