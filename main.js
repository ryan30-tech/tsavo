class SpecialHeader extends HTMLElement{
    connectedCallback () {
        this.innerHTML = `
         <div class="navigation">
                <nav>
                        <a href="index.html">Home</a>
                        <a href= "About.html">About</a>
                        <a href="contact.html">contact</a>
                        <a href="#">customer</a>
                        <a href="https://dryhann.wordpress.com/">Blog</a>
                    
                </nav>
            </div>
        `
    }
}
class SpecialFooter extends HTMLElement{
    connectedCallback () {
        this.innerHTML=`
        <div>
        <footer>
        <p>&copy; 2024 My Web Application</p>
    </footer>
    </div>
        `
    }
}
customElements.define(`special-header`,SpecialHeader)
customElements.define(`special-footer`,SpecialFooter)