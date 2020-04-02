angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $http) {
    $scope.app = "Lista Telefonica"
    $scope.contatos = []

    $scope.operadoras = []

    $scope.adicionarContato = function(contato) {
        // $scope.contatos.push(contato);
        console.log(contato)
        $http.post('http://localhost:3000/contatos', contato).then(res => {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos()
        })
    }

    $scope.apagarContatos = (contatos) => {
        $scope.contatos =  contatosSelecionados = contatos.filter(contato => {
            if (!contato.selecionado) return contato;
        });
    }

    $scope.isContatoSelecionado = (contatos) => {
        return contatos.find(contato => contato.selecionado);
    }

    $scope.ordernarPor = (campo) => {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao
    }

    const carregarContatos = () => {
        $http.get('http://localhost:3000/contatos').then(res => {
            $scope.contatos = res.data
        });
    }

    const carregarOperadoras = () => {
        $http.get('http://localhost:3000/operadoras').then(res => {
            $scope.operadoras = res.data
        });
    }

    carregarContatos()
    carregarOperadoras()
});