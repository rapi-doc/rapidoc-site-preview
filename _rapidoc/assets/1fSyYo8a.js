var e={index:`INDEX`,api:`API`,apiList:`API List`,apiReference:`API Reference`,apiVersion:`API Version`,contact:`CONTACT`,name:`NAME`,email:`EMAIL`,url:`URL`,termsOfService:`Terms of service`,securityAndAuthentication:`Security and Authentication`,securitySchemes:`SECURITY SCHEMES`,key:`KEY`,type:`TYPE`,example:`EXAMPLE`,description:`DESCRIPTION`,request:`REQUEST`,requestBody:`REQUEST BODY`,response:`RESPONSE`,responseModel:`RESPONSE MODEL`,statusCode:`STATUS CODE`,deprecated:`DEPRECATED`,allowed:`ALLOWED`,default:`DEFAULT`,readOnly:`READ ONLY`,writeOnly:`WRITE ONLY`,enumValues:`ENUM`,pattern:`PATTERN`,parameters:`Parameters`,noRequestParameters:`No request parameters`,method:`METHOD`,option:`OPTION`,anyOf:`ANY OF`,oneOf:`ONE OF`,arrayOfObject:`Array of object`,objectBelow:`OBJECT WITH BELOW STRUCTURE`,arrayOfObjectBelow:`ARRAY OF OBJECT WITH BELOW STRUCTURE`},t=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),n=function(e){return`/`+e},r={},i=function(e){return e.pathname.endsWith(`.css`)},a=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},o=function(e,o,s){let c=Promise.resolve();if(o&&o.length>0){let e,l=document.querySelector(`meta[property=csp-nonce]`),u=l?.nonce||l?.getAttribute(`nonce`);function d(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function f(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}c=d(o.map(o=>{o=n(o,s);let c=f(o),l=i(c);return a(r,c.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((l?e.styles:e.all).has(c.href))return;let n=document.createElement(`link`);if(n.rel=l?`stylesheet`:t,l||(n.as=`script`),n.crossOrigin=``,n.href=c.href,u&&n.setAttribute(`nonce`,u),document.head.appendChild(n),l)return new Promise((e,t)=>{let r=i=>{n.removeEventListener(`load`,r),n.removeEventListener(`error`,r),i.type===`error`?t(Error(`Unable to preload CSS for ${c}`)):e(i)};n.addEventListener(`load`,r),n.addEventListener(`error`,r)})})}).filter(e=>e!==void 0))}function l(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(t=>{for(let e of t||[])e.status===`rejected`&&l(e.reason);return e().catch(l)})},s=document.createElement(`template`);s.innerHTML=`
  <style>
  :host{
    --primary-color:#0078d7;
    --border-radius:2px;
    --input-bg:#fff;
    --fg:#333;
    --primary-text:#fff;
    --font-size:13px;
    display:block;
    width:350px;
  }

  .spec-input {
    border-radius:var(--border-radius);
    border:1px solid var(--primary-color);
    background:var(--input-bg);
    font-size: inherit;
    color:var(--fg);
    transition: border .2s;
    outline: none;
    padding:6px 5px;
    box-sizing: border-box;
    flex:1;
  }
  .spec-input:focus {
    outline: 1px dotted var(--fg);
    outline-offset: -3px;
  }

  .btn-default {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    font-size: 85%;
    font-weight: 600;
    display: inline-block;
    padding: 8px 16px;
    outline: none;
    outline-offset: -2px;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    background-color:var(--primary-color);
    color:var(--primary-text);
    border: 0px solid var(--primary-color);
    transition: background-color 0.2s;
    user-select: none;
    cursor: pointer;
  }
  .btn-default:focus{
    outline: 1px solid var(--primary-text);
  }
  .btn-default:disabled{
    opacity: 0.6;
    cursor: progress;
  }
  
  </style>
  <div style='display:flex; width:100%; height: 100%;'>
    <input  class="spec-input"  id="spec-url" type="text"  placeholder="Spec URL" value="" tabindex="0">
    <button class="btn-default" type="button" style="margin-left:-1px" tabindex="0">GENERATE PDF</button>
  </div>  
`;var c=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:`open`}),n=s.content.cloneNode(!0);this.inputEl=n.querySelector(`.spec-input`),this.btnEl=n.querySelector(`.btn-default`),t.appendChild(n),this.onChangeInput=this.onChangeInput.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onButtonClick=()=>this.generateFromUi(),this.localize={...e},this.pending=0}connectedCallback(){this.inputEl.addEventListener(`change`,this.onChangeInput),this.inputEl.addEventListener(`keyup`,this.onKeyUp),this.btnEl.addEventListener(`click`,this.onButtonClick);let t={},n=this.children[0]?.content?.textContent;if(n)try{t=JSON.parse(n)}catch{t={}}this.localize={...e,...t}}disconnectedCallback(){this.inputEl.removeEventListener(`change`,this.onChangeInput),this.inputEl.removeEventListener(`keyup`,this.onKeyUp),this.btnEl.removeEventListener(`click`,this.onButtonClick)}static get observedAttributes(){return[`spec-url`,`button-bg`,`input-bg`,`button-color`,`input-color`,`button-label`,`hide-input`]}attributeChangedCallback(e,t,n){switch(e){case`spec-url`:if(t!==n)return this.inputEl.value=n,!0;break;case`button-label`:if(t!==n)return this.btnEl.innerText=n,!0;break;case`hide-input`:if(t!==n)return n===`true`?(this.inputEl.style.display=`none`,this.btnEl.style.borderRadius=`var(--border-radius)`):(this.inputEl.style.display=`block`,this.btnEl.style.borderRadius=`0 var(--border-radius) var(--border-radius) 0`),!0;break;case`button-bg`:return this.btnEl.style.backgroundColor=n,this.inputEl.style.borderColor=n,!0;case`button-color`:return this.btnEl.style.color=n,!0;case`input-bg`:return this.inputEl.style.backgroundColor=n,!0;case`input-color`:return this.inputEl.style.color=n,!0;default:return!0}return!0}get specUrl(){return this.getAttribute(`spec-url`)}set specUrl(e){this.setAttribute(`spec-url`,e)}onChangeInput(e){this.specUrl=e.target.value}onKeyUp(e){e.keyCode===13&&this.generateFromUi()}generateFromUi(){this.generatePdf().catch(e=>{console.error(`RapiPdf: the PDF could not be generated`,e)})}pdfOptions(){let e=e=>this.getAttribute(e);return{pdfSortTags:e(`pdf-sort-tags`)!==`false`,pdfPrimaryColor:e(`pdf-primary-color`),pdfAlternateColor:e(`pdf-alternate-color`),pdfTitle:e(`pdf-title`)===null?`API Reference`:e(`pdf-title`),pdfSchemaStyle:e(`pdf-schema-style`)===`table`?`table`:`object`,pdfFooterText:e(`pdf-footer-text`)||``,includeInfo:e(`include-info`)!==`false`,includeToc:e(`include-toc`)!==`false`,includeSecurity:e(`include-security`)!==`false`,includeExample:e(`include-example`)===`true`,includeApiDetails:e(`include-api-details`)!==`false`,includeApiList:e(`include-api-list`)===`true`,localize:this.localize}}get fileName(){let e=(this.getAttribute(`file-name`)||`api-reference`).trim();return/\.pdf$/i.test(e)?e:`${e}.pdf`}async run(e,t,n){this.pending+=1,this.setAttribute(`generating`,``),this.btnEl.disabled=!0;try{let r=e??this.specUrl;if(r==null||r===``)throw Error(`No spec: set spec-url or pass a spec to generatePdf()`);let{createPdfDocument:i}=await o(async()=>{let{createPdfDocument:e}=await import(`./PZiNK9q1.js`);return{createPdfDocument:e}},[]),a=await n(await i(r,this.pdfOptions()));return this.dispatchEvent(new CustomEvent(`pdf-generated`,{detail:{output:t},bubbles:!0,composed:!0})),a}catch(e){throw this.dispatchEvent(new CustomEvent(`pdf-error`,{detail:{error:e},bubbles:!0,composed:!0})),e}finally{--this.pending,this.pending===0&&(this.removeAttribute(`generating`),this.btnEl.disabled=!1)}}async generatePdf(e){let t=this.getAttribute(`output`)===`download`?`download`:`open`,n=null;t===`open`&&(n=window.open(``,`_blank`),n||(t=`download`));try{await this.run(e,t,e=>t===`open`?e.open(n):e.download(this.fileName))}catch(e){throw n?.close(),e}}getPdfBlob(e){return this.run(e,`blob`,e=>e.getBlob())}};customElements.get(`rapi-pdf`)||customElements.define(`rapi-pdf`,c);export{e as t};