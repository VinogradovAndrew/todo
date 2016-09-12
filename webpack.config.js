module.exports = {
    entry:'./main',
    output:{
        filename:'bundle.js',
        path:'./'
    },

    
    module:{
      loaders:[
          {
              test:/.js/,
              exclude:/node_modules/,
              loader:'babel',
              query:{
                  presets:['es2015','react'],
                  plugins:['transform-object-rest-spread']
              }
          }
      ]  
    },
    
    devServer: {
        inline:true,
        port:8080
    }

};