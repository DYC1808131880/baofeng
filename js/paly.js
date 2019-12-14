window.onload = function(){
    var navMenu = document.getElementById('navMenu');
    var topMenu = document.getElementById('topMeau');
    var timer = null;
    var mList = document.getElementById('menuList');
    var sList = document.getElementById('menuListContent');
    var sBtn = document.getElementById('scrollBtn');

    var cai = document.getElementById('cai');
    var zan = document.getElementById('zan');
    var love = document.getElementById('love');
    var dow = document.getElementById('xia');

    var dowWindow = document.getElementById('dowWindow');
    var col = document.getElementById('colse');
    var fx = document.getElementById('fen');
    var fxWindow = document.getElementById('fxWindow');
    var col2 =document.getElementById('colse2');
    var jt = document.getElementById('ju');
    var jtWindow = document.getElementById('jtWindow');
    var col3 = document.getElementById('colse3')
    var likeFilm =document.getElementById('likeFilm');
    var hotFilm = document.getElementById('hotFilm');
    var listBox = document.getElementById('listBox');
    var comtxt = document.getElementById('txt');
    var comtxtNum = document.getElementById('txtNum');

    var historyUl = document.getElementById('historyUl');
    var historyLi = historyUl.getElementsByTagName('li');
    var seen = document.getElementById('seen');
    var seenBox = document.getElementById('seenBox');
    var like = document.getElementById('like');
    var likeBox = document.getElementById('likeBox');
    var dowld = document.getElementById('download');
    var dowBox = document.getElementById('dowBox');

    var codeDown = document.getElementById('codeDown');
    var codeBox = document.getElementById('codeBox');
    var newcode = document.getElementById('newcode');
    var playcode = document.getElementById('playcode');


    var combtn = document.getElementById('combtn');
    //登录注册
    var log = document.getElementById('log');
    var login = document.getElementById('loginWindow');
    var logcl = document.getElementById('colseLogin');


    var go = document.getElementById('go');
    var goTop = document.getElementById('goTop');


    var menuList = document.getElementById('menuList');
    var menushop = document.getElementById('menushop');
    var menubtn1 = document.getElementById('menubtn1')
    var menubtn2 = document.getElementById('menubtn2')




    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
        'W', 'X', 'Y', 'Z']
    //播放右侧滑动条相关参数
    var n = sList.clientHeight;
    var m = mList.clientHeight;
    var z = (n-m)/(m-sBtn.clientHeight);

    navMenu.onmouseover = function(){
        topMenu.style.display = 'block'
    }

    navMenu.onmouseout = function(){
        timer = setTimeout(function(){
            topMenu.style.display = 'none'
        }, 100);
    
    }
    topMenu.onmouseover = function(){
        clearTimeout(timer)
        topMenu.style.display = 'block'
    }
    topMenu.onmouseout = function(){
        topMenu.style.display = 'none'
    }
    if(event.detail){
        mList.addEventListener('DOMMouseScroll',fun,false);//给大盒子绑定滚轮事件
       
    }else{
        mList.onmousewheel = fun;
        
    }
    if(sBtn.attachEvent){
        sBtn.attachEvent("onmousedown",mdn)
    }else{
        sBtn.addEventListener("mousedown",mdn)
    }

    //登录注册

    log.onclick = function(){
        login.style.display = 'block'
    }
    logcl.onclick = function(){
        login.style.display = 'none'
    }
    



    love.onclick = function(){
        login.style.display = 'block'
    }
    



    combtn.onclick = function(){
        login.style.display = 'block'
        return false;
    }

    function mdn(){//给滑动条添加鼠标事件 使
        mov(sBtn,sList,z);
    }
    function fun(ev){//滑动函数
        var ev = window.event || ev;
        if(ev.wheelDelta){
            //滚轮上滑
            console.log(sList.style.top)
            console.log(parseInt(sBtn.style.top))
            if(ev.wheelDelta>0&&parseInt(sBtn.style.top)>20){
                sList.style.top = parseInt(sList.style.top)+z*20+'px';                                                                    
                sBtn.style.top = parseInt(sBtn.style.top)-20+'px';
            }else if(ev.wheelDelta>0&&parseInt(sBtn.style.top)<=20){
                console.log(1)
                sList.style.top = 0+'px';
                sBtn.style.top = 0+'px';
            } 
            //滚轮下滑
            if(ev.wheelDelta<0&&parseInt(sBtn.style.top)<420){
                sList.style.top = parseInt(sList.style.top)-z*20+'px';
                sBtn.style.top = parseInt(sBtn.style.top)+20+'px';
            }else if(ev.wheelDelta<0&&parseInt(sBtn.style.top)>=420){
                sList.style.top = -(n-m)+'px';
                sBtn.style.top = (m-sBtn.clientHeight)+'px'
            }
            return false;   
        }

      
    }
    menubtn1.onclick = function(){
        menuList.style.display = 'block'
        menushop.style.display = 'none'
        menubtn1.parentNode.className = 'on2'
        menubtn2.parentNode.className = ''
        return false;
    }
    menubtn2.onclick = function(){
        menuList.style.display = 'none'
        menushop.style.display = 'block'
        menubtn1.parentNode.className = ''
        menubtn2.parentNode.className = 'on2'
        return false;
    }

    
    function mov(box,obj,ev){//定义一个函数 当滑动条被鼠标选中时可以拖拽
        var ev = window.event || ev;
        var y = ev.clientY;
        var y2 = box.offsetTop;
        if(box.setCapture){
            box.setCapture;
        }
        document.onmousemove = function(ev){
            var ev = window.event || ev;
            box.style.top = ev.clientY-y+y2+"px" ;//滑动条的位置赋值

            obj.style.top = -z*(ev.clientY-y+y2)+"px";//内容的位置赋值

            if(parseInt(box.style.top)<=0){
                box.style.top = 0+'px';
                obj.style.top = 0+'px';
            }
            if(parseInt(box.style.top)>=(m-sBtn.clientHeight)){
                box.style.top =(m-sBtn.clientHeight)+'px';
                obj.style.top = -(n-m)+'px';
            }
        return false;   //阻止默认事件 
        }
        
        document.onmouseup = function(){
            if(box.releaseCapture){
                box.releaseCapture;
            }
           document.onmousemove = document.onmouseup = ''//抬起后清除相应鼠标事件
        } 
    }
    //赞

    if(zan.addEventListener){
        zan.addEventListener('mouseover',fun1,false)
        zan.addEventListener('mouseover',fun2,false)
        zan.addEventListener('mouseout',fun3,false)
        zan.addEventListener('mouseout',fun4,false)
        zan.addEventListener('click',fun5,false)
    }else{
        zan.attachEvent('onmouseover',fun1,false)
        zan.attachEvent('onmouseover',fun2,false)
        zan.attachEvent('onmouseout',fun3,false)
        zan.attachEvent('onmouseout',fun4,false)
        zan.attachEvent('onclick',fun5,false)
    }

    var txt = zan.innerHTML;
    function fun1(){
        this.style.backgroundPositionY = '-257px'
        this.style.color = '#1a9eff';
    }
    function fun2(){
        this.innerHTML = '赞';
    }
    function  fun3(){
        this.style.color = ''
    }
    function  fun4(){
        this.style.backgroundPositionY = ''
        this.innerHTML = txt;
    }
    function fun5(){
        this.innerHTML = parseInt(txt)+1;
        if(zan.removeEventListener){
            zan.removeEventListener('mouseout',fun4)
            zan.removeEventListener('mouseover',fun2)
            zan.removeEventListener('click',fun5)
        }else{
            zan.detachEvent('onmouseout',fun4)
            zan.detachEvent('onmouseover',fun2)
            zan.detachEvent('onclick',fun5)
        }

    }




    //踩
    if(cai.addEventListener){
        cai.addEventListener('mouseover',fun11,false)
        cai.addEventListener('mouseover',fun22,false)
        cai.addEventListener('mouseout',fun3,false)
        cai.addEventListener('mouseout',fun44,false)
        cai.addEventListener('click',fun55,false)
    }else{
        cai.attachEvent('onmouseover',fun11,false)
        cai.attachEvent('onmouseover',fun22,false)
        cai.attachEvent('onmouseout',fun3,false)
        cai.attachEvent('onmouseout',fun44,false)
        cai.attachEvent('onclick',fun55,false)
    }

    var txt = cai.innerHTML;
    function fun11(){
        this.style.backgroundPositionY = '-292px'
        this.style.color = '#1a9eff';
    }
    function fun22(){
        this.innerHTML = '踩';
    }
    function  fun44(){
        this.style.backgroundPositionY = ''
        this.innerHTML = txt;
    }
    function fun55(){
        this.innerHTML = parseInt(txt)+1;
        if(cai.removeEventListener){
            cai.removeEventListener('mouseout',fun44)
            cai.removeEventListener('mouseover',fun22)
            cai.removeEventListener('click',fun55)
        }else{
            cai.detachEvent('onmouseout',fun44)
            cai.detachEvent('onmouseover',fun22)
            cai.detachEvent('onclick',fun55)
        }

    }
   
    //收藏
    if(love.addEventListener){
        love.addEventListener('mouseover',fun111,false)
        love.addEventListener('mouseout',fun222,false)
    }else{
        love.attachEvent('onmouseover',fun111,false)
        love.attachEvent('onmouseout',fun222,false)
    }

    function fun111(){
        this.style.backgroundPositionY = '-328px'
        this.style.color = '#1a93ff'
    }
    function fun222(){
        this.style.color = ''
        this.style.backgroundPositionY = ''
    }

    //下载弹窗
    dow.onmouseover = function(){
        dowWindow.style.display = 'block'
    }
    dow.onmouseout = function(){
        dowWindow.style.display = 'none'
    }
    dowWindow.onmouseover = function(){

        dowWindow.style.display = 'block'
    }
    dowWindow.onmouseout = function(){
        dowWindow.style.display = 'none'
    }
    col.onclick = function(){
        dowWindow.style.display = 'none'
    }

    //分享弹窗
    fx.onmouseover = function(){
        fxWindow.style.display = 'block'
    }
    fx.onmouseout = function(){
        fxWindow.style.display = 'none'
    }
    fxWindow.onmouseover = function(){

        fxWindow.style.display = 'block'
    }
    fxWindow.onmouseout = function(){
        fxWindow.style.display = 'none'
    }
    col2.onclick = function(){
        fxWindow.style.display = 'none'
    }

    //剧透弹窗
    jt.onmouseover = function(){
        jtWindow.style.display = 'block'
    }
    jt.onmouseout = function(){
        jtWindow.style.display = 'none'
    }
    jtWindow.onmouseover = function(){

        jtWindow.style.display = 'block'
    }
    jtWindow.onmouseout = function(){
        jtWindow.style.display = 'none'
    }
    col3.onclick = function(){
        jtWindow.style.display = 'none'
    }




    //主体部分信息填入

    //猜你喜欢ajax
    ajaxJson(0,8,likeFilm,'http://127.0.0.1:5500/项目/json/paly1.json')
    

    var heartIcon = document.getElementsByTagName('i');
    console.log(heartIcon[0]);
    function ajaxJson(num,num2,box,url){
        ajax('get',url,function(data){

            var dataArr = eval(data);
            var recond = '';
        
        
            for(var i=num; i<num2; i++){
                recond += '<li><img src="'+dataArr[i].url+'" alt=""><div class="textbg"></div><div class="synopsis"><a href="'+dataArr[i].http+'" target="_blank">'+dataArr[i].title+'</a><span>'+dataArr[i].score+'</span><p>'+dataArr[i].synopsis+'</p></div><a href="'+dataArr[i].http+'"><i></i></a></li>';    
            }
                box.innerHTML = recond;
                var heartIcon = likeFilm.getElementsByTagName('i');
                var libox = likeFilm.getElementsByTagName('a');
            
                for(j=1;j<libox.length;j=j+2){
                    libox[j].index = (j+1)/2-1;

                    libox[j].onmouseover = function(){
                        
                        heartIcon[this.index].style.display = 'block'
                        heartIcon[this.index].onclick = function(){
                            login.style.display = 'block'
                            return false;
                        }
                    }
                    libox[j].onmouseleave = function(){
                        heartIcon[this.index].style.display = 'none'
                    }

                    
                }
                
            })

    }

    //热门推荐ajax
    ajaxJson2(0,9,hotFilm,'http://127.0.0.1:5500/项目/json/paly2.json')
    function ajaxJson2(num,num2,box,url){
        ajax('get',url,function(data){
            var dataArr = eval(data);
            var recond = '';
            for(var i=num; i<num2; i++){
                recond += ' <li><a href="'+dataArr[i].http+'"><img src="'+dataArr[i].url+'" alt=""></a><div><span>'+dataArr[i].title+'</span></div></li>';
            }
                box.innerHTML = recond;
            })
    }

    //电影榜单ajax
    ajaxJson3(0,8,listBox,'http://127.0.0.1:5500/项目/json/paly3.json')
    function ajaxJson3(num,num2,box,url){
        ajax('get',url,function(data){
            var dataArr = eval(data);
            var recond = '';
            for(var i=num; i<num2; i++){
                recond += '<li><div class="listText"><em>'+dataArr[i].num+'</em>'+dataArr[i].title+'<span>'+dataArr[i].score+'</span></div><div class="listPic"><img src="'+dataArr[i].url+'" alt=""><div class="listPicText"><span>'+dataArr[i].title+'</span><div class="liastPicTextbg"></div><em>'+dataArr[i].num+'</em></div><a href=""></a></div></li>';
            }
                box.innerHTML = recond;
                //电影榜单
                var listL=listBox.getElementsByTagName('li');

                listL[0].children[1].style.display = 'block';
                listL[0].children[0].style.display = 'none';
                for(i=0;i<listL.length;i++){
                    listL[i].onmouseover = function(){
                        for(j=0;j<listL.length;j++){
                            listL[j].children[1].style.display = 'none'
                            listL[j].children[0].style.display = 'block'
                        }
                        this.children[1].style.display = 'block';
                        this.children[0].style.display = 'none';

                        this.onmouseout = function(){
                            this.children[0].style.display = 'block';
                            this.children[1].style.display = 'none';
                            var _this = this;
                            listBox.onmouseleave = function(){
                                _this.onmouseout = '';
                                _this.children[0].style.display = 'none';
                                _this.children[1].style.display = 'block';
                            }
                        }
                    } 
                }
            })
    }


    

    //评论




    //评论计数



    (function(){
        var oDiv = document.getElementById('discuss');
        var oDiv2 = document.getElementById('commentMain');
        var oDiv3 = document.getElementById('page');
        var oTab = oDiv.getElementsByTagName('i');
        var oUl = oDiv2.getElementsByTagName('ul')[0];
        var oSpan = oDiv3.getElementsByTagName('span')[0];
        var inp = oDiv3.getElementsByTagName('input')[0];
        var pBtn = oDiv3.getElementsByTagName('button');
        var commentMain = document.getElementById('commentMain');
        var comLi = commentMain.getElementsByTagName('li');


        var pageSize = 6;
        var mydata = [];
        var discuss = ['praise','time'];
        var disc = '';
        
        for(var i=0; i<oTab.length; i++){
            oTab[i].index = i;
            oTab[i].onclick = function(){
                console.log(1)
                for(j=0;j<oTab.length;j++){
                    oTab[j].className = ''
                }
                this.className= 'on3'
                showDiscuss(mydata,discuss[this.index],0,pageSize)
                disc = discuss[this.index]
                console.log(disc)
                return disc;
            }
        }
        
        if(inp.value == 1){
            pBtn[1].disabled = true;
            pBtn[1].style.color= '#dadada'
            pBtn[1].style.borderColor= '#dadada'
        }
        pBtn[2].onclick = function(){
            console.log(disc)
            var val = parseInt(inp.value) +1;
            inp.value++
    
            judge(val);
            showDiscuss(mydata,disc,(val -1)*pageSize,Number((val -1)*pageSize)+6)
          
        }
        pBtn[1].onclick = function(){
            var val = parseInt(inp.value) -1;
            inp.value--
            judge(val);
            showDiscuss(mydata,disc,(val -1)*pageSize,Number((val -1)*pageSize)+6)
            
        }
    
        //判断上下页禁用
        function judge(val){
            if(val>1){
                pBtn[1].disabled = false;
                pBtn[1].style.color= ''
                pBtn[1].style.borderColor = ''
            }else{
                pBtn[1].disabled = true;
                pBtn[1].style.color= '#dadada'
                pBtn[1].style.borderColor = '#dadada'
            }
            if(val==oSpan.innerHTML){
                pBtn[2].disabled = true;
                pBtn[2].style.color= '#dadada'
                pBtn[2].style.borderColor = '#dadada'
            }else{
                pBtn[2].disabled = false;
                pBtn[2].style.color= ''
                pBtn[2].style.borderColor = ''
            }
        }

        ajax('get','http://127.0.0.1:5500/项目/json/paly4.json',function(data){
            showDiscuss(data,'praise',0,pageSize);
        });
        function showDiscuss(data,discuss,numb,pageSize){
            var newData = eval(data);
            mydata = newData;
            newData.sort(function(a,b){
                return b[discuss] - a[discuss];
            });
            var strHtml = '';
            if(numb/6==Math.ceil(newData.length/6)-1){
                pageSize = newData.length%pageSize;
            }
            for(var i=numb; i<pageSize; i++){
                var myDate = new Date(newData[i].time);
                var year = myDate.getFullYear();
                var month = myDate.getMonth()+1;
                var day = myDate.getDate();
                var hour = myDate.getHours();
                var min = myDate.getMinutes();
                var sec = myDate.getSeconds();
                var times = year+'-'+month + '-' + day + ' '+ hour +':' + min + ':' + sec;
                strHtml += '<li><div class="userMessage"><img src="img/user_1.jpg" alt=""><p class="userName">'+newData[i].userName+'</p><p class="userTime">'+times+'</p></div><p>'+newData[i].message+'</p><div class="support"><a href="#">举报</a><span><a href=""></a>'+newData[i].praise+'</span></div></li>'
            }
            var num = Math.ceil(newData.length / 6);
            oSpan.innerHTML = num;
            oUl.innerHTML = strHtml;
            for(var i=0; i<comLi.length; i++){
                comLi[i].onmouseover = function(){
                    var jb = this.getElementsByTagName('a')[0];
                    jb.style.display = 'inline-block';
                }
                comLi[i].onmouseout = function(){
                    var jb = this.getElementsByTagName('a')[0];
                    jb.style.display = 'none';
                }
            }
            pBtn[0].onclick = function(){
                var val = null;
                if(isNaN(inp.value)||inp.value> num) {
                    console.log(2)
                    val = 1;
                    inp.value = 1;
                }else{
                    val = inp.value;
                } 
                judge(val);

                showDiscuss(mydata,disc,(val-1)*6,Number((val-1)*6)+6)
            }
            var comnum = document.getElementById('commentNum');
            comnum.innerHTML='（共'+newData.length+'条）'
        }
    })();

    comtxt.onfocus = function(){
        playcode.style.display = 'block'
        if(comtxt.innerHTML == '快来吐个槽吧！'||comtxt.value == '快来吐个槽吧！'){
            comtxt.innerHTML = ''
            comtxt.value = ''
        }

    }
    comtxt.onblur = function(){
        
        if(comtxt.value == ''){
            console.log(comtxt.innerHTML)

            comtxt.value = '快来吐个槽吧！'
        }
    }

    comtxt.oninput = function(){
        comtxtNum.innerHTML = (140-Number(comtxt.value.length))
    }
    //评论区 验证码
    cod(4,codeBox)
    newcode.onclick = function(){
        codeBox.innerHTML = ''
        cod(4,codeBox)
    }
    function cod (num,box){
        for(i=0;i<num;i++){
            box.innerHTML += '<span></span>'
            var a = parseInt(Math.random()*arr.length);
            var b = parseInt(Math.random()*200);
            var c = parseInt(Math.random()*200);
            var d= parseInt(Math.random()*200);
            var span = box.getElementsByTagName('span');
           span[i].innerHTML = arr[a];
           span[i].style.fontSize = parseInt(Math.random()*10+15)+'px';
           span[i].style.color = 'rgb('+b+','+c+','+d+')'
        }  
    }      

    codeDown.onfocus = function(){
        if(this.value==''||this.value == '请输入验证码'){
            this.value = ''
        }

    }
    codeDown.onblur = function(){
        if(this.value ==''){
            this.value = '请输入验证码'
        }
    }

    //看过
    var tim = null;
    seen.onmouseover = function(){
        seenBox.style.display = 'block'
    }
    seen.onmouseout = function(){

        tim = setTimeout(function(){
            seenBox.style.display = 'none'
        },100)
        seenBox.onmouseover = function(){
            seenBox.style.display = 'block'
            clearTimeout(tim);
        }
    }
   
    seenBox.onmouseout = function(){
        seenBox.style.display = 'none'
    }
    for(i=0;i<historyLi.length;i++){
        historyLi[i].onmouseover = function(){
            this.className = 'on4'
        }
        historyLi[i].onmouseout = function(){
            this.className = ''
        }
    }

    //收藏
    like.onmouseover = function(){
        likeBox.style.display = 'block'
    }
    like.onmouseout = function(){

        tim = setTimeout(function(){
            likeBox.style.display = 'none'
        },100)
        likeBox.onmouseover = function(){
            likeBox.style.display = 'block'
            clearTimeout(tim);
        }
    }
   
    likeBox.onmouseout = function(){
        likeBox.style.display = 'none'
    }

    //下载
    dowld.onmouseover = function(){
        dowBox.style.display = 'block'
    }
    dowld.onmouseout = function(){

        tim = setTimeout(function(){ 
            dowBox.style.display = 'none'
        },100)
        dowBox.onmouseover = function(){
            dowBox.style.display = 'block'
            clearTimeout(tim);
        }
    }
   
    dowBox.onmouseout = function(){
        dowBox.style.display = 'none'
    }


    function ToTop(){
        if(document.documentElement.scrollTop!=0){
            go.style.display = 'block'
        }else{
            go.style.display = 'none'
        }
    }
    ToTop()
    window.onscroll = function(){
        ToTop()

    }

    goTop.onclick = function(){
        html.scrollTop = 0;
        go.style.display = 'none';
        return false;
    }
}




