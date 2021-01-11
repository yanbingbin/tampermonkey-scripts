// ==UserScript==
// @name         网页复制辅助
// @namespace    https://github.com/yanbingbin/tampermonkey-scripts
// @version      0.1
// @description  网页复制去除其他添加内容
// @author       yanbingbin
// @license      MIT
// @home-url     https://github.com/yanbingbin/tampermonkey-scripts
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('body').addEventListener('copy', function (event) {
        //获取复制的数据
        var clipboardData = event.clipboardData || window.clipboardData;
        if (!clipboardData) {
            return;
        }
        // 获取当前用户光标选择的文本
        var text = window.getSelection().toString();
        if (text) {
            const copyText = text.replace(/\n(\n)*( )*(\n)*\n/g,'\n'); // 去除空白行
            clipboardData.setData('text/plain', copyText);
        }
        event.stopPropagation();
    });
})();