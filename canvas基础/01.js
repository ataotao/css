window.onload = function() {

    //绘制线条和多边形
    var canvas = document.getElementById('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext('2d');
    //使用context绘制
    console.log(context);
    console.log(canvas);
    //绘制直线
    //moveTo理解为笔尖
    //lineTo理解为绘画结束处
    context.beginPath();
    context.moveTo(100, 100); //状态设置
    context.lineTo(700, 700); //状态设置
    context.lineTo(100, 700);
    context.lineTo(100, 100);
    context.closePath();

    context.fillStyle = 'rgb(2, 100, 30)'; //着色
    context.fill(); //着色应用

    context.lineWidth = 5;
    context.strokeStyle = '#005588';
    context.stroke(); //线条绘图操作

    //绘制第二个图形
    context.beginPath();
    context.moveTo(200, 100); //状态设置
    context.lineTo(700, 600); //状态设置
    context.closePath();
    context.strokeStyle = 'black';
    context.stroke(); //线条绘图操作


    //七巧板

    var tangram = [
        { p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: '#caff67' },
        { p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: '#67brcf' },
        { p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }], color: '#ef3d61' },
        { p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: '#f9f51a' },
        { p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: '#a594c0' },
        { p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: '#fa8ecc' },
        { p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: '#f6ca29' }
    ];


    var canvasA = document.getElementById('canvasA');

    canvasA.width = 800;
    canvasA.height = 800;

    var contextA = canvasA.getContext('2d');

    for (var i = 0; i < tangram.length; i++) {
        draw(tangram[i], contextA);
    }
};

function draw(piece, cxt) {
    cxt.beginPath();
    cxt.moveTo(piece.p[0].x, piece.p[0].y);
    for (var i = 1; i < piece.p.length; i++) {
        cxt.lineTo(piece.p[i].x, piece.p[i].y);
    }
    cxt.closePath();

    cxt.fillStyle = piece.color;
    cxt.fill();

    // 设置一个边框
    cxt.strokeStyle = 'black';
    cxt.lineWidth = 1;
    cxt.stroke();
}
