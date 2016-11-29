window.onload = function() {

    //绘制弧形
    var canvas = document.getElementById('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext('2d');
    //使用context绘制
    context.lineWidth = 5;
    context.strokeStyle = '#005588';
    context.arc(300, 600, 200, 0, 1.5 * Math.PI); //顺时针3/4个圈
    // context.arc(300, 300, 200, 0, 1.5 * Math.PI, true); //逆时针只有1/4个圈
    //注意，顺时针和逆时针的开始角和结束角是固定不变的，解除注释可以看到效果
    context.stroke(); //绘图操作

    //绘制多个弧形

    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(50 + i * 100, 60, 40, 0, 2 * Math.PI * (i + 1) / 10);
        context.closePath(); //如果有closePath()，会自动产生封闭的线条
        context.stroke();
    }

    for (var j = 0; j < 10; j++) {
        context.beginPath();
        context.arc(50 + j * 100, 180, 40, 0, 2 * Math.PI * (j + 1) / 10);
        context.stroke();
    }

    context.fillStyle = '#005588';
    for (var m = 0; m < 10; m++) {
        context.beginPath();
        context.arc(50 + m * 100, 300, 40, 0, 2 * Math.PI * (m + 1) / 10, true); //逆时针绘制
        context.stroke();
        context.fill();
    }



};
