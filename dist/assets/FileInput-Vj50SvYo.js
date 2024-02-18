import{d as c,i as d,r as o,o as u,e as _,f as s,w as m,b as t,t as r}from"./index-kt3BPNUV.js";const C={class:"examples"},f=t("h2",null,"Basic",-1),F=t("br",null,null,-1),b=c({__name:"FileInput",setup(x){const e=d({});return(I,l)=>{const a=o("CFileInput"),i=o("CCodeSnippet");return u(),_("div",C,[f,s(i,{snippet:`
        <CFileInput
          name='cFileInput'
          label='file input ex1'
        />
      `},{default:m(()=>{var n;return[s(a,{name:"cFileInput",label:"file input ex1",modelValue:e.selectedFile,"onUpdate:modelValue":l[0]||(l[0]=p=>e.selectedFile=p)},null,8,["modelValue"]),F,t("div",null," selected file: "+r((n=e.selectedFile)==null?void 0:n.name),1)]}),_:1})])}}});export{b as default};
