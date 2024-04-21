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
  const txt  =[
    "来自陕西西安","啥都会一点就是不大精ㄟ( ▔, ▔ )ㄏ",
    "今日精神状态：太TM良好了",
    "你说到底为什么都是我的错（雾）",
    "燕子，没有你你怎么活啊！！",
    "I won't try to pink the moon,I want zhe moon to come to me.",
    "我的广州之旅：《嘉禾乱葬岗》",
    "《谁知道一个地铁口tnnd七个出口呀喂！！！！》"
  ]; 
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
  },300)
//黑塔转圈片段
//设置按钮五秒后出现
window.onload=function(){
  setTimeout(function(){
    var buttons=document.getElementsByClassName('heita-button');
    if (buttons.length>0) {
      buttons[0].style.display='block';
    }
  },5000);
}
//点击按钮，黑塔转圈
var ht_gif_files=[
  'audio/heita-audio/gululu.mp3',
  'audio/heita-audio/gururu.mp3',
  'audio/heita-audio/要坏掉了.mp3',
  'audio/heita-audio/转圈圈.mp3',
  'audio/heita-audio/转圈圈咯.mp3'
];