import { useState } from "react";

interface HeaderProps {
  setFilterUser: (data: string) => void;
  setDisplayA: (data: string) => void;
}

export function Header({ setFilterUser, setDisplayA }: HeaderProps) {
  const [isActive, setIsActive] = useState('1')

  const gerericSpanStyle = "border text-xs border-verde-300 px-3.5 py-1 rounded-full cursor-pointer transition duration-500"

  const spanList = [
    {
      id: '1',
      text: 'Todos',
      // type: '*',
    },
    {
      id: '2',
      text: 'Back-end',
      // type: 'back-end',
    },
    {
      id: '3',
      text: 'Copy',
      // type: 'copy',
    },
    {
      id: '4',
      text: 'Digital Product Designer',
      // type: 'digitalproductdesigner',
    },
    {
      id: '5',
      text: 'Front-end',
      // type: 'front-end',
    },
    {
      id: '6',
      text: 'UX/UI',
      // type: 'ui-ux',
    },
  ];
  function handleFilterAll(id: string, type: string) {
    setDisplayA('hidden')
    setFilterUser(type)
    setIsActive(id)
  }

  return (
    <header className="container mx-auto mt-10">
      <div className="filtering uppercase mb-2.5 flex items-center justify-center flex-wrap gap-2">
        {spanList.map(dataFilter => {
          return (
            <span
              key={dataFilter.id}
              className={`${gerericSpanStyle} ${isActive === dataFilter.id
                ? 'text-white bg-verde-300'
                : 'text-verde-300 bg-white hover:text-white hover:bg-verde-300'}`}
              onClick={() => handleFilterAll(dataFilter.id, dataFilter.text)}
            >
              {dataFilter.text}
            </span>
          )
        })}
      </div>
    </header>
  )
}
