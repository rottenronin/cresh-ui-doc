import{d as m,h as u,r,o as p,e as v,f as t,w as a,b as e,g as d,t as c,F as h}from"./index-kt3BPNUV.js";const _=e("h2",null,"Slider",-1),C=e("h3",null,"1. Slider component",-1),S=e("h3",null,"2. Slider disabled",-1),g=`
  <CSlider
    :min="6"
    :max="60"
    :value="55"
    @change-event="(value) => changeEvent = value"
  >
    <template #min>
      {{ $t('translate.slider.month') }}
    </template>

    <template #max>
      {{ $t('translate.slider.month') }}
    </template>
  </CSlider>`,x=`
  <CSlider
    :min="6"
    :max="60"
    :value="55"
    @change-event="(value) => changeEvent = value"
    :is-disabled="true"
  />
`,k=m({__name:"Slider",setup(f){const l=u(55);return(E,n)=>{const o=r("CSlider"),i=r("CCodeSnippet");return p(),v(h,null,[_,C,t(i,{snippet:g},{default:a(()=>[e("div",null,[t(o,{min:0,max:100,value:55,onChangeEvent:n[0]||(n[0]=s=>l.value=s),markers:[0,10,20,30,40,50,60,70,80,90,100]},{min:a(()=>[d(" 6 months ")]),max:a(()=>[d(" 60 months ")]),_:1}),e("span",null,"change event: "+c(l.value),1)])]),_:1}),S,t(i,{snippet:x},{default:a(()=>[e("div",null,[t(o,{min:6,max:60,value:55,onChangeEvent:n[1]||(n[1]=s=>l.value=s),"is-disabled":!0})])]),_:1})],64)}}});export{k as default};
