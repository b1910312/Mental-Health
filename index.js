$(document).ready(function () {
    //banner 
    var html = '';
    html += ' <div class="col-12 mb-auto mt-auto">';
    html += '       <img src="Asset 5@2x.png" class="img-fluid bannerimg" alt="">';
    html += '</div>';
    html += '<div class="bannertext col-12">';
    html += '               <h1>Someone</h1>';
    html += '    <h1 class="bannercolortext">will write something</h1>';
    html += '    <h1>HERE!</h1>';
    html += '    <p>and in here will be a content. example contact of us</p>';
    html += '    <a href="#" class="btn bannerbtn w-75">Let\'s go</a>';
    html += '</div>';

    var html1 = '';
    html1 += '<div class="col-lg-1"></div>'
    html1 += '<div class="bannertext col-lg-5 col-md-5">';
    html1 += '               <h1>Someone</h1>';
    html1 += '    <h1 class="bannercolortext">will write something</h1>';
    html1 += '    <h1>HERE!</h1>';
    html1 += '    <p>and in here will be a content. example contact of us</p>';
    html1 += '    <a href="#" class="btn bannerbtn w-75">Let\'s go</a>';
    html1 += '</div>';
    html1 += ' <div class="col-lg-6 col-md-7 mb-auto mt-auto">';
    html1 += '       <img src="Asset 5@2x.png" class="img-fluid bannerimg" alt="">';
    html1 += '</div>';
    $(window).resize(function () {
        if ($(window).width() < 752) {
            // Thêm đoạn mã HTML tại đây
            $('#banner').empty();
            $('#banner').append(html);
        }
        else {

            $('#banner').empty();
            $('#banner').append(html1);
        }
    });


    //thay đổi slide
    $('.paginationbtn').on('click', function () {
        var clickedId = $(this).attr('id'); // Lấy id của đối tượng được click
        doSomething(clickedId);
    });
    $('.navtabbutton').on('click', function () {
        var clickedId = $(this).attr('id'); // Lấy id của đối tượng được click
        doSomething1(clickedId);
    });
    $('.subtabbutton').on('click', function () {
        var clickedId = $(this).attr('id'); // Lấy id của đối tượng được click
        doSomething2(clickedId);
    });
    //chỗ slider
    function doSomething(id) {
        for (var i = 1; i <= 4; i++) {
            $('#' + i).removeClass('activebtn');
            if (i == id) {
                $('#' + i).addClass('activebtn');
                $('#slide' + i).show();
            }
            else {
                $('#slide' + i).hide();
            }
        }
        $('#' + id).addClass('activebtn');

    }
    //thay đổi màu sắc nền nút tab
    function doSomething1(id) {
        if (id == 'tab1') {
            $('#tab1').addClass('navtabbuttonactive');
            $('#tab2').removeClass('navtabbuttonactive');
        } else {
            $('#tab2').addClass('navtabbuttonactive');
            $('#tab1').removeClass('navtabbuttonactive');
        }

    }
    //thay đổi màu sắc nền nút subtab

    function doSomething2(id) {
        if (id == 'subtab1') {
            $('#subtab1').addClass('subtabbuttonactive');
            $('#subtab2').removeClass('subtabbuttonactive');
        } else {
            $('#subtab2').addClass('subtabbuttonactive');
            $('#subtab1').removeClass('subtabbuttonactive');
        }

    }
    //Thay đổi nút mũi tên trong tab
    $('.rotateButtonLeft').on('click', function () {
        $('.navtabrow').removeClass('rotatedright');
        $('.navtabrow').addClass('rotatedleft');
    });
    $('.rotateButtonRight').on('click', function () {
        $('.navtabrow').removeClass('rotatedleft');
        $('.navtabrow').addClass('rotatedright');
    });
    //Tự động chuyển slide trong slider
    var currentId = 1;
    setInterval(function () {
        doSomething(currentId);
        currentId++;
        if (currentId > 4) {
            currentId = 1;
        }
    }, 3000);
    //thanh cuộn slidebar 
    var slider = $("#myRange");
    var output = $("#demo");
    var output1 = $("#demo1");


    // Hiển thị giá trị thanh trượt mặc định
    output.text(slider.val());

    // Cập nhật giá trị thanh trượt hiện tại (mỗi khi bạn kéo tay cầm thanh trượt)
    slider.on("input", function () {
        output.text($(this).val());
        output1.val($(this).val());
    });

});
