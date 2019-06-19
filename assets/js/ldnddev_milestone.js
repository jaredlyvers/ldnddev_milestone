// animation options
var elem;
var start = 0;
var end;
var duration = 5000;
function animateValue(elem, start, end, duration) {
    elem.each(function() {
        var $this = elem,
            countTo = end;        
        jQuery({ countNum: $this.text()}).animate({
            countNum: countTo
        },      
        {      
            duration: duration,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        }); 
    });
}

jQuery(document).ready(function($){
    $(window).on('resize scroll', function() {
        $('.ldnddev-milestone__number').each(function() {
            var elem = $(this);
            var end = $(this).attr('data-number');
            if ($(this).visible()) {
                animateValue(elem, start, end, duration);
            }
            else {
                // TODO
            }
        });
    });
});