import{d as r,h as p,r as i,o as _,e as h,f as n,w as e,g as l,b as t,t as g,F as w}from"./index-kt3BPNUV.js";const S=t("h2",null," Switch button example ",-1),m={class:"switch-page"},C=t("h3",null,"Switch avec input",-1),v=t("div",null,"Ajouter les attributs:",-1),b=t("code",null,':checked="toggle" @switchState=" (state) => toggle = state"',-1),f=t("br",null,null,-1),k=t("div",null,"la variable `toggle` étant permutée par le bouton",-1),B=t("h3",null,"Switch disable",-1),x=t("code",null,':disabled="true"',-1),N=`
      <CSwitch
        :checked="toggle"
        @switchState="
        (state) => toggle = state"
      />
`,V=`
    <CSwitch :disabled="true" />
`,y=r({__name:"SwitchButton",setup(j){const o=p(!0);return(A,s)=>{const a=i("CSwitch"),d=i("CButton"),c=i("CCodeSnippet");return _(),h(w,null,[S,n(c,{snippet:N},{title:e(()=>[C]),description:e(()=>[v,b,l(),f,k]),default:e(()=>[t("div",m,[n(a,{checked:o.value,onSwitchState:s[0]||(s[0]=u=>o.value=u)},null,8,["checked"]),t("div",null,[l("état du switch: "),t("strong",null,g(o.value),1)]),n(d,{onClick:s[1]||(s[1]=u=>o.value=!o.value)},{default:e(()=>[l("Permuter le switch")]),_:1})])]),_:1}),n(c,{snippet:V},{title:e(()=>[B]),description:e(()=>[l("Ajouter l'attribut: "),x]),default:e(()=>[n(a,{disabled:!0})]),_:1})],64)}}});export{y as default};
