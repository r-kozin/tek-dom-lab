let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add('flex-ctr');

let topMenuEl = document.querySelector('nav#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  for(i in menuLinks) {
    let createA = document.createElement('a');
    createA.setAttribute('href', menuLinks[i].href);
    createA.innerText = menuLinks[i].text
    topMenuEl.append(createA);
  }