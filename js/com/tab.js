define(function(factory) {

  var Tab=(function(){
    
          function _Tab(ct){
          this.ct=ct
          this.init()
          this.bind()
        }
        _Tab.prototype.init=function(){
          this.tabList=this.ct.querySelectorAll('.header li')
          this.tabCt=this.ct.querySelectorAll('.ct li')
        }
        _Tab.prototype.bind=function(){
          var _this =this     
          this.tabList.forEach(function(tabli){
            // console.log(tabli)
            tabli.onclick=function(e){          
             var target=e.target
             var index=[].indexOf.call(_this.tabList,target)
             _this.tabList.forEach(function(li){
               li.classList.remove('active')           
             })
             target.classList.add('active')
             _this.tabCt.forEach(function(panel){
              panel.classList.remove('active')
    
             })
             _this.tabCt[index].classList.add('active')
            }
          })
        }    
    
    
    
          return{
            init:function(ct){          
              ct.forEach(function(node){
                new _Tab(node)
              })
            }
          }
        })()
    
    
    
          
        
        return Tab










})
  
  
  










