import Brand from './Brand'
export default function Navigation({ page }) {
  const { setCurrentPage } = page;

  const gotoPage = (e) => {
    const page = e.target.innerText.replace(/\s/g, "").toLowerCase();
    setCurrentPage(page);
  };
  return (
    <nav>
      <Brand gotoPage={gotoPage} />
      <ul class="nav-pub">
        <li>Blogs</li>
        <li>Apps</li>
        <li>About</li>
      </ul>
      <ul class="nav-auth">
        <li>
          Hello, User
          <ul>
            <li>Dashboard</li>
            <li>Log out</li>
          </ul>
        </li>

        <li>Log in</li>
        <li onClick={gotoPage}>
          <a>Sign up</a>
        </li>
      </ul>
    </nav>
  );
}
