//这一段代码会监视用户是否在当前页面，并根据情况修改标签页标题
document.addEventListener('visibilitychange', documentVisibilityChange);  
  function documentVisibilityChange() {  
    if (document.visibilityState === "hidden") {  
      document.title = '啊，怎么走了啊(っ °Д °;)っ';  
    } else if (document.visibilityState === "visible") {  
      document.title = '欢迎回来(～￣▽￣)～';   
    }  
  }  
  //打字机效果js代码片段
  //获取.text标签
  const text = document.querySelector('.writer-text');
   //定义数组，里面放上文本
  const txt  =["来自陕西西安","啥都会一点就是不大精","今日精神状态：太TM良好了","你说到底为什么都是我的错（雾）"]; 
  //定义当前要显示的字符串的第几个字符
  var index=0;
  //定义文本数组的下标
  var xiaBiao= 0;
  //定义huan，拿来判断是要实现打字还是删除字效果，初始为真
  var huan = true;
//定义一个定时器，200毫秒执行一次
  setInterval(function(){
     //如果huan为真
      if(huan){             
           //给.text标签添加字符，用.slice方法 
          text.innerHTML = txt[xiaBiao].slice(0,++index);
      }
      else{
        //给.text标签删除字符，用.slice方法 
          text.innerHTML = txt[xiaBiao].slice(0,index--);
      }
      
      //判断当前index是否为当前字符串长度了+3了 ，+3是为了打完后多等会，多走3个啥也不做的轮回
      if(index==txt[xiaBiao].length+3)
      {
      //如果index等于当前字符串长度+3，说明打完了，huan变为假，开始执行删除文字效果
          huan = false;
      }
      //如果删完了
      else if(index<0)
      {   
      //index=0，huan为真，从头开始打字
          index = 0;
          huan = true;
          //数组下标加1
          xiaBiao++;
          if(xiaBiao>=txt.length)
          {   
          //如果数组下标超过了，又回到0
              xiaBiao=0; 
          }
      }
  },200)

