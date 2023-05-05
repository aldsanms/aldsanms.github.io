var prog = {
    delay : 3000,
    transition : d3.easeBounce,
}

var classImpName = [".imp01",".imp02",".imp03",".imp04"]

anim();

function anim(){
    classImpName.forEach(element => {
        var imp = d3.selectAll(element);
        var css = getCss(element);
        var width = imp.node().clientWidth;

        imp.attr("style",[
            "width:"+(width/4)+"px;"
        ])
        imp.each(function(d, i) {
            var d = prog.delay*(Math.random() * (1 - 0.5) + 0.5);
            d3.select(this).transition()
            .duration(d)
            .ease(prog.transition)
            .attr("style",css)         
        })     
    });
}

function getCss(name){

    var feuillesDeStyle = document.styleSheets;

    for (var i = 0; i < feuillesDeStyle.length; i++) {
        var feuilleDeStyle = feuillesDeStyle[i];

        for (var j = 0; j < feuilleDeStyle.cssRules.length; j++) {
            var regleCSS = feuilleDeStyle.cssRules[j];

            if (regleCSS.selectorText === name) {
            var style = regleCSS.style;

            }
        }
    }

    return(style.cssText)
}