新安装的ubuntu server版，可能会出现vim打开包括中文的文件时，中文全部不能正常显示的问题。

### 解决方法：

`vim /etc/default/locale`

输入：
```
LANGUAGE=en_US.UTF-8
LANG=en_US.UTF-8
LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
```

然后执行`source /etc/default/locale`
