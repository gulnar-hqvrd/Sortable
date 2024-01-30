let menuItems = [
    'Menu', 'Home',
    'About',
    'Search',
    'Live', 'Class', 'Dropdown', 'Javascript',
    'Java', 'HTML', 'CSS'
];

const load = (items) => {
    let mainMenu = [];
    let sortedMenu = [];

    $.each(items, (i, e) => {
        mainMenu.push(`<li class="nav-item"><a class="nav-link" href="#">${e}</a></li>`);
        sortedMenu.push(`<li class="list-group-item ">
        <span class="sort-list">${e}</span> 
        <span class="float-end badge rounded-pill text-bg-warning">${(i + 1)}</span>
        </li>`);
    });
    $('.navbar-nav').html(mainMenu);
    $('#sortable').html(sortedMenu);
}

load(menuItems);

$("#sortable").sortable({
    // start: function (event, ui) { console.log('start'); },
    change: function (event, ui) {

        let items = ui.item.children();
        // console.log(items[0].innerText);  -> text
        // console.log(items[1].innerText);  -> index


        // $(items[0]).text(ui.item.index() + 1
        $(items[1]).removeClass('text-bg-warning').addClass('text-bg-success').html(ui.placeholder.index() + 1);
    },
    stop: function (event, ui) {
        let currentMenuItems = [];
        let items = document.querySelectorAll('.sort-list');
        $.each(items, (i, e) => {
            currentMenuItems.push(e.innerText);
        });
        load(currentMenuItems)
    },
});