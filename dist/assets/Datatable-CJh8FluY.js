import{d as p,i as _,u as e,r as i,o as h,e as C,f as t,w as a,g as o,F as f,b as n}from"./index-kt3BPNUV.js";const b=n("h2",null,"C-Datatable",-1),g=n("h3",null,"basic utilisation",-1),v=n("br",null,null,-1),k=n("h3",null,"custom pages",-1),x=`
  <CDatatable
    :items="items"
    :headers="headers"
  />
`,D=`
  <CDatatable
    :items="state.items"
    :headers="headers"
    :pages="[5, 100, 200]"
    :items-per-page="100"
  />
`,S=p({__name:"Datatable",setup(B){const s=_({items:Array.from({length:10}).map(()=>({id:e.uuidv4(),name:e.uuidv4(),email:`${e.uuidv4()}@cresh.test.io`}))}),r=[{text:"#ID",key:"id",align:"start",sortable:!0},{text:"Nom",key:"name",align:"start",sortable:!0},{text:"Email",key:"email",align:"start",sortable:!0,sortOrder:"desc"}];function c(){s.items.push({id:e.uuidv4(),name:e.uuidv4(),email:`${e.uuidv4()}@cresh.test.io`})}function d(){s.items.splice(s.items.length-1,1)}return(I,y)=>{const l=i("CButton"),u=i("CDatatable"),m=i("CCodeSnippet");return h(),C(f,null,[b,g,t(m,{snippet:x},{default:a(()=>[t(l,{onClick:c},{default:a(()=>[o(" Insérer un nouveau item ")]),_:1}),v,t(l,{color:"red",onClick:d},{default:a(()=>[o(" Supprimer le dernier ")]),_:1}),t(u,{items:s.items,headers:r},null,8,["items"])]),_:1}),k,o(" par défaut [5, 10, 15] "),t(m,{snippet:D},{default:a(()=>[t(u,{items:s.items,headers:r,pages:[5,100,200],"items-per-page":100},null,8,["items"])]),_:1})],64)}}});export{S as default};
