# api文档
## 需求梳理
    1、登录
    2、列表查询
    3、列表增加
    4、列表修改
    5、列表删除
## 接口
    1、登录(user)
    接口名：login(post)
    字段：
    name:string, password:string
    2、列表(tableList)
        字段：
        name:string, deadline:date, content:string, status:number
        1、查询:getList(get)
        2、增加：addList(post)
        字段：
        name:string, deadline:date, content:string, status:number
        3、修改
        接口名：updateList(post)
        字段：
        id,status
        4、删除
        接口名：deleteList(post)
        id
     
