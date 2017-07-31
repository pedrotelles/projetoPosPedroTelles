
var app4 = new Vue({
  el: '#app-4',
  data: {
    produtos: []
  },
 created: function () {
    this.fetchData();
  },
methods: {
    
    fetchData: function () {
    var self = this;
    $.get( "/api/bd/produtos", function( data2 ) {
        self.produtos = data;
        console.log(data);
        
    });

    },
    fetchDataById:function(id){
        var self = this;
        $.get( "/api/bd/produtos/"+id, function( data2 ) {
            self.produtos=[];
            self.produtos = data2;
            console.log(data2);
            console.log(id)
        });
    }
}
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    tipos: [],
    count: 1
  },
 created: function () {
    this.fetchData();
  },
methods: {

    isone : function(tipo){
        if(tipo.id==this.count){
            app4.fetchDataById(tipo.id);
           
        }
         return tipo.id == this.count
    },
    clickme:function(tipo){
        this.count=tipo
        app4.fetchDataById(tipo);
        
    },
    fetchData: function () {
    var self = this;
    $.get( "/api/bd/tipos", function( data ) {
        self.tipos = data;
        console.log(data);
    });

    }}
});

