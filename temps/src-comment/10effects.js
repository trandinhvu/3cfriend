// Hàm tạo stars (hiệu ứng sao bay): a x, e y vị trí phát ra
var Stars = function(a, e) {
    var t = playState.gameInfo,  // Lấy gameInfo
        n = game.add.emitter(a, e, 100);  // Tạo emitter (hệ thống particle) tại vị trí a,e, max 100 particle
    n.makeParticles("bonusStar"),  // Sử dụng particle từ "bonusStar"
    n.maxParticleScale = .2,  // Scale max particle = 0.2
    n.setAlpha(.3, 0, 2e3),  // Alpha từ 0.3 đến 0 trong 2000ms (fade out)
    t.gameCanvas.addChild(n),  // Thêm vào gameCanvas
    n.start(!0, 1e3, null, 10);  // Start emitter: explode=true, lifespan=1000ms, frequency=null (mặc định), quantity=10
    var d = game.add.tween(n);  // Tween cho emitter
    d.to({
        alpha: 0
    }, 2e3),  // Fade alpha về 0 trong 2000ms
    d.onComplete.add((function() {
        n && n.destroy()  // Destroy emitter khi complete
    }), this), d.start()  // Start tween
};

// Hàm tạo text bonus: a delay (giây), e text nội dung, t font, n x, d y, l size, o sound (true/false)
function createBonusText(a, e, t, n, d, l, o) {
    game.time.events.add(Phaser.Timer.SECOND * a, (function() {  // Delay a giây rồi thực hiện
        var a = playState.gameInfo;  // Lấy gameInfo
        1 == o && Sound.Play("ding", 1);  // Nếu o=true, phát âm thanh ding
        var r = new Phaser.BitmapText(game, n, d, t, e, l);  // Tạo bitmap text tại n,d với font t, nội dung e, size l
        a.gameCanvas.addChild(r),  // Thêm vào gameCanvas
        a.landscape || (r.angle = 90);  // Nếu portrait (không landscape), xoay 90 độ
        r.anchor = new Point(.5, .5);  // Anchor giữa
        var s = game.add.tween(r);  // Tween cho text
        a.landscape ? s.to({  // Nếu landscape, fade và di chuyển lên
            alpha: 0,
            y: d - 40
        }, 2e3) : s.to({  // Nếu portrait, fade và di chuyển phải
            alpha: 0,
            x: n + 40
        }, 2e3);
        s.onComplete.add((function() {
            a.gameCanvas.removeChild(r), r = null  // Xóa text khi complete
        }), this), s.start()  // Start tween
    }), this)
}