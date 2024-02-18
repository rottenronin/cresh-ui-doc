import{d as g,h as B,j as V,i as x,r as f,o as w,e as T,b as s,f as e,w as t,g as i,k as _,y,z as F,_ as G}from"./index-kt3BPNUV.js";const l=u=>(y("data-v-082f70f9"),u=u(),F(),u),$={class:"steps"},A=l(()=>s("h2",null,"Steps",-1)),L={class:"example-steps1"},N=l(()=>s("h3",null,"1. default utilisation",-1)),O={class:"example-steps1"},j=l(()=>s("h3",null,"2. init with specific step-id",-1)),z={class:"example-steps1"},E=l(()=>s("h3",null,"3. navigate between steps",-1)),M={class:"actions"},q={class:"actions"},D={class:"actions"},H=l(()=>s("h2",null,"Vertical stepper",-1)),J={class:"example-stepper1"},K=l(()=>s("h3",null,"1. default utilisation",-1)),P={class:"example-stepper1"},Q=l(()=>s("h3",null,"2. selectable",-1)),R=l(()=>s("h2",null,"Vertical stepper alt",-1)),U={class:"exemple-stepper3"},W=l(()=>s("h3",null,"1. basic",-1)),X={class:"flex c-mt-16 flex-gap-16"},Y=g({__name:"Steps",setup(u){const d=B("firstStep"),v=V(()=>r.findIndex(({selected:n})=>n)),r=x([{id:"businessInfo",text:"Informations de l'entreprise",selected:!1},{id:"contact",text:"Contact",selected:!1},{id:"bankInfo",text:"Informations bancaires",selected:!0},{id:"delivery",text:"Livraison",selected:!1},{id:"clientInfo",text:"Identifiant du client",selected:!1},{id:"beneficiary",text:"Bénéficiaires",selected:!1}]);function b(n){v.value>-1&&(r[v.value].selected=!1),r.splice(n,1,{...r[n],selected:!0})}const c=x([{id:"subStep1",text:"Informations personnelles",subtitle:"Identité/Coordonnées",state:"completed"},{id:"subStep2",text:"Offres",subtitle:"Simulations de financement",state:"active"},{id:"subStep3",text:"Offres",subtitle:"Assurance",state:"unComplete"},{id:"subStep4",text:"Informations personnelles",subtitle:"Adresse",state:"unComplete"}]);function I(){const n=c.findIndex(o=>o.state==="active");n<c.length-1&&(c[n].state="completed",c[n+1].state="active")}function C(){const n=c.findIndex(o=>o.state==="active");n>0&&(c[n].state="unComplete",c[n-1].state="active")}return(n,o)=>{const a=f("CStep"),m=f("CSteps"),p=f("CButton"),S=f("c-vertical-stepper"),k=f("c-vertical-stepper-alt");return w(),T("div",$,[A,s("div",L,[N,e(m,null,{default:t(()=>[e(a,{icon:"profile-add",name:"Inscription Client",identifier:"firstStep",visible:!0},{default:t(()=>[i(" First step ")]),_:1}),e(a,{name:"Validation Cresh",identifier:"secondStep",icon:"document-checked"},{default:t(()=>[i(" Second step ")]),_:1}),e(a,{name:"Validation Franfinance",icon:"upload",identifier:"thirdStep"},{default:t(()=>[i(" Third step ")]),_:1}),e(a,{name:"Signature Client",icon:"document-sign",identifier:"fourthStep"},{default:t(()=>[i(" fourth step ")]),_:1}),e(a,{name:"Transactions de test",icon:"transaction",identifier:"fifthStep"},{default:t(()=>[i(" fifth step ")]),_:1})]),_:1})]),s("div",O,[j,e(m,{"step-id":"thirdStep"},{default:t(()=>[e(a,{name:"first step",identifier:"firstStep"},{default:t(()=>[i(" First step ")]),_:1}),e(a,{name:"second step",identifier:"secondStep"},{default:t(()=>[i(" Second step ")]),_:1}),e(a,{name:"third step",identifier:"thirdStep",visible:!0},{default:t(()=>[i(" Third step ")]),_:1})]),_:1})]),s("div",z,[E,e(m,{"step-id":d.value},{default:t(()=>[e(a,{name:"first step",identifier:"firstStep","progression-percentage":90,visible:d.value==="firstStep"},{default:t(()=>[i(" First step "),s("div",M,[e(p,{onClick:o[0]||(o[0]=_(h=>d.value="secondStep",["prevent","stop"]))},{default:t(()=>[i(" Go next ")]),_:1})])]),_:1},8,["visible"]),e(a,{name:"second step",identifier:"secondStep",visible:d.value==="secondStep"},{default:t(()=>[i(" Second step "),s("div",q,[e(p,{color:"default",onClick:o[1]||(o[1]=_(h=>d.value="firstStep",["prevent","stop"])),style:{"margin-right":"15px"}},{default:t(()=>[i(" Go prev ")]),_:1}),e(p,{onClick:o[2]||(o[2]=_(h=>d.value="thirdStep",["prevent","stop"]))},{default:t(()=>[i(" Go next ")]),_:1})])]),_:1},8,["visible"]),e(a,{name:"third step",identifier:"thirdStep",visible:d.value==="thirdStep"},{default:t(()=>[i(" Third step "),s("div",D,[e(p,{color:"default",onClick:o[3]||(o[3]=_(h=>d.value="secondStep",["prevent","stop"]))},{default:t(()=>[i(" Go prev ")]),_:1})])]),_:1},8,["visible"])]),_:1},8,["step-id"])]),H,s("div",J,[K,e(S,{steps:[{text:"Informations de l'entreprise",selected:!0,id:"Informations de l'entreprise"},{text:"Contact",id:"Contact",selected:!1},{text:"Informations bancaires",id:"Informations bancaires",selected:!1},{text:"Livraison",id:"Livraison",selected:!1},{text:"Identifiant du client",id:"Identifiant du client",selected:!1},{text:"Bénéficiaires",id:"Bénéficiaires",selected:!1}]})]),s("div",P,[Q,e(S,{"selected-index":v.value,selectable:!0,steps:r,onSelect:b},null,8,["selected-index","steps"])]),R,s("div",U,[W,e(k,{steps:c},null,8,["steps"])]),s("div",X,[e(p,{onClick:C},{default:t(()=>[i("previous")]),_:1}),e(p,{onClick:I},{default:t(()=>[i("next")]),_:1})])])}}}),ee=G(Y,[["__scopeId","data-v-082f70f9"]]);export{ee as default};