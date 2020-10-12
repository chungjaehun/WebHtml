// 본문 객체 설정
var body = {
      setColor:function(color){
            document.querySelector('body').style.color = color;
      },
      setBackgroundColor:function(color){
            document.querySelector('body').style.backgroundColor = color;
      },
}
var Links = {
      setColor: function(color){
            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i <alist.length){
                  var element = alist[i];
                  element.style.color=color;
                  i=i+1;
            }
      }
}

function nightDayHandler(self){
      var target = document.querySelector('body');
      if (self.value == 'night'){
            body.setBackgroundColor('black');
            body.setColor('white');
            self.value='day';

            Links.setColor('powderblue');
      } else{
            body.setBackgroundColor('white');
            body.setColor('black');
            self.value='night';

            Links.setColor('blue');
      }
}
