
## 纯静态化

api基本只有两个，一个`/mirrors`，一个`/mirror/<id>`。直接源码里内置json即可。

注意`mirror-front\gatsby-config.js`的assetPrefix和 `mirror-front\gatsby-config.js`最底下有个develop middleware把去api的请求都转发到了那边zju后端。


## 部署

```
scp -r ./public/* labnas:/var/www/zjumirror/
```


![cover](https://raw.githubusercontent.com/RalXYZ/repo-pictures/main/mirror-front/cover.png)  

# ZJU Mirror Front-end

back-end JSON format: [MirrorsDotNet API](https://github.com/ZJUSCT/MirrorsDotNet/blob/main/Docs/Swagger.json)

## Deployment

All static files must be mapped to `/static/*`.  

## Special Thanks

UI Designer: [Rynco Maekawa](https://github.com/lynzrand)  
