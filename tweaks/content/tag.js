const style = `
.light-theme,
.white-theme,
html[data-theme='light'],
.dark-theme,
html[data-theme='dark'] {
  --ls-tag-text-color: var(--ls-primary-background-color) !important;
  --ls-tag-text-hover-color: var(--ls-primary-background-color) !important;
  --ls-tag-text-opacity: 1;
}
a.tag,
.dark-theme a.tag {
  background-color: var(--ls-link-ref-text-color) !important;
  text-transform: uppercase;
	border-radius: 15px;
	font-size: 0.7rem;
  padding-left: 0.4rem;
  padding-right: 0.5rem;
	font-weight: 600;
  opacity: 0.7;
}
a.tag:hover,
.dark-theme a.tag:hover {
  background-color: var(--ls-link-ref-text-hover-color) !important;
  opacity: 0.7;
}
`
export default style
