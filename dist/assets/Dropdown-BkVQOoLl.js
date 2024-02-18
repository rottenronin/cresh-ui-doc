import{d as U,h as c,r as u,o as s,e as n,f as t,w as l,g as o,t as v,l as r,b as y,F as S,m as T}from"./index-kt3BPNUV.js";const x={class:"dropdown"},B={key:0},N={key:0},q={key:0},z={key:0},F=y("div",null," selected item ",-1),P={class:"search-input"},R={key:0},_="",A=`
    <CDropdown
      v-model="visible1"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `,E=`
    <CDropdown
      v-model="visible2"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
      :hovered="true"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `,L=`
    <CDropdown
      v-model="visible3"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
      v-slot="{ selectedItem }"
    >
      <div v-if="selectedItem">
        {{ selectedItem.key }}
      </div>
    </CDropdown>
  `,j=`
    <CDropdown
      class="button"
      v-model="visible4"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
    >
      <template #default="{ selectedItem }">
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
    </CDropdown>
  `,G=`
    <CDropdown
      class="button custom-content"
      v-model="visible5"
    >
      <template #default>
        <div>
          selected item
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          width="20"
          height="20"
          class="c-ml-20"
        />
      </template>
      <template #content>
        <div class="search-input">
          <CInput
            class="search-input"
            v-model="searchStr"
            bordered
            no-label
            :placeholder="'Rechercher une entité...'"
          />
          <div
            v-for="item in items"
            :key="item.value"
          >
            <c-checkbox
              v-model="item.checked"
              :label="item.label"
            />
          </div>
        </div>
      </template>
    </CDropdown>
  `,H=`
    <CDropdown
      class="button"
      v-model="visible6"
      :pre-selected-item="{
        key: 'key 3',
        value: 'value 3'
      }"
      :items="[{
        key: 'key 1',
        value: 'value 1'
      }, {
        key: 'key 2',
        value: 'value 2'
      }, {
        key: 'key 3',
        value: 'value 3'
      }]"
    >
      <template #default="{ selectedItem }">
        <div v-if="selectedItem">
          {{ selectedItem.key }}
        </div>
      </template>
      <template #unactive-icon>
        <TriangleDownIcon
          color="secondary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
      <template #active-icon>
        <TriangleUpIcon
          color="primary"
          :width="20"
          :height="20"
          class="c-ml-20"
        />
      </template>
    </CDropdown>
  `,O=U({__name:"Dropdown",setup(J){const k=c(!1),h=c(!1),f=c(!1),w=c(!1),b=c(!1),g=c(!1),C=[{checked:!1,label:"ABC",value:"abc"},{checked:!1,label:"BBC",value:"bbc"},{checked:!1,label:"CCC",value:"ccc"}];return(K,a)=>{const i=u("CDropdown"),d=u("CCodeSnippet"),p=u("TriangleDownIcon"),m=u("TriangleUpIcon"),V=u("CInput"),I=u("c-checkbox");return s(),n("div",x,[t(d,{snippet:A},{title:l(()=>[o(" c-dropdown ")]),description:l(()=>[o(" Utilisation basique d'un dropdown ")]),default:l(()=>[t(i,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),items:[{key:"key 1",value:"value 1"},{key:"key 2",value:"value 2"},{key:"key 3",value:"value 3"}]},{default:l(({selectedItem:e})=>[e?(s(),n("div",B,v(e.key),1)):r("",!0)]),_:1},8,["modelValue"])]),_:1}),t(d,{snippet:E},{title:l(()=>[o(" hovered ")]),description:l(()=>[o(" afficher le dropdown list avec mouse onhover ")]),default:l(()=>[t(i,{modelValue:h.value,"onUpdate:modelValue":a[1]||(a[1]=e=>h.value=e),items:[{key:"key 1",value:"value 1"},{key:"key 2",value:"value 2"},{key:"key 3",value:"value 3"}],hovered:!0},{default:l(({selectedItem:e})=>[e?(s(),n("div",N,v(e.key),1)):r("",!0)]),_:1},8,["modelValue"])]),_:1}),t(d,{snippet:L},{title:l(()=>[o(" position ")]),description:l(()=>[o(" Par defaut, le dropdown s'affiche en bas de `trigger`, aligné à gauche, s'il n'y a assez de place en bas et qu'il dispose suffisamment de place en haut de `trigger`, le dropdown se place au dessus de `trigger` dans ce cas, meme logique pour positionnement horizontal, s'il n'y a pas assez de place à droite, le dropdown se decale vers la gauche si l'emplacement se permet. ")]),default:l(()=>[t(i,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=e=>f.value=e),items:[{key:"key 1",value:"value 1"},{key:"key 2",value:"value 2"},{key:"key 3",value:"value 3"}]},{default:l(({selectedItem:e})=>[e?(s(),n("div",q,v(e.key),1)):r("",!0)]),_:1},8,["modelValue"])]),_:1}),t(d,{snippet:j},{title:l(()=>[o(" trigger style ")]),description:l(()=>[o(" Changer le style par défaut de trigger ")]),default:l(()=>[t(i,{class:"button",modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=e=>w.value=e),items:[{key:"key 1",value:"value 1"},{key:"key 2",value:"value 2"},{key:"key 3",value:"value 3"}]},{default:l(({selectedItem:e})=>[e?(s(),n("div",z,v(e.key),1)):r("",!0)]),"unactive-icon":l(()=>[t(p,{color:"secondary",width:20,height:20,class:"c-ml-20"})]),"active-icon":l(()=>[t(m,{color:"primary",width:20,height:20,class:"c-ml-20"})]),_:1},8,["modelValue"])]),_:1}),t(d,{snippet:G},{title:l(()=>[o(" custom content ")]),description:l(()=>[o(" Changer le contenu de dropdown ")]),default:l(()=>[t(i,{class:"button custom-content",modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=e=>b.value=e)},{default:l(()=>[F]),"unactive-icon":l(()=>[t(p,{color:"secondary",width:20,height:20,class:"c-ml-20"})]),"active-icon":l(()=>[t(m,{color:"primary",width:20,height:20,class:"c-ml-20"})]),content:l(()=>[y("div",P,[t(V,{class:"search-input",modelValue:_,"onUpdate:modelValue":a[4]||(a[4]=e=>_=e),bordered:"","no-label":"",placeholder:"Rechercher une entité...",name:"input"},null,8,["placeholder"]),(s(),n(S,null,T(C,e=>y("div",{key:e.value},[t(I,{modelValue:e.checked,"onUpdate:modelValue":D=>e.checked=D,label:e.label,name:"checkbox"},null,8,["modelValue","onUpdate:modelValue","label"])])),64))])]),_:1},8,["modelValue"])]),_:1}),t(d,{snippet:H},{title:l(()=>[o(" pre-selected ")]),description:l(()=>[o(" Pré-selectionner une valeur par défaut ")]),default:l(()=>[t(i,{class:"button",modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=e=>g.value=e),"pre-selected-item":{key:"key 3",value:"value 3"},items:[{key:"key 1",value:"value 1"},{key:"key 2",value:"value 2"},{key:"key 3",value:"value 3"}]},{default:l(({selectedItem:e})=>[e?(s(),n("div",R,v(e.key),1)):r("",!0)]),"unactive-icon":l(()=>[t(p,{color:"secondary",width:20,height:20,class:"c-ml-20"})]),"active-icon":l(()=>[t(m,{color:"primary",width:20,height:20,class:"c-ml-20"})]),_:1},8,["modelValue"])]),_:1})])}}});export{O as default};
