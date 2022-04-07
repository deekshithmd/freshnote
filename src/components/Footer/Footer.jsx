import "./footer.css"
export const Footer=()=>{
    return(
        <footer class="footer">
        <span class="text-md footer-text"> <span class="brand-style">FreshNote</span> developed and maintained by Deekshith M D</span>
        <ul class="footer-social-icons">
            <li class="list-inline-item">
                <a href="https://github.com/deekshithmd" target="_blank" rel="noreferrer" class="nav-icon-link link-style-none"><i class="fab fa-github nav-icon"></i> </a>
            </li>
            <li class="list-inline-item">
                <a href="https://in.linkedin.com/in/deekshith-m-d-42a306154" target="_blank" rel="noreferrer" class="nav-icon-link link-style-none"><i class="fab fa-linkedin nav-icon"></i></a>
            </li>
            <li class="list-inline-item">
                <a href="http://twitter.com/deekshith_md" target=" _blank" rel="noreferrer" class="nav-icon-link link-style-none"><i class="fab fa-twitter nav-icon"></i></a>
            </li>
        </ul>
    </footer>
    )
}