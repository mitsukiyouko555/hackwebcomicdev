//Banner templates..

class BannerComponent extends HTMLElement{
    connectedCallback(){
        const file = window.location.pathname.split('/').pop().replace(".html", "")
        const page = (!file || file === "index") ? 'index' : file

        const bannerMap = {
            "trailers":"img/banner/banner.jpg",
            "music":"img/banner/banner.jpg",
            "manga":"img/banner/banner.jpg",
            "books_merch":"img/banner/banner.jpg",
        }
        const imgSrc = bannerMap[page]
        this.innerHTML=`
        <div class="banner">
            <img src=${imgSrc}>
        </div>
        `
    }
}
customElements.define('banner-component', BannerComponent)
