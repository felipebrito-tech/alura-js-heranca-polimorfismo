import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Laís", 98765432100, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);