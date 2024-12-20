function NewHabit() {
    return <main className="container relative flex flex-col gap-8 px-12 pt-16">
        <h1 className="text-4xl font-light text-center text-white font-display">
            Novo habito
        </h1>
        <form action="" className="flex flex-col gap-4 mt-4">
            <input
                type="text"
                name="habit"
                id="habit"
                className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800" />

            <button className="bg-[#49EDAD] font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8">Cadastrar</button>
            <button className="bg-neutral-800 text-[#F85858] rounded-md text-2xl p-2 font-regular font-display">Cancelar</button>

        </form>

    </main>
}

export default NewHabit;