new MPlayer({
	// 容器选择器名称
	containerSelector: '.mp',
	// 播放列表，格式请参考mplayer-list.js
	songList: mplayer_song,
	// 专辑图片错误时显示的图片
	defaultImg: 'img/mplayer_error.png',
	// 自动播放
	autoPlay: false,
	// 播放模式(0->顺序播放,1->单曲循环,2->随机播放,3->列表循环(默认))
	playMode:0,
	// 第一首播放的列表
	playList:0,
	// 第一首播放的歌曲
	playSong:5,
	// 当前歌词距离顶部的距离
	lrcTopPos: 34,
	// 列表模板，用${变量名}$插入模板变量
	listFormat: '<tr><td>${name}$</td><td>${singer}$</td><td>${time}$</td></tr>',
	// 音量滑块改变事件名称
	volSlideEventName:'change',
	// 初始音量
	defaultVolume:80
});