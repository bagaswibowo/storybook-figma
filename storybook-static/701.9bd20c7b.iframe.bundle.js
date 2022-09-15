"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{renderDocs:function(){return renderDocs},unmountDocs:function(){return unmountDocs}});__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),wrapper={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},main={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},heading={textAlign:"center"},NoDocs=function NoDocs(){return react.createElement("div",{style:wrapper,className:"sb-nodocs sb-wrapper"},react.createElement("div",{style:main},react.createElement("h1",{style:heading},"No Docs"),react.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",react.createElement("code",null,"docs")," parameter. If you think this is an error:"),react.createElement("ul",null,react.createElement("li",null,"Please check the story definition."),react.createElement("li",null,"Please check the Storybook config."),react.createElement("li",null,"Try reloading the page.")),react.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function renderDocs(story,docsContext,element,callback){return function renderDocsAsync(_x,_x2,_x3){return _renderDocsAsync.apply(this,arguments)}(story,docsContext,element).then(callback)}function _renderDocsAsync(){return(_renderDocsAsync=_asyncToGenerator(regeneratorRuntime.mark((function _callee(story,docsContext,element){var _docs$getContainer,_docs$getPage,docs,DocsContainer,Page,docsElement;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(null!=(docs=story.parameters.docs)&&docs.getPage||null!=docs&&docs.page)||(null!=docs&&docs.getContainer||null!=docs&&docs.container)){_context.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(_context.t1=docs.container,_context.t1){_context.next=8;break}return _context.next=7,null===(_docs$getContainer=docs.getContainer)||void 0===_docs$getContainer?void 0:_docs$getContainer.call(docs);case 7:_context.t1=_context.sent;case 8:if(_context.t0=_context.t1,_context.t0){_context.next=11;break}_context.t0=function(_ref){var children=_ref.children;return react.createElement(react.Fragment,null,children)};case 11:if(DocsContainer=_context.t0,_context.t3=docs.page,_context.t3){_context.next=17;break}return _context.next=16,null===(_docs$getPage=docs.getPage)||void 0===_docs$getPage?void 0:_docs$getPage.call(docs);case 16:_context.t3=_context.sent;case 17:if(_context.t2=_context.t3,_context.t2){_context.next=20;break}_context.t2=NoDocs;case 20:return Page=_context.t2,docsElement=react.createElement(DocsContainer,{key:story.componentId,context:docsContext},react.createElement(Page,null)),_context.next=24,new Promise((function(resolve){react_dom.render(docsElement,element,resolve)}));case 24:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function unmountDocs(element){react_dom.unmountComponentAtNode(element)}NoDocs.displayName="NoDocs"}}]);