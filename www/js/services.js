angular.module('starter.services', [])


.factory('AllTodos', ['$resource', function($resource) {
	var dbURL = "http://localhost:8185/tbltodoes/";
	return $resource (dbURL,{}, {
		get: {method: 'GET', cache: false, isArray: false}
	});
}])

.factory('AllLists', ['$resource', function($resource) {
	var dbURL = "http://localhost:8185/tbllists/";
	return $resource (dbURL,{}, {
		gety: {method: 'GET', cache: false, isArray: false}
	});
}])

.factory('TodosPerList', ['$resource',  function($resource) {
	var dbURL = "http://localhost:8185/tbltodoes/search/findByTbllist_listid?listid=:listId";
	return $resource (dbURL,{listId:'@id'}, {
		get: {method: 'GET', cache: false, isArray: false}
	});
}])

.factory('TasksPerTodo', ['$resource',  function($resource) {
//	var dbURL = "http://localhost:8185/tbltasks/search/findByTbltodo_todoID?todoID=:todoId";
//	var dbURL = "http://localhost:8185/tbltasks/search/findByTodoID?todoid=:todoid";
	var dbURL = "http://localhost:8185/tbltasks/search/findByTbltodo_TodoID?todoid=:todoid";
	return $resource (dbURL,{todoId:'@id'}, {
		get: {method: 'GET', cache: false, isArray: false},
		update: {method: 'PUT', cache: false, isArray: false}
	});
}])



.factory('CapeTodos', ['$resource', function($resource) {
	var dbURL = "http://localhost:8185/tbltodoes/search/findByTbluser1_userID?userid=3"; 
	var dbtodos = $resource (dbURL,{}, {
		gety: {method: 'GET', cache: false, isArray: false}
		}); 
	var mytodos;
		
		dbtodos.get({}, 
			 function success(response) {
				 console.log("CapeTodos getAllTodos success:"+ JSON.stringify(response._embedded.tbltodoes));
				 mytodos = response._embedded.tbltodoes;
				 return response._embedded.tbltodoes;
    		 },
    		 function error(errorResponse) {
    		 	 console.log("CapeTodos Error:" + JSON.stringify(errorResponse));
    		 }
        )
    function getAllTodos() {
    };
	return {
		all: function() {			
			console.log("CapeTodos - all" + JSON.stringify(getAllTodos()));
			var alltodos = getAllTodos();
			return mytodos;
		},
	    get: function(todoId) {
	    	var alltodos = getAllTodos();
	        for (var i = 0; i < alltodos.length; i++) {
	          if (alltodos[i].toDoID === parseInt(todoId)) {
	            return alltodos[i];
	          }
	        }
	        return null;
	    },
		test: function() {
			return test();
		}
	}
}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

function test() {
	return "helloooooo";
}
