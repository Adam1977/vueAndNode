const express = require('express')

const router = express.Router()

const bodyParser = require('body-parser')
const models = require('../../db/models')

router.use(express.json())
router.use(express.urlencoded())
router.use(bodyParser.urlencoded({extended: true}))

// 查询
router.get('/getList/:status/:page', async (req, res) => {
    // status 1-待办，2-完成，3-删除, 0-全部
    let {status, page} = req.params
    let limit = 10
    // page从0开始
    let offset = page * limit
    let where = {}
    if (status != 0) {
        where.status = status
    }
    let list = await models.tableList.findAndCountAll({
        where,
        offset,
        limit
    })
    res.json({
        message: '列表查询成功',
        list
    })
})

// 创建
router.post('/create', async (req, res) => {
    let {name,deadline,content} = req.body
    let list = await models.tableList.create({
        name,
        deadline,
        content
    })
    res.json({
        message: '新增成功',
        list
    })
})

// 修改
router.post('/update', async (req, res) => {
    let {id,name,deadline,content} = req.body
    let list = await models.tableList.findOne({
        where: {
            id
        }
    })
    if (list) {
        list = await list.update({
            name,
            deadline,
            content
        })
        res.json({
            message: '修改成功',
            list
        })
    } else {
        res.json({
            message: '修改失败'
        })
    }
})

// 删除，仅改状态
router.post('/delete', async (req, res) => {
    let {id,status} = req.body
    let list = await models.tableList.findOne({
        where: {
            id
        }
    })
    if (list && status != list.status) {
        list = await list.update({
            status
        })
        res.json({
            message: '编辑成功',
            list
        })
    } else {
        res.json({
            message: '编辑失败'
        })
    }
})

module.exports = router
