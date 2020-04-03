angular.module('listaTelefonica').filter('name', function () {
    return input => {
        var listaDeNomes = input.split(' ');

        listaDeNomes = listaDeNomes.map(nome => {
            if (/(da|de)/.test(nome)) return nome 
            return nome.charAt(0).toUpperCase() + nome.substring(1)
        })

        listaDeNomes = listaDeNomes.join(' ')

        return listaDeNomes;
    }
})