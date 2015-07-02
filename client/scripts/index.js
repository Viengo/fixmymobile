
//Popover settings
$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
    });

//Tab settings
    $('#myTab a, #finish a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
    $('#myTab li:first-child').click(function () {
        $(this).addClass('active-tab');
        $('li:nth-child(2),li:last-child').removeClass('active-tab');
    });
    $('#myTab li:nth-child(2)').click(function () {
        $('li:first-child,li:nth-child(2)').addClass('active-tab');
        $('li:last-child').removeClass('active-tab');
    });
    $('#myTab li:last-child').click(function () {
        $('#myTab li').addClass('active-tab');
    });

//Select2 settings
    $('select').select2({
        minimumResultsForSearch: 'Infinity',
        closeOnSelect: 'false'
    });

//Datetimepicker settings
    $('#datetimepicker1, #datetimepicker2').datetimepicker({
        pickTime: false
    });

});