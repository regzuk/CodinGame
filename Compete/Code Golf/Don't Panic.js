a=readline().split(' '),b=[],c=[],i=0;for(;i++<a[7];){[b[i],c[i]]=readline().split(' ')}for(;;){[d,e,f]=readline().split(' ');p=(d==a[3])?a[4]:c[b.indexOf(d)];print(((f=='NONE')||p-e==0||((p-e>0)?(f>'N'):(f<'N')))?'WAIT':'BLOCK')}