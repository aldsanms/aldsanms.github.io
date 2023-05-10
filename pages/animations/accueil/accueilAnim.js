var txt01 = {
    ele1 : {},
    ele2 : {},
    text01 : "",
    text02 : "",
    css : []
}

var prog = {
    isStart : false,
    delayL : 10,
    delayPic : 1500,
    transition : d3.easeLinear,
    index : 0
};

var pic = d3.select("#hero-content-pic");
pic.style("opacity", 0);

pic.transition()
    .duration(prog.delayPic)
    .ease(prog.transition)
    .style("opacity", 1);

txt01.ele1 = d3.select("#hero-content-info-txt01");
txt01.ele2 = d3.select("#hero-content-info-txt02");
txt01.text01 = txt01.ele1.text();
txt01.text02 = txt01.ele2.text();

txt01.ele1.text("");
txt01.ele2.text("");

start();

function start(){
    if(!prog.isStart){
        prog.isStart = true;
        clock();
    }
};

function pause(){
    prog.isStart = false;
}

function clock(){
    if(prog.isStart){
        updateTxt();
        prog.index ++;
        setTimeout(clock,prog.delayL);
    }
};

function updateTxt(){
    if(prog.index < txt01.text01.length){
        txt01.ele1.text(txt01.ele1.text() + txt01.text01[prog.index]);
    }else if(prog.index < (txt01.text01.length + txt01.text02.length)){
        txt01.ele2.text(txt01.ele2.text() + txt01.text02[prog.index - txt01.text01.length]);
    }else{
        pause();
    }
}