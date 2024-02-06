/* Variables */
const noun1 = document.getElementById('noun1');
const verb = document.getElementById('verb');
const adjective = document.getElementById('adjective');
const noun2 = document.getElementById('noun2');
const setting = document.getElementById('setting');

const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

const playback = document.getElementById('playback');
const random = document.getElementById('random');
const story = document.getElementById('story');

const first = ['The turkey','Mom','Dad','The Dog','My teacher','The Elephant','The Cat'];
const second = ['sat on','ate','danced with','saw',"doesn't like",'kissed'];
const third = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
const fourth = ['goat','monkey','fish','cow','frog','bug','worm'];
const fifth = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

let noun1index = 0;
let verbindex = 0;
let adjectiveindex = 0;
let noun2index = 0;
let settingindex = 0;

/* Functions */
function noun1_on_click() {
    choosenNoun1.textContent = first[noun1index];
    noun1index = (noun1index + 1) % first.length;
}

function verb_on_click() {
    choosenVerb.textContent = second[verbindex];
    verbindex = (verbindex + 1) % second.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = third[adjectiveindex];
    adjectiveindex = (adjectiveindex + 1) % third.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = fourth[noun2index];
    noun2index = (noun2index + 1) % fourth.length;
}

function setting_on_click() {
    choosenSetting.textContent = fifth[settingindex];
    settingindex = (settingindex + 1) % fifth.length;
}

function playback_on_click() {
    const sentence = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    story.textContent = sentence;
}

function random_on_click() {
    const randomIndex = Math.floor(Math.random() * first.length);
    const noun1Word = first[randomIndex];
    const verbWord = second[randomIndex];
    const adjectiveWord = third[randomIndex];
    const noun2Word = fourth[randomIndex];
    const settingWord = fifth[randomIndex];
    
    const sentence = `${noun1Word} ${verbWord} ${adjectiveWord} ${noun2Word} ${settingWord}`;
    story.textContent = sentence;
}

/* Event Listeners */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);

