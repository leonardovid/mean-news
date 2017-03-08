angular.module("newsApp").controller('newsCtrl', function($scope, $routeParams,$compile ,dataService){


	
	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});

	if ($routeParams.id!=null) {
		dataService.getNewsById(function(res){
				$scope.news=res.data;
			},$routeParams.id);
	}
	
	$scope.showListNewsToEdit= function(){
		$scope.editing=false;
 		$scope.preview=false;
 		$scope.listNews=true;
	}

	$scope.showNewsToEdit= function(){
		$scope.editing=true;
 		$scope.listNews=false;
 		$scope.preview= false;
	}

	$scope.showCreateNews= function(){
		$scope.listNews=false;
		$scope.editing=true;
	 	$scope.create=true;
	 	$scope.selectedNews={};	
	}

	 	$scope.previewNews = function(){
 		$scope.preview=true;
 	}

 	$scope.goBackFrom= function(from){
		if (from == 'preview') {
			$scope.preview=false;
		}
		if (from == 'editing') {
			$scope.showListNewsToEdit();
		}
		if (from== 'view') {
			$scope.selected=false;
		}

	}

	$scope.closeDialog = function(){
 		$('#dialog').remove();

 	}

 	$scope.showDialog =function (id, $index){
 		var divDialog = $('<div id="dialog" class="panel panel-danger text-center"></div>');
 		var h2= '<h3>¿Esta seguro que desea Eliminarla?</h3>';
 		var buttonConfirm = $('<button class="btn btn-success">Confirmar</button>');
 		buttonConfirm.attr("ng-click","deleteNews('"+id+"','"+$index+"')");
 		var buttonCancel = $('<button class="btn btn-primary">Cancelar</button>');
 		buttonCancel.attr("ng-click","closeDialog()");

 		divDialog.append(h2);
 		divDialog.append(buttonConfirm);
 		divDialog.append(buttonCancel);

 		var compiledDialog = $compile(divDialog)($scope); 
 		$('body').append(compiledDialog);
 		
 		
 	}

	/*CRUD*/
 	$scope.addNews= function(news){
 		if ($scope.newsArray.indexOf(news._id)==-1) {
 			$scope.newsArray.unshift(news);
 			dataService.saveNews(news);
 		}
 		else{

 		}
 		$scope.showCreateNews();
 		
 	}
	
 	
 	$scope.deleteNews= function(id, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(id);
 		$scope.closeDialog();

 	}

 	$scope.saveEditedNews = function(){
 		for(var prop in $scope.selectedNews) {
 			$scope.originalNews[prop]=$scope.selectedNews[prop];
 			$scope.showListNewsToEdit();
 		}
 		dataService.editNews($scope.originalNews);
 	}


 	$scope.editSelectedNews= function(news, $index){
 		$scope.showNewsToEdit();
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);
 		

 	}

 	
});