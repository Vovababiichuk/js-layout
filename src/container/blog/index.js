import { createElement, createHeader, createHeaderTop, createPost } from "../../script/layout";

const page = document.querySelector('.page');

const headerTop = createHeaderTop();

page.append(headerTop);

const headerTag = createElement('header', 'header');

const headerNav = createHeader();

page.append(headerTag);

const header = document.querySelector('.header');

header.append(headerNav);

const title = createElement('h1', 'title', 'Мій блог');

page.append(title)

const post = createPost()

page.append(post)