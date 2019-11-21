# MyBlog
博客
/*----coding---*/
#JS区分iphoneX
// iPhone X、iPhone XS
var isIPhoneX = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;
// iPhone XS Max
var isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896;
// iPhone XR
var isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896;

/*peformed*/
    lightHoruse: https://developers.google.com/web/tools/lighthouse/
     1、灯塔： Lighthouse是一种开源的，自动化的工具，用于提高网页质量。您可以在公开或需要身份验证的任何网页上运行它。它对性能，可访问性，渐进式Web应用程序等进行审核。
     
/*|_>open page time or speed*/
https://web.dev/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=cli
