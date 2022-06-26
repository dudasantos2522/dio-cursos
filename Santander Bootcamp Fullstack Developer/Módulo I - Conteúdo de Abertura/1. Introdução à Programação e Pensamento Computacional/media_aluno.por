programa {
	funcao inicio() {
		real nota1_a, nota2_a, nota1_b, nota2_b
		
		escreva("Informe a primeira nota do aluno A: ")
		leia(nota1_a)
		escreva("Informe a segunda nota do aluno A: ")
		leia(nota2_a)

		escreva("Informe a primeira nota do aluno B: ")
		leia(nota1_b)
		escreva("Informe a segunda nota do aluno B: ")
		leia(nota2_b)

		escreva("Média do aluno A: ", media_aluno(nota1_a, nota2_a))
		escreva("Média do aluno B: ", media_aluno(nota1_b, nota2_b))
	}

	funcao real media_aluno(real nota1, real nota2) {
		retorne (nota1 + nota2) / 2
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 535; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */