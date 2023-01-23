

  let date = new Date();
  let day = date.getDay();
  document.getElementById("dee").innerHTML = day;

  function blur1(){
    document.getElementById("men").style.opacity= 0.5;
  }
  function noblur1(){
    document.getElementById("men").style.opacity= 1;
  }
  function blur2(){
    document.getElementById("women").style.opacity= 0.5;
  }
  function noblur2(){
    document.getElementById("women").style.opacity= 1;
  }
  function blur3(){
    document.getElementById("accessories").style.opacity= 0.5;
  }
  function noblur3(){
    document.getElementById("accessories").style.opacity= 1;
  }
  function blur4(){
    document.getElementById("kids").style.opacity= 0.5;
  }
  function noblur4(){
    document.getElementById("kids").style.opacity= 1;
  }
  
  function git (){
    window.open("./index.html");
  }