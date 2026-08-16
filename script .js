const questions = [
    {
        question: "Salut chéri, tu veux partir en date avec moi ? 🤗",
        answers: [
            { text: "Oui", reaction: "Je sais que jsuis bonne.", next: 1 },
            { text: "Non", special: true }
        ]
    },

    {
        question: "Bon maintenant que t’es coincé avec moi… tu comptes rester ? 🥰",
        answers: [
            { text: "Oui", next: 2 },
            { text: "Évidemment", next: 2 }
        ]
    },

    {
        question: "Qui est le plus heureux d’être ici ? 👀",
        answers: [
            { text: "Moi", next: 3 },
            { text: "Toi", next: 3 }
        ]
    },

    {
        question: "Tu m'aimes comment ?",
        answers: [
            { text: "À la folie", next: 4 },
            { text: "Passionnément", next: 4 },
            { text: "J'veux te bouffer sah", next: 4 }
        ]
    },

    {
        question: "Tu préfères te marier avec moi ou avoir une aventure d'un soir ?",
        answers: [
            { text: "Mariage", next: 5 },
            { text: "Aventure", next: 5 }
        ]
    },

    {
        question: "Tu préfères quoi chez moi ?",
        answers: [
            { text: "Ta personnalité", next: 6 },
            { text: "Ta façon de penser", next: 6 },
            { text: "Ton physique", next: 6 },
            { text: "Ton humour", next: 6 }
        ]
    },

    {
        question: "Tu préférais quoi ?",
        answers: [
            { text: "Me faire un câlin", next: 7 },
            { text: "Bisous", next: 7 }
        ]
    },

    {
        question: "C'est qui la plus belle fille de ta vie ?",
        answers: [
            { text: "Jonah-Lee", next: 8 },
            { text: "Jonah", next: 8 },
            { text: "Jojo", next: 8 },
            { text: "Djo", next: 8 },
            { text: "La nageuse de kk", next: 8 }
        ]
    },

    {
        question: "En sah, tu préfères quand je suis vanneuse avec toi ou affectueuse même si c'est rare ?",
        answers: [
            { text: "Vanneuse", next: 9 },
            { text: "Affectueuse", next: 9 }
        ]
    },

    {
        question: "Sah j'ai plus d'idée déjà qu'avant c'était d'la d.",
        answers: [
            { text: "Non bb wsh c'était incroyable", next: 10 },
            { text: "Oui (Nan je rigole)", next: 10 }
        ]
    },

    {
        question: "Tu m'inviteras à ton mariage ? 🥰",
        answers: [
            { text: "Oui", next: 11 },
            { text: "Logique ???", next: 11 }
        ]
    },

    {
        question: "Tu voudras être témoin à mon mariage ?",
        answers: [
            { text: "Non", next: 12 },
            { text: "Oui", next: 12 }
        ]
    },

    {
        question: "Tu penses que je te casse les couilles ?",
        answers: [
            { text: "Oui j'suis un connard", next: 13 },
            { text: "Oui logique", next: 13 },
            { text: "Oui jsuis désolé mommy", next: 13 }
        ]
    },

    {
        question: "T'as kiffé ou pas mes questions ?",
        answers: [
            { text: "Sah vas te faire Jonah", next: 14 },
            { text: "J'ai tellement kiffé que j'ai tout lâché sur l'écran", next: 14 }
        ]
    },

    {
        question: "T'as kiffé notre petit date ?🥰",
        answers: [
            { text: "J'ai été forcé", final: true },
            { text: "C'est toi que je kiffe", final: true },
            { text: "Faut se refaire ça 😛", final: true }
        ]
    }
];

const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const response = document.getElementById("response");
const progress = document.getElementById("progress");
const card = document.getElementById("card");

function showQuestion(index) {
    const data = questions[index];

    progress.textContent = "Question " + (index + 1) + " / " + questions.length;
    question.textContent = data.question;
    buttons.innerHTML = "";
    response.textContent = "";

    data.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer.text;

        button.onclick = function () {

            if (answer.special) {
                response.textContent = "Appuies sur oui sale con";

                buttons.innerHTML = "";

                const yes1 = document.createElement("button");
                yes1.textContent = "Oui";

                const yes2 = document.createElement("button");
                yes2.textContent = "Oui";

                yes1.onclick = () => showQuestion(1);
                yes2.onclick = () => showQuestion(1);

                buttons.appendChild(yes1);
                buttons.appendChild(yes2);

                return;
            }

            if (answer.reaction) {
                response.textContent = answer.reaction;
            }

            setTimeout(() => {
                if (answer.final) {
                    showFinal();
                } else {
                    showQuestion(answer.next);
                }
            }, 450);
        };

        buttons.appendChild(button);
    });
}

function showFinal() {
    progress.textContent = "";
    question.textContent = "DATE RÉUSSIE ❤️";
    buttons.innerHTML = "";

    response.innerHTML = `
        <div class="final-text">
            Merci d'avoir participé à ce magnifique date avec moi.<br><br>
            Tu as officiellement survécu à mes questions.
        </div>
    `;

    const restart = document.createElement("button");
    restart.textContent = "Recommencer la date";
    restart.className = "restart";

    restart.onclick = function () {
        showQuestion(0);
    };

    buttons.appendChild(restart);
}

showQuestion(0);