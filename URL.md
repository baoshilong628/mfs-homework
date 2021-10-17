# 问答题
## 什么是 URL？

统一资源定位器 Uniform Resource Locator

信息资源在网络上的唯一标识地址

URL主要有以下组成部分

Scheme 标识所使用的协议，也可以说明资源的类型 常见有HTTP HTTPS file Socket

host 主机名称，可以使用网址或IP地址，在某些协议下可以使用主机名称

port 主机端口号 HTTP 默认是80端口 HTTPS默认是443端口

path 资源路径，省略时则为根目录

filename 文件名称

query URL参数

## URL 有哪些常见的 Schemes？他们各是什么含义？

HTTP 超文本传输协议 不加密

HTTPS 安全超文本传输协议 加密

ftp 文件传输协议

file 文件访问协议 浏览本地文件

## URL 有哪些约束？

URL最长限制2083字符

URL默认使用ASCII编码

URL非ASCII部分采用% 后跟两位16进制替代

URL不能包含空格

## 请将以下 URL 转换成合法的 URL

baidu.com/s?wd=码蜂社 前端

==>

https://www.baidu.com/s?wd=码蜂社+前端

## 请提取以下 URL 的 scheme，host，port，path，filename

https://www.mafengshe.com/course/fe-senior/ad

scheme https 

host www.mafengshe.com

port 443

path /course/fe-senior/

filename ad


http://127.0.0.1:3000/course/fe-senior/ad

scheme http

host 127.0.0.1

port 3000

path /course/fe-senior/

filename ad