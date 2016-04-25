# WIFI_Auto_Connect
wifi万能钥匙实现方法以及原理，在系统wifi列表可以标注自己的信息

#ios9配置说明:
    //ios 9 自动设置密码还需要一个文件，这个文件需要发申请邮件给苹果
    //https://forums.developer.apple.com/thread/9015
    //邮件地址是 networkextension@apple.com
    
    //You need to email networkextension@apple.com and ask for that entitlement.  They should get back to you with a questionnaire, and it goes from there.
    
    //ios9 不需要下载任何文件就可以连接wifi 可谓ios9的大突破
    //居然可以直接在系统wifi列表能显示自己设置的东西，这也表明苹果也慢慢的在开放自己的一些系统接口了
    
    #ios8配置说明:
    ios8的实现方式则是下载配置文件的方式做的，在这里我提供了在服务端动态配置WIFI配置文件的创建，
    我使用的是node js的xml模块，js文件在工程项目里文件名：create_wifi_config
    https://github.com/Yuedevelopment/WIFI_Auto_Connect/blob/master/create_wifi_config.js
    

# WIFI万能钥匙在系统列表居然能加自己的信息如图：
![image](https://github.com/Yuedevelopment/WIFI_Auto_Connect/blob/master/Screen_WIFIpng.png)
