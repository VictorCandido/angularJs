angular.module('listaTelefonica').service('operadorasAPI', function ($http) {
    this.getOperadoras = () => {
        return $http.get('http://localhost:3000/operadoras');
    }
})