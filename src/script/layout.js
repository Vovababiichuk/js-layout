export const createElement = (tag, className, text) => {
   const elem = document.createElement(tag)

   if (className) {
      elem.className = className
   }

   if (text) {
      elem.innerHTML = text
   }

   return elem
}

const HEADER_BUTTON_LIST = [
   {
      width: 24,
      height: 24,
      src: '/img/iphone/arrow-back.svg',
   },
   {
      width: 24,
      height: 24,
      src: '/img/iphone/avatar.png',
   },
]

export const createHeader = () => {
   //створюєм тег header з класом header
   const headerNav = createElement('div', 'header-nav')

   // в params нам приходить (width, height, src)
   HEADER_BUTTON_LIST.forEach((params) => {
      // створюєм кнопку
      const button = createElement('button', 'button')
      // створюєм картинку
      const img = createElement('img')
      // Через Object.entries(params) створюєм масив який має в середині список масивів з ключем і значенням
      Object.entries(params).forEach(([key, value]) => {
         img[key] = value
      })

      button.insertAdjacentElement('afterbegin', img)
      headerNav.insertAdjacentElement('beforeend', button)
   })

   return headerNav
}

export const createHeaderTop = () => {
   const div = createElement('div', 'header-top')
   const timeSpan = createElement('span', 'time')
   const statusSpan = createElement('span', 'status')

   div.append(timeSpan)
   div.append(statusSpan)

   return div
}

const POST_LIST = [
   {
      category: [{ text: 'Важливо' }, { new: 'Нова' }],
      info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
      isColorText: false,
   },
   {
      category: [{ text: 'Важливо' }],
      info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
      isColorText: true,
   },
   {
      category: [{ text: 'Важливо' }, { new: 'Нова' }],
      info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
      isColorText: false,
   },
]

export const createPost = () => {
   const postList = createElement('main', 'post-cards')

   POST_LIST.forEach((postData) => {
      const postCard = createElement('div', 'post-card')
      const postcardInfo = createElement(
         'div',
         'post-card__info',
      )

      const text = createElement(
         'p',
         postData.isColorText
            ? 'post-card__text color-text'
            : 'post-card__text',
         postData.info,
      )

      postCard.append(postcardInfo, text)

      const badges = createElement('div', 'badges')

      const date = createElement('span', 'date')

      postcardInfo.append(badges, date)

      const badgeImportant = createElement(
         'span',
         'badge__important',
         postData.category[0].text,
      )

      const badgeNewValue = postData.category.find(
         (item) => item.new,
      )?.new

      const badgeNew = badgeNewValue
         ? createElement('span', 'badge__new', badgeNewValue)
         : null

      if (badgeNew) {
         badges.append(badgeImportant, badgeNew)
      } else {
         badges.append(badgeImportant)
      }

      postList.append(postCard)
   })

   return postList
}

const NAV_MENU = [
   {
      info: 'База знань',
      isColorText: true,
   },
   {
      info: 'Інформація',
      isColorText: false,
   },
]

export const nav = () => {
   const navTag = createElement('nav', 'nav')

   NAV_MENU.forEach((params) => {
      const span = createElement(
         'span',
         params.isColorText ? 'info base' : 'info',
         params.info,
      )

      navTag.append(span)
   })

   return navTag
}

export const imgCreate = (tagName, className, src, alt) => {
   const img = createElement(tagName)

   if (className) {
      img.className = className
   }

   if (src) {
      img.src = src
   }

   if (alt) {
      img.alt = alt
   }

   return img
}


