var ball = {x:512, y:100, r:20, g:2, vx:-4, vy:-10, color:"#005588"};
//x位置， y位置，r半径，g:加速度，vx：x方向速度，vy：y方向速度，color：颜色

window.onload = function() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = 1024;
    canvas.height = 768;

    setInterval(function(){
        render(context);
        update();
    },50);

};

//启动绘制函数
function render(cxt) {
    // console.log(cxt.canvas.width);
    cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
    cxt.fillStyle = ball.color;

    cxt.beginPath();
    cxt.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    cxt.closePath();

    cxt.fill();
}

//调整数据
function update(){

    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;

    //掉落底部的碰撞检测
    if ( ball.y >= 768 - ball.r) {
        ball.y = 768 - ball.r;
        ball.vy = - ball.vy * 0.5; //*0.5是增加摩擦系数
    }

}