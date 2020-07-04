var NavBar = {};
var count = 0;

$.getJSON('/Website/Files/HeaderList.json', function(data) {
    NavBar = data.List;
    console.log(NavBar);
    count = Object.keys(NavBar).length;

    for (var i = 0; i < count; i++) {
        console.log(i + ":" + NavBar[i].title + ":" + NavBar[i].link);
        if (NavBar[i].title.includes("<DISABLE>")) {} else {
            if (window.location.href.includes(NavBar[i].link)) {
                if (window.location.href == "https://kisssart.github.io/") {
                    $('<div class="navbar-element current"><a class="nav-href" href="' + NavBar[i].link + '">' + NavBar[i].title + '</a></div>').appendTo("#navbar");
                } else if (NavBar[i].title == "Home") {
                    $('<div class="navbar-element"><a class="nav-href" href="' + NavBar[i].link + '">' + NavBar[i].title + '</a></div>').appendTo("#navbar");
                } else {
                    $('<div class="navbar-element current"><a class="nav-href" href="' + NavBar[i].link + '">' + NavBar[i].title + '</a></div>').appendTo("#navbar");
                };
            } else {
                $('<div class="navbar-element"><a class="nav-href" href="' + NavBar[i].link + '">' + NavBar[i].title + '</a></div>').appendTo("#navbar");
            };
        }
    };
});