const ball = document.createElement('div');
document.body.appendChild(ball);

function moveBall() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    requestAnimationFrame(moveBall);
}

ball.style.position = "absolute";
ball.style.width = "50px";
ball.style.heigh = "50px";
ball.style,backgroundColor = "red";
ball.style.borderRadius = "50%";

requestAnimationFrame(moveBall);

// document.body.style.backgroundColor = "purple";