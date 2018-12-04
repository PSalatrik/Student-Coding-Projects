/*var app = angular.module('myModule', []); // This is declaring a module. More on this in a moment

	
		 $scope.beatles = ['John', 'Paul', 'George', 'Ringo']; 
});




function beatles($scope){
 	$scope.beatles = ['John', 'George', 'Paul', 'Ringo']
 }*/


var app = angular.module('myModule', []);

app.controller('myList', function($scope){ 
	console.log('controller running');

	 $scope.total = 0;


 	$scope.myList = [
 		{item:'Apples', cost: 2.99}, 
 		{item:'Oranges', cost: 2.99},
	 	{item:'Bananas', cost:1.99}
 	];


 	$scope.addItem = function(name, price){
 		console.log("working");
 		$scope.myList.push({item:name, cost:price });
 		$scope.itemName = ""
 		$scope.itemCost = ""
 		total();

 	};
 	total();
 	function total (){
 		$scope.total = 0;
 		$scope.myList.forEach(function(item){
 			$scope.total += item.cost;

 		});
 	}

 	//$scope.getTotal = function(){
 	//	var total = 0
 	//	}
 	//	return total;
 	//}
 		

 });



 		
 


/*$scope.getTotal = function(){
 		var total = 0;
 		for(var i = 0; i < $scope.myList.cost; i++){
 			var  fullList = ($scope.myList.cost[i]);
 			total += (myList.cost)
 		}
 		return total;
 		}
 		}







	//var app = angular.module("MyApp", []);

//app.controller("mainController", function ($scope) {








// Item List Arrays
$scope.items = [];






// Add a Item to the list
$scope.addItem = function () {

    $scope.items.push({
        amount: $scope.itemAmount,
        name: $scope.itemName
    });

    // Clear input fields after push
    $scope.itemAmount = "";
    $scope.itemName = "";

};

// Add Item to Checked List and delete from Unchecked List
$scope.toggleChecked = function (item, index) {
    $scope.checked.push(item);
    $scope.items.splice(index, 1);
};

// Get Total Items
$scope.getTotalItems = function () {
    return $scope.items.length;
};

// Get Total Checked Items
$scope.getTotalCheckedItems = function () {
    return $scope.checked.length;
};
});
*/