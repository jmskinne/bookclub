// import React from "react"




// export const BookClubJoin = ({club}) => (
//     <section className="bookclub">
//         <h3>{club.name}</h3>
//         <img src={club.cover} />
//         <button type="submit" id={club.id}
//             onClick={e => {
//                 e.preventDefault()
//                 const bookclubId = club.id
//                 const userId = parseInt(localStorage.getItem("bookclub_user"))
//                 CreateUserClub ({
//                     bookclubId,
//                     userId
//                 }).then(props.history.push(`/clubs/${club.id}`))
//             }}
//         >Join Club</button>
//     </section>
// )