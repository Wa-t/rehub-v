# Version
Current: 0.2

[Change log](https://github.com/ali-kos/kos-scaffold-desktop1-typescript/blob/master/CHANGE_LOG.md)

# Commands

developing:
```
`yarn start`   or   `npm run start`
```

build your project:
```
`yarn build`    or    `npm run build`
```


# Project directory
```
config: webpack part (eject from create-react-app)

scripts: package.json scripts order && DIY webpack plugin and component

src--
      app- project layout part and app part of state
      common- Static Resource in folder images or anything else
              middleware use for kos-core in folder middlewares 
              style part of the project in folder themes
              util function or component in folder utils 
      components- DIY component
      pages- your bussiness module
```

# Route params
``` js
[
...,
{
  path: "/dashboard", // Path for the component in address bar, as a part of namespace's key(replace '/' with '_' in key).
  Component: Dashboard, // Using component
  icon: "appstore", // Prefix icon
  name: "Title on page", // Page title
},
...
]
```

# One more thing

New features comming soon! We are looking forward your PR and your issues!
