import{d as u,r as l,o as a,e as p,f as e,w as t,g as o,F as d,b as c}from"./index-kt3BPNUV.js";const r=c("h2",null,"C-button",-1),f=`
    <CButton>
      classic
    </CButton>
`,_=`
    <CButton
      outlined
    >
      outlined
    </CButton>
`,C=`
    <CButton>
      <template #prefix>
        <CheckCircleIcon
          color="white"
        />
      </template>
      with prefif icon
    </CButton>
`,B=`
    <CButton
      disabled
    >
      disabled
    </CButton>
`,m=`
    <CButton
      :is-loading="true"
    >
      loading
    </CButton>
`,h=`
    <CButton
      :color="'#1fb95d'"
    >
      colored
    </CButton>
`,x=`
    <CButton
      text
    >
      just text
    </CButton>
`,b=`
    <CButton
      slim
    >
      slim
    </CButton>
`,I=u({__name:"Button",setup(g){return(w,k)=>{const n=l("CButton"),s=l("CCodeSnippet"),i=l("CheckCircleIcon");return a(),p(d,null,[r,e(s,{snippet:f},{description:t(()=>[o(" There are different colors of buttons, primary/secondary/tertiary/default... ")]),default:t(()=>[e(n,null,{default:t(()=>[o(" classic ")]),_:1}),e(n,{color:"default"},{default:t(()=>[o(" default ")]),_:1})]),_:1}),e(s,{snippet:_},{default:t(()=>[e(n,{outlined:""},{default:t(()=>[o(" outlined ")]),_:1})]),_:1}),e(s,{snippet:C},{default:t(()=>[e(n,null,{prefix:t(()=>[e(i,{color:"white"})]),default:t(()=>[o(" with prefix icon ")]),_:1})]),_:1}),e(s,{snippet:B},{default:t(()=>[e(n,{disabled:""},{default:t(()=>[o(" disabled ")]),_:1})]),_:1}),e(s,{snippet:m},{default:t(()=>[e(n,{"is-loading":!0},{default:t(()=>[o(" loading ")]),_:1})]),_:1}),e(s,{snippet:h},{default:t(()=>[e(n,{color:"#1fb95d"},{default:t(()=>[o(" colored ")]),_:1})]),_:1}),e(s,{snippet:x},{default:t(()=>[e(n,{text:""},{default:t(()=>[o(" just text ")]),_:1})]),_:1}),e(s,{snippet:b},{default:t(()=>[e(n,{slim:""},{default:t(()=>[o(" slim ")]),_:1})]),_:1})],64)}}});export{I as default};
