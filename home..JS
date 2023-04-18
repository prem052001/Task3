class home extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="container">
            <section class="home" id="home">
                <div class="social">
                    <a href="https://github.com/prem052001"><i class='bx bxl-github'></i></a>
                    <a href="https://instagram.com/prem200105?igshid=ZDdkNTZiNTM="><i class='bx bxl-instagram'></i></a>
                    <a href="https://www.facebook.com/prem.meena.12914216/"><i class='bx bxl-facebook'></i></a>
                </div>
                <div class="home-img">
                    <img src="images/PHOTO1.jpg" alt=""></img>
                </div>
                <div class="home-text">
                    <span>Hello, I'm</span>
                    <h1>PREM</h1>
                    <h2>Frontend Developer</h2>

                </div>
            </section>
        </div>`

    }
}


customElements.define('app-home', home);