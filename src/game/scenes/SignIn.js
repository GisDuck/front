import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class SignIn extends Scene {
    constructor() {
        super('SignIn');
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

        
        const btnWidth = 320;
        const btnHeight = 70;
        const radius = 18;

        const btnX = pw(50);
        const btnY = ph(45);

        const buttonBg = this.add.graphics();
        buttonBg.fillStyle(0x000000, 1);
        buttonBg.fillRoundedRect(
            btnX - btnWidth / 2,
            btnY - btnHeight / 2,
            btnWidth,
            btnHeight,
            radius
        );

        const signInText = this.add.text(
            btnX,
            btnY,
            'sign in to play',
            {
                font: '700 28px "Montserrat_Alternates"',
                color: '#ffffff'
            }
        ).setOrigin(0.5);

        
        const hitArea = this.add.zone(btnX, btnY, btnWidth, btnHeight)
            .setInteractive({ useHandCursor: true });

        hitArea.on('pointerup', () => {
            console.log('Sign In clicked');
        });

        hitArea.on('pointerover', () => {
            buttonBg.clear();
            buttonBg.fillStyle(0x222222, 1);
            buttonBg.fillRoundedRect(
                btnX - btnWidth / 2,
                btnY - btnHeight / 2,
                btnWidth,
                btnHeight,
                radius
            );
        });

        hitArea.on('pointerout', () => {
            buttonBg.clear();
            buttonBg.fillStyle(0x000000, 1);
            buttonBg.fillRoundedRect(
                btnX - btnWidth / 2,
                btnY - btnHeight / 2,
                btnWidth,
                btnHeight,
                radius
            );
        });

        hitArea.on('pointerup', () => {
            this.scene.start('SignUp'); 
        });

        const backText = this.add.text(
            btnX,
            btnY + btnHeight / 2 + 25, 
            'back',
            {
                font: '400 20px "Bezier_Sans"',
                color: '#000000'
            }
        )
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        backText.on('pointerup', () => {
            this.scene.start('MainMenu');
        });
    }
}
