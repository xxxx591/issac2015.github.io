eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([78efjm-oqt-vA-W]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('"use strict";(u(){m 18=[],1p=[],P,H,I,f,q,19=0,1a=[1,2],1b=u(v,Q){8.v=v;8.P=P;8.1B=Q.o||K;8.13=[];J(!Q.e){R(m i=0;i<4;i++){8.13[i]=L M.U.1q(v.C.x+(Q.x[i]*v.14)+(Q.z[i]*v.15),v.C.y+Q.y[i],v.C.z+(Q.x[i]*v.15)+(-Q.z[i]*v.14))}8.13[3].next=K}},1c=u(1C,e,1d){8.e=L M.U.Image(8,1C+e.e,1,{1D:u(e){e.v.1D=V;e.v.1E(e)}});8.1e=K;8.15=e.A;8.14=e.B;8.C=L M.U.1q(e.x,e.y,e.z);8.tx=e.x+(e.A*N.1f(f.1g)*20);8.tz=e.z-(e.B*N.1f(f.1g)*20);8.1r=[];R(m i=-1,p;p=1d[++i];){1p[i]=(p.e===V?1:2);8.1r.1H(L 1b(8,p))}},1I=u(1h){1b.1i.1s=M.U.1s;I=L M.Screen({container:"canvas"});P=I.P;I.resize();H=L M.Pointer({tap:u(){J(f.S){J(f.S===f.n.W){f.n.x=0;f.n.z=0;f.n.W=K}1j{f.n.W=f.S;f.n.x=f.S.tx;f.n.z=f.S.tz;R(m i=0,d;d=18[i++];){m dx=f.n.x-d.C.x;m dz=f.n.z-d.C.z;m 1J=N.1f(dx*dx+dz*dz);m 1K=(1J>D)?1a[0]:1a[1];d.e.setLevel(1K)}}}}});f=L M.U.Camera({1g:N.1f(I.1v)*10,easeTranslation:0.025,easeRotation:0.06,disableRz:V},{1w:u(){8.S=K;J(H.1L){8.n.W=K;8.n.ry=-H.Xi*0.01;8.n.rx=(H.Y-I.1k*0.5)/(I.1k*0.5)}1j{J(8.n.W){8.n.ry=N.atan2(8.n.W.C.x-8.x,8.n.W.C.z-8.z)}}8.n.rx*=0.9}});f.z=-10000;f.py=0;R(m i=0,e;e=1h.1O[i++];){18.1H(L 1c(1h.1P.1Q,e,1h.1d))}setInterval(u(){1a=(19>t)?[2,3]:[1,2];19=0},O);1x()},1x=u(){P.clearRect(0,0,I.1v,I.1k);f.1w();R(m k=-1,l;l=1p[++k];){q=K;R(m i=0,d;d=18[i++];){(l===1&&d.17())||(d.1e&&d.1r[k].17())}}J(f.S&&!H.1L){I.1R("H")}1j{I.1R("1w")}19++;requestAnimFrame(1x)};1b.1i.17=u(){m c=8.1B;J(c.q||!q){m s=c.q?8.v.q:1;q="rgba("+N.1y(c.r*s)+","+N.1y(c.g*s)+","+N.1y(c.b*s)+","+(c.a||1)+")";P.fillStyle=q}J(!c.q||8.v.q<1){R(m i=0;8.13[i++].1S(););8.1s();P.o()}}1c.1i.1E=u(e){m d=[-1,1,1,-1,1,1,-1,-1];m w=e.1T.1v*0.5;m h=e.1T.1k*0.5;R(m i=0;i<4;i++){e.13[i]=L M.U.1q(8.C.x+(w*8.14*d[i]),8.C.y+(h*d[i+4]),8.C.z+(w*8.15*d[i]))}}1c.1i.17=u(){8.C.1S();J(8.C.Z>-(f.1g>>1)&&8.e.U(V)){8.q=0.5+N.abs(8.14*f.cosY-8.15*f.sinY)*0.6;8.1e=V;8.e.17();J(H.hasMoved||H.isDown){J(8.e.isPointerInside(H.X,H.Y))f.S=8}}1j 8.1e=K;1U V}1U{1z:u(1V){window.addEventListener(\'1z\',u(){M.loadJS("js/imageTransform3D.js",1I,1V)},K)}}})().1z({1O:[{e:\'E/boy.F\',x:-O,y:0,z:D,A:0,B:1},{e:\'E/e.F\',x:0,y:0,z:D,A:0,B:1},{e:\'E/runner.F\',x:O,y:0,z:D,A:0,B:1},{e:\'E/jump.F\',x:D,y:0,z:O,A:-1,B:0},{e:\'E/love.F\',x:D,y:0,z:0,A:-1,B:0},{e:\'E/img2.F\',x:D,y:0,z:-O,A:-1,B:0},{e:\'E/runner2.F\',x:O,y:0,z:-D,A:0,B:-1},{e:\'E/img3.F\',x:0,y:0,z:-D,A:0,B:-1},{e:\'E/my.F\',x:-O,y:0,z:-D,A:0,B:-1},{e:\'E/brother.F\',x:-D,y:0,z:-O,A:1,B:0},{e:\'E/jump2.F\',x:-D,y:0,z:0,A:1,B:0},{e:\'E/my2.F\',x:-D,y:0,z:O,A:1,B:0}],1d:[{o:{r:j,g:j,b:j,q:1},x:[-1X,-1l,-1l,-1X],z:[-7,-7,-7,-7],y:[7,7,-7,-7]},{o:{r:j,g:j,b:j,q:1},x:[-501,2,2,-7],z:[-7,-7,-7,-7],y:[7,7,-7,-7]},{o:{r:j,g:j,b:j,q:1},x:[0,1Y,1Y,0],z:[-7,-7,-7,-7],y:[7,7,-7,-7]},{o:{r:j,g:j,b:j,q:1},x:[1l,1Z,1Z,1l],z:[-7,-7,-7,-7],y:[7,7,-7,-7]},{o:{r:0,g:0,b:0,a:0.2},x:[-1m,1m,1m,-1m],z:[-7,-7,-7,-7],y:[11,11,-G,-G]},{o:{r:0,g:0,b:0,a:0.2},x:[-20,20,20,-20],z:[-7,-7,-7,-7],y:[21,21,11,11]},{o:{r:0,g:0,b:0,a:0.2},x:[-20,20,20,-20],z:[-7,-7,-7,-7],y:[-G,-G,-7,-7]},{o:{r:0,g:0,b:0,a:0.2},x:[-20,20,10,-10],z:[-7,-7,-12,-12],y:[-7,-7,-7,-7]},{o:{r:32,g:32,b:32},x:[-t,t,t,-t],z:[-11,-11,-t,-t],y:[-7,-7,-7,-7]},{o:{r:16,g:16,b:16},x:[-10,10,10,-10],z:[-12,-12,-12,-12],y:[22,22,-7,-7]},{o:{r:j,g:j,b:j},x:[-G,-G,-G,-G],z:[0,-20,-20,0],y:[-T,-T,T,T]},{o:{r:j,g:j,b:j},x:[G,G,G,G],z:[0,-20,-20,0],y:[-T,-T,T,T]},{e:V},{o:{r:j,g:23,b:0},x:[-t,t,t,-t],z:[1n,1n,1o,1o],y:[7,7,7,7]},{o:{r:j,g:23,b:0},x:[-t,t,t,-t],z:[1n,1n,1o,1o],y:[-7,-7,-7,-7]}],1P:{1Q:""}});',[],128,'|||||||500|this||||||img|camera||||255|||var|target|fill||light|||50|function|parent|||||nx|nz|pc|1500|imgs|jpg|320|pointer|scr|if|false|new|ge1doot|Math|1000|ctx|face|for|over|190|transform3D|true|elem|||||150|100|points|normalZ|normalX||draw|diapo|fps|quality|Poly|Diapo|structure|visible|sqrt|focalLength|json|prototype|else|height|490|420|450|550|layers|Point|poly|drawPoly|||width|move|run|round|load||color|path|isLoaded|loaded|||push|init|dist|lev|isDraging|||imgdata|options|imagesPath|setCursor|projection|texture|return|data||1001|502|1002||250|300|128'.split('|'),0,{}))