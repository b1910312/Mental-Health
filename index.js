$(document).ready(function () {
    // Kiểm tra kích thước màn hình và ẩn/hiển thị nút toggle khi tải trang và khi thay đổi kích thước màn hình
    function toggleButtonVisibility() {
        var md = $("#md");
        var sm = $("#sm");
        if ($(window).width() <= 911 && $(window).width() > 700) {
            $('.mdmt').show();
            $('.mdmtelse').hide();

        }
        else {
            $('.mdmt').hide();
            $('.mdmtelse').show();
        }
        if ($(window).width() <= 700) {
            $('.md').hide();
            $('.sm').show();
            md.hide();
            sm.show(); // Hiển thị nút toggle
        } else {
            $('.sm').hide();
            $('.md').show();
            sm.hide();
            md.show(); // Ẩn nút toggle
        }
    }

    // Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
    $(window).on("load resize", toggleButtonVisibility);


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
            $('#navtabbg1').addClass('navtabbgactive');
            $('#navtabbg2').removeClass('navtabbgactive');
        } else {
            $('#tab2').addClass('navtabbuttonactive');
            $('#tab1').removeClass('navtabbuttonactive');
            $('#navtabbg2').addClass('navtabbgactive');
            $('#navtabbg1').removeClass('navtabbgactive');
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
    var slider1 = $("#myRange1");
    var slider2 = $("#myRange2");
    var output = $("#demo2");
    var output1 = $("#demo1");
    var output2 = $("#demo3");


    // Cập nhật giá trị thanh trượt hiện tại (mỗi khi bạn kéo tay cầm thanh trượt)
    slider.on("input", function () {
        output1.val($(this).val());
    });
    slider1.on("input", function () {
        output.val($(this).val());
    });
    slider2.on("input", function () {
        output2.val($(this).val());
    });

    output.on("input", function () {
        slider1.val($(this).val());
    });

    output1.on("input", function () {
        slider.val($(this).val());
    });
    output2.on("input", function () {
        slider2.val($(this).val());
    });
    // Xử lý sự kiện cuộn trang để thay đổi CSS cho navbar
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var navbar = $('.navbar');

        if (scrollTop > 0) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

});
