// Hàm xử lý va chạm: e là object va chạm (chứa ball, target, velocity, v.v.)
function onContact(e) {
    var t, o = playState.gameInfo,  // Lấy gameInfo từ playState
        a = e,  // a = e (va chạm)
        l = a.ball,  // Bóng va chạm
        i = new Object;  // Object lưu thông tin contact
    (i.position = l.position, i.targetPosition = a.target.position, i.velocity = a.ballVelocity, i.collisionType = a.collisionType, i.screw = l.screw, "ball" == a.collisionType && (i.target = a.target, i.targetVelocity = a.targetVelocity, i.deltaScrew = a.deltaScrew), i.type = a.collisionType, "ball" == a.collisionType) && (l.contactArray.push(i), 0 == o.trial && ((t = i.velocity.minus(i.targetVelocity).magnitude / 6e3) > 1 && (t = 1), Sound.Play("ballHit", t)));  // Lưu contact vào array, phát âm thanh ballHit nếu không trial (thử nghiệm?)
    "line" != a.collisionType && "vertex" != a.collisionType || (l.contactArray.push(i), 0 == o.trial && ((t = a.normalVelocity.magnitude / 3e3) > 2 && (t = 2), Sound.Play("cushionHit", t)));  // Phát âm thanh cushionHit cho va chạm line/vertex
    "pocket" == a.collisionType && (l.active = !1, l.velocity = new Vector2D(0, 0), l.contactArray.push(i), 0 == o.trial && (playPocketSound(a), playPocketAnimation(a), projectInfo.tutorial || awardBonuses(a)), 0 == l.id ? o.scratched = !0 : o.ballsRemaining--);  // Xử lý va chạm pocket: Deactive bóng, phát âm thanh/animation, award bonus, giảm ballsRemaining (trừ khi là cue ball id=0 thì scratched)
}

// Hàm phát âm thanh pocket: e là va chạm
function playPocketSound(e) {
    var t = e.speed / 5e3;  // Tính volume dựa trên tốc độ
    t > 1.5 && (t = 1.5), t < .3 && (t = .3), Sound.Play("pocketHit", t)  // Phát âm thanh với volume điều chỉnh
}

// Hàm award bonus: e là va chạm
function awardBonuses(e) {
    var t = playState.gameInfo;  // Lấy gameInfo
    if (0 != e.ball.id) {  // Nếu không phải cue ball
        var o = e.target;  // Target (pocket?)
        t.numBalls--, t.pottedBallArray.push(e.ball.id), checkLevelComplete(), t.ballPotted = !0,  // Giảm numBalls, thêm id bóng vào array potted, kiểm tra level complete
        1 == projectInfo.mode && "p1" == t.turn && (createBonusText(0, String(10 * t.multiplier), "font6", o.dropPosition.x * t.physScale, o.dropPosition.y * t.physScale, 56, !1),  // Nếu mode 1 và lượt p1, tạo text bonus
        game.time.events.add(1.5 * Phaser.Timer.SECOND, (function() {  // Delay 1.5s để cập nhật score
            if (projectInfo.score += 10 * t.multiplier, projectInfo.score > t.bestScore) {  // Tăng score, cập nhật bestScore
                t.bestScore = projectInfo.score;
                try {
                    window.famobi.localStorage.setItem("bestScore", t.bestScore)  // Lưu bestScore vào localStorage (famobi là SDK?)
                } catch (e) {}
            }
            t.multiplier++, t.multiplierText.text = "x" + t.multiplier;  // Tăng multiplier, cập nhật text
            var e = game.add.tween(t.multiplierText);  // Tween (animation) cho text
            e.from({
                size: 42
            }, 2e3), e.start()
        }), this))
    } else t.fouled = !0  // Nếu cue ball vào lỗ, fouled (phạt)
}

// Hàm kiểm tra level complete
function checkLevelComplete() {
    playState.gameInfo.numBalls <= 1 && (projectInfo.levelComplete = !0)  // Nếu còn <=1 bóng, complete
}

// Hàm animation khi bóng vào pocket: e là va chạm
function playPocketAnimation(e) {
    var t = playState.gameInfo;  // Lấy gameInfo
    if (0 == t.trial) {  // Nếu không trial
        var o = e.ball,  // Bóng
            a = e.target,  // Pocket
            l = e.speed;  // Tốc độ
        o.pocketTweenComplete = !1,  // Flag tween chưa complete
        0 != o.id ? (o.shadow.parent.removeChild(o.shadow), o.shadow = null) : o.shadow.visible = !1;  // Xóa shadow nếu không cue ball, ẩn nếu cue
        var i = .1;  // Thời gian tween cơ bản
        l < 5e3 && (i = .2), l < 3e3 && (i = .3), l < 2e3 && (i = .4), l < 1e3 && (i = .5), i *= 300;  // Điều chỉnh thời gian dựa trên tốc độ (chậm hơn nếu chậm)
        var n = game.add.tween(o.mc);  // Tween di chuyển bóng đến dropPosition
        n.to({
            x: a.dropPosition.x * t.physScale,
            y: a.dropPosition.y * t.physScale
        }, i), n.onComplete.add((function() {
            var e = o.mc.x,
                a = o.mc.y;
            t.ballCanvas.removeChild(o.mc), t.tunnelCanvas.addChild(o.mc), o.mc.x = e, o.mc.y = a, c.start()  // Chuyển bóng sang tunnelCanvas (hiệu ứng rơi vào lỗ), start tween tiếp theo
        }), this), n.start();
        var c = game.add.tween(o.mc);  // Tween thứ 2: Di chuyển sâu hơn vào tunnel
        c.to({
            x: .7 * a.dropPosition.x * t.physScale,
            y: .7 * a.dropPosition.y * t.physScale
        }, 1.2 * i, Phaser.Easing.Linear.In), 0 != o.id ? c.onComplete.add((function() {  // Nếu không cue, xóa khỏi tunnel
            ! function(e) {
                0 != e.id && (t.tunnelCanvas.removeChild(e.mc), e.pocketTweenComplete = !0)
            }(o)
        }), this) : c.onComplete.add((function() {  // Nếu cue, chuyển về ballCanvas và ẩn
            t.tunnelCanvas.removeChild(o.mc), t.ballCanvas.addChild(o.mc), o.pocketTweenComplete = !0, o.mc.visible = !1
        }), this)
    }
}