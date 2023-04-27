function checkEmail () {
    const status = document.querySelector('input').validity.typeMismatch
    const value = document.querySelector('input').value
    if (status || value == "") {
      const warning = document.querySelector('#warning')
      document.getElementById('warning').classList.remove('warning-none')
      document.getElementById('warning').classList.add('warning-visible')
      document.getElementById('field').style.border = "solid 2px var(--soft-red)"
    } else {
      document.getElementById('warning').classList.remove('warning-visible')
      document.getElementById('warning').classList.add('warning-none')
      document.getElementById('field').style.border = "solid 1px hsl(0, 80%, 86%)"
      // Recebe o modal
      var modal = document.querySelector('.modal-container')
      // Recebe o botão para abrir o modal
      var buttonOpen = document.querySelector('.open-modal')
      // Recebe os botões para fechar o modal
      var buttonClose1 = document.querySelector('.close-modal') // span
      var buttonClose2 = document.querySelector('.confirm-modal') // button
      // Abrir modal
      modal.style.display = "flex";
      // Limpar email
      document.querySelector('.data-field').value = "";
      // Borrar página
      document.querySelector('.container').classList.add('blur')
      // Fechar modal
      buttonClose1.onclick = function () {
        modal.style.display = "none";
        document.querySelector('.container').classList.remove('blur')
      }
      buttonClose2.onclick = function () {
        modal.style.display = "none";
        document.querySelector('.container').classList.remove('blur')
      }
      // Fecha modal clicando fora dele (mas dentro do container do modal)
      window.onclick = function(e) {
        if (e.target == modal) {
          modal.style.display = "none";
          document.querySelector('.container').classList.remove('blur')
        }
      }
    }
  }
  const send = document.querySelector('.button')
  send.onclick = checkEmail
