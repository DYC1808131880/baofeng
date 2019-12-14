window.onload = function () {
    var ckd = document.getElementsByClassName('checked');
    var tag = true;
    var btn1 = document.getElementById('btn1');//立即注册
    var btn2 = document.getElementById('btn2');//立即登录
    var btn3 = document.getElementById('btn3');//验证码切换
    var btn4 = document.getElementById('btn4');//手机验证码登录
    var btn5 = document.getElementById('btn5');//账号密码登录
    var btn11 = document.getElementById('btn11');//短信验证
    var btn22 = document.getElementById('btn22');//短信验证
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var numLogin = document.getElementById('numLogin');
    var code = document.getElementById('Verification');
    var ero = document.getElementById('errorMessage');//错误提示框
    var ero2 = document.getElementById('errorMessage2');//错误提示框
    var num = document.getElementById('number');//手机号输入框
    var num2 = document.getElementById('number2');//手机号输入框

    var paw = document.getElementById('password1');//注册密码框
    var pawGrade = document.getElementById('pwdGrade');//注册密码强弱
    var codeTxt = document.getElementById('codeTxt');//注册验证码框
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
        'W', 'X', 'Y', 'Z']
    var reg1 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/


    cod(4,code);
    //复选框 记住我
        for(i=0;i<ckd.length;i++){
            ckd[i].onclick = function () {
                if(this.style.backgroundPositionX=='0px'){
                    tag = false;
                }else{
                    tag= true;
                }
                if(tag){
                  this.style.backgroundPositionX = '0px' 
                    tag = false; 
                }else{
                    this.style.backgroundPositionX = '-20px'
                    tag = true;
                } 
                console.log(tag)
                
            }
        }
   
    //立即注册
    btn1.onclick = function(){
        register.style.display = 'block';
        login.style.display = 'none';
        return false
    }
    //立即登录
    btn2.onclick = function(){
        register.style.display = 'none';
        login.style.display = 'block';
        return false
    }
    //手机验证码登录
    btn4.onclick = function(){
        login.style.display = 'none';
        numLogin.style.display = 'block';
        return false
    }
    //账号密码登录
    btn5.onclick = function(){
        login.style.display = 'block';
        numLogin.style.display = 'none';
        return false
    }
    //验证码切换
    btn3.onmouseover = function(){
        btn3.style.backgroundPositionX = '-150px'
    }
    btn3.onmouseout = function(){
        btn3.style.backgroundPositionX = '-120px'
    }
    btn3.onclick = function(){
        code.innerHTML = ''
        cod(4,code)
    }

    //验证码
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

    //短信验证
    getNote(btn11);
    getNote(btn22);
    function getNote(btn){
        var countdown=60; 
        btn.setAttribute("disabled", true); 
        btn.onclick = function(){
            settime(btn) 
        }
        function settime(obj) { 
            if (countdown == 0) { 
                obj.removeAttribute("disabled");    
                obj.innerHTML="免费获取验证码"; 
                countdown = 60; 
                return;
            } else { 
                obj.setAttribute("disabled", true); 
                obj.innerHTML="重新发送(" + countdown + ")"; 
                countdown--; 
            } 
            setTimeout(function() { 
                settime(obj) }
                ,1000) 
        }
    }
   




    //手机号验证
    num.onblur = function(){
        var val = this.value;
        if(reg1.test(val)||val.length==0){
            ero.innerHTML = ''  
        }else{
            ero.innerHTML = '手机号格式不正确'
            btn11.setAttribute("disabled", true); 
        }
        if(reg1.test(val)){
            btn11.removeAttribute("disabled");  
        }
    }
    num2.onblur = function(){
        var val = this.value;
        if(reg1.test(val)||val.length==0){
            ero2.innerHTML = ''  
        }else{
            ero2.innerHTML = '手机号格式不正确'
            btn22.setAttribute("disabled", true); 
        }
        if(reg1.test(val)){
            btn22.removeAttribute("disabled");  
        }
    }

    //密码强弱的判断
    // paw.maxlength = '20'
       
    paw.onblur = function(){
        var pawd = this.value;
        if(pawd.length>=6||pawd.length == 0){
            getLvl(pawd);
            ero.innerHTML = ''

        }else{
            ero.innerHTML = '请输入6-32位英文、数字和符号的组合密码';
        }
    }

    function getLvl(pwd) {
        var lvl = 0;//默认为0级
        //判断密码中有没有数字
        if (/[0-9]/.test(pwd)) {
            lvl++;
        }
        //判断密码中有没有字母
        if (/[a-zA-Z]/.test(pwd)) {
            lvl++;
        }
        //判断密码中有没有特殊符号
        if (/\W/.test(pwd)) {
            lvl++;
        }

        switch(lvl){
            case 1 : pawGrade.style.backgroundPositionX = '-70px';
            break;
            case 2 : pawGrade.style.backgroundPositionX = '-100px';
            break;
            case 3 : pawGrade.style.backgroundPositionX = '-130px';
        }
        return lvl;


    }
}
