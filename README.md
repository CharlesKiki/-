# 这是什么 #
使用DCloud平台，结合JS，HTML5，css的小玩具。<br>
旨在验证各种手机App的设计方法。

# 怎么玩耍 #
	
	1.Hbuilder，这款IDE安装简单，无需配置。
	2.一款IOS或者Android手机。因为玩具是在真机上玩耍的。

# 怎么组织项目？ #
各种功能都被放在统一的文件夹下。通过主页面调用。
> 注：测试的文档和功能说明都在对应的文件夹内。

App的显示方式（也就是如何显示主界面的。）<br>
Main.index是入口，除此之外所有的页面的都是以文件夹形式存放的。也就是说，<br>
根目录下的Main.index是所有功能的控制器。


## 调试注意 ##
使用Hbuilder打开的Mainfest文件记录了App的入口文件。

## 项目结构说明 ##

- CSS 		    --全局CSS，仅仅用在MUI的控件上，具体的功能会被更近的CSS覆盖
- fonts         --MUI字体
- FunctionPages --各功能页面，各种玩具
- images        --app图标，全局性的，局部的资源要放到局部
- js            --全局MUI js
- libs          --打包文件库
- Pages         --打包配置文件
- unpackages    --生成的app
- .gitignore    --git忽略列表
- .project      --Hbuilder项目配置文件
- main.html     --主入口页面
- mainfest.json --项目全局声明配置
- README.md     --介绍