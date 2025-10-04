// Object playState: State chơi game
var playState = new Object;
playState.init = function() {
    this.menuInfo = new Object  // Khởi tạo menuInfo (có lẽ lỗi, nên là gameInfo?)
}, 

// Create: Setup toàn bộ game (listener orientation, resize, canvas, balls, physics, GUI, tutorial)
playState.create = function() {
    window.famobi.onOrientationChange((function() {  // Listener thay đổi orientation, gọi resizeGame
        resizeGame()
    })), 
    resizeGame = function(a, t) {  // Hàm resize: Điều chỉnh canvas, elements dựa trên portrait/landscape
        Math.min(fenster.innerWidth, document.documentElement.clientWidth), Math.min(fenster.innerHeight, document.documentElement.clientHeight);
        if ("portrait" == window.famobi.getOrientation()) {  // Portrait: Set size 1080x1920, điều chỉnh vị trí gameCanvas, skipText, tutorialText, hand, panels, timer/score/multiplier, menuButton, powerBar, successIcon, gameOverPanel, popUpPanel
            e.landscape = !1, game.scale.setGameSize(1080, 1920), e.gameCanvas.x = game.width / 2 + 30, e.gameCanvas.y = game.height / 2 - 50, e.gameCanvas.angle = -90, projectInfo.tutorial && (e.skipText.x = game.world.centerX + 30, e.skipText.y = game.world.centerY + 230, e.tutorialText.x = game.world.centerX + 30, e.tutorialText.y = 320, game.device.touch && (e.hand.scale.x = -1, e.tutStage >= 6 && (e.hand.angle = 0, e.pointerStart = e.pointerStartP, e.pointerEnd = e.pointerEndP), 6 != e.tutStage && 7 != e.tutStage || (e.hand.x = e.pointerStart.x, e.hand.y = e.pointerStart.y), e.tutStage >= 8 && (e.hand.x = e.pointerStart.x - e.pointerProgress, e.hand.y = e.pointerStart.y, e.powerBarMask.x = 0, e.powerBarMask.y = e.pointerProgress))), e.guiPanel1.x = game.width / 2 - e.guiPanel2.width / 2 - 20 + 25, e.guiPanel1.y = 100, e.guiPanel2.x = game.width / 2 + 25, e.guiPanel2.y = 100, e.guiPanel3.x = game.width / 2 + e.guiPanel2.width / 2 + 20 + 25, e.guiPanel3.y = 100, e.timerText.x = e.guiPanel3.x + e.guiPanel3.width / 2, e.timerText.y = 100, e.scoreText.x = game.width / 2 + 25, e.scoreText.y = 100, e.multiplierText.x = e.guiPanel1.x - e.guiPanel1.width / 2, e.multiplierText.y = 100, e.menuButton.x = game.width - 65, e.menuButton.y = 10, e.menuButton.scale = new Point(.35, .35), game.device.touch && (e.powerBar.angle = -90, e.powerBar.x = 60, e.powerBar.y = game.height / 2, e.powerBarCueMask.clear(), e.powerBarCueMask.beginFill(16777215), e.powerBarCueMask.drawRect(e.powerBar.x, e.powerBar.y - 250, 26, 500), e.powerBarMask.clear(), e.powerBarMask.beginFill(16711680), e.powerBarMask.drawRect(e.powerBar.x - 26, e.powerBar.y - 750, 26, 500)), e.successIcon.angle = 90, e.gameOverPanel.x = game.width / 2 + 35, e.gameOverPanel.y = game.height / 2, e.gameOverPanelBG.angle = -90, e.GOhighScoreIcon.x = 80, e.GOhighScoreIcon.y = -346, e.gameOverPanel.text2.x = 145, e.gameOverPanel.text2.y = -349, e.playerWin.x = -240, e.playerWin.y = -405, e.popUpPanel.x = game.width / 2 + 25, e.popUpPanel.y = game.he ...(truncated, nhưng tương tự cho landscape: Điều chỉnh vị trí/angle/scale)
            /* Phần code resize còn lại bị truncated, nhưng bao gồm setup các canvas (gameCanvas, ballCanvas, shadowCanvas, pocketCanvas, cueCanvas, guideCanvas, guiCanvas, tutCanvas, timerCanvas), balls từ setBallPositions, physics (billiardPhysics), contact listener, GUI panels, texts, buttons, tutorial elements */
        }(), renderScreen(),  // Gọi render sau setup
        function() {  // Setup levelText và successIcon
            e.levelText = new Phaser.BitmapText(game, 0, -100, "font1", projectInfo.level, 48), e.timerCanvas.addChild(e.levelText), e.levelText.anchor.x = .5, e.levelText.anchor.y = .5, e.levelText.alpha = .2, e.successIcon = new Phaser.Sprite(game, 0, 0, "success"), e.timerCanvas.addChild(e.successIcon), e.successIcon.visible = !1, e.successIcon.anchor = new Point(.5, .5), e.successIcon.alpha = .25, 1 == projectInfo.tutorial && (e.levelText.visible = !1);
            e.levelText.visible = !1
        }(), 
        1 == projectInfo.tutorial && (game.device.touch ? (e.hand = new Phaser.Sprite(game, 0, 0, "hand"), e.tutCanvas.addChild(e.hand), e.hand.alpha = 0) : (e.mouseSprite = new Phaser.Sprite(game, 0, 0, "mouseSprite"), e.tutCanvas.addChild(e.mouseSprite), e.mouseSprite.alpha = 0, e.mouseSprite.anchor = new Point(1, -.5))),  // Setup tutorial hand/mouse
        "none" == projectInfo.lastBreaker ? Math.random() < .5 ? (e.turn = "p1", e.turnArrow1.frame = 1, e.turnArrow2.frame = 0) : (e.turn = "p2", e.turnArrow1.frame = 0, e.turnArrow2.frame = 1) : "p2" == projectInfo.lastBreaker ? (e.turn = "p1", e.turnArrow1.frame = 1, e.turnArrow2.frame = 0) : (e.turn = "p2", e.turnArrow1.frame = 0, e.turnArrow2.frame = 1),  // Xác định lượt chơi đầu (random hoặc dựa lastBreaker)
        function() {  // Setup skipText (click to skip tutorial)
            e.skipText = new Phaser.BitmapText(game, game.world.centerX, game.world.centerY + 230, "font3", "Click to skip", 64), e.guiCanvas.addChild(e.skipText), e.skipText.anchor.x = .5, e.skipText.anchor.y = .5, e.skipText.alpha = .8, projectInfo.tutorial && (e.skipText.visible = !0);
            e.skipText.visible = !1
        }(),
        function() {  // Setup tutorialText
            e.tutorialText = new Phaser.BitmapText(game, 0, 0, "font3", "Tutorial", 78), e.guiCanvas.addChild(e.tutorialText), e.tutorialText.anchor.x = .5, e.tutorialText.anchor.y = .5, e.tutorialText.alpha = .8, projectInfo.tutorial && (e.tutorialText.visible = !0);
            e.tutorialText.visible = !1
        }(), 
        resizeGame(), e.gameRunning = !0  // Gọi resize và set game running
},

// Hàm resume game: Ẩn popUpPanel, enable buttons, set gameRunning=true nếu không over
playState.resumeGame = function() {
    var e = this.gameInfo;  // Lấy gameInfo
    1 != e.gameOver && (window.famobi_analytics.trackScreen("SCREEN_LEVEL"), e.gameRunning = !0), e.popUpPanel.visible = !1, e.quitButtonPU.input.enabled = !1, e.replayButtonPU.input.enabled = !1, e.playButtonPU.input.enabled = !1, e.muteButtonPU.input.enabled = !1  // Ẩn popup và disable input buttons
},

// Shutdown: Destroy các canvas
playState.shutdown = function() {
    var e = this.gameInfo;  // Lấy gameInfo
    e.gameCanvas.destroy(), e.guiCanvas.destroy(), e.guiBaseCanvas.destroy(), e.cueBaseCanvas.destroy()
};