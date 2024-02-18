import{d as C,i as D,j as v,r as p,o as x,e as _,f as o,w as i,k as r,g as m,b as c}from"./index-kt3BPNUV.js";const k={class:"document-viewer-page"},I=c("h3",null,"afficher une image",-1),N=c("h3",null,"afficher un pdf",-1),y=c("h3",null,"navigrer entre plusieur images/pdfs",-1),B={class:"header-actions"},U=c("span",null," Refresh ",-1),P=`
  <CDocumentViewer
    hide-arrows
    v-model="state.visible"
    :document="state.document1"
  />
`,f=`
  <CDocumentViewer
    hide-arrows
    v-model="state.visible2"
    :document="state.document2"
  />
`,T=`
  <CDocumentViewer
    hide-arrows
    v-model="state.visible4"
    :document="state.document4"
  />
`,R=`
  <CDocumentViewer
    v-model="state.visible5"
    :document="state.document2"
    hide-arrows
  >
    <div class="header-actions">
      <CIcon
        name="loader"
        :width="20"
        :height="20"
      />
      <span>
        Refresh
      </span>
    </div>
  </CDocumentViewer>
`,j=C({__name:"DocumentViewer",setup(E){const e=D({visible1:!1,document1:{link:"https://picsum.photos/seed/picsum/200/300",label:"paysage image",id:"paysageImage"},visible2:!1,document2:{link:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",label:"dummy pdf",id:"dummyPdf",extension:"pdf"},visible3:!1,document3:{link:"https://picsum.photos/500/500",label:"random image",id:"randomImage"},document4:{link:"https://invalid-imageurl",label:"invalid image",id:"invalidImage"},visible4:!1,visible5:!1,currentDocument:void 0}),d=v(()=>[e.document1,e.document2,e.document3]);e.currentDocument=d.value[0];const b=v(()=>d.value.findIndex(t=>{var n;return t.id===((n=e.currentDocument)==null?void 0:n.id)})+1!==d.value.length),w=v(()=>!(d.value.findIndex(t=>{var n;return t.id===((n=e.currentDocument)==null?void 0:n.id)})-1<0));function h(){const l=d.value.findIndex(t=>{var n;return t.id===((n=e.currentDocument)==null?void 0:n.id)});l>-1&&(e.currentDocument=d.value[l+1])}function g(){const l=d.value.findIndex(t=>{var n;return t.id===((n=e.currentDocument)==null?void 0:n.id)});l-1>=0&&(e.currentDocument=d.value[l-1])}return(l,t)=>{const n=p("CButton"),u=p("CDocumentViewer"),a=p("CCodeSnippet"),V=p("CIcon");return x(),_("div",k,[I,o(a,{snippet:P},{default:i(()=>[o(n,{onClick:t[0]||(t[0]=r(()=>e.visible1=!e.visible1,["prevent","stop"]))},{default:i(()=>[m(" Toggle viewer 1 ")]),_:1}),o(u,{"hide-arrows":"",modelValue:e.visible1,"onUpdate:modelValue":t[1]||(t[1]=s=>e.visible1=s),document:e.document1},null,8,["modelValue","document"])]),_:1}),N,o(a,{snippet:f},{default:i(()=>[o(n,{onClick:t[2]||(t[2]=r(()=>e.visible2=!e.visible2,["prevent","stop"]))},{default:i(()=>[m(" Toggle viewer 2 ")]),_:1}),o(u,{"hide-arrows":"",modelValue:e.visible2,"onUpdate:modelValue":t[3]||(t[3]=s=>e.visible2=s),document:e.document2},null,8,["modelValue","document"])]),_:1}),y,o(a,{snippet:f},{default:i(()=>[o(n,{onClick:t[4]||(t[4]=r(()=>e.visible3=!e.visible3,["prevent","stop"]))},{default:i(()=>[m(" Toggle viewer 3 ")]),_:1}),o(u,{modelValue:e.visible3,"onUpdate:modelValue":t[5]||(t[5]=s=>e.visible3=s),document:e.currentDocument,"hide-right-arrow":!b.value,"hide-left-arrow":!w.value,onNext:h,onPrev:g},null,8,["modelValue","document","hide-right-arrow","hide-left-arrow"])]),_:1}),o(a,{snippet:T},{default:i(()=>[o(n,{onClick:t[6]||(t[6]=r(()=>e.visible4=!e.visible4,["prevent","stop"]))},{default:i(()=>[m(" affichage de message d'erreur ")]),_:1}),o(u,{modelValue:e.visible4,"onUpdate:modelValue":t[7]||(t[7]=s=>e.visible4=s),document:e.document4,"hide-arrows":""},null,8,["modelValue","document"])]),_:1}),o(a,{snippet:R},{default:i(()=>[o(n,{onClick:t[8]||(t[8]=r(()=>e.visible5=!e.visible5,["prevent","stop"]))},{default:i(()=>[m(" header actions ")]),_:1}),o(u,{modelValue:e.visible5,"onUpdate:modelValue":t[9]||(t[9]=s=>e.visible5=s),document:e.document2,"hide-arrows":""},{"header-actions":i(()=>[c("div",B,[o(V,{name:"loader",width:24,height:24}),U])]),_:1},8,["modelValue","document"])]),_:1})])}}});export{j as default};
