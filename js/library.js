var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var tag = '';
a();
    btn1.onclick = function(){
        this.parentNode.className = 'on3'
        btn2.parentNode.className = ''
        a();
        
    }
    btn2.onclick = function(){
        this.parentNode.className = 'on3'
        btn1.parentNode.className = ''
        a();
        
    }

function a(){
    ajax('get','http://127.0.0.1:5500/项目/json/hot.json',function(data){
        var dataArr = eval(data);
        var oUl = '';
        //排序
        if(btn2.parentNode.className == 'on3'){
      
            for(m=1;m<dataArr.length;m++){
                for(j=0;j<dataArr.length-m;j++){
                    console.log(dataArr[j].score,dataArr[j+1].score)
                    if(Number(dataArr[j].score)<Number(dataArr[j+1].score)){
                        var temp = dataArr[j];
                        dataArr[j] = dataArr[j+1];
                        dataArr[j+1]= temp;
                    }
                }
            }
        }
    
    
        for(var i=0; i<dataArr.length; i++){
            if(dataArr[i].zx == 0){
               var  zx = 'leftUp'; 
            }else if(dataArr[i].zx == 1){
               var  zx = 'leftUp_2';
            }
            var score1 = dataArr[i].score.substring(0,1);
            var score2 = dataArr[i].score.substring(1);
            
            oUl += '<li><img src="'+dataArr[i].url+'" /><div class='+zx+'></div><div class="rightBottom">'+dataArr[i].quality+'</div><div class="synopsis"><a href="#" target="_blank">'+dataArr[i].title+'</a><p>'+dataArr[i].synopsis+'</p><div class="score"><span>'+score1+'</span>'+score2+'</div></div><a href="'+dataArr[i].http+'" target="_blank"></a></li>';
           
        }
        var oU = document.getElementById('movieUl');
        
        oU.innerHTML = oUl;
        
    
    
    
    
    })
    
    
}
