import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    logoTween;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        
        const pw = (percent) => this.scale.width * (percent / 100);
        const ph = (percent) => this.scale.height * (percent / 100);

        const rectRight = this.add.rectangle(pw(10), ph(50), pw(90), 40, 0x000000 ).setOrigin(0, 0);
        const rectBot = this.add.rectangle(pw(10), ph(50), 40, ph(50), 0x000000 ).setOrigin(0, 0);

        this.add.image(pw(50), ph(45), 'title').setScale(0.5);

        const blackRect = this.add.layer();

        blackRect.add(rectRight, rectBot);



        // this.add.image(512, 384, 'background');

        // this.logo = this.add.image(512, 300, 'logo').setDepth(100);

        // this.add.text(512, 460, 'У Fezwer а желание есть одно, линсея трахнуть дано ', {
        //     fontFamily: 'Arial Black', fontSize: 32, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setDepth(100).setOrigin(0.5);
        
        // EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        // if (this.logoTween)
        // {
        //     this.logoTween.stop();
        //     this.logoTween = null;
        // }

        // this.scene.start('Game');
    }

}
