$(document).ready(function() {

    //-----Click Triangle-----
   /* $('div').click(function () {
        $(this).each(function(){
            var classes = ['class1', 'class2', 'class3'];
            this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
    });*/

    //-----Animate Triangle-----
    var counter = 1,
        int = setInterval(function(){
            $("div").attr("class", "class" + counter);
            if (counter === 3){
                counter = 1;
            } else {
                counter++;
            }
        }, 5000);
});


