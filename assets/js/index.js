const data={
    userName: "菜菜",
    job:"后端开发工程师",
    address:"成都",
    age:"24岁",
    sex:"男",
    tel:15984426676,
    email:"notmastr@163.com",
    skills:[
        {
            name:"JAVA",
            per:88
        },
        {
            name:"Golang",
            per:88
        },
        {
            name:"Linux",
            per:85
        },
        {
            name:"Mysql",
            per:83
        },
        {
            name:"Oracle",
            per:80
        },
    ]
}
console.log("感谢您的浏览，期待能够加入贵公司！");
layui.use(function(){
    var laytpl = layui.laytpl,$=layui.jquery
    $('#view').html("渲染中...")
    //引入外部html
    $.get('assets/pages/home.html',function(homePage){
        //渲染并输出结果
        laytpl(homePage).render(data, function(str){
            $('#view').html(str);
          });
    });
})

