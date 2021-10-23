/* Variáveis const ou let */

/* Objeto{ Variavel: 'string'}*/
const github = 'RedDiacon'
const links = {
  github2: 'RedDiacon',
  youtube: 'soniculd',
  facebook: 'gabriel.brandao.315',
  twitter: 'DiaconRed',
  instagram: 'gabriel.brandao1'
}

/* Criar função */
function ChangeSocialMedia() {
  document.getElementById('TitleName').textContent = 'Gabriel Brandão'

  TitleName.textContent = 'Gabriel Brandão'

  GitH.href = 'https://github.com/RedDiacon'

  for (let li of SocialLinks.children) {
    alert(li.getAttribute('class'))

    let social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

    alert(li.children[0].href)
  }
}

ChangeSocialMedia()

// Jason / API / fetch / Arrow_Function
function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github2}`

  alert(url)

  fetch(url)
    .then(response =>
      response.json()
    )
    .then(data => {
      TitleName.textContent = data.name
      Bio.textContent = data.bio
      GitH.href = data.html_url
      FotoPerfil.src = data.avatar_url
      Login.textContent = data.login
    })

  //pode tirar as chaves da Arrow_function. Melhor evitar, deu problema aqui 
}
GetGitHubProfileInfos()
