var app4 = new Vue({
  el: '#app-4',
  data: {
    produtos: []
  },
 created: function () {
    this.fetchData();
  },
methods: {
    isClicked: function(item){
        $.post( "/api/bd/produto/id", function( data ) {
        self.produtos = data;
        console.log(data);
    });
    },
    fetchData: function () {
    var self = this;
    $.get( "/api/bd/produtos", function( data ) {
        self.produtos = data;
        console.log(data);
    });

    }}
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    tipos: []
  },
 created: function () {
    this.fetchData();
  },
methods: {
    
    isone : function(tipo){
        return tipo.id == 1
        },
    fetchData: function () {
    var self = this;
    $.get( "/api/bd/tipos", function( data ) {
        self.tipos = data;
        console.log(data);
    });

    }}
});