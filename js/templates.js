class Header extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = 
    `
    <header>
        <nav class="main-nav">
            <ul>
                <li><a href="manga.html"><span>マンガ</span>Manga</a></li>
                <li><a href="trailers.html"><span>よこくへん</span>Trailers</a></li>
                <li><a href="index.html"><span>ホームページ</span>Home</a></li>
                <li><a href="music.html"><span>おんがく</span>Music</a></li>
                <li><a href="books_merch.html"><span>本としょうひん</span>Books + Merch</a></li>
            </ul>
        </nav>
    </header>
    `}
}

customElements.define('header-component', Header);

class Footer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML =
        `
        <footer>
            <h4>© Copyright - All content on this site belongs to and was created by Mitsuki Youko - 2021 ©</h4>
        </footer>
        `
    }
}
customElements.define('footer-component', Footer);


