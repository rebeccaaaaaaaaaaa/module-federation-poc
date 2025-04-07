🧩 Rodando todos os apps juntos com concurrently
Dá pra rodar todos os apps juntos de forma fácil usando o pacote concurrently, que permite executar múltiplos scripts ao mesmo tempo num só terminal. Vou te mostrar o passo a passo completo:

✅ 1. Crie uma pasta raiz para o seu projeto (caso ainda não tenha)
Exemplo:

pgsql
Copiar
Editar
mf-app/
├── header-app/
├── login-app/
├── root-app/
✅ 2. Instale o concurrently na pasta raiz (mf-app)
No terminal, dentro da pasta mf-app:

bash
Copiar
Editar
npm install -D concurrently
✅ 3. Crie um package.json na pasta raiz (se ainda não tiver)
Você pode inicializar com:

bash
Copiar
Editar
npm init -y
✅ 4. Adicione o script dev no package.json raiz
No arquivo mf-app/package.json:

json
Copiar
Editar
{
  "name": "mf-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "concurrently \"npm --prefix header-app run dev\" \"npm --prefix login-app run dev\" \"npm --prefix root-app run dev\""
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
⚠️ O --prefix faz o npm rodar os comandos dentro das subpastas.

✅ 5. Agora é só rodar tudo com:
bash
Copiar
Editar
npm run dev
Isso vai iniciar todos os três apps ao mesmo tempo em terminais compartilhados.

💡 Dica extra: Melhor legibilidade dos logs
Se quiser ver os logs com nomes diferentes para cada app, adicione -n com nomes e -c com cores:

json
Copiar
Editar
"dev": "concurrently -n header,login,root -c blue,magenta,green \"npm --prefix header-app run dev\"