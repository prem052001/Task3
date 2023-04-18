class about extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="container">
            <section class="about" id="about">
                <div class="heading">
                    <h2>About Me</h2>
                    <span>Introduction</span>
                </div>

                <div class="about-container">
                    <div class="about-img">
                        <img src="images/PHOTO2.jpg" alt=""></img>
                    </div>
                    <div class="about-text">
                        <p>Hello, my name is Prem and I am a recent computer science graduate. I have completed my BCA and am currently pursuing my MCA. While I have developed my skills in various programming languages including HTML, CSS, Python, and C.

                            During my academic career, I worked on several projects including a shopping website, which helped me to gain practical experience and knowledge of software development. I enjoyed the process of creating something from scratch and seeing it come to life.

                            I am a quick learner, and always looking to improve my skills and knowledge. I am passionate about technology and how it can make a positive impact on the world. My goal is to work for a company that values innovation, creativity, and teamwork, and where I can apply my skills and learn new ones.

                            Thank you for taking the time to read my "about me" section. I am excited about the opportunities that lie ahead and I am looking forward to sharing my portfolio with you.</p>
                        <div class="information">
                            <div class="info-box">
                                <i class='bx bxs-user'></i>
                                <span>PREM</span>
                            </div>

                            <div class="info-box">
                                <i class='bx bxs-phone'></i>
                                <span>+91 6367621284</span>
                            </div>

                            <div class="info-box">
                                <i class='bx bxs-envelope'></i>
                                <span>MCA22.PREM@SUNSTONE.EDU.IN</span>
                            </div>
                        </div>
                        <a href="images/IMG.HTML" class="btn">Download Cv</a>
                    </div>
                </div>
            </section>
        </div>`
    }
}


customElements.define('app-about', about);