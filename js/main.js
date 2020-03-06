$(document).ready(function (){

    document.title = document.title + " | " + $("#title").text()

    drawAllLines()

    $("#arrowDown").click(function (){
        $('#partContainer').animate({
            scrollTop: $("#part2").offset().top
        }, 200);

    });

    $( window ).resize(function() {
        $('svg').empty();
        drawAllLines();
    });

    $(".skills").draggable({
        containment: "parent",
        scroll: false,
        drag: function() {
            moveLinesof(this)
        }
      }
    );

    function moveLinesof(skill){
        var childs = $(skill).attr("data-child").split(" ")
        var parents = $(skill).attr("data-parent").split(" ")
        var thisId = $(skill).attr("id")
        childs.forEach(element => {
            changeAChild($('#'+thisId+"_"+element),skill)
        })
            changeAParent($('#'+parents+"_"+thisId),skill)
    }

    function changeAChild(line,skill){
        var newPos = posOfDiv($(skill))
        line.attr('x1', newPos.posX)
        line.attr('y1', newPos.posY)
    }

    function changeAParent(line,skill){
        var newPos = posOfDiv($(skill))
        line.attr('x2', newPos.posX)
        line.attr('y2', newPos.posY)
    }

    function drawAllLines(){
        var skillsList = $(".draggable")

        for(var index = 0; index < skillsList.length; index++){
            if(skillsList.eq(index).attr('data-child').length > 0){
                var listChilds = skillsList.eq(index).attr('data-child').split(" ");
                listChilds.forEach(element => {
                    var div1 = posOfDiv($('#'+skillsList.eq(index).attr('id')))
                    var div2 = posOfDiv($('#'+element))
                    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
                    newLine.setAttribute('id', skillsList.eq(index).attr('id')+"_"+element)
                    newLine.setAttribute('x1',div1.posX);
                    newLine.setAttribute('y1',div1.posY);
                    newLine.setAttribute('x2',div2.posX);
                    newLine.setAttribute('y2',div2.posY);
                    $("#myLines").append(newLine);
                });
            }
        }
    }

    function posOfDiv(div){
        var posX = div.offset().left + div.width() /2 ;
        var posY = parseInt(div.css('top')) + div.width() /2;
        return {posX, posY}
    }
});