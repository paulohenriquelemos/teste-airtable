interface CardProps {
  image: string;
  name: string;
  headline: string;
  hashtag: string[];
  description: string;
  price: number;
  localization: string;
  date: string;
  equipePhotos: {
    id: string;
    url: string;
  }[];
  displayA: string;
}

export function Card({ image, name, headline, hashtag, description, price, localization, date, equipePhotos, displayA }: CardProps) {
  const gerericSpanStyles = "bg-cinza-300 text-white text-xs font-bold py-1 px-1.5 rounded"

  return(
    <div className={`border border-cinza-200 rounded-md overflow-hidden animate-card ${displayA}`}>
      <img className="w-full" src={image} alt="Avatar1" />
      <div className="p-5">
        <h4 className="text-2xl font-medium text-cinza-900">
          {name}
        </h4>
        <h6 className="font-medium mt-3">
          {headline}
        </h6>
        <div className="mt-2 pb-4 border-b border-gray-200 flex flex-wrap gap-1">
          {hashtag.map((hash) => {
            return(
              <span key={hash} className={gerericSpanStyles}>{hash}</span>
            )
          })}
        </div>
        <p className="pt-4 text-cinza-900">
          {description}
        </p>
        <h5 className="mt-4 text-xl font-medium text-cinza-900">
          {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </h5>
        <small className="mt-2 text-xs text-cinza-300">
          {localization} - {date.split('-').reverse().join('/')}
        </small>
        <h6 className="mt-4 font-medium text-cinza-900">
          Equipe
        </h6>
        <ul className="mt-2 flex flex-wrap gap-3">
          {equipePhotos.map((equipe) => {
            return(
              <li key={equipe.id}>
                <img className="w-14 rounded" src={equipe.url} alt="" />
              </li>
            )
          })}
        </ul>
        <a
          className="mt-4 text-white bg-verde-500 w-full block text-center
          py-1.5 px-3 rounded transition hover:opacity-80"
          href="#"
        >
          Agende um horário
        </a>
      </div>
    </div>
  )
}
