import { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { Filtros } from "../components/Filtros";
import { Header } from "../components/Header";

import { records } from '../records_airtable.json'

export function Home() {
  const [filterUser, setFilterUser] = useState('Todos')
  const [displayA, setDisplayA] = useState('block')


  useEffect(() => {
    setDisplayA('block')
  },[displayA])

  return (
    <>
      <Header setFilterUser={setFilterUser} setDisplayA={setDisplayA} />
      <main className="container mx-auto my-12 flex flex-col lg:flex-row gap-7 px-6">
        <Filtros />
        <section className="w-full min-h-[55.5rem] lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          {records.map((user) => {
            if(filterUser === "Todos" || user.fields.hashtag.includes(filterUser)) {
              return(
                <Card
                  key={user.fields.id}
                  image={user.fields.image[0].url}
                  name={user.fields.name}
                  headline={user.fields.headline}
                  hashtag={user.fields.hashtag}
                  description={user.fields.description}
                  price={user.fields.price}
                  localization={user.fields.localization}
                  date={user.fields.date}
                  equipePhotos={user.fields.photos}
                  displayA={displayA}
                />
              )
            }
          })}
        </section>
      </main>
    </>
  )
}
