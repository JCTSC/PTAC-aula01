'use server'

const url = "http://back-end-ifms-kappa.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    cache:"no-cache"
  });
  const campus = await fetch(url, {

next: {
  revalidate: 1
},
cache: "no-cache",
method: "GET",
headers: {'Content-Type':'application/json'}
  });
 
  const campi = await resposta.json();

  return (
    <main>
      <h1>Home</h1>
      {campus.map((campi) =>
        <div>
         <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  )
}
