// public/js/script.js
// Script robusto: logs, delegação de evento e checagens
(function () {
  try {
    console.log('[script.js] carregado');

    document.addEventListener('DOMContentLoaded', function () {
      // Botão de alerta (home)
      try {
        const btn = document.getElementById('alertBtn');
        if (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            alert('Dica: Clique nos filmes para marcar como assistido!');
          });
        } else {
          console.warn('[script.js] #alertBtn não encontrado');
        }
      } catch (err) {
        console.error('[script.js] erro no listener do botão alertBtn:', err);
      }

      // Botão de contato (sobre)
      try {
        const contact = document.getElementById('contactBtn');
        if (contact) {
          contact.addEventListener('click', function (e) {
            e.stopPropagation();
            alert('Obrigado pelo interesse! Aqui você poderia abrir um formulário ou enviar um e-mail.');
          });
        }
      } catch (err) {
        console.error('[script.js] erro no listener do botão contactBtn:', err);
      }

      // Delegação de evento para a lista de filmes (container)
      try {
        const container = document.getElementById('appContainer');
        if (container) {
          container.addEventListener('click', function (event) {
            const li = event.target.closest('.filme-item');
            if (!li) return; // clique fora de um item de filme

            // Não reagir se o clique vier do botão(s)
            if (event.target.id === 'alertBtn' || event.target.id === 'contactBtn') return;

            // Toggle das classes
            const wasAssistido = li.classList.contains('assistido');
            li.classList.toggle('assistido', !wasAssistido);
            li.classList.toggle('nao-assistido', wasAssistido);

            // Badge (atualiza texto e classes)
            const badge = li.querySelector('.badge');
            if (badge) {
              if (li.classList.contains('assistido')) {
                badge.textContent = 'Assistido';
                badge.classList.add('badge-verde');
                badge.classList.remove('badge-vermelho');
              } else {
                badge.textContent = 'Não assistido';
                badge.classList.add('badge-vermelho');
                badge.classList.remove('badge-verde');
              }
            }
          });
        } else {
          console.warn('[script.js] #appContainer não encontrado');
        }
      } catch (err) {
        console.error('[script.js] erro na lógica de clique dos filmes:', err);
      }
    });
  } catch (outerErr) {
    console.error('[script.js] erro inesperado:', outerErr);
  }
})();