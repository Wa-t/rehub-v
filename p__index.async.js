(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{QeBL:function(t,a,s){"use strict";s.r(a);var i=s("mrSG"),e=s("q1tI"),n=s.n(e),h=s("57gW"),c=s("wY1l"),o=s.n(c),v=s("XfOM"),r=s.n(v),l=class extends n.a.Component{constructor(t){super(t),this.step=0,this.canvasRef=(t=>{this.canvas=t}),this.canvas=null,this.ctx=null}componentDidMount(){this.loopAnimation()}loopAnimation(){this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvas.parentNode.offsetWidth,this.canvas.height=this.canvas.parentNode.offsetHeight,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="rgba(0,222,255, 0.2)",this.step++;var t=this.step*Math.PI/180,a=50*Math.sin(t);this.ctx.beginPath(),this.ctx.moveTo(0,this.canvas.height),this.ctx.moveTo(0,this.canvas.height/2+a),this.ctx.lineTo(this.canvas.width,this.canvas.height/2+a),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,this.canvas.height/2),this.ctx.moveTo(5*a-100,this.canvas.height/2+a),this.ctx.quadraticCurveTo(this.canvas.width+5*a,this.canvas.height/3+a,this.canvas.width+1e3+5*a,this.canvas.height/2+a),this.ctx.fill(),window.requestAnimFrame(this.loopAnimation)}render(){return n.a.createElement("div",{className:r.a.container},n.a.createElement("div",{className:r.a.content},n.a.createElement(o.a,{to:"/dashboard"},"Go to Dashboard")),n.a.createElement("canvas",{ref:this.canvasRef,id:"canvas",style:{position:"absolute",bottom:0,left:0,zIndex:1}}))}};l=i["a"]([h["a"]],l),a["default"]=l},XfOM:function(t,a,s){t.exports={container:"container___rRDCW",content:"content___3My1A"}}}]);