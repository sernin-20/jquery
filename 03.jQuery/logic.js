// 存放了跟todo相关的业务逻辑的代码
// 刚学完jquery. 为了练习. 就通过这个案例,利用jquery对页面的元素进行增删改查

//需求1：在文本框中 todo-header input 输入内容，按下回车键，表示输入完成，将输入的内容，添加到任务列表中

// 获取 todo-header input  然后注册键盘抬起事件
$('todo-header input').on('keyup', function(e) {
    // 2.在事件处理函数中，判断按下的是否是回车键
    if (e.keyCode === 13) {
        //3.如果是回车键  就将输入的内容  添加到任务列表
        //3.1 获取用户输入的信息
        var value = $(this).val().trim()
        //3.2 判断用户是否输入  如果没有就return
        if (!value) return
        //3.3如果用户输入了  就将用户输入信息和字符串拼接起来
        var str = 
            '<li><label><input type = "checkbox" /><span>' + 
            value + 
            '</span></label><button class = "btn btn-danger">删除</button></li>'
            //3.4 将拼接好的字符串  添加到todo-main里面
            $('.todo-main').append(str)
            //3.5 将input清空
            $(this).val('')
    }
})

//需求2. 点击复选框 修改任务的状态
//2.1 获取todo-main， 利用事件委托  给任务中的复选框注册点击事件
// 注意： 事件委托时，委托的子元素的选择器写的时候  要在被委托对象的范围中写
$('.todo-main').on('click', )