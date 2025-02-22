const style = `
.left-sidebar-inner {
	background-color: #2e3234;
	border-right: 1px solid transparent;
}
.dark-theme .left-sidebar-inner {
	background-color: #2c2d2f;
	border-right: 1px solid #0002;
}
.left-sidebar-inner .dropdown-wrapper {
  background-color: #2e3234;
  border: 1px solid #fff2;
}
.left-sidebar-inner .menu-links-wrapper {
  background-color: #2e3234;
  color: #bfbfbf;
}
.dark-theme .left-sidebar-inner .dropdown-wrapper,
.dark-theme .left-sidebar-inner .menu-links-wrapper {
  background-color: #2c2d2f;
}
.left-sidebar-inner .menu-links-wrapper hr.menu-separator {
  border-color: #fff2;
}
#left-sidebar .font-medium:not(.ui__dropdown-trigger *),
#left-sidebar .text-sm li {
  font-weight: 300;
  font-size: 0.9rem;
}
.left-sidebar-inner .new-page-link {
  background-color: transparent;
}
.ls-left-sidebar-open #head > .l .button {
  color: #bfbfbf;
}
.left-sidebar-inner a.menu-link:hover,
.left-sidebar-inner .new-page-link:hover,
.left-sidebar-inner .new-page-link:active,
.left-sidebar-inner a.item:active:is(footer *),
.ls-left-sidebar-open #head > .l .button:hover {
  color: #fff;
  background-color: #fff1;
  opacity: 1;
}
.ls-left-sidebar-open #head > .l .button:active,
.left-sidebar-inner .nav-content-item .header {
  margin-top: 1rem;
  padding-left: 1rem;
}
.left-sidebar-inner .nav-content-item .header:hover {
  background-color: transparent;
}
.left-sidebar-inner .nav-content-item .header .wrap-th>span {
  font-weight: 600;
  font-size: 0.7rem;
}
#left-sidebar .nav-content-item ul .favorite-item a:hover,
.dark-theme #left-sidebar .favorites ul .favorite-item a:hover {
  color: gray;
}
.left-sidebar-inner .page-icon,
.left-sidebar-inner a svg {
  color: #908e8b;
}
.cp__sidebar-left-layout a {
  color: #bfbfbf;
}
.left-sidebar-inner .nav-content-item .bd ul li {
  margin-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.left-sidebar-inner a.item:is(.ui__dropdown-trigger *) {
  background-color: transparent;
  opacity: .8;
  padding-left: 0;
}
.font-medium:is(.left-sidebar-inner .ui__dropdown-trigger *) {
  font-weight: 600;
}
.text-sm:is(.left-sidebar-inner .ui__dropdown-trigger *) {
  font-size: .8rem;
}
.left-sidebar-inner a.menu-link,
.left-sidebar-inner a.item:hover:is(.ui__dropdown-trigger *) {
  background-color: transparent;
  opacity: 1;
}
.left-sidebar-inner a.item:hover:is(footer *) {
  opacity: 1;
}
.left-sidebar-inner .nav-content-item .bd ul a {
  color: #bfbfbf;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  padding-right: 0.3rem;
}
.left-sidebar-inner a.item:not(.ui__dropdown-trigger *) {
  padding-left: 0.5rem;
}

.left-sidebar-inner .nav-content-item .bd ul a:hover,
.left-sidebar-inner a.item:hover:not(.ui__dropdown-trigger *, footer *),
.left-sidebar-inner a.item:active:not(.ui__dropdown-trigger *, footer *),
.left-sidebar-inner a.item.active,
#left-sidebar .nav-content-item ul .favorite-item a:hover,
#left-sidebar .favorites ul .favorite-item a:hover {
  color: #fff;
  background-color: var(--ls-link-text-color);
  opacity: 1;
}
.dark-theme .left-sidebar-inner .nav-content-item .bd ul a:hover,
.dark-theme .left-sidebar-inner a.item:hover:not(.ui__dropdown-trigger *, footer *),
.dark-theme .left-sidebar-inner a.item:active:not(.ui__dropdown-trigger *, footer *),
.dark-theme .left-sidebar-inner a.item.active,
.dark-theme #left-sidebar .nav-content-item ul .favorite-item a:hover,
.dark-theme #left-sidebar .favorites ul .favorite-item a:hover {
  color: #000;
  background-color: var(--ls-link-text-color);
  opacity: 1;
}
.left-sidebar-inner .nav-content-item .bd ul a:hover .page-icon {
  color: #fff;
}
.dark-theme .left-sidebar-inner .nav-content-item .bd ul a:hover .page-icon {
  color: #000;
}
`
export default style
