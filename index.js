function loadImage1()
{
  var imgNumber = Math.floor(Math.random()*6) + 1;
  // alert(imgNumber);
  var imgPath = "images/dice" + imgNumber + ".png";
  // alert(imgPath);

  switch(imgNumber)
  {
    case 1:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
    case 2:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
    case 3:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
    case 4:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
    case 5:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
    case 6:
    {
      document.querySelectorAll("img")[0].setAttribute("src",imgPath);
    }
  }
  return imgNumber;
}

function loadImage2()
{
  var imgNumber = Math.floor(Math.random()*6) + 1;
    var imgPath = "images/dice" + imgNumber + ".png";

  switch(imgNumber)
  {
    case 1:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
    case 2:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
    case 3:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
    case 4:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
    case 5:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
    case 6:
    {
      document.querySelectorAll("img")[1].setAttribute("src",imgPath);
    }
  }

  return imgNumber;
}

function clickOnImg()
{
  // for(var i = 0; i < 6; i++)
  // {
    var i2 = loadImage2();
    var i1 = loadImage1();

    if(i1 === i2)
    {
      document.getElementById("Winnerhead").innerText = "It's a TIE!!!";
    }
    else if(i1 > i2)
    {
      document.getElementById("Winnerhead").innerText = "Player 1 Won!!!";
    }
    else
    {
      document.getElementById("Winnerhead").innerText = "Player 2 Won!!!";
    }
  // }

}

function firstLoad()
{
  loadImage2();
  loadImage1();
}
