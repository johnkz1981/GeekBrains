window.onload = function(){
    const menuBlock = document.getElementById('container-menu')

    const menu = new Menu('my', 'menu', [
        new MenuItem('/', 'Home'),
        new SubMenu('#', 'MAN', 'me', 'mega-list', [
            new MenuItem('#', 'Dresses'),
            new MenuItem('#', 'Tops'),
            new MenuItem('#', 'Sweaters/Knits'),
            new MenuItem('#', 'Jackets/Coats'),
            new MenuItem('#', 'Blazers'),
            new MenuItem('#', 'Denim'),
            new MenuItem('#', 'Leggings/Pants'),
            new MenuItem('#', 'Skirts/Shorts'),
            new MenuItem('#', 'Accessories'),
        ]),
        new MenuItem('/products.html', 'WOMEN'),
        new SubMenu('#', 'KIDS', 'me', 'mega-list', [
            new MenuItem('#', 'Dresses'),
            new MenuItem('#', 'Tops'),
            new MenuItem('#', 'Sweaters/Knits'),
            new MenuItem('#', 'Jackets/Coats'),
            new MenuItem('#', 'Blazers'),
            new MenuItem('#', 'Denim'),
            new MenuItem('#', 'Leggings/Pants'),
            new MenuItem('#', 'Skirts/Shorts'),
            new MenuItem('#', 'Accessories'),
        ]),
        new MenuItem('/products.html', 'ACCESSORIES'),
        new MenuItem('/products.html', 'FEATURED'),
        new MenuItem('/products.html', 'HOT DEALS'),
    ]);

    menuBlock.innerHTML = menu.render();
};