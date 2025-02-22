const style = `
:root {
  --ls-page-title-size: 2rem;
}
h1.title {
  font-weight: 500;
  line-height: 1.3;
}
.editor-inner .multiline-block:is(.h1,.h2,.h3,.h4)::first-line, 
.editor-inner .uniline-block:is(.h1,.h2,.h3,.h4), 
.ls-block :is(h1,h2,h3,h4) {
  font-weight: 500;  
}
*:is(h1, h2, h3, h4, h5, h6) input {
  font-weight: inherit !important;
}
*:is(.editor-inner .uniline-block.h1:not(.block-ref *), 
.editor-inner .h1:not(.block-ref *), 
.ls-block h1:not(.block-ref *)) {
  font-size: 1.7rem;
  line-height: 1.3;
  margin-bottom: 0.4rem;
}
*:is(.editor-inner .uniline-block.h2:not(.block-ref *), 
.editor-inner .h2:not(.block-ref *), 
.ls-block h2:not(.block-ref *)) {
  font-size: 1.55rem;
  line-height: 1.3;
  margin-bottom: 0.35rem;
}
*:is(.editor-inner .uniline-block.h3:not(.block-ref *), 
.editor-inner .h3:not(.block-ref *), 
.ls-block h3:not(.block-ref *)) {
  font-size: 1.3rem;
  line-height: 1.3;
  margin-bottom: 0.3rem;
}
*:is(.editor-inner .uniline-block.h4:not(.block-ref *), 
.editor-inner .h4:not(.block-ref *), 
.ls-block h4:not(.block-ref *)) {
  font-size: 1.1rem;
  line-height: 1.3;
  margin-bottom: 0.25rem;
}
*:is(.editor-inner .uniline-block.h5:not(.block-ref *), 
.editor-inner .h5:not(.block-ref *), 
.ls-block h5:not(.block-ref *)) {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.2rem;
}
*:is(.editor-inner .uniline-block.h6:not(.block-ref *), 
.editor-inner .h6:not(.block-ref *), 
.ls-block h6:not(.block-ref *)) {
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 0.15rem;
}
.editor-inner .uniline-block:is(.h1,.h2), 
.ls-block :is(h1,h2) {
  border-bottom: none;
}
`
export default style
