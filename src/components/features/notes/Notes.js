import { useSelector} from "react-redux"
import { selectAllNotes } from "./notesSlice"
import AddNoteForm from "./AddNoteForm"
import TimeAgo from "../posts/TimeAgo"

const Notes = () => {
  const notesToRender =  useSelector(selectAllNotes)
  return (
    <main>
        <AddNoteForm />
      {
        notesToRender.map(note => {
          return (
            <article className="note-container" key={note.id}>
              <h2>{note.title}</h2>
              <h3>{note.text.substring(0, 100)}</h3>
              <p>{note.author}</p>
              <p>
                <TimeAgo timestamp={note.date}/>
              </p>
            </article>
          )
        })
      }

    </main>
  )
}


export default Notes
