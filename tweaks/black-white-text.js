const style = `
.dark-theme,
html[data-theme='dark'] {
  --ls-primary-text-color: #fffffff9;
  --ls-secondary-text-color: #ffffffe9;
}
.light-theme,
.white-theme,
html[data-theme='light'] {
  --ls-primary-text-color: #000000f9;
  --ls-secondary-text-color: #000000e9;
}
`
export default style
