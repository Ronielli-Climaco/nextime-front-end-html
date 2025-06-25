document.addEventListener("DOMContentLoaded", function () {
	
	// Captura as informações da página
	const form = document.getElementById("formTarefa");
	const inputTarefa = document.getElementById("novaTarefa");
	const listaPendentes = document.getElementById("listaTarefasPendentes");
	const listaConcluidas = document.getElementById("listaTarefasConcluidas");
	
	// Adiciona evento de envio de formulário
	form.addEventListener("submit", function (e) {
		e.preventDefault(); // Impede que a página recarregue após envio do formulário
		
		// Pega o valor digitado pelo usuário e remove espaços em branco
		const texto = inputTarefa.value.trim();
		
		// Interrompe a função se o campo estiver vazio
		if (texto === "") return;
		
		// Cria um novo elemento <li>
		const li = document.createElement("li");
		li.textContent = texto;
		
		// Cria botão "Concluir" para marcar tarefa como concluída
		const botaoConcluir = document.createElement("button");
		botaoConcluir.textContent = "->";
		botaoConcluir.classList.add("botaoLista");
		
		//cria botao restaurar <li>
		const botaoRestaurar = document.createElement("button");
		botaoRestaurar.textContent = "<-";
		botaoRestaurar.classList.add("botaoLista")
		
		
		// Define o que acontece ao clicar no botão "Concluir"
		botaoConcluir.addEventListener("click", function () {
			// Remove tarefa da lista de pendentes
			listaPendentes.removeChild(li);
			
			// Remove o botão "Concluir"
			li.removeChild(botaoConcluir);
			
			//Adiciona botao restaurar na (li)
			li.appendChild(botaoRestaurar);
			
			// Adiciona item à lista de concluídas
			listaConcluidas.appendChild(li);
		});
		
		// Adiciona o botão "Concluir" dentro da <li>
		li.appendChild(botaoConcluir);
		
		// Adiciona o elemento completo (texto + botão) na lista de pendentes
		listaPendentes.appendChild(li);
				
		// Limpa o campo de texto após adicionar a tarefa
		inputTarefa.value = "";
		
		botaoRestaurar.addEventListener("click", function () {
			
			//remove botao resteurar
			li.removeChild(botaoRestaurar);
			
			//adiciona botao concluir
			li.appendChild(botaoConcluir);
			
			//adiciona a li na lista de pendentes
			listaPendentes.appendChild(li);
			
		});
		
		botaoLimpar.addEventListener("click", function () {
			listaConcluidas.innerHTML = "";
		});
		
	
	});
});
