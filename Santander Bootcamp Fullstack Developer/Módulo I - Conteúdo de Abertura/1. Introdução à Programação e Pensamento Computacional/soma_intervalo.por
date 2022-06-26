programa {
	funcao inicio() {
		inteiro numero1, numero2
		
		escreva("Informe o primeiro número do intervalo: ")
		leia(numero1)
		escreva("Informe o segundo número do intervalo: ")
		leia(numero2)

		escreva("Soma do intervalo: ", soma_intervalo(numero1, numero2))
	}

	funcao inteiro soma_intervalo(inteiro inicio, inteiro fim) {
		inteiro repeticoes, resultado_parcial, resultado
		
		repeticoes = fim/2
		resultado_parcial = inicio + fim
		resultado = repeticoes * resultado_parcial

		retorne resultado
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 518; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */