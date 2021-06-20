var password;

    
const arrDefault = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
  '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$',
  '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[',
  ']', '{', '}', '\\', '|', ';', ':', '"', "'", ',', '<',
  '.', '>', '/', '?', '`', '~'
];

   function FindPassword(){
    password = document.getElementById("myInput").value;

    var Flag=new  Array(password.length);
    for (var i=0;i<password.length;i++)
    Flag[i]=false;

  var Finish=password.length;
  for (var AplphChar=0; AplphChar<arrDefault.length;AplphChar++){
    for (var PasswordChar=0; PasswordChar<password.length;PasswordChar++){
        if ((Flag[PasswordChar]==false)&&(password[PasswordChar]==arrDefault[AplphChar])) 
        {
            Flag[PasswordChar]=true;
            Finish--;
        }
        if(Finish==0)
        {
          document.getElementById("Output").innerHTML="The password is found";
          return;
        }
      }
  }
}
