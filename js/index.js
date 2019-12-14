    var oUl = document.getElementById('windowLb');
    var oLi = oUl.getElementsByTagName('li');
    var oA = oUl.getElementsByTagName('a');
    var ca = document.getElementById('caroucal');
    var oL = ca.getElementsByTagName('li');
    var adBox = document.getElementById('adBox');
    var adUl = adBox.getElementsByTagName('ul')[0];
    var adLeft = document.getElementById('adLeft');
    var adRight = document.getElementById('adRight');
    var i = 0;
    var rgt = document.getElementById('right');
    var let = document.getElementById('left');
    var reconmmend = document.getElementById('reconmmend');
    var hotMovie = document.getElementById('hotMovie');

    //轮播图
    function move(obj, objet,rgt,let,oA) {
        var j = 1;

        var timer = null;
        //定时轮播
        timer = setInterval(auto, 3000)
        //滑过下方略缩图
        for (m = 0; m < objet.length; m++) {
            objet[m].index = m;
            objet[m].onmouseover = function () {
                clearInterval(timer);
                //清除所有li的class
                for (n = 0; n < objet.length; n++) {
                    oA[n].style.display = 'none';
                    objet[n].className = '';
                    
                }
                this.className = 'onca';
                oA[this.index].style.display = 'block';
                for(n=0;n<objet.length;n++){
                    Move(obj[n], { 'opacity': 0 },50);
                }

                Move(obj[this.index], { 'opacity': 100 },50);
                j = this.index;
            }
            objet[m].onmouseout = function () {
                timer = setInterval(auto, 3000)   
            }
        }
        //轮播函数
        function auto() {
            for (i = 0; i < obj.length; i++) {
                obj[i].className = '';
                oA[i].style.display = 'none'
                objet[i].className = '';
            }
            objet[j].className = 'onca';
            oA[j].style.display = 'block';
            for (i = 0; i < obj.length; i++) {
                Move(obj[i], { 'opacity': 0 },50);
            }


            Move(obj[j], { 'opacity': 100 },50);
        

            j++
            if (j >= obj.length) {
                j = 0;
            }
            console.log(1);

        }
        //左右点击切换

        rgt.onmouseover = function(){
            clearInterval(timer)
        }
        rgt.onclick = function(){
            if (j >= obj.length-1) {
                j = -1;
            }
            j++
            console.log(j ,obj.length)
            for (i = 0; i < obj.length; i++) {
                oA[i].style.display = 'none';
                obj[i].className = '';
                Move(obj[i], { 'opacity': 0 },50);
                objet[i].className = '';
            }
            objet[j].className = 'onca';
            oA[j].style.display = 'block';
            Move(obj[j], { 'opacity': 100 },50);
      
           

            console.log(j)
        }
        rgt.onmouseout = function(){
            timer = setInterval(auto, 3000)
        }
        let.onmouseover = function(){
            clearInterval(timer)
            // console.log(j)
        }
        let.onclick = function(){
            
            j=j-2;
            j++
            // console.log(j,obj.length)
            for (i = 0; i < obj.length; i++) {
                
                obj[i].className = '';
                oA[i].style.display = 'none'
                Move(obj[i], { 'opacity': 0 },50);
                objet[i].className = '';
               console.log(j)
            }
            if(j<0){
                oA[obj.length-1].style.display = 'block';
                Move(obj[obj.length-1],{'opacity':100},50);
                objet[obj.length-1].className = 'onca';
                j = obj.length-1;
            }else{
                oA[j].style.display = 'block';
                objet[j].className = 'onca';
                Move(obj[j], { 'opacity': 100 },50);
               
            }

            

            
        }
        let.onmouseout = function(){
            timer = setInterval(auto, 3000)
        }

        //大图滑过停止滑出继续轮播
        
        for(i=0;i<obj.length;i++){
            oA[i].index = i;
            oA[i].onmouseover = function(){
                clearInterval(timer)
            }
            oA[i].onmouseleave = function(){
                j=this.index;

                timer = setInterval(auto, 3000)
            }
        }
    }
    move(oLi,oL,rgt,let,oA);
    adLeft.onclick = function(){
        Move(adUl,{'left':0},20);
    }
    adRight.onclick = function(){
        Move(adUl,{'left': -1070},20)
    }

    //ajax
    ajaxJson(0,5,reconmmend,'http://127.0.0.1:5500/项目/json/index.json?1')
    ajaxJson(5,10,hotMovie,'http://127.0.0.1:5500/项目/json/index.json?1')
    
    function ajaxJson(num,num2,box,url){
        ajax('get',url,function(data){
            var dataArr = eval(data);
            var recond = '';
        
        
            for(var i=num; i<num2; i++){
                if(dataArr[i].zx == 0){
                   var  zx = 'leftUp'; 
                }else if(dataArr[i].zx == 1){
                   var  zx = 'leftUp_2';
                }
                var score1 = dataArr[i].score.substring(0,1);
                var score2 = dataArr[i].score.substring(1);
                recond += '<li><img src="'+dataArr[i].url+'" /><div class='+zx+'></div><div class="rightBottom">'+dataArr[i].quality+'</div><div class="synopsis"><a href="#" target="_blank">'+dataArr[i].title+'</a><p>'+dataArr[i].synopsis+'</p><div class="score"><span>'+score1+'</span>'+score2+'</div></div><a href="'+dataArr[i].http+'" target="_blank"></a></li>';
               
            }
        
            box.innerHTML = recond;
        })
    }
   


