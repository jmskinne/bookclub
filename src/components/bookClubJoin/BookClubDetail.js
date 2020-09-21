

//import {Link} from "react-router-dom"
// import {BookClubJoin} from "./BookClubJoin"
// import {BookContext} from "../book/BookProvider"
// import { UserContext } from "../Users/UserProvider"

// import {BookClubJoinContext} from "./BookClubJoinProvider"

// import {UserClubContext} from "../UserClub/UserClubProvider"

// import React from "react"

// export const BookClubDetail = (props) => {
//     return (
//         <section className="bookclub">
//             <h2 className="bookclub__name">{props.club.state.test.name}</h2>
//             <div>{props.club.state.chosenClub.bookId}</div>
//             {/* <img src={
//                 props.state.chosenClub.book.cover} /> */}
            
//         </section>
//     )
// }




// export const BookClubDetails = (props) => { 

    // const {clubs, getClubs} = useContext(BookClubJoinContext)
    // const {userBooks, getUserBooks} = useContext(BookContext)
    // const {books, getBooks} = useContext(BookContext)
    // const {users, getUsers} = useContext(UserContext)
    // const {userClubs, getUserClubs} = useContext(UserClubContext)

    // const [club, setClub] = useState({})
    // const [userBook, setUserBook] = useState({})
    // const [book, setBook] = useState({})
    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     getClubs().then(getUserBooks).then(getBooks).then(getUsers).then(getUserClubs)
        
        
    // }, [])

    // useEffect(() => {
    //     const book = books.map(b => b.id).filter(b => b.id === club) || {}
    //     setBook(book)
    // }, [books])

    // useEffect(() => {
    //     const club = clubs.map(club => {
    //         return books.find(b => b.id === club.bookId)
    //     })
    //     setClub(club)
    // }, [clubs])

    // useEffect(() => {
    //     const userId = parseInt(localStorage.getItem("bookclub_user"))
    //     const user = users.find(us => us.id === userId) || {}
    //     setUser(user)
    // }, [users])

    // useEffect(() => {
    //     const userBook = userBooks.filter
    // }, [])

    // const testClub = userClubs.filter(uc => uc.bookClubId === club.id && currentUser === uc.userId) || {}
    //                     const matched = testClub.map(r => books.find(book => book.id === r.bookId)) || {}
    //testClub={testClub} matched={matched} r={books}
    
    // const currentUser = parseInt(localStorage.getItem("bookclub_user"))
    // return (
    //     <article className="bookclubs">
    //         {
    //             clubs.map(club => {
    //                 return <BookClubJoin key={club.id} club={club}  />
                   
                            
    //             })
                            
                        
                        
                       
                        
    //         }
    //         </article>
            
    //     )
        
        // return (
        //     <article className="bookclub">
        //         {
        //             clubs.map(club => {
        //                 const relationship = userBooks.filter(rel => rel.bookId === club.bookId) || {}
        //                     const matched = relationship.map(res => {
        //                         const u = matched.filter(use => use.userId === userId)
        //                             return <BookClubJoin key={club.id} club={club} relationship={relationship}  />           

        //                     })
                                
        //             }
                    
                    
                    
                
        //         )   
            
        //     }
        //     </article>
        //  )
            
            
        

      
    
    //Going to get rid of this useEffect and then do 
    //return (
    //like in candy corner EmployeeList
    //)

    

    // return (
    //     <article className="bookclub">
    //         {
    //             clubs.map(c => {
    //                 return <Link key={c.id} to={`/clubs/${c.id}`}>
    //                     <div>{c.name}</div>
    //                     <img src={book.cover} />
    //                 </Link>
                    
                    
    //             })
    //         }
    //     </article>
    // )




{/* <section className="clubs">
                        <h4 className="bookclub__name">{c.name}</h4>
                        <img src={book.cover} alt="No Cover" /> 
                        <button id={c.id}>Test</button> */}