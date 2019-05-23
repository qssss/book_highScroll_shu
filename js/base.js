$(function() {
    //图书浏览
    $(".page05 .bookList li").xs999(6);
    $(".page05 .topmenu li").xs999(6,{color:'#fff'});

    //图书检索列表
    $(".page04 .success_bookList li").xs999(6);
    $(".page04 .search_btn").xs999(6,{color:'#fff'});

    //图书排行
    $(".page06 .topmenu li").xs999(6,{color:'#fff'});
    $(".page06 .bookList li").xs999(6);

    //新书推荐tab
    $(".xs_li_06").xs999(6,{color:'#fff'});

    //图书详情
    $(".page03 .book_details .title").xs999(6,{color:'#fff'});
    
    //弹窗
    $('.page01 .block').xs999(6,{color:'#fff'});
    
    $('body').addClass('pt-page-scaleUp');
})