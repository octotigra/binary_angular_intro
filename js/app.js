angular.module('app', [])


    .controller('goodsCtrl', function($scope) {
        $scope.itemList = [
            {name: "PC", price: ":500$"},
            {name: "Smartphone", price: ":200$"},
            {name: "Tablet", price: ":280$"},
            {name: "Phablet", price: ":150$"},
            {name: "Mobile", price: ":30$"} ];

        $scope.showList = true;    

        $scope.toggleView = function() {
            $scope.showList = $scope.showList ? false : true
        }

        $scope.addItem =  function() {
            var itemPrice = parseInt($scope.formPrice);
            var itemName = $scope.formItemEntry;

                //isn't integer
                if (itemPrice <= 0 || isNaN(itemPrice)) {
                    return;
                }

                //empty
                if (itemName == undefined || itemPrice == undefined) {
                    return;
                }

                //contains only space chars
                if (itemName.charAt(0) === "") {
                    return;
                }

                $scope.itemList.push( {name: itemName, price: ":" + itemPrice + "$"} );
            }

})

.controller('peopleCtrl', function($scope) {

        $scope.peopleList = [
            {name: "John", city: "NY", age: 20, avatar: 
            'http://pickaface.net/avatar/nberthiaume8655a123e70cd62.png'},
            {name: "Lars", city: "Oslo", age: 23, avatar: 
            'http://pickaface.net/avatar/stevendee88538f3fa8b5ac3.png'},
            {name: "Pier", city: "Paris", age: 18, avatar: 
            'http://pickaface.net/avatar/.23253354ff7c6c59.png'},   
        ];

        $scope.showList = true;    

        $scope.toggleView = function() {
            $scope.showList = $scope.showList ? false : true
        }

        $scope.addPerson =  function() {
            var personName = $scope.formCustomerName;
            var personAge =  $scope.formCustomerAge;
            var personCity =  $scope.formCustomerCity;
            var avatarURL =  $scope.formCustomerAvatar;


                //smth is empty
                if (personName == undefined || personAge == undefined
                    || personCity == undefined || avatarURL == undefined) {
                    return;
                }

                //contains only space chars
                if (personName.charAt(0) === "" || personAge.charAt(0) === ""
                    || personCity.charAt(0) === "" || avatarURL.charAt(0) === "") {
                    return;
                }

                //can't parse age
                personAge = parseInt(personAge);
                if (personAge < 0 || isNaN(personAge) === true) {
                    return;
                }

                $scope.peopleList.push( {name: personName, age: personAge, 
                    city: personCity, avatar: avatarURL} );
            }
}) 



