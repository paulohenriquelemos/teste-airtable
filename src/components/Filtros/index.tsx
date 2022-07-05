import { ChangeEvent, FormEvent } from "react";

interface FilterProps {
  allHashtags: string[];
  allLocalizations: string[];
  filterText: string;
  setFilterText: (data: string) => void;
  filterCheckbox: string[];
  setFilterCheckbox: (data: string[]) => void;
  filterPrice: string;
  setFilterPrice: (data: string) => void;
  filterLocal: string;
  setFilterLocal: (data: string) => void;
  setFilterUser: (data: string) => void;
  setDisplayA: (data: string) => void;
  setIsActiveHeader: (data: string) => void;
}

export function Filtros({
    allHashtags,
    allLocalizations,
    filterText,
    setFilterText,
    filterCheckbox,
    setFilterCheckbox,
    setFilterPrice,
    filterPrice,
    setFilterLocal,
    filterLocal,
    setFilterUser,
    setDisplayA,
    setIsActiveHeader
  }: FilterProps) {
  function handleSubmitFiltros(event: FormEvent) {
    event.preventDefault()

  }

  function handleCheckBox(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) {
      setFilterCheckbox([...filterCheckbox, e.target.name])
    } else {
      setFilterCheckbox(filterCheckbox.filter(b => b !== e.target.name))
    }
    setDisplayA('hidden')
    setIsActiveHeader('1')
    setFilterUser('Todos')
  }

  function handleChangePrice(e: ChangeEvent<HTMLSelectElement>) {
    setFilterPrice(e.target.value)
  }

  function handleChangeLocalization(e: ChangeEvent<HTMLSelectElement>) {
    setFilterLocal(e.target.value)
  }

  return (
    <section className="w-full lg:w-1/4">
      <h3
        className="font-medium text-[1.75rem] border-b border-gray-200
        w-full pb-4"
      >
        Filtros
      </h3>
      <form onSubmit={handleSubmitFiltros}>
        <input
          className="w-full my-4 py-1.5 px-3 text-cinza-500 border
          border-cinza-200 rounded-md outline-none transition
          focus:border-blue-600 focus:shadow focus:shadow-blue-600"
          type="text"
          placeholder="Filtrar por nome ou descrição"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="pt-3 border-t border-gray-200">
        {allHashtags.map((hash) => {
          return(
            <div key={hash} className="mt-1 flex items-center gap-2">
              <input
                type="checkbox"
                id={hash.toLowerCase().replace(/[' '/]/g, "-")}
                name={hash}
                onChange={handleCheckBox}
                checked={filterCheckbox.includes(hash)}
              />
              <label
                className="text-cinza-900"
                htmlFor={hash.toLowerCase().replace(/[' '/]/g, "-")}
              >
                {hash}
              </label>
            </div>
            )
        })}
        </div>
        <label
          className="mt-4 pt-4 border-t text-cinza-900 border-gray-200 block"
          htmlFor="price"
        >
          Preço
        </label>
        <select
          className="w-full my-4 py-1.5 px-3 text-cinza-500 border
          border-cinza-200 rounded-md outline-none transition
          focus:border-blue-600 focus:shadow focus:shadow-blue-600"
          id="price"
          value={filterPrice}
          onChange={handleChangePrice}
        >
            <option value="0">Selecionar...</option>
            <option value="1">Até R$80,00</option>
            <option value="2">R$81,00 - R$100,00</option>
            <option value="3">Acima de R$100,00</option>
        </select>
        <label
          className="mt-4 pt-4 border-t text-cinza-900 border-gray-200 block"
          htmlFor="localization"
        >
          Localização
        </label>
        <select
          className="w-full my-4 py-1.5 px-3 text-cinza-500 border
          border-cinza-200 rounded-md outline-none transition
          focus:border-blue-600 focus:shadow focus:shadow-blue-600"
          id="localization"
          value={filterLocal}
          onChange={handleChangeLocalization}
        >
          <option value="0">Selecionar...</option>
          {allLocalizations.map((local) => {
            return(
              <option key={local} value={local}>{local}</option>
            )
          })}
        </select>
        {/* <button
          className="w-full mt-4 py-1.5 text-white bg-azul-500 rounded-md
          transition hover:opacity-80"
          type="submit"
        >
          Buscar
        </button> */}
      </form>
    </section>
  )
}
