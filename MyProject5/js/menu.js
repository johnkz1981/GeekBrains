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