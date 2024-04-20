//这一段代码会监视用户是否在当前页面，并根据情况修改标签页标题
document.addEventListener('visibilitychange', documentVisibilityChange);  
  function documentVisibilityChange() {  
    if (document.visibilityState === "hidden") {  
      document.title = '啊，怎么走了啊(っ °Д °;)っ';  
    } else if (document.visibilityState === "visible") {  
      document.title = '欢迎回来(～￣▽￣)～';   
    }  
  }  