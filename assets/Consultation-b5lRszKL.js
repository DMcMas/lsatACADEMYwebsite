import{j as e,I as s}from"./index-sHrzRqOP.js";import{d as a,u as h,f as g}from"./vendor-sF-TG3IY.js";import{e as y}from"./index-DfBlkqaH.js";const f=()=>{const[i,m]=a.useState({name:"",email:"",message:""}),[o,l]=a.useState(!1),[r,t]=a.useState(""),d=a.useRef(Date.now()),p=n=>{m({...i,[n.target.name]:n.target.value})},u=async n=>{if(n.preventDefault(),r||Date.now()-d.current<3e3){l(!0);return}try{const c=await y.sendForm("service_0yhiz5p","template_bpp5mkj",n.target,"vAlH0oPhePwpjdMFK");console.log("SUCCESS!",c.status,c.text),l(!0),window._hsq=window._hsq||[],window._hsq.push(["trackEvent",{id:"contact_form_submission",value:"Form submitted with data",name:i.name,email:i.email}])}catch(c){console.log("FAILED...",c)}},x=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u,children:[e.jsx("h2",{children:"Get in Touch"}),e.jsxs("div",{className:"input",children:[e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"name",children:[e.jsx("label",{htmlFor:"name",children:"Full Name"}),e.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Enter your full name",value:i.name,onChange:p,required:!0})]}),e.jsxs("div",{className:"email",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:i.email,onChange:p,required:!0})]})]}),e.jsxs("div",{className:"message",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",placeholder:"Write your message here",value:i.message,onChange:p,required:!0})]})]}),e.jsx("input",{type:"text",name:"website",tabIndex:-1,autoComplete:"off",value:r,onChange:n=>t(n.target.value),style:{position:"absolute",left:"-9999px",width:1,height:1,opacity:0},"aria-hidden":"true"}),e.jsx("button",{type:"submit",children:"Send"})]}),o&&e.jsx("div",{className:"pop-up-modal",id:"popup",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("h2",{children:"Thank you for reaching out to LSAT ACADEMY!"}),e.jsx("p",{children:"We’ve received your message and will get back to you shortly."}),e.jsx("button",{onClick:x,children:"Close"})]})})]})},v=()=>{h();const[i,m]=a.useState(!1),[o,l]=a.useState(!1),r=a.useRef(null);return a.useEffect(()=>{const t=new IntersectionObserver(([d])=>{d.isIntersecting&&(l(!0),t.disconnect())},{rootMargin:"400px"});return r.current&&t.observe(r.current),()=>t.disconnect()},[]),a.useEffect(()=>{if(!o)return;const t=document.createElement("script");return t.src="https://assets.calendly.com/assets/external/widget.js",t.async=!0,t.onload=()=>{m(!0)},document.body.appendChild(t),()=>{t.parentNode&&t.parentNode.removeChild(t)}},[o]),a.useEffect(()=>{const t=document.createElement("script");return t.src="https://embed.reddit.com/widgets.js",t.async=!0,t.charset="UTF-8",document.body.appendChild(t),()=>{t.parentNode&&t.parentNode.removeChild(t)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx("title",{children:"Book a Free LSAT Consultation | LSAT Academy"}),e.jsx("meta",{name:"description",content:"Schedule your free 1-hour LSAT consultation with David McMaster. Discuss your goals, get personalized advice, and find out if private tutoring is right for you."}),e.jsx("link",{rel:"canonical",href:"https://www.lsat.academy/consultation"}),e.jsx("meta",{property:"og:title",content:"Book a Free LSAT Consultation | LSAT Academy"}),e.jsx("meta",{property:"og:description",content:"Schedule your free 1-hour LSAT consultation with David McMaster. Discuss your goals, get personalized advice, and find out if private tutoring is right for you."}),e.jsx("meta",{property:"og:url",content:"https://www.lsat.academy/consultation"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{name:"twitter:title",content:"Book a Free LSAT Consultation | LSAT Academy"}),e.jsx("meta",{name:"twitter:description",content:"Schedule your free 1-hour LSAT consultation with David McMaster. Discuss your goals, get personalized advice, and find out if private tutoring is right for you."}),e.jsx("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lsat.academy/" },
              { "@type": "ListItem", "position": 2, "name": "Free Consultation", "item": "https://www.lsat.academy/consultation" }
            ]
          }
        `})]}),e.jsx("style",{children:`
        :root {
          --myblue: #1a3a52;
          --mylightblue: #2e5c8a;
          --bree: 'Bree Serif', serif;
          --poppins: 'Poppins', sans-serif;
        }

        .pattern-section {
          background: linear-gradient(135deg, var(--myblue) 0%, var(--mylightblue) 100%);
          padding: 3rem 2rem;
          border-radius: 12px;
          margin: 3rem auto;
          max-width: 900px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .pattern-section h3 {
          margin-bottom: 0.75rem;
          color: #ffffff;
          font-size: 2rem;
          font-weight: 100;
          font-family: var(--bree);
          letter-spacing: 0.5px;
        }

        .pattern-list {
          list-style: none;
          padding: 0;
          margin: 2rem auto;
          max-width: 700px;
          text-align: left;
        }

        .pattern-list li {
          padding: 0.4rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: #ffffff;
          font-size: 1rem;
          font-family: var(--poppins);
        }

        .pattern-list li:before {
          content: "✓";
          color: #e8f0fe;
          font-weight: bold;
          font-size: 1.2rem;
          position: absolute;
          left: 0;
          top: 0.2rem;
        }

        @media (max-width: 768px) {
          .pattern-section {
            padding: 2rem 1.5rem;
            margin: 2rem 1rem;
          }

          .pattern-section h3 {
            font-size: 1.6rem;
          }

          .pattern-list li {
            padding-left: 1.25rem;
            font-size: 0.95rem;
          }
        }
      `}),e.jsxs("main",{className:"consultation max padding spacer",children:[e.jsx("h1",{style:{fontFamily:"var(--bree)",textAlign:"center",fontSize:"2.8rem",fontWeight:100,color:"var(--myblue)",lineHeight:1.3},children:"LSAT Academy Consultations"}),e.jsxs("div",{className:"pattern-section",children:[e.jsx("h3",{children:"Take advantage of this free LSAT consultation if:"}),e.jsxs("ul",{className:"pattern-list",children:[e.jsx("li",{children:"your recent diagnostic left you unsure about what to fix"}),e.jsx("li",{children:"you want clearer guidance instead of studying alone"}),e.jsx("li",{children:"you're looking for real LSAT help, not more scattered resources"}),e.jsx("li",{children:"you'd benefit from structure and a study plan that makes sense"}),e.jsx("li",{children:"you want an LSAT tutor who can bring clarity to your approach and timeline"})]})]}),e.jsx("h3",{style:{marginTop:"40px",textAlign:"center"},children:"Pick a Time That Works for You"}),e.jsxs("div",{ref:r,style:{position:"relative",minHeight:"700px"},id:"free-consultation",children:[(!o||!i)&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"700px",backgroundColor:"#f5f7fa",borderRadius:"8px",gap:"20px"},children:[e.jsxs("div",{style:{width:"80%",maxWidth:"500px"},children:[e.jsx("div",{style:{height:"40px",backgroundColor:"#e2e8f0",borderRadius:"8px",marginBottom:"16px",animation:"pulse 1.5s ease-in-out infinite"}}),e.jsx("div",{style:{height:"20px",backgroundColor:"#e2e8f0",borderRadius:"6px",marginBottom:"12px",width:"60%",animation:"pulse 1.5s ease-in-out infinite"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",marginTop:"24px"},children:[...Array(6)].map((t,d)=>e.jsx("div",{style:{height:"80px",backgroundColor:"#e2e8f0",borderRadius:"8px",animation:"pulse 1.5s ease-in-out infinite"}},d))})]}),e.jsx("p",{style:{color:"#94a3b8",fontSize:"0.95rem"},children:"Loading calendar..."}),e.jsx("style",{children:"@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }"})]}),o&&e.jsx("div",{className:"calendly-inline-widget","data-url":"https://calendly.com/dave-mcmaster/free-lsat-consultation?text_color=023247&primary_color=023247",style:{minWidth:"320px",height:"700px",display:i?"block":"none"}})]}),e.jsxs("section",{className:"consultation-testimonials",children:[e.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center",flexWrap:"wrap",margin:"40px 0"},children:[e.jsx(s,{src:"/assets/testimonial1.jpeg",alt:"LSAT Academy student testimonial: 99th percentile score",loading:"lazy",decoding:"async",style:{maxWidth:"800px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}}),e.jsx(s,{src:"/assets/testimonial2.png",alt:"LSAT Academy student testimonial about David's tutoring",loading:"lazy",decoding:"async",style:{maxWidth:"600px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}}),e.jsx(s,{src:"/assets/testimonial3.jpeg",alt:"LSAT Academy student testimonial about score improvement",loading:"lazy",decoding:"async",style:{maxWidth:"600px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}})]}),e.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center",flexWrap:"wrap",margin:"0 0 40px 0"},children:[e.jsx(s,{src:"/assets/testimonial4.jpeg",alt:"LSAT Academy student testimonial about T14 admission",loading:"lazy",decoding:"async",style:{maxWidth:"600px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}}),e.jsx(s,{src:"/assets/testimonial5.png",alt:"LSAT Academy student testimonial about study strategy",loading:"lazy",decoding:"async",style:{maxWidth:"600px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}}),e.jsx(s,{src:"/assets/testimonial6.jpeg",alt:"LSAT Academy student testimonial about full-ride scholarship",loading:"lazy",decoding:"async",style:{maxWidth:"800px",width:"100%",borderRadius:"15px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}})]})]}),e.jsxs("section",{className:"image-grid padding",children:[e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly1.png",alt:"Free LSAT consultation feedback from a happy student",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly2.png",alt:"Free LSAT consultation feedback from a student",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly3.png",alt:"Free LSAT consultation feedback from a student",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly4.png",alt:"Free LSAT consultation feedback from a student",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly5.png",alt:"Free LSAT consultation feedback from a student",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"grid-item",children:e.jsx(s,{src:"/assets/Calendly6.png",alt:"Free LSAT consultation feedback from a student",loading:"lazy",decoding:"async"})})]}),e.jsx("section",{style:{marginTop:"60px",marginBottom:"60px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px",marginTop:"50px"},children:[e.jsxs("div",{style:{textAlign:"center",maxWidth:"600px"},children:[e.jsx("h3",{style:{fontSize:"2rem",marginBottom:"15px",color:"#023247"},children:"Post-Consultation Survey"}),e.jsx("p",{style:{fontSize:"0.95rem",color:"#555",marginBottom:"15px"},children:"Recent responses from students who booked a free LSAT consultation."}),e.jsx("button",{onClick:()=>window.open("https://docs.google.com/spreadsheets/d/1TiKsWiIUWyCC1vjbbwEwkPw2SyZAY0aUvLKItSW7Cb8/edit?usp=sharing","_blank"),className:"primary-btn",style:{marginTop:"10px",padding:"14px 32px",fontSize:"1.1rem",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:"1"},children:"Read Form Responses"})]}),e.jsxs("div",{style:{textAlign:"center",maxWidth:"600px"},children:[e.jsx("h3",{style:{fontSize:"2rem",marginBottom:"15px",color:"#023247"},children:"How was David as a tutor, really?"}),e.jsx("p",{style:{fontSize:"0.95rem",color:"#555",marginBottom:"15px"},children:"Note: Some older testimonials may mention logic games — those were part of past LSAT formats."}),e.jsx("button",{onClick:()=>window.open("https://docs.google.com/forms/d/1rL_IQq45dGYxYBQIvjX3Pauc7UhUTCCSHK7UwB_rIoc/viewanalytics?pli=1&pli=1","_blank"),className:"primary-btn",style:{marginTop:"10px",padding:"14px 32px",fontSize:"1.1rem",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:"1"},children:"Read Student Answers"})]})]})}),e.jsxs("section",{style:{margin:"60px 0",textAlign:"center"},children:[e.jsx("h3",{style:{fontSize:"1.8rem",marginBottom:"30px",color:"#023247"},children:"If you relate to some of these patterns, you might want to book a consultation"}),e.jsxs("blockquote",{className:"reddit-embed-bq",style:{height:"316px"},"data-embed-theme":"dark","data-embed-height":"316",children:[e.jsx("a",{href:"https://www.reddit.com/r/LSAT/comments/1m0zqu9/some_patterns_that_jump_out_after_15_years_of/",children:"Some Patterns That Jump Out After 15 Years of Tutoring"}),e.jsx("br",{}),"by",e.jsx("a",{href:"https://www.reddit.com/user/The10000HourTutor/",children:"u/The10000HourTutor"}),"in",e.jsx("a",{href:"https://www.reddit.com/r/LSAT/",children:"LSAT"})]}),e.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginTop:"20px",fontStyle:"italic"},children:"- David McMaster (u/The10000HourTutor)"}),e.jsx("button",{onClick:()=>{const t=document.getElementById("free-consultation");t&&t.scrollIntoView({behavior:"smooth"})},className:"primary-btn",style:{marginTop:"30px",padding:"14px 32px",fontSize:"1.1rem",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:"1"},children:"Book Now"})]}),e.jsx("span",{id:"contact"}),e.jsx(f,{id:"get-in-touch"})]})]})};export{v as default};
