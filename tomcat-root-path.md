tomcat在`conf/server.xml`中，在`<Host>`标签内增加：
```xml
<Context path="" docBase="./../webapps/appointment-maker">

            <WatchedResource>WEB-INF/web.xml</WatchedResource>
</Context>
```
