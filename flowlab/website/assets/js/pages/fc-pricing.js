

// FIXED PRICING TABLE HEAD

function fixedTableHead() {

var stickyTableHead = $('.table').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyTableHead) {
        $('.table').addClass('fixed');
    }
    else {
        $('.table').removeClass('fixed');
    }  
});

}

function resizedw(){
    fixedTableHead();
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};


