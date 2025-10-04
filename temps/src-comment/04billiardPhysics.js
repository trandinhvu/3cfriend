// Class billiardPhysics: t là event contact, i ballArray, e lineArray, o vertexArray, s pocketArray, n simType (0: full sim, 1: single, 2: target)
function billiardPhysics(t, i, e, o, s, n) {
    this.targetID = -1, this.omissionArray = new Array, this.ballArray = i, this.lineArray = e, this.vertexArray = o, this.pocketArray = s, this.simType = n,  // Khởi tạo các array và type
    this.simType = 0,  // Mặc định simType=0
    this.contactEvent = t  // Event dispatcher cho contact
}
billiardPhysics.prototype = {
    set ballData(t) {  // Setter ballArray
        this.ballArray = t
    },
    set frameNumber(t) {  // Setter frame (có lẽ frame count)
        this.frame = t
    }
},

// Cập nhật vật lý: Dự đoán va chạm và cập nhật ma sát
billiardPhysics.prototype.updatePhysics = function() {
    this.predictCollisions(), this.updateFriction()
},

// Dự đoán va chạm trong frame: Lặp tối đa 20 lần để xử lý chuỗi va chạm
billiardPhysics.prototype.predictCollisions = function() {
    var t = 0,  // Thời gian bắt đầu (0)
        i = 0;  // Số lần lặp
    do {
        var e, o = 1;  // Thời gian va chạm gần nhất (init 1)
        s && s.length;  // (có lẽ typo, s là array collision)
        var s = new Array,  // Array lưu các va chạm tại thời gian o
            n = Maths.fixNumber(1 - t),  // Thời gian còn lại trong frame
            r = 0;  // Số bóng cần check
        0 == this.simType && (r = this.ballArray.length), 1 == this.simType && (r = 1), 2 == this.simType && (r = -1 == this.targetID ? 1 : this.ballArray.length);  // Xác định r dựa trên simType
        for (var a = 0; a < r; a++) {  // Lặp qua các bóng
            var l = !1;  // Flag skip
            2 == this.simType && -1 != this.targetID && a != this.targetID && 0 != a && (l = !0);  // Skip nếu simType 2 và không phải target/cue
            var c = this.ballArray[a];  // Bóng hiện tại
            if (1 == c.active && 0 == l) {  // Nếu active và không skip
                for (var y = c.position.plus(c.velocity.times(n)), p = 2 == this.simType ? 0 : a; p < this.ballArray.length; p++) {  // Dự đoán va chạm bóng-bóng
                    var h = this.ballArray[p];  // Bóng mục tiêu
                    if (0 != c.velocity.magnitudeSquared || 0 != h.velocity.magnitudeSquared) {  // Nếu có vận tốc
                        var m = !0;  // Flag check (luôn true?)
                        if (this.simType, h != c && 1 == h.active && 1 == m && Maths.checkObjectsConverging(c.position, h.position, c.velocity, h.velocity)) {  // Nếu khác bóng, active, converging
                            var v = c.velocity.minus(h.velocity),  // Vận tốc tương đối
                                u = c.position.plus(v.times(n)),  // Vị trí tương đối dự đoán
                                d = new Point(c.position.x, c.position.y),  // Điểm đầu
                                b = new Point(u.x, u.y),  // Điểm cuối tương đối
                                g = new Point(h.position.x, h.position.y),  // Trung tâm h
                                w = 2 * this.ballRadius,  // Đường kính (bán kính va chạm)
                                f = Maths.lineIntersectCircle(d, b, g, w);  // Giao điểm đường với vòng (bóng h)
                            if (1 == f.intersects || 1 == f.inside) {  // Nếu giao hoặc inside
                                var x, P, j;
                                if (null != f.exit && (x = f.exit), null != f.enter && (x = f.enter), 1 == f.intersects) {  // Lấy điểm giao
                                    P = new Vector2D(x.x, x.y);
                                    var A = Maths.createVectorFrom2Points(d, b),  // Vector đường
                                        S = Maths.createVectorFrom2Points(d, x);  // Vector đến giao điểm
                                    j = Maths.fixNumber(t + S.magnitude / A.magnitude * n)  // Thời gian va chạm
                                }
                                if (1 == f.inside) {  // Nếu inside, tính điểm va chạm
                                    var I = c.position.minus(h.position).normalize();
                                    P = h.position.plus(I.times(w)), j = t
                                }
                                j < o ? (o = j, (e = new Object).type = "ball", e.object = c, e.time = o, 1 == f.intersects && (e.objectIntersectPoint = c.position.plus(c.velocity.times(o - t)), e.targetIntersectPoint = h.position.plus(h.velocity.times(o - t))), 1 == f.inside && (e.objectIntersectPoint = P, e.targetIntersectPoint = h.position), e.target = h, (s = new Array).push(e)) : j == o && 1 != j && (o = j, (e = new Object).type = "ball", e.object = c, e.time = o, e.objectIntersectPoint = c.position.plus(c.velocity.times(o - t)), e.target = h, e.targetIntersectPoint = h.position.plus(h.velocity.times(o - t)), 1 == f.inside && (e.objectIntersectPoint = P, e.targetIntersectPoint = h.position), s.push(e))  // Thêm va chạm vào s nếu gần nhất hoặc bằng
                            }
                        }
                    }
                }
                if (0 != c.velocity.magnitudeSquared) {  // Dự đoán va chạm line (cushion)
                    for (var V = 0; V < this.lineArray.length; V++) {
                        var M = this.lineArray[V],  // Line hiện tại
                            D = new Phaser.Line(c.position.x, c.position.y, y.x, y.y).intersects(new Phaser.Line(M.p3.x, M.p3.y, M.p4.x, M.p4.y));  // Giao điểm với line
                        if (null == D && null != (D = Maths.lineIntersectLine(new Point(c.position.x, c.position.y), new Point(y.x, y.y), new Point(M.p5.x, M.p5.y), new Point(M.p6.x, M.p6.y)))) {  // Nếu không giao, thử line khác (p5,p6?)
                            window.famobi.log("!!! SAVED BY SECOND LINE  !!! Ball: " + c.id + ", line: " + M.name + ", Frame: " + this.frame);  // Log cứu line
                            var O = new Vector2D(D.x, D.y),
                                T = M.normal.times(.2 * this.ballRadius);  // Điều chỉnh điểm giao
                            intersectPointAsVec = O.plus(T), D = new Point(intersectPointAsVec.x, intersectPointAsVec.y)
                        }
                        if (null != D) {  // Nếu có giao
                            var C = new Vector2D(D.x, D.y),  // Điểm giao vector
                                N = Maths.createVectorFrom2Points(c.position, y),  // Vector di chuyển
                                R = Maths.createVectorFrom2Points(c.position, C),  // Vector đến giao
                                F = Maths.fixNumber(t + R.magnitude / N.magnitude * n);  // Thời gian va chạm
                            F < o ? (o = F, (e = new Object).type = "line", e.time = o, e.object = c, e.objectIntersectPoint = C, e.target = M, (s = new Array).push(e)) : F == o && 1 != F && (o = F, (e = new Object).type = "line", e.time = o, e.object = c, e.objectIntersectPoint = C, e.target = M, s.push(e))  // Thêm vào s nếu gần nhất
                        }
                    }
                    /* Phần code còn lại bị truncated trong input, nhưng tương tự cho vertex và pocket: Dự đoán giao điểm, tính thời gian, thêm vào s nếu gần nhất */
                }
            }
        }
        s.length > 0 && this.resolveCollision(s);  // Nếu có va chạm, giải quyết
        var pt = Maths.fixNumber(o - t);  // Thời gian di chuyển
        1 != this.simType && this.moveBalls(pt), t = o, i++  // Di chuyển bóng, cập nhật t, tăng i
    } while (s.length > 0 && i < 20)  // Lặp nếu còn va chạm và <20 lần
},

// Giải quyết va chạm: t là array va chạm
billiardPhysics.prototype.resolveCollision = function(t) {
    var i = playState.gameInfo;  // GameInfo
    this.omissionArray = new Array, t.length;  // Array skip
    for (var e = 0; e < t.length; e++) {  // Lặp qua va chạm
        var o = t[e];  // Va chạm hiện tại
        if ("ball" == o.type) {  // Va chạm bóng-bóng
            o.time;
            (d = o.object).position = o.objectIntersectPoint;  // Cập nhật vị trí
            var s = o.target; - 1 == this.targetID && (this.targetID = s.id), s.position = o.targetIntersectPoint, this.omissionArray.push(d), this.omissionArray.push(s);  // Set targetID nếu cần, thêm skip
            var n = s.position.minus(d.position).normalize(),  // Normal va chạm
                r = (u = new Vector2D(n.x, n.y)).getRightNormal(),  // Tangent (vuông góc normal)
                a = u.times(d.velocity.dot(u)),  // Thành phần vận tốc d theo normal
                l = r.times(d.velocity.dot(r)),  // Theo tangent
                c = u.times(s.velocity.dot(u)),  // Tương tự cho s
                y = r.times(s.velocity.dot(r));
            Math.abs(s.ySpin) < Math.abs(d.ySpin) && (s.ySpin = -.5 * d.ySpin),  // Chuyển spin y nếu cần
            0 == d.id && 0 == d.firstContact && (d.deltaScrew = a.times(.17 * -d.screw), d.type);  // Delta screw cho cue ball
            var p = c.times(this.ballRestitution).plus(a.times(1 - this.ballRestitution)),  // Tính vận tốc mới theo normal (restitution: hệ số đàn hồi)
                h = a.times(this.ballRestitution).plus(c.times(1 - this.ballRestitution));
            d.velocity = l.plus(p), s.velocity = y.plus(h),  // Cập nhật vận tốc
            0 == this.simType && h.magnitude > 450 && (s.grip = 0), d.lastCollisionObject = s, s.lastCollisionObject = d  // Set grip, last collision
        }
        if ("line" == o.type) {  // Va chạm line (cushion)
            o.time, i.collisions++, (d = o.object).position = o.objectIntersectPoint;  // Tăng collisions, cập nhật vị trí
            var m = o.target;  // Line
            this.omissionArray.push(d), d.ySpin += -d.velocity.dot(m.direction) / 100;  // Cập nhật spin y
            d.ySpin > 50 && (d.ySpin = 50), d.ySpin < -50 && (d.ySpin = -50);  // Giới hạn spin
            a = m.normal.times(d.velocity.dot(m.normal)), l = m.direction.times(d.velocity.dot(m.direction));  // Thành phần normal và tangent
            0 == d.id && (l = l.plus(m.direction.times(Maths.fixNumber(.2 * d.english * d.velocity.magnitude))), d.english = Maths.fixNumber(.5 * d.english), d.english > -.1 && d.english < .1 && (d.english = 0)), d.velocity = a.times(-this.cushionRestitution).plus(l),  // Cập nhật vận tốc cho cue (english: side spin), restitution cushion
            0 == this.simType && a.magnitude > 700 && (d.grip = 0), d.lastCollisionObject = m, d.position = d.position.plus(m.normal.times(200)), 0 == d.id && (d.deltaScrew = d.deltaScrew.times(.8))  // Set grip, vị trí điều chỉnh, delta screw
        }
        if ("vertex" == o.type) {  // Va chạm vertex (góc bàn)
            i.collisions++, (d = o.object).position = o.objectIntersectPoint;
            var v = o.target;  // Vertex
            this.omissionArray.push(d);
            var u;
            n = v.position.minus(d.position).normalize(), r = (u = new Vector2D(n.x, n.y)).getRightNormal(), a = u.times(d.velocity.dot(u)), l = r.times(d.velocity.dot(r));  // Tương tự ball collision
            d.velocity = a.times(-this.cushionRestitution).plus(l), d.position = d.position.minus(u.times(200)), d.id, d.lastCollisionObject = v, d.lastVertex = v.name, 0 == d.id && (d.deltaScrew = new Vector2D(0, 0))  // Cập nhật vận tốc, vị trí, reset delta screw cho cue
        }
        if ("pocket" == o.type) {  // Va chạm pocket
            var d;
            o.time, t.length, (d = o.object).position = o.objectIntersectPoint;
            o.target;
            this.omissionArray.push(d);
            var b = d.velocity.magnitude;  // Tốc độ
            d.hasOwnProperty("mc")  // Kiểm tra có mc (movie clip?)
        }
        var g = new Object;  // Object gửi event
        g.collisionType = o.type, g.ball = d, g.target = o.target, g.ballVelocity = d.velocity, "ball" == o.type && (g.targetVelocity = s.velocity, 0 == d.id && (g.deltaScrew = d.deltaScrew)), "line" != o.type && "vertex" != o.type || (g.normalVelocity = a), "pocket" == o.type && (g.speed = b), this.sendContactEvent(g),  // Gửi event cho bóng object
        "ball" == o.type && ((g = new Object).collisionType = o.type, g.ball = o.target, g.target = d, g.ballVelocity = o.target.velocity, g.targetVelocity = d.velocity, 0 == s.id && (g.deltaScrew = o.target.deltaScrew), this.sendContactEvent(g))  // Gửi event cho bóng target nếu ball collision
    }
    t.length
},

// Gửi event contact: t là object contact
billiardPhysics.prototype.sendContactEvent = function(t) {
    this.contactEvent.dispatch(t)  // Dispatch event
},

// Di chuyển bóng theo thời gian t (không di chuyển nếu trong omission)
billiardPhysics.prototype.moveBalls = function(t) {
    for (var i = 0; i < this.ballArray.length; i++) {
        var e = this.ballArray[i];
        0 != this.omissionArray.length && -1 != this.omissionArray.indexOf(e) || 1 == e.active && (e.position = e.position.plus(e.velocity.times(t)))  // Di chuyển nếu không skip và active
    }
    this.omissionArray = new Array  // Reset omission
},

// Cập nhật ma sát và spin cho tất cả bóng
billiardPhysics.prototype.updateFriction = function() {
    for (var t = 0; t < this.ballArray.length; t++) {
        var i = this.ballArray[t];  // Bóng hiện tại
        0 == i.id && (i.velocity = i.velocity.plus(i.deltaScrew), i.deltaScrew.magnitude > 0 && (i.deltaScrew = i.deltaScrew.times(.8), i.deltaScrew.magnitude < 1 && (i.deltaScrew = new Vector2D(0, 0))));  // Cập nhật deltaScrew cho cue, giảm dần
        var e = i.velocity.magnitude;  // Độ lớn vận tốc
        e -= this.friction;  // Giảm ma sát
        var o = i.velocity.normalize();  // Vector đơn vị
        if (i.velocity = o.times(e), i.velocity.magnitude < this.minVelocity && (i.velocity = new Vector2D(0, 0)), i.grip < 1 && (i.grip += .02), i.ySpin >= .2 && (i.ySpin -= .2), i.ySpin <= -.2 && (i.ySpin += .2), i.ySpin >= -.2 && i.ySpin <= .2 && (i.ySpin = 0), 0 != i.ySpin) {  // Cập nhật vận tốc, grip (ma sát quay?), spin y giảm dần
            var s = i.velocity.getLeftNormal().normalize().times(.3 * i.ySpin * i.velocity.magnitude / 800);  // Tính ảnh hưởng spin đến vận tốc (side effect)
            i.velocity = i.velocity.plus(s)  // Thêm vào vận tốc
        }
    }
};