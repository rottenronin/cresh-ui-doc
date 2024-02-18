import{d as f,h as m,i as v,r as u,o as b,e as V,f as l,w as o,g as p,t as C,b as r}from"./index-kt3BPNUV.js";const w={class:"select examples"},_=r("h2",null,"Basic usecase",-1),x=r("h2",null,"With :modelValue and @update:modelValue",-1),M=`
<CSelect
  :options="options1"
  v-model="selectModel1"
  :label="'Marque'"
  name="cselect1"
/>`,S=`
  <CSelect
    :name="'online'"
    :options="[{
      name: 'Frais partagé avec le client',
      value: 'feesEnabled'
    }, {
      name: 'Frais offerts au client',
      value: 'feesDisabled'
    }]"
    required
    :label="'En ligne'"
    :modelValue="bnplInstalments.web.x3.fees ? 'feesEnabled' : 'feesDisabled'"
    @update:modelValue="value => bnplInstalments.web.x3.fees = value === 'feesEnabled'"
    class="dropdown"
  />
`,h=`
  <CSelect
    :name="'civility'"
    :options="[{
      name: 'Mr',
      value: 'mr'
    }, {
      name: 'Ms',
      value: 'ms'
    }]"
    required
    :label="'Civilité'"
    class="dropdown"
    v-model="civility"
  />
`,y=`
  <CSelect
    :name="'civility'"
    :options="[{
      name: 'Mr',
      value: 'mr'
    }, {
      name: 'Ms',
      value: 'ms'
    }]"
    :placeholder="'selectionner mr/ms'"
    required
    :label="'Civilité'"
    class="dropdown"
    v-model="civility"
  />
`,B=f({__name:"Select",setup(E){const c=[{value:"gucci",name:"Gucci"},{value:"channel",name:"Channel"},{value:"sephora",name:"Sephora"}],i=m("sephora"),s=m(),d=v({bnpl:{instalments:{web:{x3:{enabled:!1,fees:!1},x4:{enabled:!1,fees:!1}},store:{x3:{enabled:!1,fees:!1},x4:{enabled:!1,fees:!1}}}}}.bnpl.instalments);return(g,e)=>{const n=u("CSelect"),t=u("CCodeSnippet");return b(),V("div",w,[_,l(t,{snippet:M},{default:o(()=>[l(n,{options:c,modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),label:"Marque",name:"cselect1"},null,8,["modelValue"])]),_:1}),x,l(t,{snippet:S},{default:o(()=>[l(n,{name:"online",options:[{name:"Frais partagé avec le client",value:"feesEnabled"},{name:"Frais offerts au client",value:"feesDisabled"}],required:"",label:"En ligne",modelValue:d.web.x3.fees?"feesEnabled":"feesDisabled","onUpdate:modelValue":e[1]||(e[1]=a=>d.web.x3.fees=a==="feesEnabled"),class:"dropdown"},null,8,["modelValue"])]),_:1}),l(t,{snippet:h},{default:o(()=>[l(n,{name:"civility",options:[{name:"Mr",value:"mr"},{name:"Ms",value:"ms"}],required:"",label:"Civilité",class:"dropdown",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value=a)},null,8,["modelValue"]),p(" selected civility: "+C(s.value),1)]),_:1}),l(t,{snippet:y},{default:o(()=>[l(n,{name:"civility",options:[{name:"Mr",value:"mr"},{name:"Ms",value:"ms"}],placeholder:"selectionner mr/ms",required:"",label:"Civilité",class:"dropdown",modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value=a)},null,8,["modelValue"]),p(" with placeholder ")]),_:1})])}}});export{B as default};
