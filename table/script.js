// Billiard Table Configuration and Rendering System
// Author: MiniMax Agent
// Designed for professional 3-cushion billiard simulation

class BilliardTable {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Real world dimensions in meters
        this.realDimensions = {
            totalLength: 3.1,      // Total table length
            totalWidth: 1.68,      // Total table width
            playLength: 2.84,      // Playing surface length
            playWidth: 1.42,       // Playing surface width
            railWidth: 0.036,      // Rail width (36mm)
            frameThickness: 0.094, // Frame thickness (94mm)
            ballDiameter: 0.0615   // Ball diameter (61.5mm)
        };
        
        // Diamond specifications
        this.diamonds = {
            spacing: 0.3555,  // 358.8mm spacing
            outerMargin: 0.05, // 50mm from outer edge
            innerMargin: 0.044, // 44mm from inner edge
            longSide: 9,       // 9 diamonds on long side
            shortSide: 5       // 5 diamonds on short side
        };
        
        // Current theme
        this.currentTheme = 'umb-classic';
        
        // Themes configuration
        this.themes = {
            'umb-classic': {
                name: 'UMB Classic',
                woodColor: '#8B4513',
                woodGrain: '#D2691E',
                railColor: '#228B22',
                clothColor: '#228B22',
                diamondColor: '#C0C0C0'
            },
            'umb-modern': {
                name: 'UMB Modern',
                woodColor: '#2F4F4F',
                woodGrain: '#696969',
                railColor: '#4169E1',
                clothColor: '#4169E1',
                diamondColor: '#FFFFFF'
            },
            'pba-tournament': {
                name: 'PBA Tournament',
                woodColor: '#1E3A8A',
                woodGrain: '#3B82F6',
                railColor: '#DC2626',
                clothColor: '#DC2626',
                diamondColor: '#FBBF24'
            },
            'pba-classic': {
                name: 'PBA Classic',
                woodColor: '#059669',
                woodGrain: '#10B981',
                railColor: '#7C2D12',
                clothColor: '#7C2D12',
                diamondColor: '#F3F4F6'
            },
            'pba-premium': {
                name: 'PBA Premium',
                woodColor: '#7C2D12',
                woodGrain: '#EA580C',
                railColor: '#581C87',
                clothColor: '#581C87',
                diamondColor: '#FDE047'
            }
        };
        
        // Canvas scaling
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        
        // Ball positions and rotations
        this.balls = [
            {
                id: 'red',
                color: '#DC2626',
                x: 0.7,  // Position relative to play area
                y: 0.71,
                rotation: 0,
                dots: this.generateBallDots()
            },
            {
                id: 'yellow',
                color: '#FBBF24',
                x: 2.14,
                y: 0.71,
                rotation: 0,
                dots: this.generateBallDots()
            },
            {
                id: 'white',
                color: '#FFFFFF',
                x: 2.14,
                y: 0.5,
                rotation: 0,
                dots: this.generateBallDots()
            }
        ];
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.render();
        
        // Event listeners
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.render();
        });
        
        // Theme menu
        this.initThemeMenu();
    }
    
    resizeCanvas() {
        const iScale = 1;
        const container = this.canvas.parentElement;
        const containerWidth = container.clientWidth - 40;
        const containerHeight = container.clientHeight - 40;
        const canvasHeight = screen.width * iScale;
        const canvasWidth = screen.height * iScale;
        
        // Calculate scale based on aspect ratio
        const tableAspectRatio = this.realDimensions.totalLength / this.realDimensions.totalWidth;
        const containerAspectRatio = containerWidth / containerHeight;
        
        if (containerAspectRatio > tableAspectRatio) {
            // Container is wider, fit to height
            this.canvas.height = Math.min(containerHeight, canvasHeight);
            this.canvas.width = this.canvas.height * tableAspectRatio;
        } else {
            // Container is taller, fit to width
            this.canvas.width = Math.min(containerWidth, canvasWidth);
            this.canvas.height = this.canvas.width / tableAspectRatio;
        }
        
        // Calculate scale and offset for centering
        this.scale = this.canvas.width / this.realDimensions.totalLength;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    
    // Convert real world coordinates to canvas coordinates
    toCanvas(realX, realY) {
        return {
            x: (realX * this.scale) + this.offsetX,
            y: (realY * this.scale) + this.offsetY
        };
    }
    
    // Convert real world size to canvas size
    toCanvasSize(realSize) {
        return realSize * this.scale;
    }
    
    generateBallDots() {
        // Generate 4 dots positioned like real billiard balls
        const dots = [];
        const radius = 0.003; // 3mm dot radius
        const distanceFromCenter = 0.015; // 15mm from center
        
        for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI / 2) + (Math.PI / 4); // 45°, 135°, 225°, 315°
            dots.push({
                x: Math.cos(angle) * distanceFromCenter,
                y: Math.sin(angle) * distanceFromCenter,
                radius: radius
            });
        }
        
        return dots;
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw table components in correct order
        this.drawFrame();
        this.drawRails();
        this.drawCloth();
        this.drawDiamonds(); // Move diamonds after cloth but before balls
        this.drawBalls();
    }
    
    drawFrame() {
        const theme = this.themes[this.currentTheme];
        const ctx = this.ctx;
        
        // Outer frame with rounded corners
        const frameStart = this.toCanvas(0, 0);
        const frameSize = {
            width: this.toCanvasSize(this.realDimensions.totalLength),
            height: this.toCanvasSize(this.realDimensions.totalWidth)
        };
        
        const cornerRadius = this.toCanvasSize(0.05); // 20mm corner radius
        
        // Create wood grain pattern
        const gradient = ctx.createLinearGradient(0, 0, frameSize.width, frameSize.height);
        gradient.addColorStop(0, theme.woodColor);
        gradient.addColorStop(0.3, theme.woodGrain);
        gradient.addColorStop(0.5, theme.woodColor);
        gradient.addColorStop(0.8, theme.woodGrain);
        gradient.addColorStop(1, theme.woodColor);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(frameStart.x, frameStart.y, frameSize.width, frameSize.height, cornerRadius);
        ctx.fill();
        
        // Add wood texture
        this.addWoodTexture(frameStart.x, frameStart.y, frameSize.width, frameSize.height);
    }
    
    addWoodTexture(x, y, width, height) {
        const ctx = this.ctx;
        ctx.save();
        
        // Create wood grain lines
        ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 10; i++) {
            const lineY = y + (height / 10) * i;
            ctx.beginPath();
            ctx.moveTo(x, lineY);
            
            // Create wavy wood grain pattern
            for (let j = 0; j <= width; j += 20) {
                const waveY = lineY + Math.sin(j * 0.002) * 3;
                ctx.lineTo(x + j, waveY);
            }
            //ctx.stroke();
        }
        
        ctx.restore();
    }
    
    drawDiamonds() {
        const theme = this.themes[this.currentTheme];
        const ctx = this.ctx;
        
        // Make diamonds more visible
        ctx.fillStyle = '#FFFFFF'; // White circles
        ctx.strokeStyle = '#000000'; // Black border
        ctx.lineWidth = 2;
        
        const diamondSize = this.toCanvasSize(0.008); // 8mm radius for circles
        const diamondSpacing = this.toCanvasSize(this.diamonds.spacing); // 358.8mm spacing
        const outerMargin = this.toCanvasSize(this.diamonds.outerMargin); // 50mm from outer edge
        const innerMargin = this.toCanvasSize(this.diamonds.innerMargin); // 44mm from inner edge
        
        const frameThickness = this.toCanvasSize(this.realDimensions.frameThickness); // 94mm frame
        const totalWidth = this.toCanvasSize(this.realDimensions.totalLength);
        const totalHeight = this.toCanvasSize(this.realDimensions.totalWidth);
        
        // Long sides (top and bottom) - 9 diamonds each
        // Diamonds nằm trên mặt vân gỗ (frame), cách mép ngoài 50mm
        for (let i = 0; i < this.diamonds.longSide; i++) {
            // X position: bắt đầu từ frame trái + outer margin, cách đều 358.8mm
            const x = frameThickness + outerMargin + (i * diamondSpacing)-5 ;
            
            // Top side - Y ở giữa frame trên
            const topY = frameThickness / 2;
            this.drawCircleDiamond(x, topY, diamondSize);
            
            // Bottom side - Y ở giữa frame dưới
            const bottomY = totalHeight - (frameThickness / 2);
            this.drawCircleDiamond(x, bottomY, diamondSize);

            // Vẽ markers 
            var middleY;
            if (i==2){
                middleY = (totalHeight / 2) - (diamondSpacing / 2);
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
                middleY = totalHeight / 2;
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
                middleY = (totalHeight / 2) + (diamondSpacing / 2);
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
            }
            if (i==4){
                middleY = totalHeight / 2;
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
            }
            if (i==6){
                middleY = (totalHeight / 2) - (diamondSpacing / 2);
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
                middleY = totalHeight / 2;
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
                middleY = (totalHeight / 2) + (diamondSpacing / 2);
                this.drawCircleDiamond(x, middleY, diamondSize / 2);
            }
        }
        

        // Short sides (left and right) - 5 diamonds each  
        // Diamonds nằm trên mặt vân gỗ (frame), cách mép ngoài 50mm
        for (let i = 0; i < this.diamonds.shortSide; i++) {
            // Y position: bắt đầu từ frame trên + outer margin, cách đều 358.8mm
            const y = frameThickness + outerMargin + (i * diamondSpacing)-5;
            
            // Left side - X ở giữa frame trái
            const leftX = frameThickness / 2;
            this.drawCircleDiamond(leftX, y, diamondSize);
            
            // Right side - X ở giữa frame phải  
            const rightX = totalWidth - (frameThickness / 2);
            this.drawCircleDiamond(rightX, y, diamondSize);
        }
    }
    
    drawCircleDiamond(centerX, centerY, radius) {
        const ctx = this.ctx;
        
        // Draw circle diamond (not square)
        ctx.fillStyle = '#C0C0C0'; // Silver/gray color like real diamonds
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
        
        // Add border for visibility
        ctx.strokeStyle = '#808080'; // Darker gray border
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Add inner highlight for 3D effect
        ctx.fillStyle = '#E0E0E0';
        ctx.beginPath();
        ctx.arc(centerX - radius*0.3, centerY - radius*0.3, radius*0.4, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    drawRails() {
        const theme = this.themes[this.currentTheme];
        const ctx = this.ctx;
        
        // Calculate rail positions
        const frameThickness = this.toCanvasSize(this.realDimensions.frameThickness);
        const railWidth = this.toCanvasSize(this.realDimensions.railWidth);
        
        // Rail gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, railWidth);
        gradient.addColorStop(0, theme.railColor);
        gradient.addColorStop(0.5, this.lightenColor(theme.railColor, 20));
        gradient.addColorStop(1, this.darkenColor(theme.railColor, 20));
        
        ctx.fillStyle = gradient;
        
        // Draw each rail as individual trapezoids that fit together at 45-degree corners
        this.drawTrapezoidalRail('top', theme);
        this.drawTrapezoidalRail('bottom', theme);
        this.drawTrapezoidalRail('left', theme);
        this.drawTrapezoidalRail('right', theme);
    }
    
    drawTrapezoidalRail(position, theme) {
        const ctx = this.ctx;
        const frameThickness = this.toCanvasSize(this.realDimensions.frameThickness);
        const railWidth = this.toCanvasSize(this.realDimensions.railWidth);
        const totalWidth = this.toCanvasSize(this.realDimensions.totalLength);
        const totalHeight = this.toCanvasSize(this.realDimensions.totalWidth);
        const clothStartX = frameThickness + railWidth;
        const clothStartY = frameThickness + railWidth;
        const clothWidth = this.toCanvasSize(this.realDimensions.playLength);
        const clothHeight = this.toCanvasSize(this.realDimensions.playWidth);
        
        // Rail gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, railWidth);
        gradient.addColorStop(0, theme.railColor);
        gradient.addColorStop(0.5, this.lightenColor(theme.railColor, 20));
        gradient.addColorStop(1, this.darkenColor(theme.railColor, 20));
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        
        if (position === 'top') {
            // Top rail - trapezoid với cạnh trong ngắn hơn
            ctx.moveTo(frameThickness, frameThickness); // Top-left outer
            ctx.lineTo(totalWidth - frameThickness, frameThickness); // Top-right outer
            ctx.lineTo(clothStartX + clothWidth, clothStartY); // Top-right inner
            ctx.lineTo(clothStartX, clothStartY); // Top-left inner
            ctx.closePath();
        } else if (position === 'bottom') {
            // Bottom rail - trapezoid với cạnh trong ngắn hơn
            ctx.moveTo(frameThickness, totalHeight - frameThickness); // Bottom-left outer
            ctx.lineTo(clothStartX, clothStartY + clothHeight); // Bottom-left inner
            ctx.lineTo(clothStartX + clothWidth, clothStartY + clothHeight); // Bottom-right inner
            ctx.lineTo(totalWidth - frameThickness, totalHeight - frameThickness); // Bottom-right outer
            ctx.closePath();
        } else if (position === 'left') {
            // Left rail - trapezoid với cạnh trong ngắn hơn
            ctx.moveTo(frameThickness, frameThickness); // Top-left outer
            ctx.lineTo(clothStartX, clothStartY); // Top-left inner
            ctx.lineTo(clothStartX, clothStartY + clothHeight); // Bottom-left inner
            ctx.lineTo(frameThickness, totalHeight - frameThickness); // Bottom-left outer
            ctx.closePath();
        } else if (position === 'right') {
            // Right rail - trapezoid với cạnh trong ngắn hơn
            ctx.moveTo(totalWidth - frameThickness, frameThickness); // Top-right outer
            ctx.lineTo(totalWidth - frameThickness, totalHeight - frameThickness); // Bottom-right outer
            ctx.lineTo(clothStartX + clothWidth, clothStartY + clothHeight); // Bottom-right inner
            ctx.lineTo(clothStartX + clothWidth, clothStartY); // Top-right inner
            ctx.closePath();
        }
        
        ctx.fill();
        
        // Add highlight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Add shadow for depth
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }
    
    drawCloth() {
        const theme = this.themes[this.currentTheme];
        const ctx = this.ctx;
        
        // Calculate cloth area (playing surface)
        const clothStart = {
            x: this.toCanvasSize(this.realDimensions.frameThickness + this.realDimensions.railWidth),
            y: this.toCanvasSize(this.realDimensions.frameThickness + this.realDimensions.railWidth)
        };
        
        const clothSize = {
            width: this.toCanvasSize(this.realDimensions.playLength),
            height: this.toCanvasSize(this.realDimensions.playWidth)
        };
        
        // Cloth gradient for depth
        const gradient = ctx.createRadialGradient(
            clothStart.x + clothSize.width/2, clothStart.y + clothSize.height/2, 0,
            clothStart.x + clothSize.width/2, clothStart.y + clothSize.height/2, 
            Math.max(clothSize.width, clothSize.height)/2
        );
        gradient.addColorStop(0, this.lightenColor(theme.clothColor, 10));
        gradient.addColorStop(1, theme.clothColor);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(clothStart.x, clothStart.y, clothSize.width, clothSize.height);
        
        // Add subtle cloth texture
        this.addClothTexture(clothStart.x, clothStart.y, clothSize.width, clothSize.height);
    }
    
    addClothTexture(x, y, width, height) {
        const ctx = this.ctx;
        ctx.save();
        
        // Create subtle cloth pattern
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 0.5;
        
        // Horizontal lines
        for (let i = 0; i < height; i += 4) {
            ctx.beginPath();
            ctx.moveTo(x, y + i);
            ctx.lineTo(x + width, y + i);
            //ctx.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i < width; i += 4) {
            ctx.beginPath();
            ctx.moveTo(x + i, y);
            ctx.lineTo(x + i, y + height);
            //ctx.stroke();
        }
        
        ctx.restore();
    }
    
    drawBalls() {
        this.balls.forEach(ball => {
            this.drawBall(ball);
        });
    }
    
    drawBall(ball) {
        const ctx = this.ctx;
        
        // Calculate ball position on cloth
        const clothStart = {
            x: this.toCanvasSize(this.realDimensions.frameThickness + this.realDimensions.railWidth),
            y: this.toCanvasSize(this.realDimensions.frameThickness + this.realDimensions.railWidth)
        };
        
        const ballPos = {
            x: clothStart.x + this.toCanvasSize(ball.x),
            y: clothStart.y + this.toCanvasSize(ball.y)
        };
        
        const ballRadius = this.toCanvasSize(this.realDimensions.ballDiameter / 2);
        
        ctx.save();
        
        // 3D ball effect with gradient
        const gradient = ctx.createRadialGradient(
            ballPos.x - ballRadius * 0.3, ballPos.y - ballRadius * 0.3, 0,
            ballPos.x, ballPos.y, ballRadius
        );
        
        if (ball.color === '#FFFFFF') {
            gradient.addColorStop(0, '#FFFFFF');
            gradient.addColorStop(0.7, '#F0F0F0');
            gradient.addColorStop(1, '#D0D0D0');
        } else {
            gradient.addColorStop(0, this.lightenColor(ball.color, 40));
            gradient.addColorStop(0.7, ball.color);
            gradient.addColorStop(1, this.darkenColor(ball.color, 30));
        }
        
        // Draw ball shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(ballPos.x + 2, ballPos.y + 2, ballRadius * 0.8, ballRadius * 0.4, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw ball
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ballPos.x, ballPos.y, ballRadius, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw ball outline
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw dots with rotation
        this.drawBallDots(ballPos.x, ballPos.y, ballRadius, ball.rotation, ball.dots, ball.color);
        
        // Highlight
        const highlightGradient = ctx.createRadialGradient(
            ballPos.x - ballRadius * 0.4, ballPos.y - ballRadius * 0.4, 0,
            ballPos.x - ballRadius * 0.4, ballPos.y - ballRadius * 0.4, ballRadius * 0.6
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(ballPos.x - ballRadius * 0.3, ballPos.y - ballRadius * 0.3, ballRadius * 0.4, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.restore();
    }
    
    drawBallDots(centerX, centerY, ballRadius, rotation, dots, ballColor) {
        const ctx = this.ctx;
        
        dots.forEach(dot => {
            // Apply rotation
            const rotatedX = dot.x * Math.cos(rotation) - dot.y * Math.sin(rotation);
            const rotatedY = dot.x * Math.sin(rotation) + dot.y * Math.cos(rotation);
            
            const dotX = centerX + this.toCanvasSize(rotatedX);
            const dotY = centerY + this.toCanvasSize(rotatedY);
            const dotRadius = this.toCanvasSize(dot.radius);
            
            // Dot color based on ball color
            let dotColor = ballColor === '#FFFFFF' ? '#000000' : '#FFFFFF';
            
            ctx.fillStyle = dotColor;
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
            ctx.fill();
            
            // Dot outline
            ctx.strokeStyle = ballColor === '#FFFFFF' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
        });
    }
    
    // Utility functions for color manipulation
    lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
    
    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
            (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
            (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
    }
    
    initThemeMenu() {
        const themeToggle = document.getElementById('themeToggle');
        const themeOptions = document.getElementById('themeOptions');
        const themeMenu = document.querySelector('.theme-menu');
        const currentThemeElement = document.getElementById('currentTheme');
        
        // Toggle menu
        themeToggle.addEventListener('click', () => {
            themeMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!themeMenu.contains(e.target)) {
                themeMenu.classList.remove('active');
            }
        });
        
        // Theme option selection
        const themeOptionElements = document.querySelectorAll('.theme-option');
        themeOptionElements.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                this.setTheme(theme);
                
                // Update active state
                themeOptionElements.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update current theme display
                currentThemeElement.textContent = this.themes[theme].name;
                
                // Close menu
                themeMenu.classList.remove('active');
            });
        });
        
        // Set initial active theme
        const defaultOption = document.querySelector(`[data-theme="${this.currentTheme}"]`);
        if (defaultOption) {
            defaultOption.classList.add('active');
        }
        //currentThemeElement.textContent = this.themes[this.currentTheme].name;
    }
    
    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.render();
        }
    }
    
    // Animation methods for future game development
    animateBallRotation(ballId, deltaRotation) {
        const ball = this.balls.find(b => b.id === ballId);
        if (ball) {
            ball.rotation += deltaRotation;
            this.render();
        }
    }
    
    moveBall(ballId, newX, newY) {
        const ball = this.balls.find(b => b.id === ballId);
        if (ball) {
            ball.x = newX;
            ball.y = newY;
            this.render();
        }
    }
    
    // Get ball positions for collision detection
    getBallPositions() {
        return this.balls.map(ball => ({
            id: ball.id,
            x: ball.x,
            y: ball.y,
            radius: this.realDimensions.ballDiameter / 2
        }));
    }
    
    // Get table boundaries for physics calculations
    getTableBoundaries() {
        return {
            left: 0,
            right: this.realDimensions.playLength,
            top: 0,
            bottom: this.realDimensions.playWidth,
            cushionThickness: this.realDimensions.railWidth
        };
    }
}

// Initialize the billiard table when page loads
document.addEventListener('DOMContentLoaded', () => {
    const table = new BilliardTable('billiardTable');
    
    // Make table globally accessible for future game development
    window.billiardTable = table;
    
    // Demo animation - rotate balls slowly
    setInterval(() => {
        table.balls.forEach(ball => {
            ball.rotation += 0.02;
        });
        table.render();
    }, 50);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BilliardTable;
}