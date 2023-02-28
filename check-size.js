window.addEventListener("resize", AutoScale); //по идее это ресайз-скрипт но я еблан поэтому он не подключен)) xD

AutoScale(); 

function AutoScale()
{
    let width = window.innerWidth; //window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}