import './polyfills.server.mjs';
import{a as ze,d as Be}from"./chunk-MN7FWYPV.mjs";import{A as ie,a as K,b as h,c as H,e as He,f as G,g as J,h as We,i as qe,j as Qe,l as ee,m as Ze,n as te,p as $e,s as Ue,v as Ke,y as P}from"./chunk-RXH5FVWK.mjs";import{f as Te,g as Ie,h as Le,j as je,k as Ye,m as Ne,n as Ve,o as Xe,p as U}from"./chunk-OE7ZJFUU.mjs";import{Ga as I,Ha as F,Ia as Ce,Ib as Fe,Ka as Oe,La as ke,Ma as Se,O as _e,Oa as Ee,Pa as w,Q as xe,Qa as Me,Ra as Re,T as y,U as _,Ub as Pe,W as B,Y as f,Z as D,_a as N,_b as b,a as Z,ab as V,ba as j,ca as x,ea as be,f as O,fc as Ae,ga as ve,gb as C,hb as k,ib as L,ic as X,kb as S,la as $,ma as ye,pa as we,ra as T,tb as E,v as ue,w as ge,xb as De,za as Y}from"./chunk-CICBAEQD.mjs";import{a as z,b as pe}from"./chunk-NDYDZJSS.mjs";var mt="@",ht=(()=>{let e=class e{constructor(t,i,n,r,a){this.doc=t,this.delegate=i,this.zone=n,this.animationType=r,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=D(Oe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OL7KMJP6.mjs").then(i=>i)).catch(i=>{throw new xe(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc);let r=new n(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,i){let n=this.delegate.createRenderer(t,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new oe(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(t,i);r.use(s),this.scheduler?.notify(9)}).catch(a=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){Ce()},e.\u0275prov=y({token:e,factory:e.\u0275fac});let l=e;return l})(),oe=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,i){this.delegate.insertBefore(e,o,t,i)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,i){this.delegate.setAttribute(e,o,t,i)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,i){this.delegate.setStyle(e,o,t,i)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(mt)}};function Ge(l="animations"){return Ee("NgAsyncAnimations"),be([{provide:Se,useFactory:(e,o,t)=>new ht(e,o,t,l),deps:[b,Te,w]},{provide:Y,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Je=He(),ne=class{constructor(e,o){this._viewportRuler=e,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=o}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=h(-this._previousScrollPosition.left),e.style.top=h(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,o=this._document.body,t=e.style,i=o.style,n=t.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),Je&&(t.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Je&&(t.scrollBehavior=n,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let o=this._document.body,t=this._viewportRuler.getViewportSize();return o.scrollHeight>t.height||o.scrollWidth>t.width}};var le=class{constructor(e,o,t,i){this._scrollDispatcher=e,this._ngZone=o,this._viewportRuler=t,this._config=i,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(ge(o=>!o||!this._overlayRef.overlayElement.contains(o.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let o=this._viewportRuler.getViewportScrollPosition().top;Math.abs(o-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},W=class{enable(){}disable(){}attach(){}};function re(l,e){return e.some(o=>{let t=l.bottom<o.top,i=l.top>o.bottom,n=l.right<o.left,r=l.left>o.right;return t||i||n||r})}function et(l,e){return e.some(o=>{let t=l.top<o.top,i=l.bottom>o.bottom,n=l.left<o.left,r=l.right>o.right;return t||i||n||r})}var ae=class{constructor(e,o,t,i){this._scrollDispatcher=e,this._viewportRuler=o,this._ngZone=t,this._config=i,this._scrollSubscription=null}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let o=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();re(o,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xt=(()=>{let e=class e{constructor(t,i,n,r){this._scrollDispatcher=t,this._viewportRuler=i,this._ngZone=n,this.noop=()=>new W,this.close=a=>new le(this._scrollDispatcher,this._ngZone,this._viewportRuler,a),this.block=()=>new ne(this._viewportRuler,this._document),this.reposition=a=>new ae(this._scrollDispatcher,this._viewportRuler,this._ngZone,a),this._document=r}};e.\u0275fac=function(i){return new(i||e)(f(Qe),f(ee),f(w),f(b))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),de=class{constructor(e){if(this.scrollStrategy=new W,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,e){let o=Object.keys(e);for(let t of o)e[t]!==void 0&&(this[t]=e[t])}}};var se=class{constructor(e,o){this.connectionPair=e,this.scrollableViewProperties=o}};var rt=(()=>{let e=class e{constructor(t){this._attachedOverlays=[],this._document=t}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}};e.\u0275fac=function(i){return new(i||e)(f(b))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),bt=(()=>{let e=class e extends rt{constructor(t,i){super(t),this._ngZone=i,this._keydownListener=n=>{let r=this._attachedOverlays;for(let a=r.length-1;a>-1;a--)if(r[a]._keydownEvents.observers.length>0){let s=r[a]._keydownEvents;this._ngZone?this._ngZone.run(()=>s.next(n)):s.next(n);break}}}add(t){super.add(t),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}};e.\u0275fac=function(i){return new(i||e)(f(b),f(w,8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),vt=(()=>{let e=class e extends rt{constructor(t,i,n){super(t),this._platform=i,this._ngZone=n,this._cursorStyleIsSet=!1,this._pointerDownListener=r=>{this._pointerDownEventTarget=G(r)},this._clickListener=r=>{let a=G(r),s=r.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:a;this._pointerDownEventTarget=null;let c=this._attachedOverlays.slice();for(let d=c.length-1;d>-1;d--){let m=c[d];if(m._outsidePointerEvents.observers.length<1||!m.hasAttached())continue;if(m.overlayElement.contains(a)||m.overlayElement.contains(s))break;let p=m._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>p.next(r)):p.next(r)}}}add(t){if(super.add(t),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let t=this._document.body;t.removeEventListener("pointerdown",this._pointerDownListener,!0),t.removeEventListener("click",this._clickListener,!0),t.removeEventListener("auxclick",this._clickListener,!0),t.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(t.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(t){t.addEventListener("pointerdown",this._pointerDownListener,!0),t.addEventListener("click",this._clickListener,!0),t.addEventListener("auxclick",this._clickListener,!0),t.addEventListener("contextmenu",this._clickListener,!0)}};e.\u0275fac=function(i){return new(i||e)(f(b),f(H),f(w,8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),at=(()=>{let e=class e{constructor(t,i){this._platform=i,this._document=t}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||J()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let i=this._document.createElement("div");i.classList.add(t),J()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}};e.\u0275fac=function(i){return new(i||e)(f(b),f(H))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),ce=class{constructor(e,o,t,i,n,r,a,s,c,d=!1,m){this._portalOutlet=e,this._host=o,this._pane=t,this._config=i,this._ngZone=n,this._keyboardDispatcher=r,this._document=a,this._location=s,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._backdropElement=null,this._backdropClick=new O,this._attachments=new O,this._detachments=new O,this._locationChanges=Z.EMPTY,this._backdropClickHandler=p=>this._backdropClick.next(p),this._backdropTransitionendHandler=p=>{this._disposeBackdrop(p.target)},this._keydownEvents=new O,this._outsidePointerEvents=new O,this._renders=new O,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy,this._afterRenderRef=Pe(()=>Me(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(e){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let o=this._portalOutlet.attach(e);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),Re(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof o?.onDestroy=="function"&&o.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),o}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,e&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=z(z({},this._config),e),this._updateElementSize()}setDirection(e){this._config=pe(z({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=h(this._config.width),e.height=h(this._config.height),e.minWidth=h(this._config.minWidth),e.minHeight=h(this._config.minHeight),e.maxWidth=h(this._config.maxWidth),e.maxHeight=h(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(e)})}):this._backdropElement.classList.add(e)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let e=this._backdropElement;if(e){if(this._animationsDisabled){this._disposeBackdrop(e);return}e.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{e.addEventListener("transitionend",this._backdropTransitionendHandler)}),e.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(e)},500))}}_toggleClasses(e,o,t){let i=K(o||[]).filter(n=>!!n);i.length&&(t?e.classList.add(...i):e.classList.remove(...i))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let e=this._renders.pipe(_e(ue(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),e.unsubscribe())})})}_disposeScrollStrategy(){let e=this._scrollStrategy;e&&(e.disable(),e.detach&&e.detach())}_disposeBackdrop(e){e&&(e.removeEventListener("click",this._backdropClickHandler),e.removeEventListener("transitionend",this._backdropTransitionendHandler),e.remove(),this._backdropElement===e&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},tt="cdk-overlay-connected-position-bounding-box",yt=/([A-Za-z%]+)$/,fe=class{get positions(){return this._preferredPositions}constructor(e,o,t,i,n){this._viewportRuler=o,this._document=t,this._platform=i,this._overlayContainer=n,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new O,this._resizeSubscription=Z.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(tt),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._originRect,o=this._overlayRect,t=this._viewportRect,i=this._containerRect,n=[],r;for(let a of this._preferredPositions){let s=this._getOriginPoint(e,i,a),c=this._getOverlayPoint(s,o,a),d=this._getOverlayFit(c,o,t,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,s);return}if(this._canFitWithFlexibleDimensions(d,c,t)){n.push({position:a,origin:s,overlayRect:o,boundingBoxRect:this._calculateBoundingBoxRect(s,a)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:c,originPoint:s,position:a,overlayRect:o})}if(n.length){let a=null,s=-1;for(let c of n){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>s&&(s=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&R(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(tt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;if(e){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let o=this._getOriginPoint(this._originRect,this._containerRect,e);this._applyPosition(e,o)}else this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}_getOriginPoint(e,o,t){let i;if(t.originX=="center")i=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;i=t.originX=="start"?r:a}o.left<0&&(i-=o.left);let n;return t.originY=="center"?n=e.top+e.height/2:n=t.originY=="top"?e.top:e.bottom,o.top<0&&(n-=o.top),{x:i,y:n}}_getOverlayPoint(e,o,t){let i;t.overlayX=="center"?i=-o.width/2:t.overlayX==="start"?i=this._isRtl()?-o.width:0:i=this._isRtl()?0:-o.width;let n;return t.overlayY=="center"?n=-o.height/2:n=t.overlayY=="top"?0:-o.height,{x:e.x+i,y:e.y+n}}_getOverlayFit(e,o,t,i){let n=ot(o),{x:r,y:a}=e,s=this._getOffset(i,"x"),c=this._getOffset(i,"y");s&&(r+=s),c&&(a+=c);let d=0-r,m=r+n.width-t.width,p=0-a,g=a+n.height-t.height,u=this._subtractOverflows(n.width,d,m),v=this._subtractOverflows(n.height,p,g),he=u*v;return{visibleArea:he,isCompletelyWithinViewport:n.width*n.height===he,fitsInViewportVertically:v===n.height,fitsInViewportHorizontally:u==n.width}}_canFitWithFlexibleDimensions(e,o,t){if(this._hasFlexibleDimensions){let i=t.bottom-o.y,n=t.right-o.x,r=it(this._overlayRef.getConfig().minHeight),a=it(this._overlayRef.getConfig().minWidth),s=e.fitsInViewportVertically||r!=null&&r<=i,c=e.fitsInViewportHorizontally||a!=null&&a<=n;return s&&c}return!1}_pushOverlayOnScreen(e,o,t){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let i=ot(o),n=this._viewportRect,r=Math.max(e.x+i.width-n.width,0),a=Math.max(e.y+i.height-n.height,0),s=Math.max(n.top-t.top-e.y,0),c=Math.max(n.left-t.left-e.x,0),d=0,m=0;return i.width<=n.width?d=c||-r:d=e.x<this._viewportMargin?n.left-t.left-e.x:0,i.height<=n.height?m=s||-a:m=e.y<this._viewportMargin?n.top-t.top-e.y:0,this._previousPushAmount={x:d,y:m},{x:e.x+d,y:e.y+m}}_applyPosition(e,o){if(this._setTransformOrigin(e),this._setOverlayElementStyles(o,e),this._setBoundingBoxStyles(o,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!wt(this._lastScrollVisibility,t)){let i=new se(e,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let o=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=e.overlayY;e.overlayX==="center"?t="center":this._isRtl()?t=e.overlayX==="start"?"right":"left":t=e.overlayX==="start"?"left":"right";for(let n=0;n<o.length;n++)o[n].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(e,o){let t=this._viewportRect,i=this._isRtl(),n,r,a;if(o.overlayY==="top")r=e.y,n=t.height-r+this._viewportMargin;else if(o.overlayY==="bottom")a=t.height-e.y+this._viewportMargin*2,n=t.height-a+this._viewportMargin;else{let g=Math.min(t.bottom-e.y+t.top,e.y),u=this._lastBoundingBoxSize.height;n=g*2,r=e.y-g,n>u&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-u/2)}let s=o.overlayX==="start"&&!i||o.overlayX==="end"&&i,c=o.overlayX==="end"&&!i||o.overlayX==="start"&&i,d,m,p;if(c)p=t.width-e.x+this._viewportMargin*2,d=e.x-this._viewportMargin;else if(s)m=e.x,d=t.right-e.x;else{let g=Math.min(t.right-e.x+t.left,e.x),u=this._lastBoundingBoxSize.width;d=g*2,m=e.x-g,d>u&&!this._isInitialRender&&!this._growAfterOpen&&(m=e.x-u/2)}return{top:r,left:m,bottom:a,right:p,width:d,height:n}}_setBoundingBoxStyles(e,o){let t=this._calculateBoundingBoxRect(e,o);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right=i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let n=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.height=h(t.height),i.top=h(t.top),i.bottom=h(t.bottom),i.width=h(t.width),i.left=h(t.left),i.right=h(t.right),o.overlayX==="center"?i.alignItems="center":i.alignItems=o.overlayX==="end"?"flex-end":"flex-start",o.overlayY==="center"?i.justifyContent="center":i.justifyContent=o.overlayY==="bottom"?"flex-end":"flex-start",n&&(i.maxHeight=h(n)),r&&(i.maxWidth=h(r))}this._lastBoundingBoxSize=t,R(this._boundingBox.style,i)}_resetBoundingBoxStyles(){R(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){R(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,o){let t={},i=this._hasExactPosition(),n=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();R(t,this._getExactOverlayY(o,e,d)),R(t,this._getExactOverlayX(o,e,d))}else t.position="static";let a="",s=this._getOffset(o,"x"),c=this._getOffset(o,"y");s&&(a+=`translateX(${s}px) `),c&&(a+=`translateY(${c}px)`),t.transform=a.trim(),r.maxHeight&&(i?t.maxHeight=h(r.maxHeight):n&&(t.maxHeight="")),r.maxWidth&&(i?t.maxWidth=h(r.maxWidth):n&&(t.maxWidth="")),R(this._pane.style,t)}_getExactOverlayY(e,o,t){let i={top:"",bottom:""},n=this._getOverlayPoint(o,this._overlayRect,e);if(this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,t)),e.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(n.y+this._overlayRect.height)}px`}else i.top=h(n.y);return i}_getExactOverlayX(e,o,t){let i={left:"",right:""},n=this._getOverlayPoint(o,this._overlayRect,e);this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,t));let r;if(this._isRtl()?r=e.overlayX==="end"?"left":"right":r=e.overlayX==="end"?"right":"left",r==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(n.x+this._overlayRect.width)}px`}else i.left=h(n.x);return i}_getScrollVisibility(){let e=this._getOriginRect(),o=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:et(e,t),isOriginOutsideView:re(e,t),isOverlayClipped:et(o,t),isOverlayOutsideView:re(o,t)}}_subtractOverflows(e,...o){return o.reduce((t,i)=>t-Math.max(i,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,o=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._viewportMargin,left:t.left+this._viewportMargin,right:t.left+e-this._viewportMargin,bottom:t.top+o-this._viewportMargin,width:e-2*this._viewportMargin,height:o-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,o){return o==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&K(e).forEach(o=>{o!==""&&this._appliedPanelClasses.indexOf(o)===-1&&(this._appliedPanelClasses.push(o),this._pane.classList.add(o))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getOriginRect(){let e=this._origin;if(e instanceof T)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let o=e.width||0,t=e.height||0;return{top:e.y,bottom:e.y+t,left:e.x,right:e.x+o,height:t,width:o}}};function R(l,e){for(let o in e)e.hasOwnProperty(o)&&(l[o]=e[o]);return l}function it(l){if(typeof l!="number"&&l!=null){let[e,o]=l.split(yt);return!o||o==="px"?parseFloat(e):null}return l||null}function ot(l){return{top:Math.floor(l.top),right:Math.floor(l.right),bottom:Math.floor(l.bottom),left:Math.floor(l.left),width:Math.floor(l.width),height:Math.floor(l.height)}}function wt(l,e){return l===e?!0:l.isOriginClipped===e.isOriginClipped&&l.isOriginOutsideView===e.isOriginOutsideView&&l.isOverlayClipped===e.isOverlayClipped&&l.isOverlayOutsideView===e.isOverlayOutsideView}var nt="cdk-global-overlay-wrapper",me=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(e){let o=e.getConfig();this._overlayRef=e,this._width&&!o.width&&e.updateSize({width:this._width}),this._height&&!o.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(nt),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,o=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:i,height:n,maxWidth:r,maxHeight:a}=t,s=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),c=(n==="100%"||n==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",g="",u="",v="";s?v="flex-start":d==="center"?(v="center",p?u=m:g=m):p?d==="left"||d==="end"?(v="flex-end",g=m):(d==="right"||d==="start")&&(v="flex-start",u=m):d==="left"||d==="start"?(v="flex-start",g=m):(d==="right"||d==="end")&&(v="flex-end",u=m),e.position=this._cssPosition,e.marginLeft=s?"0":g,e.marginTop=c?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=s?"0":u,o.justifyContent=v,o.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,o=this._overlayRef.hostElement,t=o.style;o.classList.remove(nt),t.justifyContent=t.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},Ct=(()=>{let e=class e{constructor(t,i,n,r){this._viewportRuler=t,this._document=i,this._platform=n,this._overlayContainer=r}global(){return new me}flexibleConnectedTo(t){return new fe(t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}};e.\u0275fac=function(i){return new(i||e)(f(ee),f(b),f(H),f(at))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})(),Ot=0,A=(()=>{let e=class e{constructor(t,i,n,r,a,s,c,d,m,p,g,u){this.scrollStrategies=t,this._overlayContainer=i,this._componentFactoryResolver=n,this._positionBuilder=r,this._keyboardDispatcher=a,this._injector=s,this._ngZone=c,this._document=d,this._directionality=m,this._location=p,this._outsideClickDispatcher=g,this._animationsModuleType=u}create(t){let i=this._createHostElement(),n=this._createPaneElement(i),r=this._createPortalOutlet(n),a=new de(t);return a.direction=a.direction||this._directionality.value,new ce(r,i,n,a,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(ve))}position(){return this._positionBuilder}_createPaneElement(t){let i=this._document.createElement("div");return i.id=`cdk-overlay-${Ot++}`,i.classList.add("cdk-overlay-pane"),t.appendChild(i),i}_createHostElement(){let t=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(t),t}_createPortalOutlet(t){return this._appRef||(this._appRef=this._injector.get(Fe)),new $e(t,this._componentFactoryResolver,this._appRef,this._injector,this._document)}};e.\u0275fac=function(i){return new(i||e)(f(xt),f(at),f(ke),f(Ct),f(bt),f(we),f(w),f(b),f(We),f(Ae),f(vt),f(Y,8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let l=e;return l})();var kt=new B("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let l=D(A);return()=>l.scrollStrategies.reposition()}});function St(l){return()=>l.scrollStrategies.reposition()}var Et={provide:kt,deps:[A],useFactory:St},dt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=_({providers:[A,Et],imports:[qe,Ue,te,te]});let l=e;return l})();var q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=_({imports:[P,X,Ke,P]});let l=e;return l})();var Qt=new B("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let l=D(A);return()=>l.scrollStrategies.reposition()}});function Zt(l){return()=>l.scrollStrategies.reposition()}var $t={provide:Qt,deps:[A],useFactory:Zt};var st=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=_({providers:[$t],imports:[X,dt,ie,P,Ze,q,ie,P]});let l=e;return l})();var Ut=[{path:"",redirectTo:"uk",pathMatch:"full"},{path:"uk",loadChildren:()=>import("./chunk-CHXFS4QT.mjs").then(l=>l.UkModuleModule)},{path:"ru",loadChildren:()=>import("./chunk-AY54IOBO.mjs").then(l=>l.RuModuleModule)},{path:"en",loadChildren:()=>import("./chunk-HUD45SWC.mjs").then(l=>l.EnModuleModule)}],ct=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=_({imports:[U.forRoot(Ut),U]});let l=e;return l})();var Kt=()=>({exact:!0}),Q=(()=>{let e=class e{toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}closeDropdown(){this.dropdownOpen=!0}constructor(t,i){this.router=t,this.route=i,this.dropdownOpen=!1}changeLanguage(t){let n=this.router.url.split("/");n[1]==="uk"||n[1]==="en"||n[1]==="ru"?n[1]=t:n.unshift(t);let r=n.join("/");this.router.navigateByUrl(r).then(()=>{window.scrollTo(0,0)})}};e.\u0275fac=function(i){return new(i||e)(F(Ne),F(je))},e.\u0275cmp=j({type:e,selectors:[["app-root"]],decls:23,vars:4,consts:[[1,"b-top"],[1,"container"],[1,"top-i"],[1,"top-slogan"],[1,"lang"],[1,"nav-lang"],[1,"language-selector",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","34","height","34","viewBox","0 0 24 24","fill","#9c9c9c"],["d","M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"],[1,"language-dropdown"],["routerLink","/uk","routerLinkActive","active",3,"click","routerLinkActiveOptions"],["routerLink","/ru","routerLinkActive","active",3,"click"],["routerLink","/en","routerLinkActive","active",3,"click"]],template:function(i,n){i&1&&(C(0,"header")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"mark"),E(6,"ArapovTrade"),k()(),C(7,"div",4)(8,"nav",5)(9,"div",6),S("click",function(){return n.toggleDropdown()}),$(),C(10,"svg",7),L(11,"path",8),k(),ye(),C(12,"ul",9)(13,"li")(14,"a",10),S("click",function(){return n.closeDropdown(),n.changeLanguage("uk")}),E(15,"UK"),k()(),C(16,"li")(17,"a",11),S("click",function(){return n.closeDropdown(),n.changeLanguage("ru")}),E(18,"RU"),k()(),C(19,"li")(20,"a",12),S("click",function(){return n.closeDropdown(),n.changeLanguage("en")}),E(21,"EN"),k()()()()()()()()()(),L(22,"router-outlet")),i&2&&(I(12),V("open",n.dropdownOpen),I(2),N("routerLinkActiveOptions",De(3,Kt)))},dependencies:[Ye,Ve,Xe],styles:['@charset "UTF-8";.language-selector[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer}.language-icon[_ngcontent-%COMP%]{width:24px;height:24px;fill:#333;margin-right:5px}.language-dropdown[_ngcontent-%COMP%]{display:none;position:absolute;list-style-type:none;padding:0;margin:0;background-color:#1a1a1a;box-shadow:0 8px 16px #0003;z-index:1}.language-dropdown.open[_ngcontent-%COMP%]{display:block}.language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px}.language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#9c9c9c;display:block}.language-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.top-menu[_ngcontent-%COMP%]{display:flex}.nav-lang[_ngcontent-%COMP%]{height:34px}']});let l=e;return l})();var ft=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e,bootstrap:[Q]}),e.\u0275inj=_({providers:[Le(),Ge()],imports:[ze,Ie,ct,q,st]});let l=e;return l})();var Gt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e,bootstrap:[Q]}),e.\u0275inj=_({imports:[ft,Be]});let l=e;return l})();export{Gt as a};
