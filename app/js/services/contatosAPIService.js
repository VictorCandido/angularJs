angular.module('listaTelefonica').factory('contatosAPI', ($http) => {
   var _getContatos = () => {
       return $http.get('http://localhost:3000/contatos');
   } 

   var _saveContato = contato => {
       return $http.post('http://localhost:3000/contatos', contato);
   }

   return {
       getContatos: _getContatos,
       saveContato: _saveContato
   }
})