function fazGet () {
    let ulr = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams"
    let key = "git-user:theodirk21"
    let method = new XMLHttpRequest()
    method.open("GET", ulr, false)
    method.setRequestHeader ("git-user", key)
    method.send();
    return method.responseText

}

function criaLinha(pais) {



}

function main(){
    let data = fazGet();
    usuarios = JSON.parse(data);



  console.log(usuarios)

  var paises = usuarios.name
   const getRandomIntegerInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const getRandomWord = () =>
  paises [getRandomIntegerInclusive(0,paises.length - 1)]
  console.log(getRandomWord())
}


main()

// foi consumindo o api, porém tive problemas fazer o random dos arrays
// quis enviar mesmo assim para mostrar meu esforço
