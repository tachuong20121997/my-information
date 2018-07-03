function doigiaodien(co) {
    if(co == 1)
        document.getElementById('chung').style.background = "green";
        document.getElementById('doi').style.background = "green";
        document.getElementById('chung').style.color = "red";
}

function  doimau(mau, duongdan) {
    if(mau == 1)
    {
        document.getElementById('frame').src = duongdan;
        document.getElementById('gt').style.background = "green";
        document.getElementById('st').style.background = "silver";
        document.getElementById('pj').style.background = "silver";
    }
    else  if(mau == 2)
    {
        document.getElementById('frame').src = duongdan;
        document.getElementById('gt').style.background = "silver";
        document.getElementById('st').style.background = "green";
        document.getElementById('pj').style.background = "silver";
    }
    else if(mau == 3)
    {
        document.getElementById('frame').src = duongdan;
        document.getElementById('gt').style.background = "silver";
        document.getElementById('st').style.background = "silver";
        document.getElementById('pj').style.background = "green";
    }
}