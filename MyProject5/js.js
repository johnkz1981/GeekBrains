
class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem ||
                this.items[i] instanceof SubMenu) {
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }

    remove() {
        let el = document.getElementById(this.id);
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
}

class SubMenu extends Menu {
    constructor(href, title, id, className, items) {
        super(id, className, items);
        this.href = href;
        this.title = title;
    }

    render() {
        return `<li><a href="${this.href}">${this.title}</a>
<div class="mega-box ">
            <div class="mega-flex ">
            <h3>Women</h3>

${super.render()}</li>
       </div>
         </div>`;
    }
}
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
class MenuItem {
    constructor(href, title){
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li><a href="${this.href}">${this.title}</a></li>`
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtZW51LmpzIiwiTWVudWJ1aWxkLmpzIiwiTWVudWl0ZW0uanMiLCJwcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBIiwiZmlsZSI6ImpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiY2xhc3MgTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NOYW1lLCBpdGVtcykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBgPHVsIGNsYXNzPVwiJHt0aGlzLmNsYXNzTmFtZX1cIiBpZD1cIiR7dGhpcy5pZH1cIj5gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXSBpbnN0YW5jZW9mIE1lbnVJdGVtIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldIGluc3RhbmNlb2YgU3ViTWVudSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuaXRlbXNbaV0ucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ICs9ICc8L3VsPic7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3ViTWVudSBleHRlbmRzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoaHJlZiwgdGl0bGUsIGlkLCBjbGFzc05hbWUsIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIGNsYXNzTmFtZSwgaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuaHJlZiA9IGhyZWY7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYDxsaT48YSBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLnRpdGxlfTwvYT5cclxuPGRpdiBjbGFzcz1cIm1lZ2EtYm94IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVnYS1mbGV4IFwiPlxyXG4gICAgICAgICAgICA8aDM+V29tZW48L2gzPlxyXG5cclxuJHtzdXBlci5yZW5kZXIoKX08L2xpPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn0iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1lbnVCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItbWVudScpXHJcblxyXG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCdteScsICdtZW51JywgW1xyXG4gICAgICAgIG5ldyBNZW51SXRlbSgnLycsICdIb21lJyksXHJcbiAgICAgICAgbmV3IFN1Yk1lbnUoJyMnLCAnTUFOJywgJ21lJywgJ21lZ2EtbGlzdCcsIFtcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0RyZXNzZXMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ1RvcHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ1N3ZWF0ZXJzL0tuaXRzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdKYWNrZXRzL0NvYXRzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdCbGF6ZXJzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdEZW5pbScpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnTGVnZ2luZ3MvUGFudHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ1NraXJ0cy9TaG9ydHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0FjY2Vzc29yaWVzJyksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgbmV3IE1lbnVJdGVtKCcvcHJvZHVjdHMuaHRtbCcsICdXT01FTicpLFxyXG4gICAgICAgIG5ldyBTdWJNZW51KCcjJywgJ0tJRFMnLCAnbWUnLCAnbWVnYS1saXN0JywgW1xyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnRHJlc3NlcycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnVG9wcycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnU3dlYXRlcnMvS25pdHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0phY2tldHMvQ29hdHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0JsYXplcnMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0RlbmltJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdMZWdnaW5ncy9QYW50cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnU2tpcnRzL1Nob3J0cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnQWNjZXNzb3JpZXMnKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICBuZXcgTWVudUl0ZW0oJy9wcm9kdWN0cy5odG1sJywgJ0FDQ0VTU09SSUVTJyksXHJcbiAgICAgICAgbmV3IE1lbnVJdGVtKCcvcHJvZHVjdHMuaHRtbCcsICdGRUFUVVJFRCcpLFxyXG4gICAgICAgIG5ldyBNZW51SXRlbSgnL3Byb2R1Y3RzLmh0bWwnLCAnSE9UIERFQUxTJyksXHJcbiAgICBdKTtcclxuXHJcbiAgICBtZW51QmxvY2suaW5uZXJIVE1MID0gbWVudS5yZW5kZXIoKTtcclxufTsiLCJjbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihocmVmLCB0aXRsZSl7XHJcbiAgICAgICAgdGhpcy5ocmVmID0gaHJlZjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gYDxsaT48YSBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLnRpdGxlfTwvYT48L2xpPmBcclxuICAgIH1cclxufSIsIiJdfQ==
