import{c as h,b as g}from"./index.esm-pGSbMFc_.js";import{d as B,h as i,i as D,u as I,q,r as v,o as x,e as N,b as u,f as l,w as e,g as s,t as d,l as S}from"./index-kt3BPNUV.js";const E={class:"examples"},H=u("h2",null,"Exemples",-1),L={class:"inputs"},k={key:0,class:"custom-errors-bloc"},A=u("span",null," Chiffre d'affaires ",-1),$=u("span",{style:{"text-transform":"lowercase"}}," (en chiffres) ",-1),Y=u("span",null," Label + prefix icon ",-1),z=u("span",{style:{"text-transform":"lowercase"}}," (en chiffres) ",-1),P=u("span",null," Label + suffix icon ",-1),R=u("span",{style:{"text-transform":"lowercase"}}," (en chiffres) ",-1),T=`
  <CInput
    v-model="model3.username"
    label="username"
    name="inputFieldName2"
    class="username"
    :autocomplete="'off'"
    :required="true"
    :error-message="errors && errors.username ? errors.username : ''"
    @blur="onModel3ValueChange"
  >
    <template
      #error="{ errorMessage }"
    >
      <div
        v-if="errorMessage"
        class="custom-errors-bloc"
      >
        custom errors message
      </div>
    </template>
  </CInput>
`,Z=`
  <CInput
    v-model="model5.firstname"
    label="first name"
    name="inputFieldName"
    class="first-name"
    :autocomplete="'off'"
    :error-message="errors && errors.firstname ? errors.firstname : ''"
    @blur="onModel5ValueChange"
  >
    <template
      #error="{ errorMessage }"
    >
      <div
        v-if="errorMessage"
        class="custom-errors-bloc"
      >
        custom error message : {{ errorMessage }}
      </div>
    </template>
  </CInput>
`,K=B({__name:"Input",setup(j){const b=i(""),V=i(""),p=D({username:""}),c=i({firstname:""}),o=i(""),C=i(""),{validate:F}=I.yupHelper.useYupHelper({fields:q(p),schema:h({username:g().required()})}),n=i();async function y(){const{errors:f}=await F();n.value=f}const{validate:M}=I.yupHelper.useYupHelper({fields:c,schema:h({firstname:g().matches(/^[a-zA-ZÀ-ÿ-.']*$/)})});async function U(){const{errors:f}=await M();n.value=f,console.log("-- errors",n)}return(f,t)=>{const m=v("CInput"),r=v("CCodeSnippet"),_=v("CIcon"),w=v("CDatetimeInput");return x(),N("div",E,[H,u("div",L,[l(r,{snippet:`
        <CInput
          name='c-input1'
          v-model='model1'
          class='custom-class'
          label='username'
        />
      `},{title:e(()=>[s(" c-input ")]),description:e(()=>[s(" Utilisation basique d'un input ")]),default:e(()=>[l(m,{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=a=>b.value=a),name:"c-input1",class:"custom-class",label:"username"},null,8,["modelValue"]),s(" model: "+d(b.value)+" ",1)]),_:1}),l(r,{snippet:`
        <CInput
          name='c-input2'
          v-model='model2'
          class='first-name'
          label='username'
          :autocomplete='off'
          bordered
        />
      `},{title:e(()=>[s(" boredered prop ")]),description:e(()=>[s(" boredered = true ")]),default:e(()=>[l(m,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=a=>V.value=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off",bordered:""},null,8,["modelValue"]),s(" model: "+d(V.value)+" ",1)]),_:1}),l(r,{snippet:T},{title:e(()=>[s(" validation schema ")]),description:e(()=>[s(" yup validation schema ")]),default:e(()=>[l(m,{modelValue:p.username,"onUpdate:modelValue":t[2]||(t[2]=a=>p.username=a),label:"username",name:"inputFieldName2",class:"username",autocomplete:"off",required:!0,"error-message":n.value&&n.value.username?n.value.username:"",onBlur:y},null,8,["modelValue","error-message"]),s(" model: "+d(p)+" ",1)]),_:1}),l(r,{snippet:Z},{title:e(()=>[s(" custom error message template ")]),description:e(()=>[s(" override default error message ")]),default:e(()=>[l(m,{modelValue:c.value.firstname,"onUpdate:modelValue":t[3]||(t[3]=a=>c.value.firstname=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off","error-message":n.value&&n.value.firstname?n.value.firstname:"",onBlur:U},{error:e(({errorMessage:a})=>[a?(x(),N("div",k," custom error message : "+d(a),1)):S("",!0)]),_:1},8,["modelValue","error-message"]),s(" model: "+d(c.value)+" ",1)]),_:1}),l(r,{snippet:`
        <CInput
          v-model='model6'
          label='username'
          name='inputFieldName3'
          class='username'
          placeholder='test placeholder'
        />
      `},{title:e(()=>[s(" Placeholder ")]),default:e(()=>[l(m,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=a=>o.value=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off",placeholder:"test placeholder"},null,8,["modelValue"]),s(" model: "+d(o.value)+" ",1)]),_:1}),l(r,{snippet:`
        <CInput
          v-model='model7'
          label='username'
          name='inputFieldName3'
          class='username'
        />
      `},{title:e(()=>[s(" custom label ")]),default:e(()=>[l(m,{modelValue:o.value,"onUpdate:modelValue":t[5]||(t[5]=a=>o.value=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off"},{label:e(()=>[A,$]),_:1},8,["modelValue"])]),_:1}),l(r,{snippet:`
        <CInput
          v-model='model6'
          label='first name'
          name='inputFieldName'
          class='first-name'
          :autocomplete='off'
        >
          <template #label>
            <span>
              Label + prefix icon
            </span>
            <span style='text-transform: lowercase;'>
              (en chiffres)
            </span>
          </template>
          <template #prefix>
            <CIcon name='shop' />
          </template>
        </CInput>
      `},{title:e(()=>[s(" Affichage personnalisé de label avec préfixe icon ")]),default:e(()=>[l(m,{modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=a=>o.value=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off"},{label:e(()=>[Y,z]),prefix:e(()=>[l(_,{name:"shop"})]),_:1},8,["modelValue"])]),_:1}),l(r,{snippet:`
        <CInput
          v-model='model6'
          label='first name'
          name='inputFieldName'
          class='first-name'
          :autocomplete='off'
        >
          <template #label>
            <span>
              Label + suffix icon
            </span>
            <span style='text-transform: lowercase;'>
              (en chiffres)
            </span>
          </template>
          <template #prefix>
            <CIcon name='shop-circle' />
          </template>
        </CInput>
      `},{title:e(()=>[s(" Affichage personnalisé de label avec préfixe icon ")]),default:e(()=>[l(m,{modelValue:o.value,"onUpdate:modelValue":t[7]||(t[7]=a=>o.value=a),label:"first name",name:"inputFieldName",class:"first-name",autocomplete:"off"},{label:e(()=>[P,R]),suffix:e(()=>[l(_,{name:"shop-circle"})]),_:1},8,["modelValue"])]),_:1})]),l(r,{snippet:`
        <CDatetimeInput
          v-model='model7'
          label='Date de naissance'
          name='inputBirthdate'
          class='birthdate'
          :autocomplete='off'
        />
      `},{default:e(()=>[l(w,{modelValue:C.value,"onUpdate:modelValue":t[8]||(t[8]=a=>C.value=a),label:"Date de naissance",name:"inputBirthdate",class:"birthdate",autocomplete:"off"},null,8,["modelValue"])]),_:1})])}}});export{K as default};
