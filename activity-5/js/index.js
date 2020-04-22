const siteContent={
    'nav':{ 
        'nav-item-1':'Blog',
        'nav-item-2':'Docs',
        'nav-item-3':'Perks',
        'nav-item-4':'Partner Academy'
    }
}

function fill(items, values) {
    items.forEach((item, index) => item.innerText = values[index]);
  }

  let nav = document.querySelector('nav'); //selects nav in html
  let firstNav = document.createElement('a') //selects a tags in nav
  let lastNav = document.createElement('a')

  let navItems= document.querySelectorAll('nav a'); 
  let navValues = Object.values(siteContent['nav']); //selects nav a values from siteContent object

  fill(navItems,navValues);