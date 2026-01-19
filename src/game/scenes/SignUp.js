import { AUTO, Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class SignUp extends Scene {
    constructor() {
        super('SignUp');
    }

    create() {
        EventBus.emit('current-scene-ready', this);

        const pw = (p) => this.scale.width * p / 100;
        const ph = (p) => this.scale.height * p / 100;


        this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            'sign_in' 
        ).setDisplaySize(this.scale.width, this.scale.height);

        
        const modalWidth = 400;
        const modalHeight = 300;
        const modalX = this.scale.width / 2;
        const modalY = this.scale.height / 2;
        const radius = 20;

        
        const glowColors = [0xcda0d0, 0xcda0d0, 0xcda0d0];
        const glowAlpha = [0.2, 0.15, 0.1];
        const glowOffset = [20, 40, 60]; 

        for (let i = 0; i < glowColors.length; i++) {
            const g = this.add.graphics();
            g.fillStyle(glowColors[i], glowAlpha[i]);
            g.fillRoundedRect(
                modalX - (modalWidth + glowOffset[i]) / 2,
                modalY - (modalHeight + glowOffset[i]) / 2,
                modalWidth + glowOffset[i],
                modalHeight + glowOffset[i],
                radius + glowOffset[i]/2
            );
        }

        
        const modalBg = this.add.graphics();
        modalBg.fillStyle(0x191919, 1);
        modalBg.fillRoundedRect(
            modalX - modalWidth / 2,
            modalY - modalHeight / 2,
            modalWidth,
            modalHeight,
            radius
        );


        const modalTitle = this.add.text(
            modalX,
            modalY - modalHeight / 2 + 30,
            'log in or sign up',
            { font: '700 16px "Bezier_Sans"', color: '#cccccc' }
        ).setOrigin(0.5);

        
        const closeBtn = this.add.text(
            modalX + modalWidth / 2 - 30,
            modalY - modalHeight / 2 + 30,
            'x',
            { font: '16px Arial', color: '#cccccc' }
        ).setOrigin(0.5).setInteractive({ useHandCursor: true });

        closeBtn.on('pointerup', () => {
            this.scene.start('SignIn'); 
        });

        
        const hzfText = this.add.text(
            modalX,
            modalY - 50,
            'HZF',
            { font: '700 70px "Bezier_Sans"', color: '#ffffff' }
        ).setOrigin(0.5);

        
        const btnWidth = 350;
        const btnHeight = 45;
        const telegramPadding = 30; 

        const telegramY = modalY + 40;

        
        const telegramBg = this.add.graphics();
        telegramBg.fillStyle(0x191919, 1);
        telegramBg.fillRoundedRect(modalX - btnWidth / 2, telegramY - btnHeight / 2, btnWidth, btnHeight, radius);
        
        
        const icon = this.add.image(
        modalX - btnWidth / 2 + telegramPadding + 10, 
        telegramY,
        'tg' 
        ).setOrigin(0.5).setDisplaySize(38, 35); 

        
        const telegramBorder = this.add.graphics();
        telegramBorder.lineStyle(1, 0xcccccc, 1); 
        telegramBorder.strokeRoundedRect(modalX - btnWidth / 2, telegramY - btnHeight / 2, btnWidth, btnHeight, radius);

        
        const telegramText = this.add.text(icon.x + 10 + 15, 
        telegramY,
        'telegram', {
            font: '700 18px "Bezier_Sans"',
            color: '#cccccc'
        }).setOrigin(0, 0.5);

        
        const telegramHit = this.add.zone(modalX, telegramY, btnWidth, btnHeight)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });


        telegramHit.on('pointerup', () => {
            this.scene.start('Game'); 
        });

        
        const moreY = telegramY + 60; 
        const moreWidth = 350;
        const moreHeight = 45;
        const morePadding = 30; 

        
        const moreBg = this.add.graphics();
        moreBg.fillStyle(0x191919, 1); 
        moreBg.fillRoundedRect(modalX - moreWidth / 2, moreY - moreHeight / 2, moreWidth, moreHeight);

        
        const moreBorder = this.add.graphics();
        moreBorder.lineStyle(1, 0xcccccc, 1); 
        moreBorder.strokeRoundedRect(modalX - moreWidth / 2, moreY - moreHeight / 2, moreWidth, moreHeight);

        
        const moreIcon = this.add.image(
            modalX - moreWidth / 2 + morePadding + 10, 
            moreY,
            'us' 
        ).setOrigin(0.5).setDisplaySize(42, 35); 

        
        const moreText = this.add.text(
            moreIcon.x + 10 + 15, 
            moreY,
            'more options',
            {
                font: '700 18px "Bezier_Sans"',
                color: '#cccccc'
            }
        ).setOrigin(0, 0.5); 

        
        const moreHit = this.add.zone(modalX, moreY, moreWidth, moreHeight)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        moreHit.on('pointerup', () => {
            this.scene.start('Game'); 
        });


    }
}
