const siteContent={
    'nav':{ 
        'nav-item-1':'Blog',
        'nav-item-2':'Docs',
        'nav-item-3':'Perks',
        'nav-item-4':'Partner Academy'
    },
    'topcontent':{
        'img-src':'images/vscode.jpeg',
        'author-item':'By Raymond Pugh',
        'topic-item':'Front End Development',
        'date-item':'04/20/20'
    },
    'container':{
        'header1':'The 3 Best Visual Studio Extensions for Front End Developers'
    },
    'middlecontent':{
        'extension-item-1':'HTML Snippets-HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.'
        ,'extension-item-2':'Blank line at end of file-Blank line at end of file is a minimal and super simple extension that adds an extra blank line at the end of any saved file.',
        'extension-item-3':'ESLint-This extension integrates ESLint into VS Code, it requires you to already have ESLint installed on your computer: either locally or globally. You can do this with npm, by running npm install -g eslint. There are more detailed configuration and installation settings and instructions on the extension marketplace page.'
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

  let image = document.getElementById('topimage');
  image.setAttribute('src',siteContent['topcontent']['img-src']);

  let container = document.querySelector('container');
  let header = document.createElement('h1')

  let headerItems= document.querySelectorAll('.container h1');
  let headerValues = Object.values(siteContent['container']);

  fill(headerItems,headerValues);

  let authorName = document.getElementById('author');
  authorName.innerText=siteContent['topcontent']['author-item'];

  let topicName = document.getElementById('topic');
  topicName.innerText=siteContent['topcontent']['topic-item'];
  
  let datePublished = document.getElementById('date');
  datePublished.innerText=siteContent['topcontent']['date-item'];

  let middleContent = document.querySelector('.middlecontent');
  let firstExt = document.createElement('li')
  let lastExt = document.createElement('li')

  let extItems = document.querySelectorAll('.middlecontent li');
  let extValues = Object.values(siteContent['middlecontent']);

  fill(extItems,extValues);