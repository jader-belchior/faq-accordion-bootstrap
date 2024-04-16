/* Programar botões */
let buttons = Array.from(document.querySelectorAll("img.my-2"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    /* Verificar se está oculto (mediante icone) */
    if (button.src.includes("icon-plus.svg")) {
      /* Se opção clicada estiver oculta, esconde as outras opções */
      buttons.forEach((otherButton) => {
        otherButton.src = "assets/images/icon-plus.svg";
        otherButton.parentElement.parentElement.parentElement.children[1].classList.add(
          "visually-hidden"
        );
      });
      /* instruções que alteram a imagem clicavel e revela resposta */
      button.src = "assets/images/icon-minus.svg";
      button.parentElement.parentElement.parentElement.children[1].classList.remove(
        "visually-hidden"
      );

      /* Caso imagen clicada esteja fevelada, apenas reverte as alterações */
    } else {
      button.src = "assets/images/icon-plus.svg";
      button.parentElement.parentElement.parentElement.children[1].classList.add(
        "visually-hidden"
      );
    }
  });
});
