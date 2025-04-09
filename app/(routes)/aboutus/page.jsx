import React from 'react';

const AboutUs = () => {
    const content = {
        about: `Noi di Reservice vogliamo ispirare le persone come te a esprimere la propria bellezza.
        Siamo una realtà giovane e in crescita, nata con il obiettivo di rendere il mondo della bellezza e del benessere più accessibile, semplice e sicuro per tutti. Collaboriamo con saloni e centri specializzati per offrire ai nostri utenti un'esperienza su misura, sempre disponibile e a portata di clic.
        Con Reservice, prenotare appuntamenti di bellezza e benessere è facile e veloce ovunque tu sia, 24 ore su 24. Qualunque trattamento tu scelga, con noi scegli sempre la qualità e l'attenzione dei migliori professionisti del settore. Il nostro impegno è offrire più libertà, più scelta e più ispirazione. Vogliamo semplificare la vita sia ai clienti che agli operatori del settore, permettendo a ciascuno di esprimere al meglio il proprio potenziale. Con Reservice, ogni giorno è un’occasione per sentirsi bene con sé stessi. Siamo solo all’inizio, ma puntiamo in alto e lo facciamo insieme a te.`,
        solution: `Se hai effettuato un reclamo relativo a un servizio che hai acquistato tramite il nostro sito web e non è stato possibile risolverlo contattando direttamente il nostro servizio clienti o il salone, puoi inviare un reclamo all'`,
    };

    return (
        <div className='flex flex-row gap-10 lg:gap-48 max-md:flex-col max-md:mx-auto max-md:w-[90%]'>
            <section className='flex flex-col gap-1 lg:w-[70%]'>
                <h2 className='text-2xl mt-7 mb-5'>About us</h2>
                <h3>About Reservice</h3>
                <p>{content.about}</p>
                <h4 className='mt-10'>Our solution to queue</h4>
                <p>
                    {content.solution}{' '}
                    <a
                        href="https://webgate.ec.europa.eu/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-950"
                    >
                        Online Dispute Resolution (ODR)
                    </a>
                </p>
            </section>
            <aside className='flex flex-col gap-1 mt-7'>
                <h2>Altre informazioni</h2>
                <a
                    href="./contact"
                    className='text-blue-900 cursor-pointer hover:text-blue-950'
                    aria-label="Vai alla pagina Contatti"
                >
                    Contatti
                </a>
            </aside>
        </div>
    );
};

export default AboutUs;