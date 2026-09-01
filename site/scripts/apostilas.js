(function () {
  'use strict';

  var CONFIG = {
    repo: 'ismaelmmachado/trilha_lideranca',
    branch: 'main',
    pasta: 'docs/apostilas/pdf',
    cacheKey: 'lideranca_pdf_list_v1'
  };

  function normalize(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function buildTokenPattern(token) {
    var normalizado = normalize(token).trim();
    return new RegExp(normalizado.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  }

  function carregarDoCache() {
    try {
      var item = localStorage.getItem(CONFIG.cacheKey);
      if (!item) return null;
      var parsed = JSON.parse(item);
      if (Date.now() - parsed.timestamp > 3600000) return null; // 1h cache
      return parsed.arquivos;
    } catch (e) { return null; }
  }

  function salvarNoCache(arquivos) {
    try {
      localStorage.setItem(CONFIG.cacheKey, JSON.stringify({
        timestamp: Date.now(),
        arquivos: arquivos
      }));
    } catch (e) {}
  }

  async function listarArquivos() {
    var cache = carregarDoCache();
    if (cache) return cache;

    try {
      var url = `https://api.github.com/repos/${CONFIG.repo}/contents/${CONFIG.pasta}?ref=${CONFIG.branch}`;
      var res = await fetch(url);
      if (!res.ok) return [];
      var data = await res.json();
      var arquivos = Array.isArray(data) ? data.map(f => ({ nome: f.name, url: f.download_url })) : [];
      salvarNoCache(arquivos);
      return arquivos;
    } catch (e) { return []; }
  }

  function escolherMatch(arquivos, padrao) {
    return arquivos.find(f => padrao.test(normalize(f.nome)));
  }

  function montarBotao(botao, arquivo) {
    botao.href = arquivo.url;
    botao.removeAttribute('aria-busy');
    botao.querySelector('.download-label').textContent = 'Baixar Apostila';
  }

  function tratarFalha(botoes) {
    botoes.forEach(b => {
      b.classList.add('is-unavailable');
      b.querySelector('.download-label').textContent = 'Apostila em breve';
      b.removeAttribute('aria-busy');
    });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    var botoes = document.querySelectorAll('.apostila-btn');
    if (!botoes.length) return;

    var arquivos = await listarArquivos();
    if (!arquivos.length) return tratarFalha(botoes);

    botoes.forEach(botao => {
      var token = botao.getAttribute('data-apostila-token');
      var padrao = buildTokenPattern(token);
      var match = escolherMatch(arquivos, padrao);
      
      if (match) montarBotao(botao, match);
      else tratarFalha([botao]);
    });
  });
})();
