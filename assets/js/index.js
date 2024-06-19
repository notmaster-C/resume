const data={
    userName: "菜菜",
    job:"后端开发工程师",
}
console.log("感谢您的浏览，期待能够加入贵公司！");
layui.use(function(){
    var layer = layui.layer;
    var util = layui.util;
    layer.msg('Hello World', {icon: 6});
    // $("#userName").innerHTML = data.userName
    // $("#job").innerHTML = data.job
})

