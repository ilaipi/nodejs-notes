## NodeJS 爬虫解决网页乱码

以[长江有色金属网](http://www.ccmn.cn/)为例

使用`axios`库做为模拟浏览器，要[爬的数据](http://www.ccmn.cn/historyprice/cjxh_1/)在页面源码中

使用`chrome`浏览器访问这个页面，看到正常的内容。但是用`axios`访问时，得到的内容中文都是乱码。
```javascript
const response = await axios.get('http://www.ccmn.cn/historyprice/cjxh_1/');
console.log(response.data);
```

### 解决方案

使用`iconv`库（[源码](https://github.com/bnoordhuis/node-iconv)）来转换编码
`npm install iconv --save`

```javascript
import iconv from 'iconv';

const { Iconv } = iconv;

// 编码转换
const encoder = new Iconv('GBK', 'UTF-8');

// 关键是这里的参数，让axios先得到buffer
response = await axios.get(baseUrl, {
  responseType: 'arraybuffer'
});

// 然后把buffer转换编码
response = encoder.convert(response.data).toString();

// 把转换后的空白都去掉
response = response.replace(/\r?\n|\r|\t|\s{2,}/g, '');
```

这样最后得到的就是正常的html了。
