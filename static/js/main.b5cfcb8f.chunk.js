(this["webpackJsonpreact-sample"]=this["webpackJsonpreact-sample"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('[{"id":1,"name":"Fired Chicken","image":"https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg","description":"description1","price":1.99,"discount":0.35,"remaining":4,"quanitity":1},{"id":2,"name":"Shoes","image":"https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg","description":"description2","price":100.99,"discount":0,"remaining":4,"quanitity":1},{"id":3,"name":"Combo Bugrgers","image":"https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg","description":"description3","price":21.99,"discount":0.15,"remaining":4,"quanitity":1},{"id":4,"name":"Amazon Prime","image":"https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg","description":"description4","price":91.99,"discount":0.2,"remaining":4,"quanitity":1},{"id":5,"name":"Shower Curtain","image":"https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg","description":"description5","price":11.99,"discount":0.12,"remaining":4,"quanitity":1}]')},42:function(e,t,a){e.exports=a(52)},47:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r);a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);var o=a(39),i=a(26),u=a(27),s=a(16),m=a(32),d=a(34),p=a(41),E=a(6),h=a(35);function g(e){return l.a.createElement(h.a,null,l.a.createElement(h.a.Image,{width:171,height:180,alt:"171x180",src:e.productImgSrc}),l.a.createElement(h.a.Caption,null,l.a.createElement("h4",null,e.productName),l.a.createElement("p",null,e.productDesc)))}var b=a(37),y=a(23),v=a(13),f=a(19),C=a(20),w=function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),(!1)(!0)},k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e,n){var l;return Object(i.a)(this,a),(l=t.call(this,e,n)).handleShow=l.handleShow.bind(Object(s.a)(l)),l.handleClose=l.handleClose.bind(Object(s.a)(l)),l.state={show:!1,fullName:"",cardNumber:"",expMonth:0,expYear:0,userCVV:0},l}return Object(u.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleInputChange",value:function(e){}},{key:"handleSubmit",value:function(e){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{variant:"primary",onClick:this.handleShow},"Checkout"),l.a.createElement(y.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(y.a.Header,{closeButton:!0},l.a.createElement(y.a.Title,null,l.a.createElement("h5",null,"Come on! Let's check out"))),l.a.createElement(y.a.Body,null,l.a.createElement("div",null,l.a.createElement(C.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},l.a.createElement(v.a,{variant:"pills",fill:!0,className:"justify-content-center"},l.a.createElement(v.a.Item,null,l.a.createElement(v.a.Link,{eventKey:"first"},"Credit Card")),l.a.createElement(v.a.Item,null,l.a.createElement(v.a.Link,{eventKey:"second"},"PayPal"))),l.a.createElement(v.a,{variant:"pills",fill:!0,className:"justify-content-center"},l.a.createElement(v.a.Item,null,l.a.createElement(v.a.Link,{eventKey:"thrid"},"Bank Transfer"))),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Pane,{eventKey:"first"},l.a.createElement(E.a,{noValidate:!0,validated:void 0,onSubmit:w},l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Label,null,"Full name"),l.a.createElement(E.a.Control,{required:!0,type:"text",placeholder:"Please Enter Full Name"}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please enter your full name."),l.a.createElement(E.a.Control.Feedback,null,"Looks good!")),l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Label,null,"Credit card number"),l.a.createElement(E.a.Control,{required:!0,type:"text",placeholder:"Please Enter Credit card number"})),l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Label,null,"Credit card number"),l.a.createElement(E.a.Control,{required:!0,type:"text",placeholder:"Please Enter Credit card number"})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Group,{as:f.a,md:"6",controlId:"validationCustom03"},l.a.createElement(E.a.Label,null,"Exp Month"),l.a.createElement(E.a.Control,{type:"number",placeholder:"MM",required:!0}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please provide a valid city.")),l.a.createElement(E.a.Group,{as:f.a,md:"3",controlId:"validationCustom04"},l.a.createElement(E.a.Label,null,"Exp Year"),l.a.createElement(E.a.Control,{type:"number",placeholder:"DD",required:!0}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please provide a valid state.")),l.a.createElement(E.a.Group,{as:f.a,md:"3",controlId:"validationCustom05"},l.a.createElement(E.a.Label,null,"CVV"),l.a.createElement(E.a.Control,{type:"number",placeholder:"000",required:!0}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please provide a valid CVV."))),l.a.createElement(E.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})),l.a.createElement(b.a,{type:"submit"},"Submit form"))),l.a.createElement(C.a.Pane,{eventKey:"second"},l.a.createElement("div",null,l.a.createElement("p",null,"PayPal is the easliest way to pay online"),l.a.createElement("p",null,l.a.createElement("button",null," ",l.a.createElement("span",null,l.a.createElement("i",{class:"fab fa-paypal mr-1"}),"Login my PayPal"))),l.a.createElement("p",null,l.a.createElement("b",null,"Note:"),"Here are some notes."))),l.a.createElement(C.a.Pane,{eventKey:"thrid"},l.a.createElement("div",null,l.a.createElement("p",null,"Bank account details"),l.a.createElement("p",null,l.a.createElement("b",null,"Bank:")),l.a.createElement("p",null,"The World Bank"),l.a.createElement("p",null,l.a.createElement("b",null,"Account Number:")),l.a.createElement("p",null,"123123123"),l.a.createElement("p",null,l.a.createElement("b",null,"IBAN:")),l.a.createElement("p",null,"132132132"),l.a.createElement("p",null,l.a.createElement("b",null,"Note:")),l.a.createElement("p",null,"Here are some notes.")))))))))}}]),a}(l.a.Component),P=a(38),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleDeleteRow=function(t,a){var n=Object(o.a)(e.state.productList);n.splice(t,1),e.setState({productList:n},(function(){e.handleTotalPrice()})),console.log("1st: "+e.state.productList)},e.handleChange=function(t){var a=Object(o.a)(e.state.productList);console.log("You choosse: "+t.target.value),a[t.target.getAttribute("select-index")].quanitity=t.target.value,e.setState({productList:a},(function(){e.handleTotalPrice()}))},e.handleTotalPrice=function(){for(var t=0,a=0;a<e.state.productList.length;a++)t+=e.state.productList[a].price*e.state.productList[a].quanitity*(1-e.state.productList[a].discount);e.setState({totalPrice:t.toFixed(2)})},e.state={productList:P,totalPrice:0},e.handleDeleteRow=e.handleDeleteRow.bind(Object(s.a)(e)),e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.tabs=[],e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.handleTotalPrice()}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Discount"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.state.productList.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement(g,{productName:t.name,productDesc:t.description,productImgSrc:t.image})),l.a.createElement("td",null,0===t.discount?"N/A":100*t.discount+"%"),l.a.createElement("td",null,l.a.createElement(E.a,{value:e.value},l.a.createElement(E.a.Group,{controlId:"exampleForm.SelectCustom"},l.a.createElement("select",{"select-index":a,onChange:e.handleChange},l.a.createElement("option",{value:1},"1"),l.a.createElement("option",{value:2},"2"),l.a.createElement("option",{value:3},"3"))))),l.a.createElement("td",null,isNaN(t.price)?"N/A":"$"+(t.price*t.quanitity).toFixed(2)),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(t){return e.handleDeleteRow(a,t)}},"delete"),l.a.createElement("button",null,"refresh")))}))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("th",{class:"hide-xs",scope:"row"}),l.a.createElement("td",{class:"hide-xs"}),l.a.createElement("td",{class:"hide-xs"}),l.a.createElement("td",null,"total: $",l.a.createElement("span",{class:"total"},this.state.totalPrice)),l.a.createElement("td",{class:"hide-xs"})),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{class:"btn btn-warning",type:"button"},l.a.createElement("span",{class:"badge"},l.a.createElement("i",{class:"mr-2 pg-arrow_left_line_alt"})),"Continue Shopping")),l.a.createElement("td",{class:"hide-xs",scope:"row"}),l.a.createElement("td",{class:"hide-xs"}),l.a.createElement("td",{class:"hide-xs"}),l.a.createElement("td",null,l.a.createElement(k,null)))))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b5cfcb8f.chunk.js.map