/**
 * Crie uma classe chamada Estudante, essa classe deve conter os atributos: 
 * nome, 
 * e-mail,
 * RA, 
 * curso e 
 * uma lista com o nome das disciplinas que o estudante está matriculado. 
 * A classe também deve ter dois métodos: primeiraDisciplina e ultimaDisciplina
 * que vão devolver respectivamente a primeira disciplina que o estudante 
 * está matriculado e a última.
 */


class Estudante{
    constructor(nome,email,RA,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }

    primeiraDisciplina() {
        console.log(this.disciplinas[0])            
    }

    ultimaDisciplica(){
        console.log(this.disciplinas[this.disciplinas.length - 1])
    }
}

const Aluno1 = new Estudante("Pedro", "pedro@estudante.com.br",123456,"ADS", ["JavaScript", "Java", "IHC"])
Aluno1.primeiraDisciplina()
Aluno1.ultimaDisciplica()
console.log()
const Aluno2 = new Estudante("Aluno2","aluno2@estudante.com.br",654321,"Contabilidade", ["Finanças", "Economia", "Contabilidade 1"])
Aluno2.primeiraDisciplina()
Aluno2.ultimaDisciplica()