![logo][1]
# MPlayer音乐播放器

**MPlayer V2.0.0贺新春版于2017.01.01正式发布，本次更新要点：**
1. 代码重写，拆分核心功能和特效，只为更好的自定义
2. 支持HTML结构自定义，只需添加指定class即可
3. 新增诸多API接口，方便调用
4. 删除部分无用的配置项
5. 新增多个回调函数
6. 新增多个配置项

## 用法
```javascript
var player = new MPlayer({
	// 容器选择器名称
	containerSelector: '',
	// 播放列表，格式请参考mplayer-list.js
	songList: [],
	// 专辑图片错误时显示的图片
	defaultImg: '',
	// 自动播放
	autoPlay: false,
	// 播放模式(0->顺序播放,1->单曲循环,2->随机播放,3->列表循环(默认))
	playMode:0,
	// 第一首播放的列表
	playList:0,
	// 第一首播放的歌曲
	playSong:0,
	// 当前歌词距离顶部的距离
	lrcTopPos: 0,
	// 列表模板，用${变量名}$插入模板变量
	listFormat: '',
	// 音量滑块改变事件名称
	volSlideEventName:'',
	// 初始音量
	defaultVolume:0
}, function () {
	// 绑定事件
	this.on('afterInit', function () {
		// 初始化完成
	}).on('beforePlay', function () {
		// 播放前
	}).on('timeUpdate', function () {
	    // 时间变化时
	}).on('end', function () {
		// 播放完毕后
	}).on('mute', function () {
	    // 静音状态改变时
	}).on('changeMode', function () {
		// 播放模式改变时
	});
});
```
详情请参考[文档][2]

## 截图
![screenshot][3]

## 更新日志
* V2.0.0 *** * ***
1. 代码重写，拆分核心功能和特效，只为更好的自定义
2. 支持HTML结构自定义，只需添加指定class即可
3. 新增顺序播放模式
4. 新增诸多API接口，方便调用
5. 删除部分无用的配置项
6. 新增多个回调函数
7. 新增多个配置项
8. 更多细节请[下载][4]体验

* V1.3.3 *** * ***
1. 新增大量配置项
2. 减小CSS文件体积，压缩版仅5KB
3. 增加静音功能

* V1.2.3
1. 重写代码逻辑

* V1.2.1
1. 修复一处bug

* V1.2.0
1. 增强用户体验
2. 优化代码
3. 新增是否自动播放

*** * *** 代表重大更新

## 感谢
MPlayer播放器完整版使用了以下开源项目
|&nbsp;|项目|开源协议|
|:-:|:-:|:-:|
|1|[jQuery][5]|MIT|
|2|[Feather][6]|MIT|
|3|[jQuery.nstSlide.js][7]|MIT|

## 即将更新
1. ajax加载歌词
2. 歌曲播放记忆功能

欢迎[发issue][8]提交您想要的功能

## 赞助
您的赞助让我更有开发的动力
![qrcode][9]


[1]: http://0936zz.github.io/mplayer/static/img/logo_w.png
[2]: http://0936zz.github.io/mplayer/
[3]: http://0936zz.github.io/mplayer/static/img/screenshot.png
[4]: https://github.com/0936zz/mplayer/archive/master.zip
[5]: http://jquery.com/
[6]: http://colebemis.com/feather/
[7]: http://lokku.github.io/jquery-nstslider/
[8]: https://github.com/0936zz/mplayer/issues/new/
[9]: http://0936zz.github.io/mplayer/static/img/qrcode.png