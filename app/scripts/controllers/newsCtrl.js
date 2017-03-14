angular.module("newsApp").controller('newsCtrl', function($scope, $http,$routeParams,$compile ,dataService,authService,fileReader){

	$scope.imageSrc="";

	authService.confirmLogin(function (res){
		var user=res.data;
		$scope.userLogued=user;
	});
	
	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});

	if ($routeParams.id!=null) {
		dataService.getNewsById(function(res){
				$scope.news=res.data;
			},$routeParams.id);
	}

	$scope.closeMessage= function(){
		$scope.success=false;
		$scope.error=false;
	}
	
	$scope.showListNewsToEdit= function(){
		$scope.editing=false;
 		$scope.preview=false;
 		$scope.listNews=true;
 		$("#upload").val("");
	 	$scope.imgToUpload= null;
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
	 	$("#upload").val("");
	 	$scope.imgToUpload= null;

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

 	$scope.uploadImg= function(){
		$http({
            method: 'POST',
            url: 'api/upload',
            headers: {'Content-Type': undefined},
            data: {
                upload: $scope.imgToUpload
            },
            transformRequest: function (data) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });               

                return formData;
            }
        })
        
	}

	/*CRUD*/
 	$scope.addNews= function(news){
 		if (news.title && news.subtitle && news.content && $scope.imgToUpload) {
 			var date = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
			news.date = date;
			news.author = $scope.userLogued.name;
			news.img = '/img/'+$scope.imgToUpload.name;
	 		if ($scope.newsArray.indexOf(news._id)==-1) {
	 			$scope.newsArray.unshift(news);
	 			dataService.saveNews(news);
	 			$scope.uploadImg();
	 			$scope.successTextAlert = "La noticia se a añadido exitosamente";
	 			$scope.success = true;
	 		}
 			$scope.showCreateNews();
 		}else {
 			$scope.errorTextAlert = "Revisa si todos los campos estan completos";
	 			$scope.error = true;
 		}
 		
 	}
	
 	
 	$scope.deleteNews= function(id, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(id);
 		$scope.closeDialog();

 	}

 	$scope.saveEditedNews = function(){ 		
 		if ($scope.selectedNews.title && $scope.selectedNews.subtitle && $scope.selectedNews.content){
	 		for(var prop in $scope.selectedNews) {
	 			$scope.originalNews[prop]=$scope.selectedNews[prop]; 			
	 		}
	 		if ($scope.imgToUpload) {
		 		$scope.uploadImg();
		 		$scope.originalNews.img= '/img/'+$scope.imgToUpload.name;
		 	}
	 		dataService.editNews($scope.originalNews);
	 		$scope.successTextAlert = "La noticia se a modificado exitosamente";
		 	$scope.success = true;
	 		$scope.showListNewsToEdit();
	 	}
 	}


 	$scope.editSelectedNews= function(news, $index){
 		$scope.showNewsToEdit();
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);
 		

 	}

 	
});