import DayState from "@/components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    'beber agua': {
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': false,
    },
    'estudar programacao': {
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': false,
    },
  };

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  return (<div className="container relative flex flex-col gap-8 px-4 pt-16 text-center">
    {habits === null ||
      (Object.keys(habits).length === 0 && (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Voce nao tem habitos cadastrados
        </h1>
      ))}
    {habits != null &&
      Object.entries(habits).map(([habit, habitStreak]) => (
        <div key={habit} className="text-white flex flex-col - gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xl fonte-light text-white font-sans">{habit}</span>
            <button>
              <img src="/images/trash.svg" width={20} height={20} alt="Icone lixeira vermelha" />
            </button>
          </div>
          <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
            {weekDays.map((day) => (
              <div key={day} className="flex flex-col">
                <span className="font-sans text-xs text-white text-center">
                  {day}
                </span>
                {/*day state*/}
                <DayState day={false}/>
              </div>
            ))}
          </section>
        </div>
      )
      )
    }
  </div>
  );
}
