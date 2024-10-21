let jatekos = {
    eletero: 0,
    tamadasi_kepesseg: 0,
    vedettseg: 0,
    szerencse: 0,
    sebzes: 3,
};

let ellenfel = {
    eletero: 10,
    tamadasi_kepesseg: 8,
    vedettseg: 8,
    szerencse: 7,
    sebzes: 1,
};

// dobj kockaval fuggveny
function dobas(db, plusz) {
    let ertek = 0;

    //kocka dobas
    for (let i = 0; i < db; i++) {
        ertek += Math.floor(Math.random() * 6) + 1;
    }

    return ertek + plusz;
};

// adatok betoltese
function init() {
    jatekos.eletero = dobas(4, 10);
    jatekos.tamadasi_kepesseg = dobas(2, 6);
    jatekos.vedettseg = dobas(2, 6);
    jatekos.szerencse = dobas(1, 6);
    valaszt();
};


let anim_me = document.getElementById('gif-me')
let anim_en = document.getElementById('gif-enemy')

function valaszt() {
    if (ellenor(jatekos, ellenfel)) {
        let sajat_hely = dobas(1, 0);
        let ellen_hely = dobas(1, 0);

        if (sajat_hely >= ellen_hely) {

            anim_me.src = './anim/me_f.gif'
            setTimeout(harc, 3000, jatekos, ellenfel)
            if (ellenor(jatekos, ellenfel)) {
                setTimeout(harc(ellenfel, jatekos), 3000)
                anim_en.src = "./anim/enemy.gif"
            }
            valaszt();
        }
        else {
            anim_en.src = "./anim/enemy_f.gif"
            setTimeout(harc(ellenfel, jatekos), 3000)
            if (ellenor(jatekos, ellenfel)) {
                setTimeout(harc(jatekos, ellenfel), 3000)
            }
            valaszt()
        };

    }
};

function harc(tamado, vedekezo) {
    let tamadoero = dobas(2, 0) + tamado.tamadasi_kepesseg;
    if (tamadoero < vedekezo.vedettseg) {
    }
    else if (tamadoero >= 2 * vedekezo.vedettseg) {
        vedekezo.eletero -= tamado.sebzes * 2;
    }
    else {
        vedekezo.eletero -= tamado.sebzes;
    };
    kiir()
};

function kiir() {
    console.log("Jatekos elete: " + jatekos.eletero);
    console.log("Ellenfel elete:" + ellenfel.eletero);
    console.log("**********************************");
};

function ellenor(egyik, masik) {
    if (egyik.eletero < 1 || masik.eletero < 1) {
        return false;
    }
    else {
        return true;
    }
};

function change_pix() {

}