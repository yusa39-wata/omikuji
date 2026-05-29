// script.js
const unseiList = [
    { name: '大吉', weight: 10 },
    { name: '吉',   weight: 10 },
    { name: '中吉', weight: 20 },
    { name: '小吉', weight: 20 },
    { name: '末吉', weight: 20 },
    { name: '凶',   weight: 10 },
    { name: '大凶', weight: 10 }
];

const details = {
    negai: [
        "一歩ずつ進めば必ず叶うでしょう",
        "周囲の助けを得て予想以上に早く成就します",
        "強い信念を持ち続けることが成功の鍵です",
        "今は焦らず、準備を整える時期です",
        "思わぬ形で願いが届く兆しがあります"
    ],
    kenko: [
        "気力が充実し、健やかに過ごせる一年です",
        "夜更かしに注意。規則正しい生活を心がけて",
        "適度な運動を取り入れると運気がさらに向上します",
        "疲れが慢性的。休息を最優先に",
        "暴飲暴食を控え、胃腸を労わりましょう"
    ],
    renai: [
        "素晴らしい出会いの予感。自分らしく進んで吉",
        "相手を思いやる心が、二人の絆を深めます",
        "じっくり時間をかけることで実を結びます",
        "言葉のすれ違いに注意。誠実な対話を",
        "焦りは禁物。まずは自分磨きに専念しましょう"
    ],
    shigoto: [
        "これまでの努力が認められ、大きな成果が出ます",
        "新しい挑戦がスキルアップに繋がる好機です",
        "チームワークを意識するとスムーズに進みます",
        "計画を細かく見直すことで、ミスを未然に防げます",
        "一歩引いて全体を見渡すと、新しいアイデアが湧きます"
    ]
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getWeightedUnsei() {
    const totalWeight = unseiList.reduce((sum, item) => sum + item.weight, 0);
    let randomNum = Math.floor(Math.random() * totalWeight);

    for (const item of unseiList) {
        if (randomNum < item.weight) {
            return item.name;
        }
        randomNum -= item.weight;
    }
}

function drawOmikuji() {
    const box = document.getElementById('omikuji-box');
    const drawBtn = document.getElementById('draw-btn');

    drawBtn.disabled = true;
    box.classList.add('shake');

    setTimeout(() => {
        box.classList.remove('shake');
        drawBtn.disabled = false;

        document.getElementById('result-unsei').innerText = getWeightedUnsei();
        document.getElementById('res-negai').innerText = getRandomElement(details.negai);
        document.getElementById('res-kenko').innerText = getRandomElement(details.kenko);
        document.getElementById('res-renai').innerText = getRandomElement(details.renai);
        document.getElementById('res-shigoto').innerText = getRandomElement(details.shigoto);

        document.getElementById('setup-view').classList.add('hidden');
        document.getElementById('result-view').style.display = 'block';
    }, 1000);
}

function resetOmikuji() {
    document.getElementById('setup-view').classList.remove('hidden');
    document.getElementById('result-view').style.display = 'none';
}