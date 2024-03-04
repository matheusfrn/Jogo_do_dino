class final extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({
            key: "final",
        });
    }

    preload() {
        this.load.image('background', 'assets/vitoria.png');
    }

    create() {
        this.add.image(400, 300, 'background'); // Adicionando a imagem de vitória no centro da tela
    }

    update() {
    }
}

