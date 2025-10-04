// Hàm cập nhật timer: Được gọi định kỳ để tăng thời gian và cập nhật text
function updateTimer() {
    var t = playState.gameInfo;  // Lấy gameInfo từ playState
    if (t.timerStarted && 0 == projectInfo.tutorial) {  // Nếu timer đã start và không phải tutorial
        t.time++;  // Tăng thời gian (giả sử gọi mỗi giây)
        var e = Math.floor(t.time / 60),  // Tính phút
            a = Math.floor(e / 60),  // Tính giờ
            i = Math.ceil(e % 60),  // Tính giây còn lại
            n = i.toString();
        i < 10 && (n = "0" + i.toString()),  // Thêm 0 nếu giây <10 (format 00)
        t.timerText.text = a.toString() + ":" + n  // Cập nhật text timer (giờ:phút)
    }
}

// Hàm khởi động timer: Reset thời gian về 0
function startTimer() {
    playState.gameInfo.time = 0  // Reset time trong gameInfo
}

// Hàm kết thúc timer: Khi game over
function endTimer() {
    var t = playState.gameInfo;  // Lấy gameInfo
    1 == t.gameRunning && (t.timerText.scale = new Point(.5, .5), t.timerText.text = "", t.gameOver = !0)  // Nếu game đang chạy, scale text nhỏ, xóa text, set gameOver=true
}

// Hàm tăng thời gian: Thêm 600 (10 phút?) vào timeRemaining
function increaseTime() {
    playState.gameInfo.timeRemaining += 600  // Tăng thời gian còn lại (có lẽ dùng ở mode timed)
}