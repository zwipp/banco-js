let banco = {

    clientes: [],
    cadastrarCliente(cliente){
        this.clientes.push(cliente);
    },

    buscarSaldo(cpf){
        let clientefiltrado = this.clientes.filter((cliente) => {
            return cliente.cpf == cpf
        })

        return clientefiltrado[0].saldo;
    },

    addSaldo(cpf, valor){
        let clientefiltrado = this.clientes.filter((cliente) => {
            return cliente.cpf == cpf
        })
        
        return clientefiltrado[0].saldo = clientefiltrado[0].saldo + valor;        
    }
}

banco.cadastrarCliente({ nome:'Brunet', cpf: '12345678910', saldo: 15000 });
banco.cadastrarCliente({ nome:'Zwipp', cpf: '10987654321', saldo: 0});

console.log(banco.addSaldo('12345678910', 15));