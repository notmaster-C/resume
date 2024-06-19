const data = {
    userName: "菜菜",
    job: "后端开发工程师",
    address: "成都",
    age: "24岁",
    sex: "男",
    tel: 15984426676,
    email: "notmastr@163.com",
    lastCommit: [],
    skills: [
        {
            name: "JAVA",
            per: 88
        },
        {
            name: "Golang",
            per: 88
        },
        {
            name: "Linux",
            per: 85
        },
        {
            name: "Mysql",
            per: 83
        },
        {
            name: "Oracle",
            per: 80
        },
    ]
}
function TimestampToDate(Timestamp) {
    let date1 = new Date(Timestamp);
    return date1.toLocaleDateString().replace(/\//g, "-") + " " + date1.toTimeString().substr(0, 8); 
}
console.log("感谢您的浏览，期待能够加入贵公司！");
layui.use(function () {
    var laytpl = layui.laytpl, $ = layui.jquery
    $('#view').html("渲染中...")
    // $.ajax({
    //     url: ".git/logs/HEAD",
    //     success: function (res) {
    //         //去掉最后一行的换行符
    //         x = res.substring(0, res.lastIndexOf("\n"))
    //         if (x.lastIndexOf("\n") > 0) {
    //             data.lastCommit = x.substring(x.lastIndexOf("\n"), x.length).trim().split(" ");
    //             console.log("上一次提交信息", data.lastCommit)
    //             console.log("上一次提交时间", data.lastCommit[4] + '000')
    //             console.log("当前时间", new Date().getTime())
    //             let datet=TimestampToDate(parseInt(data.lastCommit[4]+'000'))
    //             data.lastCommit[4] = datet
    //             data.lastCommit[6]=data.lastCommit.slice(6,data.lastCommit.length)
    //         }
    //     }
    // })
    //引入外部html
    $.get('assets/pages/home.html', function (homePage) {
        //渲染并输出结果
        laytpl(homePage).render(data, function (str) {
            $('#view').html(str);
        });

    });
})

