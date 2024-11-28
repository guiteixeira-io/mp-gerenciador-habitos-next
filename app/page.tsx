import Image from "next/image";

export default function Home() {
  const habits = {
    
  };

  return (<div className="container relative flex flex-col gap-8 px-4 pt-16 text-center">
    {habits === null ||
      (Object.keys(habits).length === 0 && (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Voce nao tem habitos cadastrados
        </h1>
      ))}
  </div>
  );
}
