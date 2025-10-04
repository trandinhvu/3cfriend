// Update loop của playState: Xử lý tutorial, cue, guide, input, game logic
playState.update = function() {
    var e, a = this.gameInfo,  // Lấy gameInfo, e dùng đa năng
        t = a.turn;  // Lượt hiện tại

    // Hàm skip/end tutorial: Set tutorial=false, lưu local, destroy canvas, start menu/play
    function i() {
        projectInfo.tutorial = !1, window.famobi.localStorage.setItem("showTutorial", !1),
            function() {  // Destroy các canvas, reset powerBar nếu touch
                a.gameCanvas.destroy(), game.device.touch && (a.powerBarMask.visible = !1, a.powerBarCueMask.visible = !1);
                a.guiCanvas.destroy(), a.guiBaseCanvas.destroy(), a.cueBaseCanvas.destroy(), a.turn = t
            }(), projectInfo.clickedHelpButton ? (window.famobi_analytics.trackEvent("EVENT_TUTORIALSKIPPED"), game.state.start("mainMenu")) : (window.famobi_analytics.trackEvent("EVENT_TUTORIALCOMPLETED"), game.state.start("play"))
    }

    // Hàm set cue: Hiển thị cue nếu chưa set và không prevent/trial
    function n() {
        0 == a.cueSet && 0 == a.preventUpdateCue && 0 == a.trial && (a.cueSet = !0, a.cueCanvas.visible = !0, a.cueCanvas.x = a.ballArray[0].position.x * a.physScale, a.cueCanvas.y = a.ballArray[0].position.y * a.physScale, a.cue.x = -a.ballRadius * a.physScale * 1.5, a.cueShadow.x = a.cue.x)
    }

    // Hàm vẽ guide line (hướng dẫn đường bóng)
    function o() {
        if (1 == a.drawGuide) {  // Nếu drawGuide=true
            a.guideCanvas.visible = !0, a.guide.visible = !0, a.guide.lineStyle(1, 16777215, .7);  // Set style line trắng, alpha 0.7
            for (var e, t = a.ballArray[0].position.plus(a.aimDirectionVector.times(5e5)), i = new Array, n = new Array, o = !1, r = a.ballArray[0], l = 1; l < a.ballArray.length; l++) {  // Dự đoán va chạm cue ball (0) với các bóng khác
                var s = a.ballArray[l];
                if (1 == s.active) {  // Nếu active
                    var p = new Point(r.position.x, r.position.y),  // Điểm đầu
                        c = new Point(t.x, t.y),  // Điểm cuối dự đoán
                        u = new Point(s.position.x, s.position.y),  // Trung tâm bóng mục tiêu
                        d = 2 * a.ballRadius,  // Đường kính
                        y = Maths.lineIntersectCircle(p, c, u, d);  // Giao điểm
                    1 == y.intersects && (i.push(s), null != y.enter ? n.push(y.enter) : (n.push(new Point(r.position.x, r.position.y)), o = !0))  // Thu thập bóng giao và điểm enter
                }
            }
            if (i.length > 0) {  // Nếu có va chạm
                for (var m = 1e11, h = 0; h < i.length; h++) {  // Tìm bóng gần nhất (min khoảng cách bình phương)
                    var v = (i[h].position.x - r.position.x) * (i[h].position.x - r.position.x) + (i[h].position.y - r.position.y) * (i[h].position.y - r.position.y);
                    v < m && (m = v, e = i[h], R = n[h])  // e = bóng gần nhất, R = điểm giao
                }
                a.guide.clear(), a.guide.lineStyle(1, 16777215, .7);  // Clear và reset style
                var g = Maths.findBearing(R.x - r.position.x, R.y - r.position.y),  // Góc từ cue đến giao
                    b = Maths.findBearing(e.position.x - R.x, e.position.y - R.y),  // Góc từ giao đến bóng mục tiêu
                    f = Math.abs(Maths.angleDiff(b, g)),  // Diff góc (góc va chạm)
                    S = 5 * a.ballRadius * ((90 - f) / 90),  // Tính độ dài đường phản xạ (dựa trên góc)
                    w = new Point(e.position.x + Math.cos(b * Math.PI / 180) * S, e.position.y + Math.sin(b * Math.PI / 180) * S);  // Điểm cuối đường phản xạ
                if (1 == projectInfo.guideOn && (a.guide.moveTo(r.position.x * a.physScale, r.position.y * a.physScale), a.guide.lineTo(R.x * a.physScale, R.y * a.physScale)), a.guide.drawCircle(R.x * a.phy...  // Nếu guideOn, vẽ line đến giao, circle tại giao (truncated)
                /* Phần code guide còn lại bị truncated, nhưng tiếp tục vẽ đường phản xạ, kiểm tra va chạm cushion/pocket, vẽ thêm line nếu cần */
            }
        }
    }

    /* Phần code update còn lại bị truncated, nhưng bao gồm: Xử lý tutorial stages (1-104: hướng dẫn di chuyển cue, aim, power, spin, v.v. với tween hand/mouse), update physics nếu balls moving=0, xử lý input (mouse/touch cho aim/power), update friction/rotation, check game over/transfer points, popUpPanel close, foul window, FORCE_LOSE cheat */
    window.FORCE_LOSE = (e = !0) => {  // Cheat function force lose
            c(e)
        }
};