import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
          src="https://images.pexels.com/https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Frealistic-halloween-spider-web-background_52683-72550.jpg&tbnid=hr0ggFfgICHQ_M&vet=12ahUKEwjz0eLFvayBAxVuVqQEHaqLARwQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fspider-web-background&docid=ufFIDTvJPNz36M&w=626&h=417&q=spider%20background%20images&ved=2ahUKEwjz0eLFvayBAxVuVqQEHaqLARwQMygBegQIARB2/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="" 
          className="headerImg" 
        />
    </div>
  )
}
