import { Note, NoteItem } from '../models/notes';

export const getNotes = (req, res) => {
  Note.find().sort('-createdAt').exec((err, notes) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send({ notes });
  })
};

export const addNote = (req, res) => {
  const { title } = req.body.note;
  console.log('body', req.body);
  if (!title) {
    res.sendStatus(403);
    return;
  }
  const newNote = new Note(req.body.note);
  newNote.save((err, saved) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    res.status(200).send({ note: saved });
    return;
  });
}

export const addNoteItem = (req, res) => {
  const { noteId, label } = req.body;
  const newNoteItem = new NoteItem({ label });
  Note.updateOne({ _id: noteId }, { $push: { items: newNoteItem } }, (err, notes) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    res.sendStatus(200);
    return;
  });
}