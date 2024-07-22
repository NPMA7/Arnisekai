"use client"
import Link from "next/link";

export const StreamView = ({api}) => {
return(
        <>
        
      <main className="min-h-screen pb-10 bg-gray-900 text-gray-300">
        {/* <Navbar /> */}
        {api.map((anime) => (
        <section className="p-4">
          <h1>ini halamn nonton</h1>
          {/* <ViewBox api={animeList} /> */}
          <iframe
            className=""
            src="https://desustream.me/moedesu/index.php?id=OFJYdGNoZmEwaG1MUkRtK2t6NHJXdz09"
          ></iframe>
        </section>
        ))}
      </main>
        </>
    )
}