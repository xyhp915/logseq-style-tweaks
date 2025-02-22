const style = `
.cm-s-solarized.cm-s-light {
  background-color: var(--ls-quaternary-background-color);
  text-shadow: none;
  color: var(--ls-secondary-text-color);
}
.cm-s-solarized.cm-s-dark {
  background-color: var(--ls-tertiary-background-color);
  text-shadow: none;
  color: var(--ls-secondary-text-color);
}
.extensions__code-lang,
.cm-s-solarized.cm-s-light .CodeMirror-gutters {
  background-color: var(--ls-tertiary-background-color);
  text-shadow: none;
  color: var(--ls-primary-text-color);
}
.cm-s-solarized.cm-s-dark .CodeMirror-gutters {
  background-color: var(--ls-quaternary-background-color);
  text-shadow: none;
  color: var(--ls-secondary-text-color);
}
`
export default style
