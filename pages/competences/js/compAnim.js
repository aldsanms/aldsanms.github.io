var prog = {
    isStart : false,
    delay : 300,
    transition : d3.easeLinear,
    index : 0
};

var dataTot = {};

var dataTotInfo = {
    rows : 0,
    columns : 0,
    xStep : 0,
    columnsValues : [],
    rowsColors : {},
};

var graphDiv = d3.select("#graph");

var graphDivInfo = {
    width : graphDiv.node().clientWidth,
    height : graphDiv.node().clientHeight,
    maxRowsWidth : 25,
    margin : 10,
    rowsWidth : 0,
    rowsHeight : 0,
};

d3.csv("csv/Comp.csv").then(function(data) {  
    d3.csv("csv/CompInfo.csv").then(function(dataInfo) {  
        init(data,dataInfo);
    
        createGraph();
    
        start();
    });   
});


function init(data,dataInfo){
    dataTot = data;

    dataTotInfo.rowsColors = dataInfo;

    dataTotInfo.rows = data.length;
    dataTotInfo.columns = Object.keys(data[0]).length;

    getDocumentSize();
};

function createGraph(){
    dataTotInfo.columnsValues = [];
    dataTot.columns.forEach((element,index) => {

        dataTotInfo.columnsValues.push(element);
        if(index != 0){

            var ligne = graphDiv.append("div")
                .attr("class", "graph-row")
                .attr("id", element+"row")
                .attr("style",[
                    "width:"+graphDivInfo.width+"px;"+
                    "height:"+graphDivInfo.rowsHeight+"px;"+
                    "margin-top:"+((index-1)*graphDivInfo.rowsHeight)+"px;"+
                    "visibility:"+ "hidden;"
                ])

            ligne.append("div")
                .attr("class", "graph-row-pic")
                .attr("style",[
                    "width:"+(graphDivInfo.rowsHeight)+"px;"+
                    "height:"+(graphDivInfo.rowsHeight)+"px;"+
                    "border-radius:"+(graphDivInfo.rowsHeight)+"px;"+
                    "background-color:"+ dataTotInfo.rowsColors[1][element]+";"+
                    "background-image:url(img/"+element+"_logo.png);"+
                    "background-position: center;"+
                    "background-size: contain;"+
                    "background-repeat: no-repeat;"+
                    "position: absolute"
                ])

            ligne.append("div")
                .attr("id", element+"rowColor")
                .attr("style",[
                    "width:"+10+"px;"+
                    "height:"+(graphDivInfo.rowsHeight-(graphDivInfo.margin/2))+"px;"+
                    "margin-left:"+(graphDivInfo.rowsHeight/2)+"px;"+
                    "border-top-right-radius:"+(graphDivInfo.rowsHeight/3)+"px;"+
                    "border-bottom-right-radius:"+(graphDivInfo.rowsHeight/3)+"px;"+
                    "background-color:"+ dataTotInfo.rowsColors[0][element]
                ])
            ligne.append("div")
                .attr("class", "graph-row-stay")
                .attr("style",[
                    "height:"+graphDivInfo.rowsHeight+"px;"
                ])
                .text(element)

        }
    }); 
};

function start(){
    prog.isStart = true;
    clock();
};

function pause(){
    prog.isStart = false;
}

function clock(){
    if(prog.isStart){
        getDocumentSize();
        updateGraph();
        prog.index ++;
        setTimeout(clock,prog.delay);
    }
};

function getDocumentSize(){
    graphDivInfo.width = graphDiv.node().clientWidth;
    graphDivInfo.height = graphDiv.node().clientHeight;

    graphDivInfo.rowsHeight = graphDivInfo.height / dataTotInfo.columns;

    if (graphDivInfo.rowsHeight > graphDivInfo.maxRowsWidth) {
        graphDivInfo.rowsHeight = graphDivInfo.maxRowsWidth;
    }
    dataTotInfo.xStep = graphDivInfo.width / 14;
}

function updateGraph(){
    if(prog.index < dataTotInfo.rows){
    var tableVal = [];
    var tableValSortedIndex = [];

    var finalSortedColumnName = [];
    var finalSortedColumnValue = [];

    dataTotInfo.columnsValues.forEach(element => {
        tableVal.push(dataTot[prog.index][element])
    });
    tableValSortedIndex = sortedIndex(tableVal);

    tableValSortedIndex.forEach((element,index) => {
        for (let i = 0; i < tableValSortedIndex.length; i++) {
            if(tableValSortedIndex[i]==index){
                finalSortedColumnName.push(dataTotInfo.columnsValues[i]);
                finalSortedColumnValue.push(tableVal[i]);
            }     
        }
    });
    finalSortedColumnName.reverse();
    finalSortedColumnValue.reverse();

    finalSortedColumnName.forEach((element,index) => {
        if(finalSortedColumnValue[index] != 0){
            d3.select("#"+element+"row").transition()
            .duration(prog.delay)
            .ease(prog.transition)
            .attr("style",[
                "width:"+graphDivInfo.width+"px;"+
                "height:"+graphDivInfo.rowsHeight+"px;"+
                "margin-top:"+((index)*graphDivInfo.rowsHeight)+"px;"+
                "visibility:"+ "visible;"
            ]);

            d3.select("#"+element+"rowColor").transition()
            .duration(prog.delay)
            .ease(prog.transition)
            .attr("style",[
                "width:"+(finalSortedColumnValue[index]*dataTotInfo.xStep)+"px;"+
                "height:"+(graphDivInfo.rowsHeight-(graphDivInfo.margin/2))+"px;"+
                "margin-left:"+(graphDivInfo.rowsHeight/2)+"px;"+
                "border-top-right-radius:"+(graphDivInfo.rowsHeight/3)+"px;"+
                "border-bottom-right-radius:"+(graphDivInfo.rowsHeight/3)+"px;"+
                "background:linear-gradient(to right, "+ dataTotInfo.rowsColors[0][element] +","+ dataTotInfo.rowsColors[1][element]  +");"
            ])
        }
    });


    }else{
        pause();
    }
};

function sortedIndex(table) {
    const pairs = table.map((val, index) => [val, index]);
    pairs.sort((a, b) => a[0] - b[0]);
    const sortedIndices = pairs.map(pair => pair[1]);
    const invertedIndices = sortedIndices.map((_, index) => sortedIndices.indexOf(index));
    return invertedIndices;
}

function reset(){
    pause();
    graphDiv.html('');
    createGraph();
}

