import{d as h,i as g,r as l,o as C,e as _,f as e,w as t,b as a,g as x,F as B}from"./index-kt3BPNUV.js";const J=a("h2",null,"Charts",-1),M=a("h3",null,"Single line chart",-1),m=a("h3",null,"Double line chart",-1),v=a("h3",null,"Bar chart",-1),A={class:"center"},k=a("h3",null,"Gradient prop",-1),w=a("h3",null,"Datasets prop",-1),F=a("h3",null,"Options prop",-1),D=`
  <BaseChart
      :type="'line'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="gradients2"
      :options="options"
      :gradients="gradients"
  />
`,W=`
  <BaseChart
      :type="'line'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="datasets"
      :options="options"
      :gradients="gradients"
  />
`,E=`
  <BaseChart
      :type="'bar'"
      :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
      :datasets="datasets2"
      :options="options"
      :gradients="gradients"
  />
`,I=`
  const gradients = [
    {
      y1: 450,
      offset1: 0,
      offset2: 0.4,
      offset3: 0.6,
      color1: 'rgba(64, 14, 201, 0.6)',
      color2: 'rgba(64, 14, 201, 0.2)',
      color3: 'rgba(64, 14, 201, 0.1)'
    },{
      y1: 250,
      offset1: 0,
      offset2: 0.4,
      offset3: 0.8,
      color1: 'rgba(52, 156, 231, 0.6)',
      color2: 'rgba(52, 156, 231, 0.5)',
      color3: 'rgba(52, 156, 231, 0.1)'
    }
  ]
`,S=`
  const datasets: ChartDataset[] = [{
    label: 'Axe 1',
    pointBackgroundColor: 'white',
    fill: true,
    borderWidth: 2,
    borderColor: '#400EC9',
    data: [50, 55, 80, 81, 54, 50, 70],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }, {
    label: 'Axe 2',
    pointBackgroundColor: 'white',
    borderWidth: 2,
    fill: true,
    borderColor: '#349CE7',
    data: [10, 25, 30, 41, 54, 80, 90],
    cubicInterpolationMode: 'default',
    tension: 0.4,
  }]
`,Z=`
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'value',
        },
      },
    },
  }
`,L=`
  <div class="center">
    <CButton
        :color="'secondary'"
        @click="updateData"
    >
      Update Data
    </CButton>
  </div>
  <BaseChart
      :type="'line'"
      :labels="data.labels"
      :datasets="data.datasets"
      :options="options3"
      :gradients="gradients2"
  />
`,U=h({__name:"Chart",setup(N){const r=g({labels:["January","February","March","April","May","June","July"],datasets:[{label:"before update",pointBackgroundColor:"white",fill:!0,borderWidth:2,borderColor:"#400EC9",data:[50,55,80,81,54,50,70],cubicInterpolationMode:"default",tension:.4}]});function p(){r.labels=["Yellow","Green","Orange","Blue","Black","White","Red"],r.datasets=[{label:"after update",pointBackgroundColor:"white",fill:!0,borderWidth:4,borderColor:"#0ec927",data:[5050,5065,1300,8021,1504,6500,2700],cubicInterpolationMode:"default",tension:.4}]}const u=[{y1:450,offset1:0,offset2:.4,offset3:.6,color1:"rgba(64, 14, 201, 0.6)",color2:"rgba(64, 14, 201, 0.2)",color3:"rgba(64, 14, 201, 0.1)"},{y1:250,offset1:0,offset2:.4,offset3:.8,color1:"rgba(52, 156, 231, 0.6)",color2:"rgba(52, 156, 231, 0.5)",color3:"rgba(52, 156, 231, 0.1)"}],n=[{y1:450,offset1:0,offset2:.4,offset3:.6,color1:"rgba(64, 14, 201, 0.6)",color2:"rgba(64, 14, 201, 0.2)",color3:"rgba(64, 14, 201, 0.1)"}],c=[{label:"Axe 1",pointBackgroundColor:"white",fill:!0,borderWidth:2,borderColor:"#400EC9",data:[50,55,80,81,54,50,70],cubicInterpolationMode:"default",tension:.4},{label:"Axe 2",pointBackgroundColor:"white",borderWidth:2,fill:!0,borderColor:"#349CE7",data:[10,25,30,41,54,80,90],cubicInterpolationMode:"default",tension:.4}],i=[{label:"Axe 3",pointBackgroundColor:"white",fill:!0,borderWidth:2,borderColor:"#400EC9",data:[50,55,80,81,54,50,70],cubicInterpolationMode:"default",tension:.4}],b={responsive:!0,plugins:{title:{display:!0,text:"Single Line Chart"},tooltip:{mode:"index",intersect:!1}},hover:{mode:"nearest",intersect:!0},interaction:{intersect:!1},scales:{x:{display:!0},y:{beginAtZero:!0,display:!0,title:{display:!0,text:"value"}}}},f={responsive:!0,plugins:{title:{display:!0,text:"Dual Line Chart"},tooltip:{mode:"index",intersect:!1}},hover:{mode:"nearest",intersect:!0},interaction:{intersect:!1},scales:{x:{display:!0},y:{beginAtZero:!0,display:!0,title:{display:!0,text:"value"}}}},d={responsive:!0,plugins:{title:{display:!0,text:"Bar Chart"},tooltip:{mode:"index",intersect:!1}},hover:{mode:"nearest",intersect:!0},interaction:{intersect:!1},scales:{x:{display:!0},y:{beginAtZero:!0,display:!0,title:{display:!0,text:"value"}}}};return(O,V)=>{const s=l("BaseChart"),o=l("CCodeSnippet"),y=l("CButton");return C(),_(B,null,[J,e(o,{snippet:D},{default:t(()=>[M,e(s,{type:"line",labels:["January","February","March","April","May","June","July"],datasets:i,options:b,gradients:n})]),_:1}),e(o,{snippet:W},{default:t(()=>[m,e(s,{type:"line",labels:["January","February","March","April","May","June","July"],datasets:c,options:f,gradients:u})]),_:1}),e(o,{snippet:E},{default:t(()=>[v,e(s,{type:"bar",labels:["January","February","March","April","May","June","July"],datasets:i,options:d,gradients:n})]),_:1}),e(o,{snippet:L},{default:t(()=>[a("div",A,[e(y,{color:"secondary",onClick:p},{default:t(()=>[x(" Update Data ")]),_:1})]),e(s,{type:"line",labels:r.labels,datasets:r.datasets,options:d,gradients:n},null,8,["labels","datasets"])]),_:1}),e(o,{snippet:I},{default:t(()=>[k]),_:1}),e(o,{snippet:S},{default:t(()=>[w]),_:1}),e(o,{snippet:Z},{default:t(()=>[F]),_:1})],64)}}});export{U as default};
