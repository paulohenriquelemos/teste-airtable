interface CheckboxProps {
  text: string;
  id: string;
}

export function CheckboxFiltros({ text, id }: CheckboxProps) {
  return (
    <div className="mt-1 flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
      />
      <label className="text-cinza-900" htmlFor={id}>
        {text}
      </label>
    </div>
  )
}
