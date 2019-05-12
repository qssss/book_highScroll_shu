$(function() {
    //键盘事件
    $('.keyboard .c1 div').click(function() {
        //点击的值
        var newT = $(this).text();
        //输入框原有的值
        var oldT = $('.search_cell input').val();
        if(oldT == ""|| oldT == null) {//输入框为空时
            if(newT == 'space' || newT == 'delete' || newT == 'enter') {//如果点击的是空格键、删除键、回车键的时候
                alert('请输入您要搜索的书')
            } else {
                $('.search_cell input').val(newT);
            }
        }else if(newT == 'delete') {//点击的回退按钮
            var arr = $('.search_cell input').val().split('');
            var arr_new = arr.slice(0,arr.length-1);
            var str_new = arr_new.join('');
            $('.search_cell input').val(str_new);
        }else if(newT == 'space') {//点击了空格
            $('.search_cell input').val(oldT + ' ');		
        }else if(newT == 'enter') {//点击了回车
            // $('.keyboard').hide();
        }else {//点击了其他的
            $('.search_cell input').val(oldT + newT);
        }
        $('.search_cell input').focus();	
    })
    //移动到输入框上或者触摸输入框显示键盘
    $('.search_box .search_cell input').on({
        mouseover:function() {
            $('.keyboard').show();
        },
        touchstart: function() {
            $('.keyboard').show();
        },
        click: function() {
            $('.keyboard').show();
        }
    })
    $('.search_cell a').click(function() {
        var _value = $('.search_cell input').val();
        $('.keyboard').hide();
    })
    $('.key_enter').click(function() {
        var _value = $('.search_cell input').val();
        $('.keyboard').hide();
    })
})