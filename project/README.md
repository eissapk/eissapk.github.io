# Portfolio 

# Get Started

### Install packages
```
npm i
```

### Dev server
```
npm run dev 
```

### Build for deployment
```
npm run build 
```


# todos
0. clone loader,animations of riangle project  

1. add related projects to cv: e.g. project 1: www.riangle.onrender.com
2. try to make ssr for better seo

# bugs
1. vh issue with mobile browser:
```
You are (probably) a victim of CSS3 100vh not constant in mobile browser assuming that vh changing is the reason for vmin changing too.

Possible solutions for 100vh for mobile browsers that have address bar that is being considered a part of the vh100 height:

use Javascript and manually set the size
use vmax in combination with aspect-ratio media queries to estimate vmin
(feels hacky but would most likely accomplish what you want)
prevent the address bar from hiding in the first place: https://stackoverflow.com/a/33953987/2422125
prevent the address bar from showing up in the first place: go fullscreen:
How to make a <div> always full screen?
try <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, user-scalable=no">
use grid instead like androbin sugested (probably the best)
```