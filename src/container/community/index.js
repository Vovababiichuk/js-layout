import {
   createElement,
   createHeader,
   createHeaderTop,
   nav,
   imgCreate,
} from "../../script/layout";

const page = document.querySelector('.page');

const headerTop = createHeaderTop();

page.append(headerTop);

const headerTag = createElement('header', 'header');

const headerNav = createHeader();

page.append(headerTag);

const header = document.querySelector('.header');

header.append(headerNav);

const title = createElement('h1', 'title', 'Коммьюніті');

page.append(title);

const navBar = nav();

page.append(navBar);

const img = imgCreate('img', 'img', '/img/community/img1.jpg', 'img link telegram');

const navHtml = document.querySelector('.nav');

navHtml.insertAdjacentElement('afterend', img);

const subtitle = createElement('h2', 'subtitle', 'Що таке база знань?');

img.insertAdjacentElement('afterend', subtitle);

const text = createElement('p', 'text', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.')

subtitle.insertAdjacentElement('afterend', text);

const btn = createElement('button', 'btn', "Перейти до ком'юніті у Телеграм");

text.insertAdjacentElement('afterend', btn);