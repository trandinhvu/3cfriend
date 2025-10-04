// Hàm render màn hình
function renderScreen() {
    for (var a = playState.gameInfo, c = 0; c < a.ballArray.length; c++) {  // Lặp qua ballArray
        var y = a.ballArray[c];  // Bóng hiện tại
        1 == y.active && (y.mc.x = y.position.x * a.physScale, y.mc.y = y.position.y * a.physScale,  // Cập nhật vị trí mc (movie clip) scaled
        y.shadow.x = y.mc.x + .7 * a.ballRadius * a.physScale * (y.mc.x / 720), y.shadow.y = y.mc.y + .7 * a.ballRadius * a.physScale * (y.mc.y / 360),  // Cập nhật shadow (hiệu ứng 3D giả, dựa trên vị trí bàn 720x360?)
        y.marker.x = y.mc.x, y.marker.y = y.mc.y,  // Cập nhật marker (có lẽ điểm đánh dấu)
        0 == c && (y.mover.x = y.mc.x, y.mover.y = y.mc.y),  // Nếu cue ball (c=0), cập nhật mover
        y.mc.updateRotation(y.velocity.x * a.physScale * y.grip, y.velocity.y * a.physScale * y.grip, y.ySpin))  // Cập nhật rotation bóng dựa trên vận tốc, grip, spin
    }
}