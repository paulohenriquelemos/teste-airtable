import { FormEvent } from "react";
import { CheckboxFiltros } from "../CheckboxFiltros";

export function Filtros() {
  function handleSubmitFiltros(event: FormEvent) {
    event.preventDefault()
    
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
          placeholder="Filtrar por texto"
        />
        <div className="pt-3 border-t border-gray-200">
          <CheckboxFiltros text="Back-end" id="back-end" />
          <CheckboxFiltros text="Copy" id="copy" />
          <CheckboxFiltros text="Digital Product Designer" id="digital-product-designer" />
          <CheckboxFiltros text="Front-end" id="front-end" />
          <CheckboxFiltros text="UX/UI" id="ux-ui" />
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
        >
            <option value="">Selecionar...</option>
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
        >
          <option value="">Selecionar...</option>
          <option value="Brasil">Brasil</option>
          <option value="Switzerland">Switzerland</option>
        </select>
        <button
          className="w-full mt-4 py-1.5 text-white bg-azul-500 rounded-md
          transition hover:opacity-80"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </section>
  )
}
