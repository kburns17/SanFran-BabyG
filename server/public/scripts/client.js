var app = angular.module('BeerApp', []);
console.log('client loaded')

app.controller('BeerController', ['$http', function($http){
    console.log('BeerController loaded')
    
    
    let self = this;
    self.beerArray = [];
    


self.getBeers = function(){
    $http({
        method: 'GET',
        url: '/beers'
    }).then(function(response){
        console.log('in GET', response)
        self.beerArray = response.data
        console.log(self.beerArray);
    }).catch(function(error){
        console.log('error in get', error)
    })
} // end GET beers


self.addBeer = function(newBeer){
    console.log('addBeer clicked', newBeer);
    $http({
        method: 'POST',
        data: newBeer,
        url: '/beers'
    }).then(function(response){
        console.log('in POST', response); 
        self.getBeers();   
    }).catch(function(error){
        console.log('error POST', error);   
    })
} // end POST beer


self.deleteBeer = function(i){
    self.beerArray.splice(i, 1)
}



self.getBeers();
}]); // end controller