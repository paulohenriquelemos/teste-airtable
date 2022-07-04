import { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { Filtros } from "../components/Filtros";
import { Header } from "../components/Header";

import { records } from '../records_airtable.json'

export function Home() {
  const [filterText, setFilterText] = useState('')
  const [displayA, setDisplayA] = useState('block')
  const [filterCheckbox, setFilterCheckbox] = useState<string[]>([])
  const [filterPrice, setFilterPrice] = useState('0')
  const [filterPriceId, setFilterPriceId] = useState<string[]>([])
  const [filterLocal, setFilterLocal] = useState('0')
  const [filterLocalId, setFilterLocalId] = useState<string[]>([])
  const [filterUser, setFilterUser] = useState('Todos')
  const [isActiveHeader, setIsActiveHeader] = useState('1')

  useEffect(() => {
    setTimeout(() => setDisplayA('block'), 10)
  },[displayA])

  useEffect(() => {
    if(filterText !== '' && filterUser !== 'Todos') {
      handleSetHeaderAll()
    }
  },[filterText])

  useEffect(() => {
    let priceId: string[] = []
    if(filterPrice === '0') {
      setFilterPriceId([])
      setDisplayA('hidden')
    }
    if(filterPrice === '1') {
      handleSetHeaderAll()
      records.forEach(entry => {
        if(entry.fields.price <= 80 && filterPriceId.indexOf(entry.fields.id) === -1) {
          priceId.push(entry.fields.id)
        } else if(priceId.length === 0){
          setFilterPriceId(['nada'])
          return
        }
        setDisplayA('hidden')
        setFilterPriceId(priceId)
      })
    }
    if(filterPrice === '2') {
      handleSetHeaderAll()
      records.forEach(entry => {
        if(entry.fields.price > 80 && entry.fields.price <= 100 && filterPriceId.indexOf(entry.fields.id) === -1) {
          priceId.push(entry.fields.id)
        } else if(priceId.length === 0) {
          setFilterPriceId(['nada'])
          return
        }
        setDisplayA('hidden')
        setFilterPriceId(priceId)
      })
    }
    if(filterPrice === '3') {
      handleSetHeaderAll()
      records.forEach(entry => {
        if(entry.fields.price >= 100 && filterPriceId.indexOf(entry.fields.id) === -1) {
          priceId.push(entry.fields.id)
        } else if(priceId.length === 0) {
          setFilterPriceId(['nada'])
          return
        }
        setDisplayA('hidden')
        setFilterPriceId(priceId)
      })
    }
  },[filterPrice])

  useEffect(() => {
    let localId: string[] = []
    if(filterLocal === '0') {
      setFilterLocalId([])
      setDisplayA('hidden')
    }
    if(filterLocal === 'Brasil') {
      handleSetHeaderAll()
      records.forEach(entry => {
        if(entry.fields.localization === 'Brasil' && filterLocalId.indexOf(entry.fields.id) === -1) {
          localId.push(entry.fields.id)
        } else if(localId.length === 0) {
          setFilterLocalId(['nada'])
          return
        }
        setDisplayA('hidden')
        setFilterLocalId(localId)
      })
    }
    if(filterLocal === 'Switzerland') {
      handleSetHeaderAll()
      records.forEach(entry => {
        if(entry.fields.localization === 'Switzerland' && filterLocalId.indexOf(entry.fields.id) === -1) {
          localId.push(entry.fields.id)
        } else if(localId.length === 0) {
          setFilterLocalId(['nada'])
          return
        }
        setDisplayA('hidden')
        setFilterLocalId(localId)
      })
    }
  },[filterLocal])

  function handleResetFilters() {
    setFilterText('')
    setFilterCheckbox([])
    setFilterPrice('0')
    setFilterLocal('0')
  }

  function handleSetHeaderAll() {
    setIsActiveHeader('1')
    setFilterUser('Todos')
  }

  return (
    <>
      <Header
        handleResetFilters={handleResetFilters}
        setFilterUser={setFilterUser}
        setDisplayA={setDisplayA}
        setIsActiveHeader={setIsActiveHeader}
        isActiveHeader={isActiveHeader}
      />
      <main className="container mx-auto my-12 flex flex-col lg:flex-row gap-7 px-6">
        <Filtros
          setFilterText={setFilterText}
          filterText={filterText}
          filterCheckbox={filterCheckbox}
          setFilterCheckbox={setFilterCheckbox}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterLocal={filterLocal}
          setFilterLocal={setFilterLocal}
          setFilterUser={setFilterUser}
          setDisplayA={setDisplayA}
          setIsActiveHeader={setIsActiveHeader}
        />
        <section className="w-full min-h-[55.5rem] lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          {records.map((user) => {
            if((filterUser === "Todos" && filterText === '' && filterCheckbox.length === 0 && filterPriceId.length === 0 && filterLocalId.length === 0)
              || (user.fields.hashtag.includes(filterUser) && filterPriceId.length === 0 && filterLocalId.length === 0)
              || (
                  (filterUser === "Todos" && filterPriceId.length === 0 || filterPriceId.includes(user.fields.id))
                  && (filterUser === "Todos" && filterLocalId.length === 0 || filterLocalId.includes(user.fields.id))
                  && (filterUser === "Todos" && filterCheckbox.length === 0 || filterCheckbox.every(r => user.fields.hashtag.includes(r)))
                  && (filterUser === "Todos" && filterText === ''
                    || user.fields.description.toLowerCase().includes(filterText.toLowerCase())
                    || user.fields.name.toLowerCase().includes(filterText.toLowerCase())
                  )
                 )
            ) {
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
