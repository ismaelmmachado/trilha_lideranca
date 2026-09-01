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
      if (Date.now() - parsed.timestamp > 3600000) return null;
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

  function listarArquivos() {
    var cache = carregarDoCache();
    if (cache) return Promise.resolve(cache);
    var url = 'https://api.github.com/repos/' + CONFIG.repo + '/contents/' + CONFIG.pasta + '?ref=' + CONFIG.branch;
    return fetch(url)
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (data) {
        var arquivos = Array.isArray(data)
          ? data.map(function (f) { return { nome: f.name, url: f.download_url }; })
          : [];
        salvarNoCache(arquivos);
        return arquivos;
      })
      .catch(function () { return []; });
  }

  function escolherMatch(arquivos, padrao) {
    return arquivos.find(function (f) { return padrao.test(normalize(f.nome)); });
  }

  function montarBotao(botao, arquivo) {
    botao.href = arquivo.url;
    botao.removeAttribute('aria-busy');
    botao.querySelector('.download-label').textContent = 'Baixar Apostila';
  }

  function tratarFalha(botoes) {
    botoes.forEach(function (b) {
      b.classList.add('is-unavailable');
      b.querySelector('.download-label').textContent = 'Apostila em breve';
      b.removeAttribute('aria-busy');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var botoes = document.querySelectorAll('.apostila-btn');
    if (!botoes.length) return;

    listarArquivos().then(function (arquivos) {
      if (!arquivos.length) return tratarFalha(Array.prototype.slice.call(botoes));
      botoes.forEach(function (botao) {
        var token = botao.getAttribute('data-apostila-token');
        var padrao = buildTokenPattern(token);
        var match = escolherMatch(arquivos, padrao);
        if (match) montarBotao(botao, match);
        else tratarFalha([botao]);
      });
    });
  });
})();
