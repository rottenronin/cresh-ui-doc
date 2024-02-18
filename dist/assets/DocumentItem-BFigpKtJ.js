import{d,r as n,o as c,e as i,f as e,w as a,b as l}from"./index-kt3BPNUV.js";const s={class:"document-item-page"},r=l("h3",null,"Utilisation basique",-1),m=l("h3",null,"Avec les actions ['view', 'download', 'upload', 'validate']",-1),_=l("h3",null,"Approved flag",-1),u=`
  <CDocumentItem
    label="Carte ID"
    link="http://via.placeholder.com/ID+CARD"
  />
`,p=`
  <CDocumentItem
    approved
    label="Carte ID"
    link="http://via.placeholder.com/ID+CARD"
    :actions="['download', 'read', 'upload', 'validate']"
  />
`,I=d({__name:"DocumentItem",setup(C){return(D,h)=>{const t=n("CDocumentItem"),o=n("CCodeSnippet");return c(),i("div",s,[r,e(o,{snippet:u},{default:a(()=>[e(t,{label:"Carte ID",link:"http://via.placeholder.com/ID+CARD"})]),_:1}),m,e(o,{snippet:p},{default:a(()=>[e(t,{label:"Carte ID",link:"http://via.placeholder.com/ID+CARD",actions:["download","read","upload","validate"]})]),_:1}),_,e(o,{snippet:p},{default:a(()=>[e(t,{label:"Carte ID",link:"http://via.placeholder.com/ID+CARD",actions:["download","read","upload","validate"],approved:!0})]),_:1})])}}});export{I as default};
