
    var btn = document.getElementById('returnTop');
    //锚点链接显示与取消
    if(btn){
        function aToTop(){
            if(document.documentElement.scrollTop!=0){
                btn.style.display = 'block'
            }else{
                btn.style.display = 'none'
            }
        }
        aToTop()
        window.onscroll = function(){
            aToTop()
    
        }
    
        btn.onclick = function(){
            btn.style.display = 'none';
        }
    }


    //封装ajax
    function ajax(type, url, success, error) {
        var ajax = new XMLHttpRequest();
        if (type.toLowerCase() == 'post') {
            if (url.indexOf('?') == -1) {
                ajax.open(type, url, true);
                ajax.setRequestHeader('Content-type', 'application/x-www-formurlencoded');
                ajax.send();
            } else {
                url = url.split('?');
                ajax.open(type, url[0], true);
                ajax.setRequestHeader('Content-type', 'application/x-www-formurlencoded');
                ajax.send(url[1]);
            }
        } else {
            ajax.open(type, url, true);
            ajax.send();
        }
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    // 请求成功以后
                    success && success(ajax.responseText);
                } else {
                    // 错误信息
                    error && error(ajax.status);
                }
            }
        }
    
    }


    //获取非行间样式
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    //封装运动函数
    function Move(obj, json,tim) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var tag = true;
            for (var attr in json) {

                if (attr == 'opacity') {
                    var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                } else {
                    var cur = parseInt(getStyle(obj, attr))
                }
                var speed = (json[attr] - cur) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur !== json[attr]) {
                    tag = false;
                }

                if (attr == 'opacity') {
                    obj.style[attr] = (speed + cur) / 100;
                } else {
                    obj.style[attr] = speed + cur + 'px'
                }
                if (tag) {
                    clearInterval(obj.timer)
                }

            }




        }, tim)

    }