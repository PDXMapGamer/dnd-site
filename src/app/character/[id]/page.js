// app/character/[id]/page.js
import { notFound } from "next/navigation";
import { db } from "@/app/utils/dbconnection";
import { currentUser } from "@clerk/nextjs/server";
// This component will be rendered server-side
export default async function CharacterSheet({ params }) {
  const id = (await params).id;
  const user = await currentUser();
  const username = user.username;
  let character;
  try {
    character = await db.query(`SELECT player_name FROM character WHERE ID = $1`, [id]);
  } catch {
    //
  }
  const characterOwner = character?.rows[0].player_name;
  if (!characterOwner) {
    return notFound(); // Renders a 404 page if character not found
  }
  if (characterOwner != username) {
    console.log("Bad");
    // todo Write logic to stop user from accessing stuff they aren't supposed to. If in this if statement then the username of user signed in and the username of the character's owner is not the same
  } else {
    console.log("good");
  }
  return (
    // <div className="p-8 bg-gray-900 text-white min-h-screen">
    //   <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6">
    //     <header className="flex justify-between items-center border-b-2 border-gray-700 pb-4">
    //       <h1 className="text-4xl font-bold">{character.character_info.character_name}</h1>
    //       <form action={`/api/character/${id}/delete`} method="POST">
    //         <button type="submit" className="btn btn-error">
    //           Delete Character
    //         </button>
    //       </form>
    //     </header>

    //     <section className="mt-6">
    //       <div className="grid grid-cols-2 gap-4">
    //         <div>
    //           <h2 className="text-xl font-semibold">Player Info</h2>
    //           <p>
    //             <span className="font-bold">Player Name:</span> {character.player_name}
    //           </p>
    //           <p>
    //             <span className="font-bold">Class:</span> {character.character_info.class}
    //           </p>
    //           <p>
    //             <span className="font-bold">Race:</span> {character.character_info.race}
    //           </p>
    //           <p>
    //             <span className="font-bold">Background:</span> {character.character_info.background}
    //           </p>
    //           <p>
    //             <span className="font-bold">Alignment:</span> {character.character_info.alignment}
    //           </p>
    //           <p>
    //             <span className="font-bold">Level:</span> {character.character_info.level}
    //           </p>
    //           <p>
    //             <span className="font-bold">XP:</span> {character.character_info.xp}
    //           </p>
    //         </div>

    //         <div>
    //           <h2 className="text-xl font-semibold">Character Stats</h2>
    //           {Object.entries(character.stats).map(([stat, value]) => (
    //             <p key={stat}>
    //               <span className="font-bold capitalize">{stat}:</span> {value}
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section className="mt-6">
    //       <h2 className="text-xl font-semibold">Abilities & Features</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //         <div>
    //           <h3 className="font-bold">Proficiencies:</h3>
    //           <ul className="list-disc list-inside">
    //             {character.proficiencies.map((prof, index) => (
    //               <li key={index}>{prof}</li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="font-bold">Features:</h3>
    //           <ul className="list-disc list-inside">
    //             {character.features.map((feature, index) => (
    //               <li key={index}>{feature}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="mt-6">
    //       <h2 className="text-xl font-semibold">Inventory</h2>
    //       <ul className="list-disc list-inside">
    //         {character.inventory.map((item, index) => (
    //           <li key={index}>{item}</li>
    //         ))}
    //       </ul>
    //     </section>

    //     <section className="mt-6">
    //       <h2 className="text-xl font-semibold">Spells</h2>
    //       <ul className="list-disc list-inside">
    //         {character.spells.map((spell, index) => (
    //           <li key={index}>{spell}</li>
    //         ))}
    //       </ul>
    //     </section>

    //     <section className="mt-6">
    //       <h2 className="text-xl font-semibold">Notes</h2>
    //       <p className="p-4 bg-gray-700 rounded-lg">{character.notes}</p>
    //     </section>
    //   </div>
    // </div>
    <p>Hi</p>
  );
}
