import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex flex-row gap-10 lg:gap-48 max-md:flex-col max-md:mx-auto max-md:w-[90%]'>
            <div className='flex flex-col gap-1 lg:w-[70%]  '>
                <h2 className='text-2xl mt-7 mb-5' >About us</h2>
                <h3>About Reservice</h3>
                <p>Noi di Treatwell vogliamo ispirare le persone come te a esprimere la propria bellezza. La società ha conosciuto una formidabile crescita permettendoci di raggiungere un numero sempre maggiore di persone e di dar vita a sempre più partnership con saloni e centri benessere. Oggi questo ci consente di riuscire ad offrire ai nostri utenti più scelta e più sicurezza nel provare le novità. Con Treatwell prenotare appuntamenti di bellezza e benessere è diventato veloce e semplice – ovunque tu sia, 24 ore su 24. Qualunque trattamento tu scelga, con noi scegli sempre la bellezza.
                    Oggi, Treatwell è il più grande sito di prenotazioni di bellezza e benessere in Europa e collabora con oltre 40.000 partner. La nostra sede principale è a Londra e possiamo contare sul lavoro di 800 persone nei nostri uffici presenti in tutta Europa. Tutto ha avuto inizio nel 2008 e negli ultimi anni abbiamo avuto modo di unire sotto il nome Treatwell altre società europee specializzate in sviluppo tecnologico e prenotazione online di trattamenti di bellezza. Il risultato oggi è una società di successo: una piattaforma di prenotazione di trattamenti di bellezza attiva 24 ore su 24, 7 giorni su 7. Rendiamo la vita più facile ai nostri clienti e ai nostri partner. Puoi scegliere orari e prezzi che ti convengono ed allo stesso tempo affidarti nelle mani esperte di professionisti del settore che ti daranno tutti i consigli di cui hai bisogno per sentirti al massimo. Per i nostri clienti e per i nostri partner siamo molto più di un utile sito di prenotazione: con noi sono liberi di esprimere se stessi, ogni giorno.
                    Se hai bisogno di supporto per i seguenti motivi, consulta i dettagli di contatto qui sotto.
                </p>
                <h4 className='mt-10'> Our solution to queue</h4>
                <p>Se hai effettuato un reclamo relativo a un servizio che hai acquistato tramite il nostro sito web e non è stato possibile risolverlo contattando direttamente il nostro servizio clienti o il salone, puoi inviare un reclamo all' Online Dispute Resolution (ODR) dell'UE gestita dalla Commissione Europea: webgate.ec.europa.eu/odr/. Questo sistema è disponibile solo per i reclami relativi agli acquisti online.
                </p>
            </div>
            <div className='flex flex-col gap-1 mt-7'>
                <h2>Altre informazioni</h2>
                <li> <a href = 'http://localhost:3000/contact'> Chi Siamo</a> </li>
            </div>
        </div>
    )
}

export default AboutUs