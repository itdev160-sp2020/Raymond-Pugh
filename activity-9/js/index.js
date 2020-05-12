$(function(){

var data = [
{
    id:1,
    title:"Quote 1",
    body:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
},{
    id:2,
    title:"Quote 2",
    body:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
},{
    id:3,
    title:"Quote 3",
    body:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author:"Steve Jobs"
},{
    id:4,
    title:"Quote 4",
    body:"If life were predictable it would cease to be life, and be without flavor",
    author:"Eleanor Roosevelt"
},{
    id:5,
    title:"Quote 5",
    body:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author:"Oprah Winfrey"
}
];

var $nav = $('#nav-container');
var $intro =$('#intro');
var $posts =$('#post-container');

function initPosts() {
    for (let i = 0;i<data.length;i++){

        var postId = 'post-' + data[i].id,
        $post = $('<section class="post"></section>'),
        $title = $('<h2 class="title"></h2>'),
        $body = $('<blockquote></blockquote>'),
        $author = $('<span class="author"></span>'),
        $navItem = $('<li></li>');

        $title.text(data[i].title);
        $body.text(data[i].body);
        $author.text(data[i].author);

        $navItem.attr('id', data[i].id);
        $navItem.text(data[i].title);

        $post.attr('id', postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        $posts.append($post);
        $nav.append($navItem);


        $navItem.on('click', function(){
            var id = $(this).attr('id');
            $posts.children().hide();
            $posts.find('#post-' + id).fadeIn();
        });

        $posts.children('.post').hide();
        $intro.fadeIn(1000);

    }
}

initPosts();

})