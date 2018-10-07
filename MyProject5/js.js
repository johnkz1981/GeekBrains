
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

class MenuItem {
  constructor(href, title){
    this.href = href;
    this.title = title;
  }
  render(){
    return `<li><a href="${this.href}">${this.title}</a></li>`
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtZW51LmpzIiwiTWVudWJ1aWxkLmpzIiwicHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBIiwiZmlsZSI6ImpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiY2xhc3MgTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NOYW1lLCBpdGVtcykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBgPHVsIGNsYXNzPVwiJHt0aGlzLmNsYXNzTmFtZX1cIiBpZD1cIiR7dGhpcy5pZH1cIj5gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXSBpbnN0YW5jZW9mIE1lbnVJdGVtIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldIGluc3RhbmNlb2YgU3ViTWVudSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuaXRlbXNbaV0ucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ICs9ICc8L3VsPic7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3ViTWVudSBleHRlbmRzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoaHJlZiwgdGl0bGUsIGlkLCBjbGFzc05hbWUsIGl0ZW1zKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIGNsYXNzTmFtZSwgaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuaHJlZiA9IGhyZWY7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYDxsaT48YSBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLnRpdGxlfTwvYT5cclxuPGRpdiBjbGFzcz1cIm1lZ2EtYm94IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVnYS1mbGV4IFwiPlxyXG4gICAgICAgICAgICA8aDM+V29tZW48L2gzPlxyXG5cclxuJHtzdXBlci5yZW5kZXIoKX08L2xpPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1lbnVJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihocmVmLCB0aXRsZSl7XHJcbiAgICB0aGlzLmhyZWYgPSBocmVmO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiBgPGxpPjxhIGhyZWY9XCIke3RoaXMuaHJlZn1cIj4ke3RoaXMudGl0bGV9PC9hPjwvbGk+YFxyXG4gIH1cclxufSIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWVudUJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1tZW51JylcclxuXHJcbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoJ215JywgJ21lbnUnLCBbXHJcbiAgICAgICAgbmV3IE1lbnVJdGVtKCcvJywgJ0hvbWUnKSxcclxuICAgICAgICBuZXcgU3ViTWVudSgnIycsICdNQU4nLCAnbWUnLCAnbWVnYS1saXN0JywgW1xyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnRHJlc3NlcycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnVG9wcycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnU3dlYXRlcnMvS25pdHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0phY2tldHMvQ29hdHMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0JsYXplcnMnKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0RlbmltJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdMZWdnaW5ncy9QYW50cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnU2tpcnRzL1Nob3J0cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnQWNjZXNzb3JpZXMnKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICBuZXcgTWVudUl0ZW0oJy9wcm9kdWN0cy5odG1sJywgJ1dPTUVOJyksXHJcbiAgICAgICAgbmV3IFN1Yk1lbnUoJyMnLCAnS0lEUycsICdtZScsICdtZWdhLWxpc3QnLCBbXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdEcmVzc2VzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdUb3BzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdTd2VhdGVycy9Lbml0cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnSmFja2V0cy9Db2F0cycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnQmxhemVycycpLFxyXG4gICAgICAgICAgICBuZXcgTWVudUl0ZW0oJyMnLCAnRGVuaW0nKSxcclxuICAgICAgICAgICAgbmV3IE1lbnVJdGVtKCcjJywgJ0xlZ2dpbmdzL1BhbnRzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdTa2lydHMvU2hvcnRzJyksXHJcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbSgnIycsICdBY2Nlc3NvcmllcycpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIG5ldyBNZW51SXRlbSgnL3Byb2R1Y3RzLmh0bWwnLCAnQUNDRVNTT1JJRVMnKSxcclxuICAgICAgICBuZXcgTWVudUl0ZW0oJy9wcm9kdWN0cy5odG1sJywgJ0ZFQVRVUkVEJyksXHJcbiAgICAgICAgbmV3IE1lbnVJdGVtKCcvcHJvZHVjdHMuaHRtbCcsICdIT1QgREVBTFMnKSxcclxuICAgIF0pO1xyXG5cclxuICAgIG1lbnVCbG9jay5pbm5lckhUTUwgPSBtZW51LnJlbmRlcigpO1xyXG59OyIsIiJdfQ==
