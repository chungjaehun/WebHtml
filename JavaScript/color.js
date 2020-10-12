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
            $('a').css('color',color);
      }
}

function nightDayHandler(self){
      var target = document.querySelector('body');
      if (self.value == 'night'){
            body.setBackgroundColor('black');
            body.setColor('white');
            self.value='day';
            Links.setColor('powderblue');
            $('#MainTitle').css('color','#505050')
      } else{
            body.setBackgroundColor('white');
            body.setColor('black');
            self.value='night';
            Links.setColor('blue');
            $('#MainTitle').css('color','#505050')
      }
}